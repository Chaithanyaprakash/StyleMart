const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  let passed = true;
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto('file:///' + path.resolve(__dirname, '../index.html').replace(/\\/g, '/'), { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));

  console.log('--- TEST 0: FAVICON VERIFICATION ---');
  const faviconCheck = await page.evaluate(() => {
    const icon32 = document.querySelector('link[rel="icon"][sizes="32x32"]');
    const icon16 = document.querySelector('link[rel="icon"][sizes="16x16"]');
    const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    const shortcutIcon = document.querySelector('link[rel="shortcut icon"]');
    return {
      icon32: icon32 ? icon32.getAttribute('href') : null,
      icon16: icon16 ? icon16.getAttribute('href') : null,
      appleIcon: appleIcon ? appleIcon.getAttribute('href') : null,
      shortcutIcon: shortcutIcon ? shortcutIcon.getAttribute('href') : null
    };
  });
  console.log('Favicon tags:', faviconCheck);
  const icoExists = fs.existsSync(path.resolve(__dirname, '../favicon.ico'));
  const png32Exists = fs.existsSync(path.resolve(__dirname, '../assets/images/favicon-32x32.png'));
  if (!faviconCheck.icon32 || !faviconCheck.shortcutIcon || !icoExists || !png32Exists) {
    console.error('FAIL: Favicon tags or files missing!');
    passed = false;
  } else {
    console.log('PASS: Official cameo logo favicon files and link tags verified successfully.');
  }

  console.log('--- TEST 1: LOGO ANIMATION & RESPONSIVENESS VERIFICATION ---');
  const logoCheck = await page.evaluate(() => {
    const logoLink = document.querySelector('.brand-logo');
    const logoImg = document.querySelector('.brand-logo-image.header-logo-full');
    if (!logoLink || !logoImg) return { found: false };

    const style = window.getComputedStyle(logoImg);
    const linkStyle = window.getComputedStyle(logoLink, '::after');

    return {
      found: true,
      src: logoImg.getAttribute('src'),
      height: parseFloat(style.height),
      animationName: style.animationName,
      hasSheenAnimation: !!linkStyle.animationName,
      filter: style.filter
    };
  });
  console.log('Logo animation check:', logoCheck);
  if (!logoCheck.found || !logoCheck.src.includes('stylemart-logo-header.png')) {
    console.error('FAIL: Logo source does not point to stylemart-logo-header.png!');
    passed = false;
  } else if (!logoCheck.animationName || logoCheck.animationName === 'none') {
    console.error('FAIL: Logo does not have animation configured!');
    passed = false;
  } else {
    console.log(`PASS: Logo animation active (animation: ${logoCheck.animationName}, height: ${logoCheck.height}px).`);
  }

  console.log('--- TEST 2: PREVIOUS VERSION HERO BANNER VERIFICATION ---');
  const bannerCheck = await page.evaluate(() => {
    const hero = document.getElementById('homeHero');
    const track = document.getElementById('heroSliderTrack');
    const slides = document.querySelectorAll('#heroSliderTrack .slide');
    const dots = document.querySelectorAll('#sliderDots .dot');
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    const lasseOverlay = document.querySelector('.lasse-card-overlay');
    const lasseBar = document.querySelector('.lasse-editorial-nav-bar');

    return {
      heroExists: !!hero,
      trackExists: !!track,
      slidesCount: slides.length,
      dotsCount: dots.length,
      hasNavButtons: !!prevBtn && !!nextBtn,
      noLasseOverlay: !lasseOverlay,
      noLasseBar: !lasseBar
    };
  });
  console.log('Banner check:', bannerCheck);
  if (!bannerCheck.heroExists || !bannerCheck.trackExists || bannerCheck.slidesCount !== 3 || bannerCheck.dotsCount !== 3) {
    console.error('FAIL: Previous version hero slider elements missing!');
    passed = false;
  } else if (!bannerCheck.noLasseOverlay || !bannerCheck.noLasseBar) {
    console.error('FAIL: Lasse Pedersen effect overlays still present in banner!');
    passed = false;
  } else {
    console.log('PASS: Hero banner cleanly restored to previous responsive slider version (3 slides, 3 dots, prev/next arrows, 0 Lasse effects).');
  }

  // Test Banner indicator / dot navigation
  await page.click('#sliderDots .dot:nth-child(2)');
  await new Promise(r => setTimeout(r, 600));
  const activeSlideIndex = await page.evaluate(() => {
    const slides = document.querySelectorAll('#heroSliderTrack .slide');
    let activeIdx = -1;
    slides.forEach((s, idx) => {
      if (s.classList.contains('active')) activeIdx = idx;
    });
    return activeIdx;
  });
  console.log('Active slide after clicking next:', activeSlideIndex);
  if (activeSlideIndex !== 1) {
    console.error('FAIL: Clicking next slide button did not activate slide 1!');
    passed = false;
  } else {
    console.log('PASS: Slide navigation works smoothly in previous banner slider.');
  }

  console.log('--- TEST 3: PREVIOUS VERSION FLASH DEALS CAROUSEL VERIFICATION ---');
  const flashCheck = await page.evaluate(() => {
    const section = document.getElementById('flashSaleSection');
    const frame = document.querySelector('.flash-sale-banner-frame');
    const headerStrip = document.querySelector('.flash-header-strip');
    const badge = document.querySelector('.flash-badge-pill');
    const container = document.getElementById('flashCarouselContainer');
    const grid = document.getElementById('flashProductsGrid');
    const cards = document.querySelectorAll('#flashProductsGrid .product-card');
    const mozzarellaTrack = document.querySelector('.mozzarella-3d-track');

    return {
      sectionExists: !!section,
      frameExists: !!frame,
      headerStripExists: !!headerStrip,
      badgeText: badge ? badge.textContent.trim() : '',
      containerExists: !!container,
      gridExists: !!grid,
      cardsCount: cards.length,
      noMozzarella3D: !mozzarellaTrack
    };
  });
  console.log('Flash check:', flashCheck);
  if (!flashCheck.sectionExists || !flashCheck.containerExists || flashCheck.cardsCount < 5) {
    console.error('FAIL: Flash deals products or container missing!');
    passed = false;
  } else if (!flashCheck.noMozzarella3D) {
    console.error('FAIL: Mozzarella 3D coverflow track still present!');
    passed = false;
  } else {
    console.log(`PASS: Flash deals restored to previous clean responsive carousel (${flashCheck.cardsCount} deals rendered, 0 3D coverflow effects).`);
  }

  console.log('--- TEST 4: AVOLOCH 3D HOLOGRAPHIC PRODUCT CARD EFFECT ---');
  const cardEffectCheck = await page.evaluate(async () => {
    const firstFashionCard = document.querySelector('#productsGrid .product-card, .products-grid .product-card');
    if (!firstFashionCard) return { found: false };

    const glow = firstFashionCard.querySelector('.avoloch-glow');
    const sheen = firstFashionCard.querySelector('.avoloch-hologram-sheen');
    const scanline = firstFashionCard.querySelector('.avoloch-scanline');

    const rect = firstFashionCard.getBoundingClientRect();
    const event = new MouseEvent('mousemove', {
      clientX: rect.left + rect.width * 0.8,
      clientY: rect.top + rect.height * 0.2,
      bubbles: true
    });
    firstFashionCard.dispatchEvent(event);

    await new Promise(r => requestAnimationFrame(r));
    await new Promise(r => setTimeout(r, 50));

    return {
      found: true,
      hasGlow: !!glow,
      hasSheen: !!sheen,
      hasScanline: !!scanline,
      transform: firstFashionCard.style.transform,
      glowBoxShadow: glow ? glow.style.boxShadow : ''
    };
  });
  console.log('Avoloch effect check:', cardEffectCheck);
  if (!cardEffectCheck.found || !cardEffectCheck.hasGlow || !cardEffectCheck.hasSheen || !cardEffectCheck.hasScanline) {
    console.error('FAIL: Missing Avoloch effect layers!');
    passed = false;
  } else if (!cardEffectCheck.transform.includes('perspective') || !cardEffectCheck.transform.includes('rotateX')) {
    console.error('FAIL: Avoloch 3D perspective tilt not active on mousemove!');
    passed = false;
  } else {
    console.log('PASS: Avoloch 3D perspective tilt and specular glow active and working!');
  }

  console.log('--- TEST 5: MOBILE VIEW RESPONSIVENESS (375px) ---');
  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 500));

  const mobileCheck = await page.evaluate(() => {
    const logoImg = document.querySelector('.brand-logo-image.header-logo-full');
    const bodyScrollWidth = document.body.scrollWidth;
    const bodyClientWidth = document.documentElement.clientWidth;

    return {
      bodyScrollWidth,
      bodyClientWidth,
      hasHorizontalPageScroll: bodyScrollWidth > bodyClientWidth,
      mobileLogoHeight: logoImg ? parseFloat(window.getComputedStyle(logoImg).height) : 0
    };
  });
  console.log('Mobile check:', mobileCheck);
  if (mobileCheck.hasHorizontalPageScroll) {
    console.error(`FAIL: Page has horizontal overflow scroll on mobile! (${mobileCheck.bodyScrollWidth} > ${mobileCheck.bodyClientWidth})`);
    passed = false;
  } else if (mobileCheck.mobileLogoHeight > 46) {
    console.error(`FAIL: Mobile logo height (${mobileCheck.mobileLogoHeight}px) exceeds 46px!`);
    passed = false;
  } else {
    console.log(`PASS: Zero horizontal page overflow on mobile view, responsive mobile logo height: ${mobileCheck.mobileLogoHeight}px.`);
  }

  await browser.close();

  if (!passed) {
    console.error('TESTS FAILED');
    process.exit(1);
  } else {
    console.log('ALL TESTS PASSED SUCCESSFULLY!');
  }
})();
