const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  let passed = true;
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto('file:///' + path.resolve(__dirname, '../index.html').replace(/\\/g, '/'), { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));

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

  console.log('--- TEST 2: FLASH DEALS DOTS & HORIZONTAL SCROLLBAR ---');
  const flashCheck = await page.evaluate(() => {
    const dots = document.querySelectorAll('.flash-3d-dot, #flash3dPagination .flash-3d-dot');
    const container = document.getElementById('flashCarouselContainer');
    const grid = document.getElementById('flashProductsGrid');
    return {
      dotsCount: dots.length,
      containerScrollWidth: container ? container.scrollWidth : 0,
      containerClientWidth: container ? container.clientWidth : 0,
      overflowX: container ? window.getComputedStyle(container).overflowX : ''
    };
  });
  console.log('Flash check:', flashCheck);
  if (flashCheck.dotsCount > 0) {
    console.error('FAIL: Found flash 3D dots!');
    passed = false;
  } else {
    console.log('PASS: Dots are completely removed.');
  }
  if (flashCheck.overflowX !== 'hidden') {
    console.error('FAIL: Flash container does not have overflowX: hidden!');
    passed = false;
  } else {
    console.log('PASS: Horizontal scrollbar is completely eliminated with overflow-x: hidden.');
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
    const footer = document.querySelector('.main-footer');
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
  } else {
    console.log('PASS: Zero horizontal page overflow on mobile view.');
  }

  await page.screenshot({ path: path.resolve(__dirname, '../screenshot_mobile.png') });
  console.log('Saved screenshot_mobile.png');

  await browser.close();

  if (!passed) {
    console.error('TESTS FAILED');
    process.exit(1);
  } else {
    console.log('ALL TESTS PASSED SUCCESSFULLY!');
  }
})();
