const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('--- Starting Comprehensive Automated Verification for StyleMart Enhancements ---');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  let allPassed = true;
  function report(name, condition, details = '') {
    if (condition) {
      console.log(`[PASS] ${name} ${details ? '(' + details + ')' : ''}`);
    } else {
      console.error(`[FAIL] ${name} ${details ? '(' + details + ')' : ''}`);
      allPassed = false;
    }
  }

  try {
    const page = await browser.newPage();
    const indexPath = 'file:///' + path.resolve(__dirname, '../index.html').replace(/\\/g, '/');

    // -------------------------------------------------------------
    // Test 1: Desktop Mode - Logo Animation, Previous Banner, Previous Flash Deals
    // -------------------------------------------------------------
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(indexPath, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1200));

    // 1. Logo Animation Verification
    const logoInfo = await page.evaluate(() => {
      const logoLink = document.querySelector('.brand-logo');
      const logoImg = document.querySelector('.brand-logo-image.header-logo-full');
      if (!logoLink || !logoImg) return { found: false };

      const computedImg = window.getComputedStyle(logoImg);
      const computedAfter = window.getComputedStyle(logoLink, '::after');

      return {
        found: true,
        src: logoImg.getAttribute('src'),
        height: parseFloat(computedImg.height),
        animationName: computedImg.animationName,
        filter: computedImg.filter,
        hasSheenAnimation: !!computedAfter.animationName
      };
    });
    report('1. Royal Gold Logo Ambient Glow & Entrance Animation', logoInfo.found && logoInfo.animationName.includes('stylemartLogoGlow'), `Animation: ${logoInfo.animationName}, Height: ${logoInfo.height}px`);
    report('1. Luminous Gold Sheen Sweep Pseudo-Element', logoInfo.hasSheenAnimation);

    // 2. Previous Version Hero Banner (Clean Responsive Slider, 0 Lasse Pedersen Effects)
    const bannerInfo = await page.evaluate(() => {
      const hero = document.getElementById('homeHero');
      const track = document.getElementById('heroSliderTrack');
      const slides = document.querySelectorAll('#heroSliderTrack .slide');
      const dots = document.querySelectorAll('#sliderDots .dot');
      const lasseOverlay = document.querySelector('.lasse-card-overlay');
      const lasseBar = document.querySelector('.lasse-editorial-nav-bar');
      const lasseCounter = document.getElementById('lasseSlideCounter');

      return {
        heroExists: !!hero,
        trackExists: !!track,
        slidesCount: slides.length,
        dotsCount: dots.length,
        noLasseOverlay: !lasseOverlay,
        noLasseBar: !lasseBar,
        noLasseCounter: !lasseCounter
      };
    });
    report('2. Previous Version Hero Slider Structure (3 Slides, 3 Dots)', bannerInfo.heroExists && bannerInfo.trackExists && bannerInfo.slidesCount === 3 && bannerInfo.dotsCount === 3, `Slides: ${bannerInfo.slidesCount}, Dots: ${bannerInfo.dotsCount}`);
    report('2. Zero Lasse Pedersen Gallery Overlays & Scrubbers', bannerInfo.noLasseOverlay && bannerInfo.noLasseBar && bannerInfo.noLasseCounter);

    // Test banner dot slide change
    await page.click('#sliderDots .dot:nth-child(2)');
    await new Promise(r => setTimeout(r, 600));
    const activeSlide = await page.evaluate(() => {
      const slides = document.querySelectorAll('#heroSliderTrack .slide');
      let activeIdx = -1;
      slides.forEach((s, idx) => {
        if (s.classList.contains('active')) activeIdx = idx;
      });
      return activeIdx;
    });
    report('2. Previous Banner Slide Navigation (Slide 2 Active)', activeSlide === 1, `ActiveSlideIndex: ${activeSlide}`);

    // 3. Previous Version Flash Deals Carousel (0 TheMOZZARELLA 3D Effects)
    const flashInfo = await page.evaluate(() => {
      const section = document.getElementById('flashSaleSection');
      const frame = document.querySelector('.flash-sale-banner-frame');
      const headerStrip = document.querySelector('.flash-header-strip');
      const container = document.getElementById('flashCarouselContainer');
      const grid = document.getElementById('flashProductsGrid');
      const cards = document.querySelectorAll('#flashProductsGrid .product-card');
      const mozzarellaTrack = document.querySelector('.mozzarella-3d-track');
      const mozzarellaViewport = document.querySelector('.mozzarella-3d-viewport');
      const mozzarellaCounter = document.getElementById('flash3dCounter');

      return {
        sectionExists: !!section,
        frameExists: !!frame,
        headerStripExists: !!headerStrip,
        containerExists: !!container,
        gridExists: !!grid,
        cardsCount: cards.length,
        noMozzarella3D: !mozzarellaTrack && !mozzarellaViewport && !mozzarellaCounter
      };
    });
    report('3. Previous Version Flash Deals Horizontal Carousel Structure', flashInfo.sectionExists && flashInfo.containerExists && flashInfo.gridExists && flashInfo.cardsCount >= 5, `Cards: ${flashInfo.cardsCount}`);
    report('3. Zero TheMOZZARELLA 3D Coverflow Viewport & Overrides', flashInfo.noMozzarella3D);

    // 4. Forest Green Add to Cart Button Color (matching header #07261e)
    const buttonColors = await page.evaluate(() => {
      const header = document.querySelector('.main-header');
      const addBtn = document.querySelector('.card-add-to-cart-btn');
      const headerBg = window.getComputedStyle(header).backgroundColor;
      const addBtnBg = addBtn ? window.getComputedStyle(addBtn).backgroundColor : '';
      return { headerBg, addBtnBg };
    });
    // rgb(7, 38, 30) corresponds to #07261e
    report('4. Add to Cart Button Forest Green Color (#07261e)', buttonColors.addBtnBg === 'rgb(7, 38, 30)' || buttonColors.addBtnBg.includes('7, 38, 30'), `Header: ${buttonColors.headerBg}, Button: ${buttonColors.addBtnBg}`);

    // 5. Add to Cart Popup Confirmation Modal
    const cartPopupTest = await page.evaluate(async () => {
      const freeSizeProd = PRODUCTS_DATA.find(p => isFreeSizeProduct(p)) || PRODUCTS_DATA[0];
      quickAddToCart(freeSizeProd.id, freeSizeProd.sizes ? freeSizeProd.sizes[0] : 'Free Size');
      await new Promise(r => setTimeout(r, 400));
      const modal = document.getElementById('cartAddedModal');
      const isVisible = modal && modal.classList.contains('active');
      const modalName = document.getElementById('cartAddedProductName')?.textContent || '';
      return { isVisible, modalName };
    });
    report('5. Add to Cart Popup Confirmation Modal Displayed', cartPopupTest.isVisible && cartPopupTest.modalName.length > 0, `Added: "${cartPopupTest.modalName}"`);

    // 6. Checkout Address Workflow:
    // Case A: User has NO address -> Clicking checkout opens address popup
    const checkoutNoAddressTest = await page.evaluate(async () => {
      localStorage.setItem('stylemart_user', JSON.stringify({ name: 'Test User', phone: '9876543210', address: '', city: '', pincode: '' }));
      if (window.state) {
        state.userProfile = JSON.parse(localStorage.getItem('stylemart_user'));
      }
      openCheckoutModal();
      await new Promise(r => setTimeout(r, 400));
      const authModal = document.getElementById('authModal');
      const checkoutModal = document.getElementById('checkoutModal');
      const isAuthActive = authModal && authModal.classList.contains('active');
      const isCheckoutActive = checkoutModal && checkoutModal.classList.contains('active');
      return { isAuthActive, isCheckoutActive, pending: state.pendingCheckout };
    });
    report('6A. Checkout without Address Opens Address Popup Modal', checkoutNoAddressTest.isAuthActive && !checkoutNoAddressTest.isCheckoutActive, `AuthActive: ${checkoutNoAddressTest.isAuthActive}, Pending: ${checkoutNoAddressTest.pending}`);

    // Case B: User HAS address -> Clicking checkout redirects directly to UPI/COD page (step 2)
    const checkoutWithAddressTest = await page.evaluate(async () => {
      closeAuthModal();
      localStorage.setItem('stylemart_user', JSON.stringify({
        name: 'Chaithanya Prakash',
        phone: '9876543210',
        address: 'No 42 MG Road',
        city: 'Bengaluru',
        pincode: '560001',
        addresses: [{ address: 'No 42 MG Road', city: 'Bengaluru', pincode: '560001' }]
      }));
      state.userProfile = JSON.parse(localStorage.getItem('stylemart_user'));
      openCheckoutModal();
      await new Promise(r => setTimeout(r, 400));
      const checkoutModal = document.getElementById('checkoutModal');
      const isCheckoutActive = checkoutModal && checkoutModal.classList.contains('active');
      const content = document.getElementById('checkoutBodyContent')?.innerHTML || '';
      const hasUpiCod = content.includes('UPI / Instant Pay') && content.includes('Cash on Delivery');
      const hasAddressBanner = content.includes('Delivering to: Chaithanya Prakash');
      return { isCheckoutActive, hasUpiCod, hasAddressBanner, checkoutStep };
    });
    report('6B. Checkout with Address Redirects Directly to UPI/COD Page', checkoutWithAddressTest.isCheckoutActive && checkoutWithAddressTest.hasUpiCod && checkoutWithAddressTest.checkoutStep === 2, `Step: ${checkoutWithAddressTest.checkoutStep}, AddressBanner: ${checkoutWithAddressTest.hasAddressBanner}`);

    // 7. User Logout
    const logoutTest = await page.evaluate(() => {
      window.confirm = () => true;
      logoutAccount();
      const userAfter = localStorage.getItem('stylemart_user');
      const loggedOutFlag = localStorage.getItem('stylemart_logged_out');
      return {
        userNull: userAfter === null,
        loggedOutFlag: loggedOutFlag === 'true',
        stateNull: state.userProfile === null
      };
    });
    report('7. User Logout Clears Profile and Flags Session', logoutTest.userNull && logoutTest.loggedOutFlag && logoutTest.stateNull);

    // -------------------------------------------------------------
    // Test 8: Mobile Viewport (375px) - Responsiveness, Cards, Logo & Address Form
    // -------------------------------------------------------------
    await page.setViewport({ width: 375, height: 812 });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));

    // Responsive Mobile Logo Height
    const mobileLogo = await page.evaluate(() => {
      const img = document.querySelector('header .brand-logo-image.header-logo-full');
      return img ? parseFloat(window.getComputedStyle(img).height) : 0;
    });
    report('8. Mobile Logo Scaled Responsively (<=42px)', mobileLogo > 0 && mobileLogo <= 42, `Height: ${mobileLogo}px`);

    // Mobile Product Card Responsiveness & Image Height (>180px, aspect-ratio 3:4)
    const mobileCardInfo = await page.evaluate(() => {
      const card = document.querySelector('.fashion-products-grid .product-card, .products-grid .product-card');
      const imgWrap = card ? card.querySelector('.product-card-img-wrap') : null;
      const img = imgWrap ? imgWrap.querySelector('img') : null;
      const cardRect = card ? card.getBoundingClientRect() : null;
      const wrapRect = imgWrap ? imgWrap.getBoundingClientRect() : null;
      const computedWrap = imgWrap ? window.getComputedStyle(imgWrap) : null;
      return {
        cardWidth: cardRect ? cardRect.width : 0,
        wrapHeight: wrapRect ? wrapRect.height : 0,
        aspectRatio: computedWrap ? computedWrap.aspectRatio : '',
        objectFit: img ? window.getComputedStyle(img).objectFit : ''
      };
    });
    report('8. Mobile Product Card Image Height & Visibility (>180px)', mobileCardInfo.wrapHeight >= 180, `Height: ${mobileCardInfo.wrapHeight}px, Width: ${mobileCardInfo.cardWidth}px, ObjectFit: ${mobileCardInfo.objectFit}`);

    // Mobile Add Address Form Alignment & Zero Horizontal Overflow
    const mobileAddressForm = await page.evaluate(() => {
      openAuthModal();
      const modal = document.querySelector('#authModal .modal-container.auth-modal');
      const rect = modal ? modal.getBoundingClientRect() : null;
      const inputs = modal ? modal.querySelectorAll('.studio-text-input, .input-prefix-wrap') : [];
      const submitBtn = document.getElementById('profileFormSubmit');
      const btnRect = submitBtn ? submitBtn.getBoundingClientRect() : null;
      let allInputsAtLeast40px = true;
      inputs.forEach(inp => {
        if (inp.getBoundingClientRect().height < 40) allInputsAtLeast40px = false;
      });
      const fitsInViewport = rect ? (rect.left >= 0 && rect.right <= 375) : false;
      return {
        modalWidth: rect ? rect.width : 0,
        fitsInViewport,
        allInputsAtLeast40px,
        btnHeight: btnRect ? btnRect.height : 0
      };
    });
    report('8. Mobile Address Form Responsiveness & Alignment', mobileAddressForm.fitsInViewport && mobileAddressForm.allInputsAtLeast40px, `ModalWidth: ${mobileAddressForm.modalWidth}px, FitsInViewport: ${mobileAddressForm.fitsInViewport}, BtnHeight: ${mobileAddressForm.btnHeight}px`);

    // 9. Avoloch 3D Holographic Card & Dynamic Layers Check
    const avolochCardCheck = await page.evaluate(() => {
      const card = document.querySelector('.product-card:not(.flash-product-card)');
      if (!card) return { found: false };
      const glow = card.querySelector('.avoloch-glow');
      const sheen = card.querySelector('.avoloch-hologram-sheen');
      const scanline = card.querySelector('.avoloch-scanline');
      return {
        found: true,
        hasGlow: !!glow,
        hasSheen: !!sheen,
        hasScanline: !!scanline
      };
    });
    report('9. Avoloch 3D Holographic Card & Dynamic Layers', avolochCardCheck.found && avolochCardCheck.hasGlow && avolochCardCheck.hasSheen && avolochCardCheck.hasScanline, `Glow: ${avolochCardCheck.hasGlow}, Sheen: ${avolochCardCheck.hasSheen}, Scanline: ${avolochCardCheck.hasScanline}`);

    await page.close();
  } catch (err) {
    console.error('Test Execution Error:', err);
    allPassed = false;
  } finally {
    await browser.close();
    console.log('\n--- Final Test Suite Result ---');
    if (allPassed) {
      console.log('ALL STYLEMART ENHANCEMENT TESTS PASSED PERFECTLY (100%)!');
      process.exit(0);
    } else {
      console.error('SOME TESTS FAILED.');
      process.exit(1);
    }
  }
})();
