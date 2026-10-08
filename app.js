// --------------------------------------------------------------------------
// 1. PRODUCT DATABASE
// --------------------------------------------------------------------------
const PRODUCTS_DATA = [
  {
    id: 'sm-101',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Men Regular Fit',
    brand: 'Rare Rabbit',
    category: 'men',
    price: 1153,
    originalPrice: 2799,
    discount: 59,
    rating: 4.3,
    reviewsCount: 578,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/o/u/v/-original-imahzy69b2x7ndnk.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/l/h/j/-original-imahzy69eumpucqs.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/i/4/1/-original-imahzy69nxsxqttp.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/z/z/g/-original-imahzy69ehw4ryfd.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Trending'],
    isFlashSale: true,
    stockLeft: 12,
    description: 'Elevate your Style with this Regular Fit Shirt from Rare Rabbit. Crafted with 100% pure cotton, it offers a comfortable and breathable experience. Perfect for casual outings or semi-formal occasions, this shirt is a versatile addition to your wardrobe.',
    fabric: '100% Pure Cotton'
  },
  {
    id: 'sm-102',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Men Relaxed Fit',
    brand: 'The Indian Garage Co.',
    category: 'men',
    price: 550,
    originalPrice: 1999,
    discount: 72,
    rating: 4.2,
    reviewsCount: 74,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/d/c/4/l-0924-shwfyd-05-01-the-indian-garage-co-original-imahaar3wfpkz7fk.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/d/c/4/l-0924-shwfyd-05-01-the-indian-garage-co-original-imahaar3wfpkz7fk.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/d/j/2/l-0924-shwfyd-05-01-the-indian-garage-co-original-imahaar3ugbfqzyp.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/q/f/v/l-0924-shwfyd-05-01-the-indian-garage-co-original-imahaar3nhzv6vdz.jpeg?q=90' }
    ],
    sizes: ['M', 'L', 'XL'],
    colors: ['Vintage Black', 'Off White'],
    tags: ['Best Seller', 'Under ₹499'],
    isFlashSale: false,
    stockLeft: 8,
    description: 'Designed for ultimate street style comfort. Made with 240 GSM combed cotton with drop-shoulder modern fit.',
    fabric: '240 GSM Combed Cotton'
  },
  {
    id: 'sm-103',
    showInDealsOfDay: true,
    showInAllFashion: false,
    title: 'Woven Banarasi Saree',
    brand: 'FabIndia',
    category: 'ethnic',
    price: 578,
    originalPrice: 1999,
    discount: 71,
    rating: 3.8,
    reviewsCount: 51,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/g/z/i/free-red-slvr-pln-bhm-kathla-unstitched-original-imahmbabfeqdnfet.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/g/z/i/free-red-slvr-pln-bhm-kathla-unstitched-original-imahmbabfeqdnfet.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/o/a/u/free-red-slvr-pln-bhm-kathla-unstitched-original-imahmbabdeufkcfx.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/o/a/u/free-red-slvr-pln-bhm-kathla-unstitched-original-imahmbabdeufkcfx.jpeg?q=90' }
    ],
    sizes: ['Free Size'],
    colors: ['Royal Red'],
    tags: ['Luxury Ethnic'],
    isFlashSale: true,
    description: 'Authentic Banarasi Art Saree featuring regal floral motifs and gold zari border work. Includes unstitched blouse piece.',
    fabric: 'Banarasi Art Silk'
  },
  {
    id: 'sm-401',
    showInDealsOfDay: true,
    showInAllFashion: false,
    title: 'Silk Blend Saree',
    brand: 'Laxmipati sarees',
    category: 'ethnic',
    price: 3539,
    originalPrice: 14999,
    discount: 76,
    rating: 4.3,
    reviewsCount: 7190,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/8/i/d/free-n-3357-laxmipati-sarees-unstitched-original-imahzpu3gggm9zgt.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/c/x/y/free-n-3357-laxmipati-sarees-unstitched-original-imahzpu36pyugtte.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/5/t/t/free-n-3357-laxmipati-sarees-unstitched-original-imahzpu3ynrvuubu.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/u/m/o/free-n-3357-laxmipati-sarees-unstitched-original-imahzpu3czgaen2b.jpeg?q=90' }
    ],
    sizes: ['Free Size'],
    colors: ['Pink'],
    tags: ['Festive Wear'],
    isFlashSale: true,
    description: 'Elegant silk blend saree with intricate zari work and a contrasting blouse piece. Perfect for weddings and festive occasions.',
    fabric: 'Silk Blend'
  },
  {
    id: 'sm-402',
    showInDealsOfDay: true,
    showInAllFashion: false,
    title: 'Girls Festive & Party Angarkha and Sharara Set ',
    brand: 'Tulasi',
    category: 'ethnic',
    price: 326,
    originalPrice: 1999,
    discount: 84,
    rating: 3.9,
    reviewsCount: 71,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-ethnic-set/t/j/s/6-7-years-g136-md-enterprise-original-imahgbg2ydn4thxf.jpeg?q=90',
    sizes: ['Free Size'],
    colors: ['Purple'],
    tags: ['Traditional'],
    isFlashSale: true,
    description: 'Beautifully crafted girls festive and party wear angarkha and sharara set with intricate embroidery and vibrant colors. Perfect for weddings and special occasions.',
    fabric: 'Angarkha: Cotton Blend, Sharara: Cotton Blend'
  },
  {
    id: 'sm-104',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Cosmic TrioWomen High-Waist Wide-Leg Denim Jeans',
    brand: 'Urbanic',
    category: 'women',
    price: 506,
    originalPrice: 1599,
    discount: 68,
    rating: 3.7,
    reviewsCount: 151,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/y/q/p/30-ctjwpc003-l-cosmic-trio-original-imah3xkzentvghwp.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/y/q/p/30-ctjwpc003-l-cosmic-trio-original-imah3xkzentvghwp.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/o/g/o/30-ctjwpc003-l-cosmic-trio-original-imah3xkzsqh6gz9v.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/a/6/i/30-ctjwpc003-l-cosmic-trio-original-imahf7z4pvnq8nza.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Medium Wash Blue'],
    tags: ['Trending'],
    isFlashSale: false,
    stockLeft: 15,
    description: 'Retro 90s aesthetic high-waist relaxed wide leg denim jeans.',
    fabric: '98% Cotton, 2% Elastane'
  },
  {
    id: 'sm-105',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Men Casual Slim Fit Solid Oxford Shirt',
    brand: 'Allen Solly',
    category: 'men',
    price: 725,
    originalPrice: 1699,
    discount: 57,
    rating: 4.1,
    reviewsCount: 153,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/7/n/r/40-alsfcu10000735-allen-solly-original-imahpy2evzqjhb2j.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/7/n/r/40-alsfcu10000735-allen-solly-original-imahpy2evzqjhb2j.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/m/q/3/40-alsfcu10000735-allen-solly-original-imahpy2eq2hhgdsv.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/v/j/c/40-alsfcu10000735-allen-solly-original-imahpy2e2szhwfvn.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    tags: ['Workwear Essential'],
    isFlashSale: false,
    description: 'Tailored slim fit button-down Oxford shirt crafted from breathable cotton weave.',
    fabric: 'Cotton Blend'
  },
  {
    id: 'sm-106',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Unisex Retro Chunky White Lifestyle Sneakers',
    brand: 'Puma',
    category: 'footwear',
    price: 1869,
    originalPrice: 5499,
    discount: 66,
    rating: 4.7,
    reviewsCount: 4500,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/e/h/3/-original-imahrrjhwaqft4rf.jpeg?q=90',
    thumbs: [
      { label: 'Top\Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/3/f/f/-original-imahpg6q8kwkedgd.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/e/h/3/-original-imahrrjhwaqft4rf.jpeg?q=90' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['White-Dark'],
    tags: ['Best Seller'],
    isFlashSale: false,
    stockLeft: 5,
    description: 'Chunky dad sneakers with cushioned ortholite sole and lightweight breathable mesh upper.',
    fabric: 'Synthetic Leather & Mesh'
  },
  {
    id: 'sm-301',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Men Slippers',
    brand: 'HRX',
    category: 'footwear',
    price: 628,
    originalPrice: 2399,
    discount: 74,
    rating: 4.1,
    reviewsCount: 4428,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/slipper-flip-flop/2/q/5/-watermarked-original-imahmd3xtfddu6gt.jpeg?q=90',
    thumbs: [
      { label: 'Top\Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/slipper-flip-flop/w/z/u/-original-imahmd3zgzdhcxvr.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/slipper-flip-flop/j/m/q/-original-imahmd3zmvqcbqkh.jpeg?q=90' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Grey'],
    tags: ['Branded Footwear', 'Best Seller'],
    isFlashSale: false,
    stockLeft: 522,
    description: 'Lightweight and durable slip-on slippers with cushioned footbed and anti-slip sole for all-day comfort.',
    fabric: 'Synthetic Leather & Rubber Sole'
  },
  {
    id: 'sm-107',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Boys Full Sleeve Cotton Dress Shirt & Pant Set for Kids',
    brand: 'NUTTIEZZZ',
    category: 'kids',
    price: 900,
    originalPrice: 3999,
    discount: 77,
    rating: 3.8,
    reviewsCount: 118,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/9/m/d/3-4-years-nttz04-nuttiezzz-original-imahqtgarqz8yhyq.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/9/m/d/3-4-years-nttz04-nuttiezzz-original-imahqtgarqz8yhyq.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/a/2/l/3-4-years-nttz04-nuttiezzz-original-imahqtgarhxanj8c.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/p/q/0/2-3-years-nttz04-nuttiezzz-original-imahqtgazdwfa8c6.jpeg?q=90' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['checked'],
    tags: ['Best Seller'],
    isFlashSale: false,
    stockLeft: 5,
    description: 'Classic Kids Dress Shirt & Pant Set for Boys, perfect for formal occasions and school events. Made with soft, breathable cotton for all-day comfort.',
    fabric: 'Cotton'
  },
  {
    id: 'sm-108',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'STGarment Girls Above Knee Casual Dress',
    brand: 'NAMMABABY',
    category: 'kids',
    price: 227,
    originalPrice: 1999,
    discount: 83,
    rating: 4.2,
    reviewsCount: 32,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-dress/e/8/d/18-24-months-frock-mom-dad-stgarment-resized-original-imah9y4gpjpeb2ta.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-dress/e/8/d/18-24-months-frock-mom-dad-stgarment-resized-original-imah9y4gpjpeb2ta.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-dress/z/k/q/18-24-months-frock-mom-dad-stgarment-original-imah9y4gfsgnznyq.jpeg?q=90' },
      { label: 'Zoom View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-dress/b/n/g/18-24-months-frock-mom-dad-stgarment-original-imah9y4gfbgk3yzk.jpeg?q=90' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['White-Pink'],
    tags: ['Cheaper'],
    isFlashSale: false,
    stockLeft: 5,
    description: 'Adorable Girls Casual Dress with a playful design, perfect for everyday wear and special occasions. Made with soft, breathable fabric for comfort and style.',
    fabric: 'cotton'
  },
  {
    id: 'sm-109',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Chapainama fashion Women Brown Top',
    brand: 'urbanic',
    category: 'women',
    price: 279,
    originalPrice: 2199,
    discount: 87,
    rating: 4.1,
    reviewsCount: 587,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/z/n/6/m-1-singel-buti-01-chhapainama-fashion-original-imahz5bzjwczv852.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/h/u/n/s-1-singel-buti-01-chhapainama-fashion-original-imahz5bzky94epru.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/3/6/s/m-1-singel-buti-01-chhapainama-fashion-original-imahz5bzgnz7jcme.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/z/n/6/m-1-singel-buti-01-chhapainama-fashion-original-imahz5bzjwczv852.jpeg?q=90' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Rust'],
    tags: ['Best Seller'],
    isFlashSale: false,
    stockLeft: 32,
    description: 'Stylish and comfortable printed top for women, perfect for casual outings and everyday wear. Made with high-quality fabric for a flattering fit.',
    fabric: 'cotton'
  },
  {
    id: 'sm-110',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'House of Pataudi Kurta for Men',
    brand: 'urbanic',
    category: 'ethnic',
    price: 1371,
    originalPrice: 4499,
    discount: 70,
    rating: 3.5,
    reviewsCount: 11,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/v/j/v/s-hopmk451-house-of-pataudi-original-imahggvrdbd9ezaz.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/u/f/q/s-hopmk451-house-of-pataudi-original-imahggvrxbnjxbk7.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/5/r/o/s-hopmk451-house-of-pataudi-original-imahggvrezk36yyb.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/p/e/o/xxl-hopmk451-house-of-pataudi-original-imahggvr3qwafmcm.jpeg?q=90' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Black'],
    tags: ['Festive Wear'],
    isFlashSale: false,
    stockLeft: 32,
    description: 'Elegant and traditional embroidered kurta for men, perfect for festive occasions and cultural events. Made with soft viscose rayon for comfort and style.',
    fabric: 'cotton'
  },
  {
    id: 'sm-201',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Men Air Cushion Breathable Running Sports Shoes',
    brand: 'Reebok',
    category: 'footwear',
    price: 1231,
    originalPrice: 2799,
    discount: 56,
    rating: 4.3,
    reviewsCount: 540,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/r/5/7/-watermarked-original-imahjgs2fwzggxuv.jpeg?q=90',
    thumbs: [
      { label: 'Front/Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/r/b/q/-original-imahjgs2yyndwtht.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/r/5/7/-watermarked-original-imahjgs2fwzggxuv.jpeg?q=90' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['White'],
    tags: ['Trending', 'Sports'],
    isFlashSale: false,
    stockLeft: 7,
    description: 'Performance air cushion sole for shock absorption during high impact workouts and outdoor running.',
    fabric: 'Breathable Knit & Rubber Sole'
  },
  {
    id: 'sm-202',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Women Chunky Pastel Colorblocked Streetwear Sneakers',
    brand: 'Urbanic',
    category: 'footwear',
    price: 541,
    originalPrice: 999,
    discount: 46,
    rating: 4,
    reviewsCount: 496,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/c/k/t/7-cnv7030-40-vendoz-pink-white-original-imahfyfsptg2zsrz.jpeg?q=90',
    thumbs: [
      { label: 'Front/Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/u/6/5/7-cnv7030-40-vendoz-pink-white-original-imahfyfs636usqty.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/l/v/k/7-cnv7030-40-vendoz-pink-white-original-imahfyfsjjk6cuab.jpeg?q=90' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7'],
    colors: ['Pink-White'],
    tags: ['Trending'],
    isFlashSale: false,
    description: 'Trendy platform dad sneakers with multi-pastel contrast overlays and cushioned memory foam footbed.',
    fabric: 'Faux Leather & Rubber'
  },
  {
    id: 'sm-203',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Men Handcrafted Genuine Leather Formal Derby Shoes',
    brand: 'Allen Cooper',
    category: 'footwear',
    price: 1334,
    originalPrice: 5499,
    discount: 76,
    rating: 4.1,
    reviewsCount: 382,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/w/6/2/8-accs-5035-black-8-allen-cooper-black-original-imahg3cymbebbhhc.jpeg?q=90',
    thumbs: [
      { label: 'Front/Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/5/h/q/8-accs-5035-black-8-allen-cooper-black-original-imahg3cyukfzvmpy.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/1/i/7/8-accs-5035-black-8-allen-cooper-black-resized-original-imahg3cyrzfkzyqf.jpeg?q=90' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Cognac Brown', 'Black'],
    tags: ['Formal Wear'],
    isFlashSale: false,
    description: 'Executive polished genuine leather lace-up derby shoes with anti-skid TPR sole.',
    fabric: '100% Genuine Leather'
  },
  {
    id: 'sm-206',
    showInDealsOfDay: true,
    showInAllFashion: false,
    title: 'Men Rugged Vintage Classic Trucker Denim Jacket',
    brand: 'Roadster',
    category: 'men',
    price: 859,
    originalPrice: 2599,
    discount: 67,
    rating: 4.8,
    reviewsCount: 1159,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jacket/c/8/d/m-1-no-29790638-roadster-original-imahgcq6jhnrpaxd.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jacket/2/j/6/m-1-no-29790638-roadster-original-imahgcq6ff89z6xm.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jacket/j/g/f/m-1-no-29790638-roadster-original-imahgcq6evztyrvp.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jacket/w/e/w/xxl-1-no-29790638-roadster-original-imahjgsgan8zep4x.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black Wash'],
    tags: ['Trending'],
    isFlashSale: true,
    stockLeft: 10,
    description: 'Classic button-down denim jacket with chest flap pockets and heavy contrast stitching.',
    fabric: '100% Rigid Denim Cotton'
  },
  {
    id: 'sm-207',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Men Oversized Heavyweight Fleece Hoodie',
    brand: 'HRX',
    category: 'men',
    price: 733,
    originalPrice: 2199,
    discount: 67,
    rating: 4.1,
    reviewsCount: 592,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sweatshirt/p/l/i/m-hrxss07olive-hrx-by-hrithik-roshan-original-imahh3v3zjrqu7hg.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sweatshirt/h/6/n/m-hrxss07olive-hrx-by-hrithik-roshan-original-imahh3v3khzkh6vq.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sweatshirt/u/k/f/xxl-hrxss07olive-hrx-by-hrithik-roshan-original-imahh3v3gtgymstw.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sweatshirt/o/w/5/m-hrxss07olive-hrx-by-hrithik-roshan-original-imahh3v39rsrxrmh.jpeg?q=90' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Dark Green'],
    tags: ['Best Seller'],
    isFlashSale: true,
    description: 'Ultra-soft fleece lined pullover hooded sweatshirt with kangaroo pocket and ribbed cuffs.',
    fabric: '320 GSM Fleece Blend'
  },
  {
    id: 'sm-211',
    showInDealsOfDay: true,
    showInAllFashion: false,
    title: 'Women Floral Printed A-Line Tiered Maxi Dress',
    brand: 'Urbanic',
    category: 'women',
    price: 450,
    originalPrice: 999,
    discount: 55,
    rating: 3.7,
    reviewsCount: 340,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/gown/j/z/p/14-l-half-sleeve-stitched-gown-black-nikkutexttles-18-original-imahnfpeg8hzzzjb.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/gown/j/z/p/14-l-half-sleeve-stitched-gown-black-nikkutexttles-18-original-imahnfpeg8hzzzjb.jpeg?q=90' },
      { label: 'Back View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/gown/y/x/o/14-3xl-half-sleeve-stitched-gown-black-nikkutexttles-18-original-imahnfpejpzfurhg.jpeg?q=90' },
      { label: 'Side View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/gown/y/x/o/14-3xl-half-sleeve-stitched-gown-black-nikkutexttles-18-original-imahnfpejpzfurhg.jpeg?q=90' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black Floral'],
    tags: ['Best Seller'],
    isFlashSale: true,
    stockLeft: 9,
    description: 'Breezy bohemian floral maxi dress with ruffle puff sleeves and tiered skirt hem.',
    fabric: '100% Breathable Chiffon'
  },
];

const PRODUCT_CATEGORIES = ['men', 'women', 'kids', 'footwear', 'ethnic'];
const CUSTOM_PRODUCTS_STORAGE_KEY = 'stylemart_custom_products';

// Required fields: id, title, category, price, image. Optional fields control
// the product card, sizes, gallery, and homepage placement.
function normalizeProduct(product) {
  if (!product || typeof product !== 'object' || Array.isArray(product)) {
    throw new TypeError('Product must be an object.');
  }

  const id = String(product.id || '').trim();
  const title = String(product.title || '').trim();
  const brand = String(product.brand || 'StyleMart').trim();
  const category = String(product.category || '').trim().toLowerCase();
  const price = Number(product.price);
  const originalPrice = product.originalPrice === undefined ? price : Number(product.originalPrice);
  const image = String(product.image || '').trim();

  if (!/^[a-z0-9_-]+$/i.test(id)) {
    throw new TypeError('Product id is required and may contain only letters, numbers, hyphens, and underscores.');
  }
  if (!title || !brand) throw new TypeError('Product title and brand are required.');
  if (!PRODUCT_CATEGORIES.includes(category)) {
    throw new TypeError(`Product category must be one of: ${PRODUCT_CATEGORIES.join(', ')}.`);
  }
  if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(originalPrice) || originalPrice < price) {
    throw new TypeError('Product price must be positive and originalPrice must be at least price.');
  }
  if (!image) throw new TypeError('Product image URL is required.');

  const thumbs = Array.isArray(product.thumbs) && product.thumbs.length
    ? product.thumbs.map((thumb, index) => {
      const url = String(typeof thumb === 'string' ? thumb : thumb?.url || '').trim();
      const label = String(typeof thumb === 'object' && thumb ? thumb.label || `Image ${index + 1}` : `Image ${index + 1}`).trim();
      if (!url) throw new TypeError(`Product image ${index + 1} is missing its URL.`);
      return { label, url };
    })
    : [{ label: 'Product image', url: image }];
  const sizes = Array.isArray(product.sizes) && product.sizes.length
    ? product.sizes.map(size => String(size).trim()).filter(Boolean)
    : ['One Size'];
  const rating = product.rating === undefined ? 0 : Number(product.rating);
  const reviewsCount = product.reviewsCount === undefined ? 0 : Number(product.reviewsCount);

  if (!sizes.length) throw new TypeError('Provide at least one non-empty product size.');
  if (!Number.isFinite(rating) || rating < 0 || rating > 5) throw new TypeError('Product rating must be between 0 and 5.');
  if (!Number.isInteger(reviewsCount) || reviewsCount < 0) throw new TypeError('reviewsCount must be a non-negative integer.');

  return {
    id,
    title,
    brand,
    category,
    price,
    originalPrice,
    discount: originalPrice === 0 ? 0 : Math.round(((originalPrice - price) / originalPrice) * 100),
    rating,
    reviewsCount,
    image,
    thumbs,
    sizes,
    colors: Array.isArray(product.colors) ? product.colors.map(String) : [],
    tags: Array.isArray(product.tags) ? product.tags.map(String) : [],
    showInDealsOfDay: Boolean(product.showInDealsOfDay),
    showInAllFashion: Boolean(product.showInAllFashion),
    description: String(product.description || ''),
    fabric: String(product.fabric || ''),
    stockLeft: Number.isInteger(product.stockLeft) && product.stockLeft >= 0 ? product.stockLeft : undefined,
    isCustomProduct: true
  };
}

function loadCustomProducts() {
  const savedProducts = localStorage.getItem(CUSTOM_PRODUCTS_STORAGE_KEY);
  if (!savedProducts) return;

  let products;
  try {
    products = JSON.parse(savedProducts);
  } catch (error) {
    console.error('Could not load saved custom products because their stored JSON is invalid.', error);
    return;
  }

  if (!Array.isArray(products)) {
    console.error('Could not load saved custom products: the saved product data must be an array.');
    return;
  }

  products.forEach(product => {
    try {
      const normalizedProduct = normalizeProduct(product);
      if (PRODUCTS_DATA.some(existing => existing.id === normalizedProduct.id)) {
        console.error(`Skipped saved product "${normalizedProduct.id}" because that product ID already exists.`);
        return;
      }
      PRODUCTS_DATA.push(normalizedProduct);
    } catch (error) {
      console.error('Skipped an invalid saved custom product.', error);
    }
  });
}

function addProduct(product) {
  const normalizedProduct = normalizeProduct(product);
  if (PRODUCTS_DATA.some(existing => existing.id === normalizedProduct.id)) {
    throw new Error(`A product with id "${normalizedProduct.id}" already exists.`);
  }

  const customProducts = PRODUCTS_DATA.filter(item => item.isCustomProduct);
  const savedProducts = [...customProducts, normalizedProduct];
  localStorage.setItem(CUSTOM_PRODUCTS_STORAGE_KEY, JSON.stringify(savedProducts));
  PRODUCTS_DATA.push(normalizedProduct);

  renderFlashSaleProducts();
  renderProductsCatalog();
  return normalizedProduct;
}

loadCustomProducts();

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// --------------------------------------------------------------------------
const DELIVERY_LOCATION_STORAGE_KEY = 'stylemart_delivery_location';

let state = {
  cart: JSON.parse(localStorage.getItem('stylemart_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('stylemart_wishlist')) || [],
  userProfile: JSON.parse(localStorage.getItem('stylemart_user')) || null,
  deliveryLocation: loadSavedDeliveryLocation(),
  pendingCheckout: false,
  selectedCategory: getInitialCategory(),
  maxPrice: 5000,
  selectedBrands: [],
  selectedSizes: [],
  minRating: 0,
  searchQuery: new URLSearchParams(window.location.search).get('search') || '',
  sortBy: 'popular',
  appliedCoupon: null,
  activeSlide: 0
};

let profileFormMode = 'login';
let editingAddressIndex = -1;
let profileFormLocation = null;

function normalizeUserProfile(profile) {
  if (!profile) return null;
  const normalized = { ...profile };
  normalized.addresses = Array.isArray(profile.addresses) && profile.addresses.length
    ? profile.addresses.map(address => ({ ...address }))
    : [{
      address: profile.address || '',
      city: profile.city || '',
      pincode: profile.pincode || '',
      ...(profile.location ? { location: { ...profile.location } } : {})
    }];
  const primaryAddress = normalized.addresses[0];
  normalized.address = primaryAddress.address || '';
  normalized.city = primaryAddress.city || '';
  normalized.pincode = primaryAddress.pincode || '';
  if (primaryAddress.location) normalized.location = { ...primaryAddress.location };
  return normalized;
}

state.userProfile = normalizeUserProfile(state.userProfile);

function getInitialCategory() {
  const category = new URLSearchParams(window.location.search).get('category');
  const supportedCategories = ['all', 'women', 'men', 'ethnic', 'budget', 'kids', 'footwear'];
  return supportedCategories.includes(category) ? category : 'all';
}

function updateActiveNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    const isHomeLink = link.dataset.home === 'true';
    const isCategoryLink = link.dataset.category !== undefined;
    link.classList.toggle('active',
      (isHomeLink && !IS_CATEGORY_PAGE)
      || (IS_CATEGORY_PAGE && isCategoryLink && link.dataset.category === state.selectedCategory));
  });
}

const CATEGORY_HEADINGS = {
  all: 'All Fashion Products',
  women: "Women's Fashion Collection",
  men: "Men's Apparel & Streetwear",
  ethnic: 'Festive Ethnic Wear & Sarees',
  budget: 'Super Savers Budget Store (Under ₹499)',
  kids: 'Kids & Toddlers Collection',
  footwear: 'Footwear & Sneakers'
};
const IS_CATEGORY_PAGE = window.location.pathname.toLowerCase().endsWith('/category.html')
  || window.location.pathname.toLowerCase() === 'category.html';

let pageScrollLocked = false;
let pageScrollPosition = 0;

function syncPageScrollLock() {
  const shouldLock = Boolean(document.querySelector(
    '.modal-overlay.active, .drawer-overlay.active, .side-drawer.active, .nav-menu.active, .filter-sidebar.active'
  ));

  if (shouldLock && !pageScrollLocked) {
    pageScrollPosition = window.scrollY;
    document.body.classList.add('page-scroll-locked');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${pageScrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    pageScrollLocked = true;
  } else if (!shouldLock && pageScrollLocked) {
    document.body.classList.remove('page-scroll-locked');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    pageScrollLocked = false;
    window.scrollTo(0, pageScrollPosition);
  }
}

function initPageScrollLock() {
  const observer = new MutationObserver(syncPageScrollLock);
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true
  });
  syncPageScrollLock();
}

function initProfileInputValidation() {
  const nameInput = document.getElementById('userName');
  const mobileInput = document.getElementById('mobileOrEmail');
  const cityInput = document.getElementById('userCity');
  const pincodeInput = document.getElementById('userPincodeInput');

  nameInput?.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^\p{L}\s]/gu, '');
    nameInput.setCustomValidity('');
  });

  cityInput?.addEventListener('input', () => {
    cityInput.value = cityInput.value.replace(/[^\p{L}\s]/gu, '');
    cityInput.setCustomValidity('');
  });

  mobileInput?.addEventListener('input', () => {
    const digits = mobileInput.value.replace(/\D/g, '');
    const firstAllowedDigit = digits.search(/[6-9]/);
    mobileInput.value = firstAllowedDigit === -1 ? '' : digits.slice(firstAllowedDigit, firstAllowedDigit + 10);
    mobileInput.setCustomValidity('');
  });

  pincodeInput?.addEventListener('input', () => {
    pincodeInput.value = pincodeInput.value.replace(/\D/g, '').slice(0, 6);
    pincodeInput.setCustomValidity('');
  });

  const addressInput = document.getElementById('userAddress');
  addressInput?.addEventListener('input', () => {
    addressInput.setCustomValidity('');
  });
}

const COUPONS = {
  'STYLE200': { code: 'STYLE200', type: 'flat', value: 200, minOrder: 500 },
  'MEESHO50': { code: 'MEESHO50', type: 'percentage', value: 15, maxDiscount: 150, minOrder: 300 }
};

function loadSavedDeliveryLocation() {
  const savedLocation = localStorage.getItem(DELIVERY_LOCATION_STORAGE_KEY);
  if (!savedLocation) return null;

  try {
    const location = JSON.parse(savedLocation);
    if (!Number.isFinite(location?.latitude) || !Number.isFinite(location?.longitude)) {
      throw new TypeError('Saved delivery location must contain numeric coordinates.');
    }
    return location;
  } catch (error) {
    console.error('Could not load the saved delivery location.', error);
    return null;
  }
}

function setDeliveryLocationStatus(message, status) {
  const statusElement = document.getElementById('deliveryLocationStatus');
  if (!statusElement) return;
  statusElement.textContent = message;
  statusElement.classList.toggle('success', status === 'success');
  statusElement.classList.toggle('unavailable', status === 'unavailable');
}

function restoreDeliveryLocationStatus() {
  if (!state.deliveryLocation) return;
  const accuracy = Number.isFinite(state.deliveryLocation.accuracy)
    ? ` (accuracy about ${Math.round(state.deliveryLocation.accuracy)} m)`
    : '';
  setDeliveryLocationStatus(`Delivery location detected${accuracy}. Click the button to refresh it.`, 'success');
}

function setLocationBoundFields(location) {
  const addressInput = document.getElementById('userAddress');
  const cityInput = document.getElementById('userCity');
  const pincodeInput = document.getElementById('userPincodeInput');
  if (!addressInput || !cityInput || !pincodeInput) return;

  profileFormLocation = location;
  const gpsAddress = `Current location (${location.latitude.toFixed(5)}, ${location.longitude.toFixed(5)})`;
  addressInput.value = gpsAddress;
  cityInput.value = 'GPS location';
  pincodeInput.value = '';
  [addressInput, cityInput, pincodeInput].forEach(input => {
    input.disabled = Boolean(location);
    input.required = !location;
    input.setCustomValidity('');
  });
}

function captureDeliveryLocation() {
  const button = document.querySelector('.delivery-location-controls button');
  if (!navigator.geolocation) {
    setDeliveryLocationStatus('Location detection is not supported by this browser.', 'unavailable');
    return;
  }
  if (!window.isSecureContext) {
    setDeliveryLocationStatus('Location detection requires a secure connection (HTTPS) or localhost.', 'unavailable');
    return;
  }

  if (button) {
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
  }
  setDeliveryLocationStatus('Requesting your location. Allow location access in your browser when prompted.', '');

  navigator.geolocation.getCurrentPosition(position => {
    const deliveryLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy,
      capturedAt: Date.now()
    };
    state.deliveryLocation = deliveryLocation;
    setLocationBoundFields(deliveryLocation);

    try {
      localStorage.setItem(DELIVERY_LOCATION_STORAGE_KEY, JSON.stringify(deliveryLocation));
      restoreDeliveryLocationStatus();
    } catch (error) {
      console.error('Location was detected but could not be saved in this browser.', error);
      setDeliveryLocationStatus('Location detected, but this browser could not save it.', 'success');
    }

    if (button) {
      button.disabled = false;
      button.removeAttribute('aria-busy');
    }
  }, error => {
    const messages = {
      1: 'Location access was denied. Allow location access for this site in your browser settings, then try again.',
      2: 'Your device could not determine a location. Check that location services are enabled, then try again.',
      3: 'Location detection timed out. Check your connection and try again.'
    };
    setDeliveryLocationStatus(messages[error.code] || 'Location detection failed. Check your browser settings and try again.', 'unavailable');
    if (button) {
      button.disabled = false;
      button.removeAttribute('aria-busy');
    }
  }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 });
}

// --------------------------------------------------------------------------
// 3. DOM READY INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initCountdownTimers();
  const catalogHeading = document.getElementById('catalogHeading');
  if (catalogHeading) catalogHeading.textContent = CATEGORY_HEADINGS[state.selectedCategory];
  const categoryPageTitle = document.getElementById('categoryPageTitle');
  if (categoryPageTitle) categoryPageTitle.textContent = CATEGORY_HEADINGS[state.selectedCategory];
  const categoryCatalogHeading = document.getElementById('categoryCatalogHeading');
  if (categoryCatalogHeading) categoryCatalogHeading.textContent = CATEGORY_HEADINGS[state.selectedCategory];
  if (state.selectedCategory !== 'all') {
    document.title = `${CATEGORY_HEADINGS[state.selectedCategory]} | StyleMart`;
  }
  const searchInput = document.getElementById('searchInput');
  if (searchInput && state.searchQuery) searchInput.value = state.searchQuery;
  const clearSearchButton = document.getElementById('clearSearchBtn');
  if (clearSearchButton && state.searchQuery) clearSearchButton.style.display = 'block';
  updateActiveNavigation();
  initProfileInputValidation();
  restoreDeliveryLocationStatus();
  updateBadgesUI();
  updateUserProfileUI();
  renderFlashSaleProducts();
  renderProductsCatalog();
  initSearchAutocomplete();
  initPageScrollLock();
});

function syncLocalStorage() {
  localStorage.setItem('stylemart_cart', JSON.stringify(state.cart));
  localStorage.setItem('stylemart_wishlist', JSON.stringify(state.wishlist));
  if (state.userProfile) {
    localStorage.setItem('stylemart_user', JSON.stringify(state.userProfile));
  }
  updateBadgesUI();
  updateUserProfileUI();
}

function updateUserProfileUI() {
  const profileButton = document.getElementById('userProfileBtn');
  if (profileButton) {
    profileButton.setAttribute('aria-label', state.userProfile
      ? `Profile for ${state.userProfile.name}`
      : 'Login to your account');
    profileButton.title = state.userProfile ? `Profile: ${state.userProfile.name}` : 'Login';
  }
}

// --------------------------------------------------------------------------
// 4. HERO SLIDER LOGIC
// --------------------------------------------------------------------------
let sliderInterval;

function initHeroSlider() {
  const slides = document.querySelectorAll('#heroSliderTrack .slide');
  const dots = document.querySelectorAll('#sliderDots .dot');
  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    state.activeSlide = index;
  }

  document.getElementById('nextSlideBtn')?.addEventListener('click', () => {
    let nextIndex = (state.activeSlide + 1) % slides.length;
    showSlide(nextIndex);
  });

  document.getElementById('prevSlideBtn')?.addEventListener('click', () => {
    let prevIndex = (state.activeSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  });

  sliderInterval = setInterval(() => {
    let nextIndex = (state.activeSlide + 1) % slides.length;
    showSlide(nextIndex);
  }, 5000);
}

function goToSlide(index) {
  state.activeSlide = index;
  const slides = document.querySelectorAll('#heroSliderTrack .slide');
  const dots = document.querySelectorAll('#sliderDots .dot');
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

// --------------------------------------------------------------------------
// 5. COUNTDOWN TIMERS
// --------------------------------------------------------------------------
function initCountdownTimers() {
  let secondsRemaining = 4 * 3600 + 28 * 60 + 15;

  setInterval(() => {
    if (secondsRemaining <= 0) return;
    secondsRemaining--;

    const h = Math.floor(secondsRemaining / 3600);
    const m = Math.floor((secondsRemaining % 3600) / 60);
    const s = secondsRemaining % 60;

    const formattedTime = `${String(h).padStart(2, '0')}h : ${String(m).padStart(2, '0')}m : ${String(s).padStart(2, '0')}s`;
    
    const headerTimer = document.getElementById('headerCountdown');
    if (headerTimer) headerTimer.textContent = formattedTime;

    const flashHours = document.getElementById('flashHours');
    const flashMins = document.getElementById('flashMins');
    const flashSecs = document.getElementById('flashSecs');
    if (flashHours) {
      flashHours.textContent = String(h).padStart(2, '0');
      flashMins.textContent = String(m).padStart(2, '0');
      flashSecs.textContent = String(s).padStart(2, '0');
    }
  }, 1000);
}

// --------------------------------------------------------------------------
// 6. FLASH SALE & CATALOG RENDER
// --------------------------------------------------------------------------
function renderFlashSaleProducts() {
  const container = document.getElementById('flashProductsGrid');
  if (!container) return;
  const flashItems = PRODUCTS_DATA.filter(p => p.showInDealsOfDay);
  container.innerHTML = flashItems.map(p => createProductCardHTML(p, true)).join('');
}

function getFilteredProducts() {
  return PRODUCTS_DATA.filter(p => {
    if (!IS_CATEGORY_PAGE && state.selectedCategory === 'all' && !p.showInAllFashion) return false;
    if (state.selectedCategory === 'budget') {
      if (p.price > 499) return false;
    } else if (state.selectedCategory !== 'all' && p.category !== state.selectedCategory) {
      return false;
    }
    if (p.price > state.maxPrice) return false;
    if (state.selectedBrands.length > 0 && !state.selectedBrands.includes(p.brand)) return false;
    if (state.selectedSizes.length > 0 && !p.sizes.some(sz => state.selectedSizes.includes(sz))) return false;
    if (p.rating < state.minRating) return false;

    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchDesc = p.description ? p.description.toLowerCase().includes(q) : false;
      const matchFabric = p.fabric ? p.fabric.toLowerCase().includes(q) : false;
      const matchTags = p.tags ? p.tags.some(t => t.toLowerCase().includes(q)) : false;
      const matchColors = p.colors ? p.colors.some(c => c.toLowerCase().includes(q)) : false;

      if (!matchTitle && !matchBrand && !matchCategory && !matchDesc && !matchFabric && !matchTags && !matchColors) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    switch (state.sortBy) {
      case 'discount': return b.discount - a.discount;
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return b.reviewsCount - a.reviewsCount;
    }
  });
}

function renderProductsCatalog() {
  const container = document.getElementById('productsGrid');
  const emptyState = document.getElementById('noProductsFound');
  const countLabel = document.getElementById('catalogProductCount');
  if (!container) return;

  const filteredList = getFilteredProducts();
  const categoryProducts = state.selectedCategory === 'budget'
    ? PRODUCTS_DATA.filter(p => p.price <= 499)
    : state.selectedCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter(p => p.category === state.selectedCategory);
  
  if (countLabel) {
    if (state.searchQuery.trim() !== '') {
      countLabel.textContent = `Found ${filteredList.length} items for "${state.searchQuery}"`;
    } else if (IS_CATEGORY_PAGE && state.selectedCategory !== 'all') {
      countLabel.textContent = `Showing ${filteredList.length} of ${categoryProducts.length} items in this collection`;
    } else {
      countLabel.textContent = `Showing ${filteredList.length} of ${IS_CATEGORY_PAGE ? categoryProducts.length : PRODUCTS_DATA.filter(p => p.showInAllFashion).length} featured items`;
    }
  }

  if (filteredList.length === 0) {
    container.innerHTML = '';
    if (emptyState) {
      emptyState.style.display = 'block';
      if (state.selectedCategory === 'kids' && !state.searchQuery.trim()) {
        emptyState.innerHTML = `
          <div class="empty-icon">🧸</div>
          <h3>Kids collection coming soon</h3>
          <p>We're working on a fun new collection. Explore styles for everyone in the meantime.</p>
          <a class="btn btn-primary" href="index.html">Explore all styles</a>
        `;
      }
    }
  } else {
    if (emptyState) emptyState.style.display = 'none';
    container.innerHTML = filteredList.map(p => createProductCardHTML(p, false)).join('');
  }

  updateActiveFilterChips();
}

function createProductCardHTML(product, isFlash = false) {
  const isWishlisted = state.wishlist.includes(product.id);
  const thumbs = (product.thumbs && product.thumbs.length > 0) ? product.thumbs : [
    { label: 'Front View', url: product.image },
    { label: 'Side View', url: product.image },
    { label: 'Fabric Detail', url: product.image }
  ];
  const imageList = thumbs.map(thumb => thumb.url).filter(Boolean);
  const initialImg = imageList[0] || product.image;
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-img-wrap" onclick="openProductModal('${product.id}')">
        <img id="card-img-${product.id}" src="${initialImg}" alt="${product.title}" loading="lazy">
        
        <div class="card-badge-container">
          <span class="card-badge discount">${product.discount}% OFF</span>
          ${product.tags && product.tags.includes('Trending') ? '<span class="card-badge trending">TRENDING</span>' : ''}
        </div>

        <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}"
                onclick="event.stopPropagation(); toggleWishlist('${product.id}')" title="Save to Wishlist">
          ♥
        </button>

        ${imageList.length > 1 ? `
          <div class="product-image-controls" onclick="event.stopPropagation();">
            <button type="button" class="product-image-arrow previous" onclick="event.stopPropagation(); changeCardImage('${product.id}', -1)" aria-label="Previous product image">&lsaquo;</button>
            <button type="button" class="product-image-arrow next" onclick="event.stopPropagation(); changeCardImage('${product.id}', 1)" aria-label="Next product image">&rsaquo;</button>
          </div>
        ` : ''}

        <div class="quick-view-overlay">
          <button class="btn btn-outline" onclick="event.stopPropagation(); openProductModal('${product.id}')">
            Quick View
          </button>
          <button class="btn btn-primary" onclick="event.stopPropagation(); quickAddToCart('${product.id}')">
            + Add
          </button>
        </div>
      </div>

      <div class="product-card-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.title}</h3>
        
        <div class="rating-badge">
          ⭐ ${product.rating} (${product.reviewsCount})
        </div>

        <div class="price-row">
          <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="discount-percentage">${product.discount}% OFF</span>
        </div>
      </div>
    </div>
  `;
}

function changeCardImage(productId, direction) {
  const product = PRODUCTS_DATA.find(item => item.id === productId);
  const image = document.getElementById(`card-img-${productId}`);
  if (!product || !image) return;
  const imageList = (product.thumbs || []).map(thumb => thumb.url).filter(Boolean);
  if (imageList.length < 2) return;

  const currentIndex = Number(image.dataset.imageIndex || 0);
  const nextIndex = (currentIndex + direction + imageList.length) % imageList.length;
  image.dataset.imageIndex = String(nextIndex);
  image.src = imageList[nextIndex];
}

// --------------------------------------------------------------------------
// 7. FILTER HANDLERS
// --------------------------------------------------------------------------
function filterByCategory(category) {
  if (!IS_CATEGORY_PAGE && category !== 'all') {
    window.location.href = `category.html?category=${encodeURIComponent(category)}`;
    return;
  }

  state.selectedCategory = category;
  document.querySelectorAll('input[name="categoryFilter"]').forEach(r => r.checked = (r.value === category));
  updateActiveNavigation();

  const headingElem = document.getElementById('catalogHeading');
  if (headingElem) headingElem.textContent = CATEGORY_HEADINGS[category] || CATEGORY_HEADINGS.all;

  scrollToCatalog();
}

function setCategoryFilter(category) {
  state.selectedCategory = category;
  renderProductsCatalog();
}

function handlePriceRangeChange(val) {
  state.maxPrice = parseInt(val);
  document.getElementById('priceRangeValue').textContent = `₹${parseInt(val).toLocaleString('en-IN')}`;
  renderProductsCatalog();
}

function handleBrandFilterChange() {
  const brandChecks = document.querySelectorAll('.brand-check:checked');
  state.selectedBrands = Array.from(brandChecks).map(cb => cb.value);
  renderProductsCatalog();
}

function toggleSizeFilter(size, btnElem) {
  btnElem.classList.toggle('active');
  if (state.selectedSizes.includes(size)) {
    state.selectedSizes = state.selectedSizes.filter(s => s !== size);
  } else {
    state.selectedSizes.push(size);
  }
  renderProductsCatalog();
}

function setRatingFilter(rating) {
  state.minRating = parseFloat(rating);
  renderProductsCatalog();
}

function handleSortChange(sortVal) {
  state.sortBy = sortVal;
  renderProductsCatalog();
}

function clearAllFilters() {
  state.selectedCategory = 'all';
  state.maxPrice = 5000;
  state.selectedBrands = [];
  state.selectedSizes = [];
  state.minRating = 0;
  state.searchQuery = '';
  state.sortBy = 'popular';
  document.querySelectorAll('input[name="categoryFilter"]')[0].checked = true;
  document.getElementById('priceRangeInput').value = 5000;
  document.getElementById('priceRangeValue').textContent = '₹5,000';
  document.querySelectorAll('.brand-check').forEach(cb => cb.checked = false);
  document.querySelectorAll('.size-chip-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('input[name="ratingFilter"]')[0].checked = true;
  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').style.display = 'none';
  renderProductsCatalog();
  showToast('Filters reset', 'info');
}

function scrollToCatalog() {
  if (!IS_CATEGORY_PAGE) {
    const search = state.searchQuery.trim();
    const query = search ? `&search=${encodeURIComponent(search)}` : '';
    window.location.href = `category.html?category=all${query}`;
    return;
  }
  document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' });
  renderProductsCatalog();
}

function scrollToStudio() {
  document.getElementById('customStudioSection')?.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileFilters() {
  document.getElementById('filterSidebar')?.classList.toggle('active');
}

function updateActiveFilterChips() {
  const chipsContainer = document.getElementById('activeFilterChips');
  const bar = document.getElementById('activeFiltersBar');
  const activeBadge = document.getElementById('filterActiveBadge');
  if (!chipsContainer || !bar) return;

  let chips = [];
  let count = 0;

  if (state.searchQuery.trim() !== '') {
    chips.push(`Search: "${state.searchQuery}" <span onclick="clearSearchQuery()" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  }
  if (state.selectedCategory !== 'all') {
    chips.push(`Category: ${state.selectedCategory} <span onclick="setCategoryFilter('all')" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  }
  if (state.maxPrice < 5000) {
    chips.push(`Max ₹${state.maxPrice} <span onclick="handlePriceRangeChange(5000)" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  }
  state.selectedBrands.forEach(b => {
    chips.push(`Brand: ${b} <span onclick="removeBrandChip('${b}')" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  });
  state.selectedSizes.forEach(s => {
    chips.push(`Size: ${s} <span onclick="removeSizeChip('${s}')" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  });

  if (chips.length > 0) {
    bar.style.display = 'flex';
    chipsContainer.innerHTML = chips.map(c => `<span class="filter-chip">${c}</span>`).join('');
    if (activeBadge) {
      activeBadge.style.display = 'inline-flex';
      activeBadge.textContent = count;
    }
  } else {
    bar.style.display = 'none';
    if (activeBadge) activeBadge.style.display = 'none';
  }
}

function removeBrandChip(brand) {
  const cb = Array.from(document.querySelectorAll('.brand-check')).find(c => c.value === brand);
  if (cb) cb.checked = false;
  handleBrandFilterChange();
}

function removeSizeChip(size) {
  const btn = Array.from(document.querySelectorAll('.size-chip-btn')).find(b => b.dataset.size === size);
  if (btn) toggleSizeFilter(size, btn);
}

// --------------------------------------------------------------------------
// 8. LIVE SEARCH AUTOCOMPLETE & FILTER ENGINE
// --------------------------------------------------------------------------
function initSearchAutocomplete() {
  const input = document.getElementById('searchInput');
  const catalogInput = document.getElementById('catalogSearchInput');
  const suggestionsBox = document.getElementById('searchSuggestions');
  const liveResultsContainer = document.getElementById('liveSearchResults');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (!input) return;

  input.addEventListener('focus', () => suggestionsBox?.classList.add('active'));

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) suggestionsBox?.classList.remove('active');
  });

  input.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    state.searchQuery = val;
    if (clearBtn) clearBtn.style.display = val ? 'block' : 'none';
    if (catalogInput) catalogInput.value = val;

    if (val.length > 0) {
      const matches = PRODUCTS_DATA.filter(p => 
        p.title.toLowerCase().includes(val.toLowerCase()) || 
        p.brand.toLowerCase().includes(val.toLowerCase()) ||
        p.category.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 4);

      if (matches.length > 0 && liveResultsContainer) {
        liveResultsContainer.innerHTML = matches.map(m => `
          <div class="live-search-item" onclick="openProductModal('${m.id}')">
            <img src="${m.image}" class="live-search-thumb" alt="${m.title}">
            <div class="live-search-info">
              <h5>${m.title}</h5>
              <p>₹${m.price.toLocaleString('en-IN')}</p>
            </div>
          </div>
        `).join('');
      } else if (liveResultsContainer) {
        liveResultsContainer.innerHTML = '<p style="font-size:0.8rem; color:var(--text-muted); padding:8px;">No matching items found</p>';
      }
    } else if (liveResultsContainer) {
      liveResultsContainer.innerHTML = '';
    }

    renderProductsCatalog();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      suggestionsBox?.classList.remove('active');
      scrollToCatalog();
    }
  });

  clearBtn?.addEventListener('click', () => {
    clearSearchQuery();
  });
}

function handleCatalogSearchInput(val) {
  state.searchQuery = val.trim();
  const mainInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (mainInput) mainInput.value = val;
  if (clearBtn) clearBtn.style.display = val ? 'block' : 'none';

  renderProductsCatalog();
}

function clearSearchQuery() {
  state.searchQuery = '';
  const mainInput = document.getElementById('searchInput');
  const catalogInput = document.getElementById('catalogSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const liveResultsContainer = document.getElementById('liveSearchResults');

  if (mainInput) mainInput.value = '';
  if (catalogInput) catalogInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  if (liveResultsContainer) liveResultsContainer.innerHTML = '';

  renderProductsCatalog();
}

function applySearchTag(tag) {
  const input = document.getElementById('searchInput');
  const catalogInput = document.getElementById('catalogSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (input) input.value = tag;
  if (catalogInput) catalogInput.value = tag;
  state.searchQuery = tag;
  if (clearBtn) clearBtn.style.display = 'block';

  document.getElementById('searchSuggestions')?.classList.remove('active');
  scrollToCatalog();
}
// --------------------------------------------------------------------------
// 10. WISHLIST & CART MANAGEMENT
// --------------------------------------------------------------------------
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast('Removed from Wishlist', 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product ? product.brand : 'Item'}" to Wishlist! ♥`, 'success');
  }

  syncLocalStorage();
  renderProductsCatalog();
  renderWishlistDrawer();
  document.querySelectorAll(`.wishlist-toggle-btn[data-product-id="${productId}"]`).forEach(button => {
    button.classList.toggle('active', state.wishlist.includes(productId));
  });
}

function toggleWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistDrawerOverlay');
  const isActive = drawer.classList.contains('active');

  if (!isActive) renderWishlistDrawer();
  drawer.classList.toggle('active');
  overlay.classList.toggle('active');
}

function renderWishlistDrawer() {
  const body = document.getElementById('wishlistDrawerBody');
  const countLabel = document.getElementById('wishlistDrawerCount');
  if (!body) return;

  const wishlistedProducts = PRODUCTS_DATA.filter(p => state.wishlist.includes(p.id));
  countLabel.textContent = wishlistedProducts.length;

  if (wishlistedProducts.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding:40px 20px;">
        <div style="font-size:3rem;">♥</div>
        <h4 style="margin-top:10px; color:var(--secondary);">Your Wishlist is Empty</h4>
        <button class="btn btn-primary" style="margin-top:14px;" onclick="toggleWishlistDrawer()">Explore Catalog</button>
      </div>
    `;
    return;
  }

  body.innerHTML = wishlistedProducts.map(p => `
    <div class="cart-item-card">
      <img src="${p.image}" class="cart-item-img" alt="${p.title}">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${p.title}</h4>
        <div class="price-row" style="margin-bottom:8px;">
          <span class="current-price" style="font-size:0.95rem;">₹${p.price.toLocaleString('en-IN')}</span>
        </div>
        <button class="btn btn-primary btn-block" style="padding:6px 10px; font-size:0.78rem;" onclick="quickAddToCart('${p.id}'); toggleWishlist('${p.id}');">
          Move to Cart
        </button>
      </div>
      <button class="remove-cart-item" onclick="toggleWishlist('${p.id}')">&times;</button>
    </div>
  `).join('');
}

function changeCartItemSize(index, newSize) {
  if (!state.cart[index]) return;
  state.cart[index].selectedSize = newSize;
  syncLocalStorage();
  renderCartDrawer();
  showToast(`Updated item size to ${newSize}`, 'info');
}

function quickAddToCart(productId, sizeOverride = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const targetSize = sizeOverride || product.sizes[0] || 'M';
  const existingItem = state.cart.find(item => item.id === productId && item.selectedSize === targetSize);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    state.cart.push({ id: productId, selectedSize: targetSize, qty: 1 });
  }

  syncLocalStorage();
  showToast(`Added (${targetSize}) to Cart! 🛒`, 'success');
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  const isActive = drawer.classList.contains('active');

  if (!isActive) renderCartDrawer();
  drawer.classList.toggle('active');
  overlay.classList.toggle('active');
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('cartDrawerOverlay')?.classList.add('active');
}

function renderCartDrawer() {
  const body = document.getElementById('cartDrawerBody');
  const footer = document.getElementById('cartDrawerFooter');
  const countLabel = document.getElementById('cartDrawerCount');
  if (!body) return;

  const totalItemsCount = state.cart.reduce((acc, i) => acc + i.qty, 0);
  countLabel.textContent = totalItemsCount;

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding:50px 20px;">
        <div style="font-size:3.5rem; margin-bottom:8px;">🛒</div>
        <h4 style="font-size:1.1rem; color:var(--secondary); font-weight:700;">Your Shopping Cart is Empty</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">Add items from our collection or design your own clothing!</p>
        <button class="btn btn-primary" style="margin-top:18px;" onclick="toggleCartDrawer(); scrollToCatalog();">Start Shopping</button>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    calculateCartBill();
    return;
  }

  if (footer) footer.style.display = 'block';

  body.innerHTML = state.cart.map((item, index) => {
    const product = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!product) return '';

    const itemSellingPrice = product.price;
    const itemOriginalPrice = product.originalPrice || product.price;
    const itemSellingTotal = itemSellingPrice * item.qty;
    const itemOriginalTotal = itemOriginalPrice * item.qty;

    return `
      <div class="cart-item-card" data-id="${product.id}" data-index="${index}">
        <img src="${product.image}" class="cart-item-img" alt="${product.title}">
        <div class="cart-item-info">
          <span class="cart-item-brand">${product.brand}</span>
          <h4 class="cart-item-title">${product.title}</h4>
          
          <div class="cart-item-meta-row">
            <div class="cart-meta-pill">
              <label>Size:</label>
              <select class="cart-size-select" onchange="changeCartItemSize(${index}, this.value)">
                ${product.sizes.map(s => `<option value="${s}" ${s === item.selectedSize ? 'selected' : ''}>${s}</option>`).join('')}
              </select>
            </div>
            ${product.rating ? `<span class="cart-rating-pill">⭐ ${product.rating} (${product.reviewsCount})</span>` : ''}
          </div>

          <!-- Matching User Uploaded Image Pricing Layout -->
          <div class="cart-price-row">
            <span class="cart-current-price">₹${itemSellingTotal.toLocaleString('en-IN')}</span>
            ${itemOriginalTotal > itemSellingTotal ? `<span class="cart-original-price">₹${itemOriginalTotal.toLocaleString('en-IN')}</span>` : ''}
          </div>

          <div class="cart-item-actions">
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Decrease quantity">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
        <button class="remove-cart-item" onclick="removeCartItem(${index})" title="Remove item">&times;</button>
      </div>
    `;
  }).join('');

  calculateCartBill();
}

function updateCartQty(index, change) {
  if (!state.cart[index]) return;
  state.cart[index].qty += change;
  if (state.cart[index].qty <= 0) state.cart.splice(index, 1);
  syncLocalStorage();
  renderCartDrawer();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  syncLocalStorage();
  renderCartDrawer();
  showToast('Item removed from cart', 'info');
}

function calculateCartBill() {
  let totalMRP = 0;
  let finalPrice = 0;

  state.cart.forEach(item => {
    if (item.isCustom) {
      const orig = item.originalPrice || (item.price + 400);
      totalMRP += orig * item.qty;
      finalPrice += item.price * item.qty;
    } else {
      const p = PRODUCTS_DATA.find(x => x.id === item.id);
      if (p) {
        totalMRP += p.originalPrice * item.qty;
        finalPrice += p.price * item.qty;
      }
    }
  });

  const mrpDiscount = totalMRP - finalPrice;
  let couponDiscount = 0;

  // Validate coupon requirement against current cart subtotal
  const msgElem = document.getElementById('appliedCouponMsg');
  const couponInputGroup = document.getElementById('couponInputGroup');
  const availableCouponsBox = document.getElementById('availableCouponsBox');

  if (state.appliedCoupon) {
    const c = state.appliedCoupon;
    if (c.minOrder && finalPrice < c.minOrder) {
      state.appliedCoupon = null;
      if (msgElem) {
        msgElem.style.display = 'block';
        msgElem.className = 'applied-coupon-msg text-danger';
        msgElem.textContent = `Coupon ${c.code} removed (Requires min order of ₹${c.minOrder})`;
      }
      if (couponInputGroup) couponInputGroup.style.display = 'flex';
      if (availableCouponsBox) availableCouponsBox.style.display = 'block';
    } else {
      if (c.type === 'flat') couponDiscount = c.value;
      else if (c.type === 'percentage') couponDiscount = Math.min(c.maxDiscount, Math.round((finalPrice * c.value) / 100));

      if (msgElem) {
        msgElem.style.display = 'block';
        msgElem.className = 'applied-coupon-box';
        msgElem.innerHTML = `
          <div class="applied-coupon-info">
            <span class="coupon-badge-icon">🏷️</span>
            <div>
              <div class="coupon-code-title"><strong>${c.code}</strong> Applied</div>
              <div class="coupon-saving-sub">Saving ₹${couponDiscount.toLocaleString('en-IN')} on this order</div>
            </div>
          </div>
          <button type="button" class="remove-coupon-btn" onclick="removeCouponCode()" title="Remove Coupon">
            <span>&times;</span> Remove Code
          </button>
        `;
      }
      if (couponInputGroup) couponInputGroup.style.display = 'none';
      if (availableCouponsBox) availableCouponsBox.style.display = 'none';
    }
  } else {
    if (msgElem) {
      msgElem.style.display = 'none';
      msgElem.innerHTML = '';
    }
    if (couponInputGroup) couponInputGroup.style.display = 'flex';
    if (availableCouponsBox) availableCouponsBox.style.display = 'block';
  }

  const finalPayable = Math.max(0, finalPrice - couponDiscount);
  
  // Delivery fee logic:
  // Initially (no address provided or empty cart), delivery fee is 0 (FREE).
  // Based on user address: if user address is saved in state.userProfile:
  //   - If finalPayable >= 499: delivery fee is 0 (FREE)
  //   - If finalPayable < 499: delivery fee is 40 for the saved address
  let deliveryFee = 0;
  if (state.userProfile && state.userProfile.address) {
    deliveryFee = (finalPayable >= 499 || state.cart.length === 0) ? 0 : 40;
  } else {
    deliveryFee = 0; // Initial state before user address is entered
  }

  const totalSavings = mrpDiscount + couponDiscount;

  const itemCountElem = document.getElementById('summaryItemCount');
  const totalMRPElem = document.getElementById('summaryTotalMRP');
  const mrpDiscountElem = document.getElementById('summaryMRPDiscount');
  const couponRow = document.getElementById('couponDiscountRow');
  const couponDiscountElem = document.getElementById('summaryCouponDiscount');
  const deliveryFeeElem = document.getElementById('summaryDeliveryFee');
  const deliveryAddressNoteElem = document.getElementById('summaryDeliveryAddressNote');
  const finalTotalElem = document.getElementById('summaryFinalTotal');
  const savingsBanner = document.getElementById('cartSavingsBanner');
  const savingsText = document.getElementById('cartSavingsText');

  const totalQty = state.cart.reduce((acc, i) => acc + i.qty, 0);
  if (itemCountElem) itemCountElem.textContent = totalQty;
  if (totalMRPElem) totalMRPElem.textContent = `₹${totalMRP.toLocaleString('en-IN')}`;
  if (mrpDiscountElem) mrpDiscountElem.textContent = `-₹${mrpDiscount.toLocaleString('en-IN')}`;

  if (couponRow && couponDiscountElem) {
    if (couponDiscount > 0) {
      couponRow.style.display = 'flex';
      couponDiscountElem.textContent = `-₹${couponDiscount.toLocaleString('en-IN')}`;
    } else {
      couponRow.style.display = 'none';
    }
  }

  if (deliveryFeeElem) {
    if (state.cart.length === 0 || deliveryFee === 0) {
      deliveryFeeElem.innerHTML = '<span class="text-success" style="font-weight:700;">FREE</span>';
    } else {
      deliveryFeeElem.textContent = `₹${deliveryFee}`;
    }
  }

  if (deliveryAddressNoteElem) {
    if (state.userProfile && state.userProfile.address && state.cart.length > 0) {
      deliveryAddressNoteElem.style.display = 'block';
      deliveryAddressNoteElem.innerHTML = `📍 Delivery to ${state.userProfile.name} (${state.userProfile.city} - ${state.userProfile.pincode})`;
    } else {
      deliveryAddressNoteElem.style.display = 'block';
      deliveryAddressNoteElem.innerHTML = `📍 Delivery fee ₹0 (Address-based fee calculated after login/address)`;
    }
  }

  if (finalTotalElem) finalTotalElem.textContent = `₹${(state.cart.length === 0 ? 0 : finalPayable + deliveryFee).toLocaleString('en-IN')}`;

  if (savingsBanner && savingsText) {
    if (totalSavings > 0 && state.cart.length > 0) {
      savingsBanner.style.display = 'flex';
      savingsText.innerHTML = `You will save <strong>₹${totalSavings.toLocaleString('en-IN')}</strong> on this order!`;
    } else {
      savingsBanner.style.display = 'none';
    }
  }

  return { totalMRP, mrpDiscount, couponDiscount, deliveryFee, finalPayable: finalPayable + deliveryFee, totalSavings };
}

function removeCouponCode() {
  state.appliedCoupon = null;
  const input = document.getElementById('couponCodeInput');
  if (input) input.value = '';
  calculateCartBill();
  showToast('Coupon code removed', 'info');
}

// --------------------------------------------------------------------------
// 11. COUPON ENGINE
// --------------------------------------------------------------------------
function applyCouponCode() {
  const input = document.getElementById('couponCodeInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  
  if (!code || !COUPONS[code]) {
    showToast('Invalid Coupon Code! Try STYLE200 or MEESHO50', 'warning');
    return;
  }

  const coupon = COUPONS[code];
  let subtotal = 0;
  state.cart.forEach(item => {
    subtotal += item.price * item.qty;
  });

  if (coupon.minOrder && subtotal < coupon.minOrder) {
    showToast(`Minimum order value of ₹${coupon.minOrder} required for ${code}`, 'warning');
    return;
  }

  state.appliedCoupon = coupon;
  calculateCartBill();
  showToast(`🎉 Coupon "${code}" Applied Successfully!`, 'success');
}

function quickApplyCoupon(code) {
  const input = document.getElementById('couponCodeInput');
  if (input) input.value = code;
  applyCouponCode();
}

function copyCouponCode(code) {
  navigator.clipboard.writeText(code);
  showToast(`Copied "${code}" to clipboard!`, 'success');
}

// --------------------------------------------------------------------------
// 12. PRODUCT QUICK VIEW MODAL
// --------------------------------------------------------------------------
let selectedModalSize = null;

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  selectedModalSize = product.sizes[0] || 'M';
  const body = document.getElementById('productModalBody');

  const thumbs = product.thumbs && product.thumbs.length > 0 ? product.thumbs : [
    { label: 'Front View', url: product.image },
    { label: 'Side/Back View', url: product.image },
    { label: 'Fabric Detail', url: product.image }
  ];

  body.innerHTML = `
    <div class="modal-gallery-col">
      <img src="${thumbs[0].url}" id="mainModalImg" class="main-modal-img" alt="${product.title}">
      
      <div class="modal-template-selector">
        <span class="modal-template-label">Product View Templates</span>
        <div class="modal-template-grid">
          ${thumbs.map((t, idx) => `
            <div class="modal-template-card ${idx === 0 ? 'active' : ''}" onclick="switchModalThumb('${t.url}', this)">
              <img src="${t.url}" alt="${t.label}">
              <span>${t.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="modal-info-col">
      <span class="modal-brand">${product.brand}</span>
      <h2 class="modal-product-title">${product.title}</h2>
      
      <div class="rating-badge" style="margin-bottom:14px;">
        ⭐ ${product.rating} | ${product.reviewsCount} Customer Reviews
      </div>

      <div class="modal-price-box">
        <span class="modal-current-price">₹${product.price.toLocaleString('en-IN')}</span>
        <span class="modal-original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        <span class="modal-discount-tag">${product.discount}% OFF</span>
      </div>

      <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:16px;">
        ${product.description || ''}
      </p>

      <div class="size-select-section">
        <div class="size-header-row">
          <label style="font-size:0.88rem; font-weight:700;">SELECT SIZE</label>
          <span class="size-guide-link" onclick="openSizeChartModal()">📏 Size Guide</span>
        </div>
        <div class="size-options-grid">
          ${product.sizes.map((sz) => `
            <button class="modal-size-btn ${sz === selectedModalSize ? 'selected' : ''}" onclick="selectModalSize('${sz}', this)">${sz}</button>
          `).join('')}
        </div>
      </div>

      <div style="background:#f8fafc; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; margin-top:14px;">
        <div style="font-size:0.82rem; font-weight:700; color:var(--secondary); margin-bottom:4px;">
          🚚 Guaranteed Delivery & Service
        </div>
        <div style="font-size:0.8rem; color:var(--budget-green); font-weight:600;">
          ✓ Delivery to your logged-in address available on checkout
        </div>
      </div>

      <div class="modal-actions-row" style="margin-top:20px; display:flex; gap:12px;">
        <button class="btn btn-primary btn-block btn-lg btn-glow" onclick="addFromModalToCart('${product.id}')">
          🛒 Add to Cart
        </button>
        <button class="wishlist-toggle-btn ${state.wishlist.includes(product.id) ? 'active' : ''}" data-product-id="${product.id}" id="modalWishlistBtn" style="position:static; width:48px; height:48px; border-radius: var(--radius-md); flex-shrink:0;" onclick="toggleWishlist('${product.id}')" title="Save to Wishlist">
          ♥
        </button>
      </div>
    </div>
  `;

  document.getElementById('productModal').classList.add('active');
}

function selectModalSize(size, btnElem) {
  selectedModalSize = size;
  document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('selected'));
  if (btnElem) btnElem.classList.add('selected');
}

function switchModalThumb(imgSrc, cardElem) {
  const mainImg = document.getElementById('mainModalImg');
  if (mainImg) mainImg.src = imgSrc;
  document.querySelectorAll('.modal-template-card').forEach(t => t.classList.remove('active'));
  if (cardElem) cardElem.classList.add('active');
}

function addFromModalToCart(productId) {
  quickAddToCart(productId, selectedModalSize);
  closeProductModal();
}

function closeProductModal() { document.getElementById('productModal')?.classList.remove('active'); }
function openSizeChartModal() { document.getElementById('sizeChartModal')?.classList.add('active'); }
function closeSizeChartModal() { document.getElementById('sizeChartModal')?.classList.remove('active'); }

function escapeProfileText(value) {
  return String(value || '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function openProfileModal(section = 'details') {
  if (!state.userProfile) {
    openAuthModal();
    return;
  }
  const profile = state.userProfile;
  const addresses = profile.addresses || [];
  const primaryAddress = addresses[0] || {
    address: profile.address,
    city: profile.city,
    pincode: profile.pincode,
    location: profile.location
  };
  const content = document.getElementById('profileModalContent');
  if (!content) return;

  const addressSummary = address => {
    const location = address.location
      ? `<div class="profile-coordinate-note">GPS: ${Number(address.location.latitude).toFixed(5)}, ${Number(address.location.longitude).toFixed(5)}</div>`
      : '';
    return `<div class="profile-address-text">${escapeProfileText(address.address)}, ${escapeProfileText(address.city)}${address.pincode ? ` - ${escapeProfileText(address.pincode)}` : ''}</div>${location}`;
  };
  const sectionContent = section === 'addresses'
    ? `<div class="profile-address-list">${addresses.map((address, index) => `
        <article class="profile-address-card">
          <div class="profile-address-heading">${index === 0 ? 'Primary address' : `Address ${index + 1}`}</div>
          ${addressSummary(address)}
          <button type="button" class="btn btn-outline profile-edit-address" onclick="openAddressForm(${index})">Edit address</button>
        </article>`).join('')}
      </div>
      <button type="button" class="btn btn-primary btn-block profile-add-address" onclick="openAddressForm()">+ Add address</button>`
    : `<section class="profile-details-card">
        <h4>Personal details</h4>
        <div><span>Name</span><strong>${escapeProfileText(profile.name)}</strong></div>
        <div><span>Phone number</span><strong>+91 ${escapeProfileText(profile.phone)}</strong></div>
        <div class="profile-detail-address"><span>Primary address</span>${addressSummary(primaryAddress)}</div>
      </section>`;

  content.innerHTML = `
    <div class="profile-modal-header">
      <div class="logo-icon inline-logo">🛍️</div>
      <h3>My Account</h3>
      <p>Welcome, ${escapeProfileText(profile.name)}</p>
    </div>
    <nav class="profile-modal-nav" aria-label="Profile sections">
      <button type="button" class="${section === 'details' ? 'active' : ''}" onclick="openProfileModal('details')">Details</button>
      <button type="button" class="${section === 'addresses' ? 'active' : ''}" onclick="openProfileModal('addresses')">Addresses</button>
      <button type="button" class="profile-logout" onclick="logoutAccount()">Logout</button>
    </nav>
    ${sectionContent}`;
  document.getElementById('profileModal')?.classList.add('active');
}

function closeProfileModal() {
  document.getElementById('profileModal')?.classList.remove('active');
}

function handleProfileIconClick() {
  if (state.userProfile) openProfileModal('details');
  else openAuthModal();
}

function openAddressForm(addressIndex = -1) {
  if (!state.userProfile) {
    openAuthModal();
    return;
  }
  closeProfileModal();
  configureProfileForm(addressIndex < 0 ? 'addAddress' : 'editAddress', addressIndex);
  document.getElementById('authModal')?.classList.add('active');
}

function logoutAccount() {
  if (!window.confirm('Are you sure you want to log out of your StyleMart account?')) return;
  state.userProfile = null;
  localStorage.removeItem('stylemart_user');
  closeProfileModal();
  updateUserProfileUI();
  showToast('You have been logged out.', 'success');
}

function configureProfileForm(mode, addressIndex = -1) {
  profileFormMode = mode;
  editingAddressIndex = addressIndex;
  const nameInput = document.getElementById('userName');
  const phoneInput = document.getElementById('mobileOrEmail');
  const addressInput = document.getElementById('userAddress');
  const cityInput = document.getElementById('userCity');
  const pinInput = document.getElementById('userPincodeInput');
  const nameField = document.getElementById('profileNameField');
  const phoneField = document.getElementById('profilePhoneField');
  const form = document.querySelector('#authModal form');
  const title = document.getElementById('authModalTitle');
  const subtitle = document.getElementById('authModalSub');
  const submit = document.getElementById('profileFormSubmit');
  if (!form || !addressInput || !cityInput || !pinInput) return;

  const isAddressMode = mode !== 'login';
  if (nameField) nameField.hidden = isAddressMode;
  if (phoneField) phoneField.hidden = isAddressMode;
  if (title) title.textContent = mode === 'login'
    ? 'Welcome to StyleMart'
    : mode === 'addAddress' ? 'Add a delivery address' : 'Edit delivery address';
  if (subtitle) subtitle.textContent = mode === 'login'
    ? 'Login & enter your delivery address to proceed with orders!'
    : 'Keep your delivery address up to date.';
  if (submit) submit.textContent = mode === 'login'
    ? 'Save Address & Login →'
    : mode === 'addAddress' ? 'Add Address →' : 'Save Changes →';

  const selectedAddress = isAddressMode
    ? state.userProfile?.addresses?.[addressIndex]
    : null;
  const location = selectedAddress?.location || (!isAddressMode ? state.deliveryLocation : null);
  profileFormLocation = null;
  addressInput.disabled = false;
  cityInput.disabled = false;
  pinInput.disabled = false;
  [nameInput, phoneInput, addressInput, cityInput, pinInput].forEach(input => input?.setCustomValidity(''));
  addressInput.required = true;
  cityInput.required = true;
  pinInput.required = true;

  if (nameInput) nameInput.value = state.userProfile?.name || '';
  if (phoneInput) phoneInput.value = state.userProfile?.phone || '';
  addressInput.value = selectedAddress?.address || '';
  cityInput.value = selectedAddress?.city || '';
  pinInput.value = selectedAddress?.pincode || '';
  if (location) {
    setLocationBoundFields(location);
    restoreDeliveryLocationStatus();
  } else {
    setDeliveryLocationStatus('Required to check the 100 km delivery area. Your location is saved in this browser and is not sent to a maps service.', '');
  }
}

function openAuthModal() {
  configureProfileForm(state.userProfile ? 'editAddress' : 'login', 0);
  document.getElementById('authModal')?.classList.add('active');
}

function closeAuthModal() { document.getElementById('authModal')?.classList.remove('active'); }

function handleAuthSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('userName');
  const phoneInput = document.getElementById('mobileOrEmail');
  const addressInput = document.getElementById('userAddress');
  const cityInput = document.getElementById('userCity');
  const pinInput = document.getElementById('userPincodeInput');
  const currentName = state.userProfile?.name || '';
  const currentPhone = state.userProfile?.phone || '';
  const name = profileFormMode === 'login' ? nameInput?.value.trim() : currentName;
  const phone = profileFormMode === 'login' ? phoneInput?.value.trim() : currentPhone;
  const location = profileFormLocation;
  const address = location
    ? `Current location (${location.latitude.toFixed(5)}, ${location.longitude.toFixed(5)})`
    : addressInput?.value.trim() || '';
  const city = location ? 'GPS location' : cityInput?.value.trim() || '';
  const pincode = location ? '' : pinInput?.value.trim() || '';

  const fieldsToValidate = [];
  if (profileFormMode === 'login') {
    nameInput.setCustomValidity(/^[\p{L}]+(?:\s+[\p{L}]+)*$/u.test(name || '')
      ? '' : 'Enter a name using letters and spaces only.');
    phoneInput.setCustomValidity(/^[6-9]\d{9}$/.test(phone || '')
      ? '' : 'Enter a 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
    fieldsToValidate.push(nameInput, phoneInput);
  }
  if (!location) {
    addressInput.setCustomValidity(address.length >= 5 ? '' : 'Enter a complete street address (at least 5 characters).');
    cityInput.setCustomValidity(/^[\p{L}]+(?:\s+[\p{L}]+)*$/u.test(city)
      ? '' : 'Enter a city using letters and spaces only.');
    pinInput.setCustomValidity(/^\d{6}$/.test(pincode) ? '' : 'Enter a 6-digit pincode.');
    fieldsToValidate.push(addressInput, cityInput, pinInput);
  }

  const invalidInput = fieldsToValidate.find(input => !input.checkValidity());
  if (invalidInput) {
    invalidInput.reportValidity();
    return;
  }

  const addressEntry = {
    address,
    city,
    pincode,
    ...(location ? { location: { ...location } } : {})
  };

  if (profileFormMode === 'login') {
    state.userProfile = normalizeUserProfile({ name, phone, addresses: [addressEntry] });
  } else {
    const addresses = [...(state.userProfile?.addresses || [])];
    if (profileFormMode === 'editAddress' && editingAddressIndex >= 0) {
      addresses[editingAddressIndex] = addressEntry;
    } else {
      addresses.push(addressEntry);
    }
    state.userProfile = normalizeUserProfile({ ...state.userProfile, addresses });
  }
  syncLocalStorage();
  closeAuthModal();
  if (profileFormMode === 'login') {
    showToast(`Logged in successfully as ${name}! Address saved for delivery.`, 'success');
  } else {
    showToast(profileFormMode === 'addAddress' ? 'Address added successfully.' : 'Address updated successfully.', 'success');
    openProfileModal('addresses');
  }

  if (state.pendingCheckout) {
    state.pendingCheckout = false;
    openCheckoutModal();
  }
}

// --------------------------------------------------------------------------
// 13. CHECKOUT FLOW (REQUIRES USER LOGIN & SAVED ADDRESS)
// --------------------------------------------------------------------------
let checkoutStep = 1;

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!', 'warning');
    return;
  }

  if (!state.userProfile) {
    showToast('Please login and enter your delivery address first.', 'warning');
    state.pendingCheckout = true;
    openAuthModal();
    return;
  }

  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer && cartDrawer.classList.contains('active')) {
    toggleCartDrawer();
  }

  checkoutStep = 1;
  renderCheckoutStep();
  document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() { document.getElementById('checkoutModal')?.classList.remove('active'); }

function renderCheckoutStep() {
  const container = document.getElementById('checkoutBodyContent');
  const bill = calculateCartBill();

  document.querySelectorAll('.step-item').forEach((item, idx) => {
    item.classList.toggle('active', idx + 1 <= checkoutStep);
  });

  if (checkoutStep === 1) {
    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h3 style="font-size:1.2rem; margin:0;">📍 Delivery Address</h3>
        <button type="button" class="btn btn-sm btn-outline" onclick="closeCheckoutModal(); openAuthModal();">Edit Address</button>
      </div>

      <div style="background:var(--bg-main); border:1.5px solid var(--border-color); border-radius:var(--radius-md); padding:16px; margin-bottom:18px;">
        <div style="font-weight:800; font-size:1.05rem; color:var(--secondary); margin-bottom:4px;">
          👤 ${state.userProfile.name}
        </div>
        <div style="font-size:0.88rem; color:var(--text-muted); margin-bottom:6px;">
          📱 +91 ${state.userProfile.phone}
        </div>
        <div style="font-size:0.9rem; color:var(--text-main); font-weight:600; line-height:1.4;">
          🏠 ${state.userProfile.address}, ${state.userProfile.city} - <strong>${state.userProfile.pincode}</strong>
        </div>
        <div style="margin-top:10px; font-size:0.78rem; font-weight:800; color:var(--budget-green); display:inline-block; background:var(--budget-light); padding:3px 10px; border-radius:var(--radius-full);">
          ✓ Verified Login Delivery Location
        </div>
      </div>

      <button type="button" class="btn btn-primary btn-block btn-lg" onclick="checkoutStep=2; renderCheckoutStep();">
        Deliver to this Address &rarr;
      </button>
    `;
  } else if (checkoutStep === 2) {
    container.innerHTML = `
      <h3 style="margin-bottom:14px; font-size:1.2rem;">Payment Method</h3>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px;">
        <label class="quiz-option-card" style="display:flex; align-items:center; gap:10px; padding:12px; text-align:left;">
          <input type="radio" name="payOpt" checked>
          <div><strong>UPI / GPay / PhonePe</strong></div>
        </label>
        <label class="quiz-option-card" style="display:flex; align-items:center; gap:10px; padding:12px; text-align:left;">
          <input type="radio" name="payOpt">
          <div><strong>Cash on Delivery (COD)</strong></div>
        </label>
      </div>
      <button class="btn btn-primary btn-block btn-lg" onclick="placeOrderFinal()">Pay ₹${bill.finalPayable.toLocaleString('en-IN')} & Place Order</button>
    `;
  } else if (checkoutStep === 3) {
    const orderID = 'SM-' + Math.floor(100000 + Math.random() * 900000);
    if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70 });

    container.innerHTML = `
      <div class="order-success-box" style="text-align:center; padding:20px 10px;">
        <div class="success-icon-wrap" style="font-size:3rem; margin-bottom:8px;">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-top:4px;">Order ID: <strong>#${orderID}</strong></p>
        <p style="color:var(--budget-green); font-weight:700; margin-top:6px;">Delivering to ${state.userProfile.name} (${state.userProfile.city} - ${state.userProfile.pincode})</p>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-top:2px;">Estimated Arrival: Tomorrow by 5:00 PM</p>
        <button class="btn btn-primary btn-block btn-lg" style="margin-top:20px;" onclick="closeCheckoutModal(); scrollToCatalog();">Continue Shopping &rarr;</button>
      </div>
    `;

    state.cart = [];
    state.appliedCoupon = null;
    syncLocalStorage();
  }
}

function placeOrderFinal() {
  checkoutStep = 3;
  renderCheckoutStep();
}

// --------------------------------------------------------------------------
// 15. TOAST & UTILITIES
// --------------------------------------------------------------------------
function updateBadgesUI() {
  const cartCount = state.cart.reduce((acc, i) => acc + i.qty, 0);
  const cartBadge = document.getElementById('cartCount');
  const cartDrawerBadge = document.getElementById('cartDrawerCount');
  const wishlistBadge = document.getElementById('wishlistCount');
  const wishlistDrawerBadge = document.getElementById('wishlistDrawerCount');

  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.hidden = cartCount === 0;
  }
  if (cartDrawerBadge) cartDrawerBadge.textContent = cartCount;
  if (wishlistBadge) {
    wishlistBadge.textContent = state.wishlist.length;
    wishlistBadge.hidden = state.wishlist.length === 0;
  }
  if (wishlistDrawerBadge) wishlistDrawerBadge.textContent = state.wishlist.length;
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleMobileFilters() {
  const sidebar = document.getElementById('filterSidebar');
  if (sidebar) sidebar.classList.toggle('active');
}

// Mobile Menu Listeners
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  document.getElementById('navMenu')?.classList.add('active');
});
document.getElementById('closeMobileNavBtn')?.addEventListener('click', () => {
  document.getElementById('navMenu')?.classList.remove('active');
});
document.getElementById('closeAnnouncementBtn')?.addEventListener('click', () => {
  document.getElementById('announcementBar').style.display = 'none';
});

window.StyleMart = window.StyleMart || {};
window.StyleMart.addProduct = addProduct;
window.StyleMart.getProducts = () => PRODUCTS_DATA.map(product => ({ ...product }));
