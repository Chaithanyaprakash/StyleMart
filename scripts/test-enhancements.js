const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('--- Starting Comprehensive Automated Verification for 9 User Enhancements ---');
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
    // Test 1: Desktop Mode - Banner, Flash 3D, Cards, Buttons
    // -------------------------------------------------------------
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(indexPath, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));

    // 1. Lasse Pedersen Banner Gallery
    const bannerInfo = await page.evaluate(() => {
      const track = document.getElementById('heroSliderTrack');
      const counter = document.getElementById('lasseSlideCounter');
      const progress = document.getElementById('lasseProgressFill');
      const slides = document.querySelectorAll('.lasse-gallery-slide');
      const overlay = document.querySelector('.lasse-card-overlay');
      return {
        trackExists: !!track,
        slidesCount: slides.length,
        counterText: counter ? counter.textContent : '',
        progressWidth: progress ? progress.style.width : '',
        overlayExists: !!overlay
      };
    });
    report('1. Lasse Pedersen Gallery Track & Slides', bannerInfo.trackExists && bannerInfo.slidesCount === 3, `Count: ${bannerInfo.slidesCount}`);
    report('1. Lasse Pedersen Counter & Progress', bannerInfo.counterText === '01 / 03', `Counter: ${bannerInfo.counterText}, Progress: ${bannerInfo.progressWidth}`);
    report('1. Lasse Pedersen Editorial Card Overlay', bannerInfo.overlayExists);

    // 2. TheMOZZARELLA 3D Parallax Carousel for Flash Deals
    const flash3dInfo = await page.evaluate(() => {
      const viewport = document.querySelector('.mozzarella-3d-viewport');
      const track = document.querySelector('.mozzarella-3d-track');
      const centerCard = document.querySelector('.mozzarella-3d-track .flash-3d-center');
      const counter = document.getElementById('flash3dCounter');
      const dots = document.querySelectorAll('.flash-3d-pagination .flash-3d-dot');
      const cards = document.querySelectorAll('.mozzarella-3d-track .flash-product-card');
      const centerTransform = centerCard ? centerCard.style.transform : '';
      return {
        viewportExists: !!viewport,
        trackExists: !!track,
        cardsCount: cards.length,
        hasCenterCard: !!centerCard,
        centerTransform,
        counterText: counter ? counter.textContent : '',
        dotsCount: dots.length
      };
    });
    report('2. TheMOZZARELLA 3D Viewport & Track', flash3dInfo.viewportExists && flash3dInfo.trackExists, `Cards: ${flash3dInfo.cardsCount}`);
    report('2. TheMOZZARELLA 3D Counter & Zero Dots', flash3dInfo.dotsCount === 0 && flash3dInfo.counterText.includes('01 /'), `Counter: ${flash3dInfo.counterText}, Dots: ${flash3dInfo.dotsCount}`);

    // 3. Forest Green Add to Cart Button Color (matching header #07261e)
    const buttonColors = await page.evaluate(() => {
      const header = document.querySelector('.main-header');
      const addBtn = document.querySelector('.card-add-to-cart-btn');
      const headerBg = window.getComputedStyle(header).backgroundColor;
      const addBtnBg = addBtn ? window.getComputedStyle(addBtn).backgroundColor : '';
      return { headerBg, addBtnBg };
    });
    // rgb(7, 38, 30) corresponds to #07261e
    report('3. Add to Cart Button Forest Green Color', buttonColors.addBtnBg === 'rgb(7, 38, 30)' || buttonColors.addBtnBg.includes('7, 38, 30'), `Header: ${buttonColors.headerBg}, Button: ${buttonColors.addBtnBg}`);

    // 4. Add to Cart Popup Confirmation Modal
    const cartPopupTest = await page.evaluate(async () => {
      const freeSizeProd = PRODUCTS_DATA.find(p => isFreeSizeProduct(p)) || PRODUCTS_DATA[0];
      quickAddToCart(freeSizeProd.id, freeSizeProd.sizes ? freeSizeProd.sizes[0] : 'Free Size');
      await new Promise(r => setTimeout(r, 400));
      const modal = document.getElementById('cartAddedModal');
      const isVisible = modal && modal.classList.contains('active');
      const modalName = document.getElementById('cartAddedProductName')?.textContent || '';
      return { isVisible, modalName };
    });
    report('4. Add to Cart Popup Confirmation Modal', cartPopupTest.isVisible && cartPopupTest.modalName.length > 0, `Added: "${cartPopupTest.modalName}"`);

    // 5. Checkout Address Workflow:
    // Case A: User has NO address -> Clicking checkout opens address popup
    const checkoutNoAddressTest = await page.evaluate(async () => {
      localStorage.setItem('stylemart_user', JSON.stringify({ name: 'Test User', phone: '9876543210', address: '', city: '', pincode: '' }));
      // Reload state
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
    report('5A. Checkout without address opens Address Popup', checkoutNoAddressTest.isAuthActive && !checkoutNoAddressTest.isCheckoutActive, `AuthActive: ${checkoutNoAddressTest.isAuthActive}, Pending: ${checkoutNoAddressTest.pending}`);

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
    report('5B. Checkout with address redirects directly to UPI/COD page', checkoutWithAddressTest.isCheckoutActive && checkoutWithAddressTest.hasUpiCod && checkoutWithAddressTest.checkoutStep === 2, `Step: ${checkoutWithAddressTest.checkoutStep}, AddressBanner: ${checkoutWithAddressTest.hasAddressBanner}`);

    // 6. User Logout
    const logoutTest = await page.evaluate(() => {
      // simulate confirm returning true
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
    report('6. User Logout removes user profile and sets stylemart_logged_out', logoutTest.userNull && logoutTest.loggedOutFlag && logoutTest.stateNull);

    // -------------------------------------------------------------
    // Test 2: Mobile Viewport (375px) - Product Card Image Clarity & Address Form Alignment
    // -------------------------------------------------------------
    await page.setViewport({ width: 375, height: 812 });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));

    // 7. Mobile Product Card Responsiveness & Image Height (>180px, aspect-ratio 3:4)
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
    report('7. Mobile Product Card Image Height & Visibility (>180px)', mobileCardInfo.wrapHeight >= 180, `Height: ${mobileCardInfo.wrapHeight}px, Width: ${mobileCardInfo.cardWidth}px, ObjectFit: ${mobileCardInfo.objectFit}`);

    // 8. Mobile Add Address Form Alignment & Zero Horizontal Overflow
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
      console.log('ALL 9 USER ENHANCEMENT TESTS PASSED PERFECTLY (100%)!');
      process.exit(0);
    } else {
      console.error('SOME TESTS FAILED.');
      process.exit(1);
    }
  }
})();
