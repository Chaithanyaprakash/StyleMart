const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  let passed = true;
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
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

  console.log('--- TEST 1: LOGO VERIFICATION ---');
  const logoSrc = await page.evaluate(() => {
    const img = document.querySelector('.brand-logo-image');
    return img ? img.getAttribute('src') : null;
  });
  console.log('Logo src:', logoSrc);
  if (!logoSrc || !logoSrc.includes('stylemart-logo-header.png')) {
    console.error('FAIL: Logo source does not point to stylemart-logo-header.png');
    passed = false;
  } else {
    console.log('PASS: New gold cameo logo is present in the header.');
  }

  console.log('--- TEST 2: RESTORED BANNER DOTS & FLASH SALE COUNTER ---');
  const restoredCheck = await page.evaluate(() => {
    const bannerDots = document.querySelectorAll('#homeHero .slider-dots .dot, #sliderDots .dot');
    const flashDots = document.querySelectorAll('.flash-3d-dot, #flash3dPagination .flash-3d-dot');
    const counter = document.getElementById('flash3dCounter');
    const container = document.getElementById('flashCarouselContainer');
    return {
      bannerDotsCount: bannerDots.length,
      bannerDotsVisible: bannerDots.length > 0 && window.getComputedStyle(bannerDots[0].parentElement).display !== 'none',
      flashDotsCount: flashDots.length,
      counterVisible: !!counter && window.getComputedStyle(counter).display !== 'none',
      counterText: counter ? counter.textContent.trim() : '',
      containerHeight: container ? container.offsetHeight : 0,
      overflowX: container ? window.getComputedStyle(container).overflowX : ''
    };
  });
  console.log('Restored check:', restoredCheck);
  if (!restoredCheck.bannerDotsVisible || restoredCheck.bannerDotsCount !== 3) {
    console.error('FAIL: Banner slider dots missing or hidden!');
    passed = false;
  } else {
    console.log(`PASS: Banner slider dots visible and properly configured (${restoredCheck.bannerDotsCount} dots).`);
  }
  if (!restoredCheck.counterVisible || !restoredCheck.counterText.includes('/')) {
    console.error(`FAIL: Flash 3D counter is missing or not visible! (${restoredCheck.counterText})`);
    passed = false;
  } else {
    console.log(`PASS: Flash sale counter visible and restored matching mockup (${restoredCheck.counterText}).`);
  }
  if (restoredCheck.flashDotsCount > 0) {
    console.error('FAIL: Found flash card dots!');
    passed = false;
  } else {
    console.log('PASS: Flash cards pagination dots remain cleanly removed.');
  }
  if (restoredCheck.overflowX !== 'hidden') {
    console.error('FAIL: Flash container does not have overflowX: hidden!');
    passed = false;
  } else {
    console.log('PASS: Horizontal scrollbar is completely eliminated with overflow-x: hidden.');
  }
  if (restoredCheck.containerHeight > 360) {
    console.error(`FAIL: Flash container height (${restoredCheck.containerHeight}px) exceeds compact threshold!`);
    passed = false;
  } else {
    console.log(`PASS: Flash deals whitespace compact (container height: ${restoredCheck.containerHeight}px).`);
  }

  console.log('--- TEST 3: FLASH DEALS 3D PARALLAX COVERFLOW & PREV/NEXT ---');
  const initialIndex = await page.evaluate(() => {
    const center = document.querySelector('.flash-product-card.flash-3d-center');
    return center ? center.getAttribute('data-flash-index') : null;
  });
  console.log('Initial center index:', initialIndex);

  await page.click('#flashNextBtn');
  await new Promise(r => setTimeout(r, 600));

  const nextIndex = await page.evaluate(() => {
    const center = document.querySelector('.flash-product-card.flash-3d-center');
    return center ? center.getAttribute('data-flash-index') : null;
  });
  console.log('Next center index:', nextIndex);
  if (nextIndex === initialIndex) {
    console.error('FAIL: Next button did not advance active flash deal!');
    passed = false;
  } else {
    console.log('PASS: Next navigation works smoothly in 3D coverflow carousel.');
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
    const container = document.getElementById('flashCarouselContainer');
    const bodyScrollWidth = document.body.scrollWidth;
    const bodyClientWidth = document.documentElement.clientWidth;

    return {
      bodyScrollWidth,
      bodyClientWidth,
      hasHorizontalPageScroll: bodyScrollWidth > bodyClientWidth,
      containerHeight: container ? container.offsetHeight : 0
    };
  });
  console.log('Mobile check:', mobileCheck);
  if (mobileCheck.hasHorizontalPageScroll) {
    console.error('FAIL: Page has horizontal overflow scroll on mobile!');
    passed = false;
  } else if (mobileCheck.containerHeight > 310) {
    console.error(`FAIL: Mobile flash container height (${mobileCheck.containerHeight}px) exceeds 310px!`);
    passed = false;
  } else {
    console.log(`PASS: Zero horizontal page overflow on mobile view, mobile flash container height: ${mobileCheck.containerHeight}px.`);
  }

  await browser.close();

  if (!passed) {
    console.error('TESTS FAILED');
    process.exit(1);
  } else {
    console.log('ALL TESTS PASSED SUCCESSFULLY!');
  }
})();
