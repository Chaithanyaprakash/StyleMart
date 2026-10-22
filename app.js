// --------------------------------------------------------------------------
// 1. PRODUCT DATABASE
// --------------------------------------------------------------------------
const PRODUCTS_DATA = [
  // --------------------------------------------------------------------------
  // MEN CATEGORY
  // Options: casual, formal, jeans, tshirts, track pants
  // Brands: Rare Rabbit, The Indian Garage Co., Allen Solly, Peter England, Levi's, Raymond, Tommy Hilfiger, Louis Philippe, Wrogn, Roadster
  // --------------------------------------------------------------------------
  {
    id: 'sm-101',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Men Regular Fit Casual Pure Cotton Shirt',
    brand: 'Rare Rabbit',
    category: 'men',
    subcategory: 'casual',
    price: 1153,
    originalPrice: 2799,
    discount: 59,
    rating: 4.3,
    reviewsCount: 578,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/o/u/v/-original-imahzy69b2x7ndnk.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/o/u/v/-original-imahzy69b2x7ndnk.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Sage Green', 'Navy'],
    tags: ['Trending', 'Casual Wear'],
    isFlashSale: true,
    stockLeft: 12,
    description: 'Elevate your daily look with this Regular Fit Shirt from Rare Rabbit. Crafted with 100% pure breathable cotton, featuring spread collar and rounded cuffs.',
    fabric: '100% Pure Cotton'
  },
  {
    id: 'sm-102',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Men Relaxed Fit Checkered Casual Shirt',
    brand: 'The Indian Garage Co.',
    category: 'men',
    subcategory: 'casual',
    price: 550,
    originalPrice: 1999,
    discount: 72,
    rating: 4.2,
    reviewsCount: 74,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/d/c/4/l-0924-shwfyd-05-01-the-indian-garage-co-original-imahaar3wfpkz7fk.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/d/c/4/l-0924-shwfyd-05-01-the-indian-garage-co-original-imahaar3wfpkz7fk.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Vintage Black', 'Off White'],
    tags: ['Best Seller', 'Under ₹999'],
    isFlashSale: false,
    stockLeft: 8,
    description: 'Designed for ultimate street style comfort. Made with 240 GSM combed cotton with drop-shoulder modern fit.',
    fabric: '240 GSM Combed Cotton'
  },
  {
    id: 'sm-m03',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Men Solid Casual Classic Oxford Shirt',
    brand: 'Tommy Hilfiger',
    category: 'men',
    subcategory: 'casual',
    price: 2499,
    originalPrice: 5999,
    discount: 58,
    rating: 4.6,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Sky Blue', 'White'],
    tags: ['Premium Casual'],
    isFlashSale: false,
    stockLeft: 14,
    description: 'Iconic Tommy Hilfiger button-down collar casual shirt made with premium organic Oxford cotton weave.',
    fabric: '100% Organic Cotton'
  },
  {
    id: 'sm-105',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Men Formal Slim Fit Solid Executive Shirt',
    brand: 'Peter England',
    category: 'men',
    subcategory: 'formal',
    price: 899,
    originalPrice: 1899,
    discount: 53,
    rating: 4.4,
    reviewsCount: 420,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/7/n/r/40-alsfcu10000735-allen-solly-original-imahpy2evzqjhb2j.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shirt/7/n/r/40-alsfcu10000735-allen-solly-original-imahpy2evzqjhb2j.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Crisp White', 'Formal Blue'],
    tags: ['Formal Wear', 'Workwear Essential'],
    isFlashSale: false,
    description: 'Crisp, structured formal shirt from Peter England. Wrinkle-resistant finish for confident boardroom meetings.',
    fabric: '80% Cotton, 20% Polyester'
  },
  {
    id: 'sm-m05',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Raymond Tailored Executive Formal Trousers',
    brand: 'Raymond',
    category: 'men',
    subcategory: 'formal',
    price: 1499,
    originalPrice: 3499,
    discount: 57,
    rating: 4.5,
    reviewsCount: 260,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Charcoal Grey', 'Navy'],
    tags: ['Formal Wear'],
    isFlashSale: false,
    stockLeft: 11,
    description: 'Precision-tailored slim formal trousers by Raymond. Breathable poly-viscose blend with sharp crease retention.',
    fabric: 'Poly-Viscose Suiting'
  },
  {
    id: 'sm-m06',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Louis Philippe Solid Navy Formal Blazer',
    brand: 'Louis Philippe',
    category: 'men',
    subcategory: 'formal',
    price: 4999,
    originalPrice: 9999,
    discount: 50,
    rating: 4.8,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['38', '40', '42', '44'],
    colors: ['Midnight Navy'],
    tags: ['Executive Luxury'],
    isFlashSale: false,
    stockLeft: 6,
    description: 'Impeccable single-breasted two-button formal blazer with notch lapels and signature crest lining.',
    fabric: 'Fine Wool Blend'
  },
  {
    id: 'sm-m07',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: "Levi's 511 Slim Fit Stretch Denim Jeans",
    brand: "Levi's",
    category: 'men',
    subcategory: 'jeans',
    price: 2199,
    originalPrice: 4299,
    discount: 49,
    rating: 4.6,
    reviewsCount: 890,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/y/q/p/30-ctjwpc003-l-cosmic-trio-original-imah3xkzentvghwp.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/y/q/p/30-ctjwpc003-l-cosmic-trio-original-imah3xkzentvghwp.jpeg?q=90' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Indigo Dark Wash'],
    tags: ['Best Seller', 'Denim Icon'],
    isFlashSale: false,
    stockLeft: 22,
    description: "Authentic Levi's 511 slim fit jeans cut close without being too tight, infused with all-day comfort stretch.",
    fabric: '99% Cotton, 1% Elastane'
  },
  {
    id: 'sm-m08',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Wrogn Tapered Fit Washed Distressed Jeans',
    brand: 'Wrogn',
    category: 'men',
    subcategory: 'jeans',
    price: 1399,
    originalPrice: 2999,
    discount: 53,
    rating: 4.3,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Medium Blue Fade'],
    tags: ['Street Style'],
    isFlashSale: false,
    stockLeft: 15,
    description: 'Modern tapered fit jeans with knee whiskering and subtle stone wash treatment for effortless urban styling.',
    fabric: 'Stretch Cotton Denim'
  },
  {
    id: 'sm-213',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Roadster Straight Fit Rugged Washed Jeans',
    brand: 'Roadster',
    category: 'men',
    subcategory: 'jeans',
    price: 999,
    originalPrice: 2499,
    discount: 60,
    rating: 4.2,
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['30', '32', '34', '36'],
    colors: ['Vintage Blue'],
    tags: ['Casual Wear'],
    isFlashSale: false,
    description: 'Rugged straight-fit denim jeans with mid-rise waist, 5 pockets, and reinforced stitching.',
    fabric: 'Cotton denim'
  },
  {
    id: 'sm-m10',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Allen Solly Polo Collar Classic Cotton T-Shirt',
    brand: 'Allen Solly',
    category: 'men',
    subcategory: 'tshirts',
    price: 749,
    originalPrice: 1499,
    discount: 50,
    rating: 4.4,
    reviewsCount: 680,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Maroon', 'Navy Blue'],
    tags: ['Best Seller'],
    isFlashSale: true,
    stockLeft: 18,
    description: 'Finely spun pique cotton polo t-shirt with signature deer embroidery on chest and ribbed collar.',
    fabric: '100% Pique Cotton'
  },
  {
    id: 'sm-m11',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Rare Rabbit Minimalist Graphic Print T-Shirt',
    brand: 'Rare Rabbit',
    category: 'men',
    subcategory: 'tshirts',
    price: 899,
    originalPrice: 1999,
    discount: 55,
    rating: 4.5,
    reviewsCount: 340,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Off-White', 'Black'],
    tags: ['Trending'],
    isFlashSale: false,
    stockLeft: 10,
    description: 'Premium heavyweight cotton tee featuring understated typographic art on the chest.',
    fabric: '220 GSM Bio-Washed Cotton'
  },
  {
    id: 'sm-m12',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'The Indian Garage Co. Oversized Streetwear Tee',
    brand: 'The Indian Garage Co.',
    category: 'men',
    subcategory: 'tshirts',
    price: 499,
    originalPrice: 1299,
    discount: 61,
    rating: 4.2,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Onyx Black'],
    tags: ['Under ₹499'],
    isFlashSale: false,
    stockLeft: 25,
    description: 'Drop-shoulder baggy fit streetwear t-shirt with soft hand-feel and pre-shrunk cotton fabric.',
    fabric: '100% Cotton'
  },
  {
    id: 'sm-m13',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Wrogn Slim Fit Cargo Active Track Pants',
    brand: 'Wrogn',
    category: 'men',
    subcategory: 'track pants',
    price: 1199,
    originalPrice: 2499,
    discount: 52,
    rating: 4.4,
    reviewsCount: 390,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Military Olive', 'Jet Black'],
    tags: ['Activewear'],
    isFlashSale: false,
    stockLeft: 12,
    description: 'Utility inspired cargo track pants featuring dual thigh pockets, elasticated waistband with drawstrings, and cuffed ankles.',
    fabric: 'Cotton Lycra Stretch'
  },
  {
    id: 'sm-m14',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Roadster Cotton Performance Jogger Track Pants',
    brand: 'Roadster',
    category: 'men',
    subcategory: 'track pants',
    price: 799,
    originalPrice: 1899,
    discount: 58,
    rating: 4.1,
    reviewsCount: 280,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Melange Heather Grey'],
    tags: ['Comfort Fit'],
    isFlashSale: false,
    stockLeft: 16,
    description: 'Everyday lounge and workout joggers crafted with French Terry cotton for supreme breathability.',
    fabric: 'French Terry Cotton'
  },
  {
    id: 'sm-m15',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Allen Solly Solid Sporty Athleisure Track Pants',
    brand: 'Allen Solly',
    category: 'men',
    subcategory: 'track pants',
    price: 999,
    originalPrice: 2199,
    discount: 54,
    rating: 4.3,
    reviewsCount: 195,
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Navy Blue'],
    tags: ['Athleisure'],
    isFlashSale: false,
    stockLeft: 9,
    description: 'Smart straight-cut track pants with zippered side pockets and quick-drying moisture wicking technology.',
    fabric: 'Poly-Cotton Blend'
  },

  // --------------------------------------------------------------------------
  // WOMEN CATEGORY
  // Options: dresses, top, jeans, formal, casual, saree
  // Brands: Zara, Biba, W for Woman, Vero Moda, Forever 21, H&M, Global Desi, MANGO, Tokyo Talkies, Levi's
  // --------------------------------------------------------------------------
  {
    id: 'sm-211',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Zara Floral Printed A-Line Tiered Maxi Dress',
    brand: 'Zara',
    category: 'women',
    subcategory: 'dresses',
    price: 1990,
    originalPrice: 3990,
    discount: 50,
    rating: 4.5,
    reviewsCount: 420,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/gown/j/z/p/14-l-half-sleeve-stitched-gown-black-nikkutexttles-18-original-imahnfpeg8hzzzjb.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/gown/j/z/p/14-l-half-sleeve-stitched-gown-black-nikkutexttles-18-original-imahnfpeg8hzzzjb.jpeg?q=90' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black Floral'],
    tags: ['Best Seller', 'Summer Edit'],
    isFlashSale: true,
    stockLeft: 9,
    description: 'Breezy bohemian floral maxi dress with subtle puff sleeves, V-neckline, and tiered flowy skirt hem.',
    fabric: '100% Breathable Chiffon'
  },
  {
    id: 'sm-w02',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Vero Moda A-Line Midi Cocktail Dress',
    brand: 'Vero Moda',
    category: 'women',
    subcategory: 'dresses',
    price: 1699,
    originalPrice: 3499,
    discount: 51,
    rating: 4.4,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Emerald Green', 'Wine Red'],
    tags: ['Party Pick'],
    isFlashSale: false,
    stockLeft: 7,
    description: 'Flattering A-line silhouette midi dress with cinched tie waist and graceful pleated flare.',
    fabric: 'Viscose Georgette'
  },
  {
    id: 'sm-w03',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Forever 21 Floral Tiered Wrap Slip Dress',
    brand: 'Forever 21',
    category: 'women',
    subcategory: 'dresses',
    price: 1299,
    originalPrice: 2799,
    discount: 54,
    rating: 4.2,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Blush Pink'],
    tags: ['Trending'],
    isFlashSale: false,
    stockLeft: 12,
    description: 'Chic slip dress featuring delicate floral print, adjustable spaghetti straps, and sweetheart neck.',
    fabric: 'Soft Rayon Blend'
  },
  {
    id: 'sm-109',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'H&M Ribbed Sweetheart Crop Top',
    brand: 'H&M',
    category: 'women',
    subcategory: 'top',
    price: 699,
    originalPrice: 1499,
    discount: 53,
    rating: 4.3,
    reviewsCount: 587,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rust Brown', 'Cream'],
    tags: ['Best Seller'],
    isFlashSale: false,
    stockLeft: 20,
    description: 'Fitted sweetheart neckline crop top knitted with stretchy ribbed cotton jersey fabric.',
    fabric: '95% Cotton, 5% Elastane'
  },
  {
    id: 'sm-w05',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Tokyo Talkies Peplum Floral Blouse Top',
    brand: 'Tokyo Talkies',
    category: 'women',
    subcategory: 'top',
    price: 549,
    originalPrice: 1599,
    discount: 65,
    rating: 4.1,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1765365353704-ed0b6e1b11c2?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1765365353704-ed0b6e1b11c2?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Baby Pink'],
    tags: ['Under ₹999'],
    isFlashSale: true,
    stockLeft: 14,
    description: 'Charming peplum flared silhouette top adorned with delicate micro-floral motifs and elasticated waist.',
    fabric: 'Pure Georgette'
  },
  {
    id: 'sm-w06',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'MANGO Satin Finish Button-Down Collar Top',
    brand: 'MANGO',
    category: 'women',
    subcategory: 'top',
    price: 1490,
    originalPrice: 2990,
    discount: 50,
    rating: 4.6,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Pearl White'],
    tags: ['Luxury Top'],
    isFlashSale: false,
    stockLeft: 8,
    description: 'Lustrous satin finish button-down top with relaxed shoulders and fluid drape for day-to-night styling.',
    fabric: 'Silky Satin'
  },
  {
    id: 'sm-104',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: "Levi's 721 High-Rise Skinny Denim Jeans",
    brand: "Levi's",
    category: 'women',
    subcategory: 'jeans',
    price: 2499,
    originalPrice: 4599,
    discount: 46,
    rating: 4.6,
    reviewsCount: 710,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['26', '28', '30', '32', '34'],
    colors: ['Medium Indigo Wash'],
    tags: ['Iconic Denim'],
    isFlashSale: false,
    stockLeft: 15,
    description: "Levi's signature 721 high-rise skinny jeans engineered with sculpt fabrication that smooths and holds.",
    fabric: '70% Cotton, 28% Poly, 2% Elastane'
  },
  {
    id: 'sm-w08',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Zara Wide Leg Vintage Washed Denim Jeans',
    brand: 'Zara',
    category: 'women',
    subcategory: 'jeans',
    price: 2290,
    originalPrice: 3990,
    discount: 43,
    rating: 4.5,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['26', '28', '30', '32'],
    colors: ['Light Vintage Blue'],
    tags: ['Trending'],
    isFlashSale: false,
    stockLeft: 11,
    description: 'High-waist wide-leg silhouette jeans featuring clean hem and non-stretch rigid authentic denim structure.',
    fabric: '100% Rigid Denim'
  },
  {
    id: 'sm-w09',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Vero Moda Clean Ankle Length Mom Jeans',
    brand: 'Vero Moda',
    category: 'women',
    subcategory: 'jeans',
    price: 1799,
    originalPrice: 3299,
    discount: 45,
    rating: 4.2,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['28', '30', '32'],
    colors: ['Classic Blue'],
    tags: ['Everyday Comfort'],
    isFlashSale: false,
    stockLeft: 8,
    description: 'Relaxed through the hip and tapered at the ankle, providing comfortable casual style with vintage edge.',
    fabric: '98% Cotton, 2% Spandex'
  },
  {
    id: 'sm-212',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'MANGO Tailored Single-Breasted Office Blazer',
    brand: 'MANGO',
    category: 'women',
    subcategory: 'formal',
    price: 3490,
    originalPrice: 6990,
    discount: 50,
    rating: 4.7,
    reviewsCount: 195,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec946f?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec946f?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Camel Beige', 'Black'],
    tags: ['Formal Wear', 'Workwear Essential'],
    isFlashSale: false,
    stockLeft: 6,
    description: 'Sleek structured single-breasted blazer with flap pockets, tortoiseshell buttons, and tailored silhouette.',
    fabric: 'Crepe Suiting Fabric'
  },
  {
    id: 'sm-w11',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Zara High-Waist Pleated Formal Work Trousers',
    brand: 'Zara',
    category: 'women',
    subcategory: 'formal',
    price: 1990,
    originalPrice: 3490,
    discount: 43,
    rating: 4.4,
    reviewsCount: 260,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['26', '28', '30', '32'],
    colors: ['Dark Charcoal'],
    tags: ['Office Formal'],
    isFlashSale: false,
    stockLeft: 14,
    description: 'Crisp front pleats with tapered straight fit. Hook and zip fly fastening for sharp formal presentation.',
    fabric: 'Poly-Viscose Stretch'
  },
  {
    id: 'sm-w12',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Forever 21 Women Tailored Formal Cotton Poplin Shirt',
    brand: 'Forever 21',
    category: 'women',
    subcategory: 'formal',
    price: 1199,
    originalPrice: 2299,
    discount: 48,
    rating: 4.3,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pure White'],
    tags: ['Corporate Essential'],
    isFlashSale: false,
    stockLeft: 18,
    description: 'Crisp cotton poplin tailored women button-down shirt with classic point collar and barrel cuffs.',
    fabric: '100% Crisp Cotton Poplin'
  },
  {
    id: 'sm-w13',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Global Desi Boho Printed Casual Cotton Tunic',
    brand: 'Global Desi',
    category: 'women',
    subcategory: 'casual',
    price: 899,
    originalPrice: 1999,
    discount: 55,
    rating: 4.3,
    reviewsCount: 380,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/z/n/6/m-1-singel-buti-01-chhapainama-fashion-original-imahz5bzjwczv852.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/z/n/6/m-1-singel-buti-01-chhapainama-fashion-original-imahz5bzjwczv852.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Indigo Block Print'],
    tags: ['Casual Wear'],
    isFlashSale: true,
    stockLeft: 12,
    description: 'Relaxed bohemian flair tunic with notch collar and three-quarter sleeves for warm summer days.',
    fabric: '100% Breathable Cotton'
  },
  {
    id: 'sm-w14',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'H&M Women Oversized Casual Linen-Blend Shirt',
    brand: 'H&M',
    category: 'women',
    subcategory: 'casual',
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.5,
    reviewsCount: 460,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Sage Mint'],
    tags: ['Summer Casual'],
    isFlashSale: false,
    stockLeft: 15,
    description: 'Airy linen-cotton blend relaxed shirt with drop shoulders, curved hem, and front patch pocket.',
    fabric: '55% Linen, 45% Cotton'
  },
  {
    id: 'sm-w15',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'W for Woman Casual Printed Short Kurti Top',
    brand: 'W for Woman',
    category: 'women',
    subcategory: 'casual',
    price: 999,
    originalPrice: 2199,
    discount: 54,
    rating: 4.2,
    reviewsCount: 190,
    image: 'https://images.unsplash.com/photo-1561052623-76bca41705fe?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1561052623-76bca41705fe?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Coral Pink'],
    tags: ['Daily Wear'],
    isFlashSale: false,
    stockLeft: 10,
    description: 'Short tunic kurti paired best with jeans or leggings for casual outings and college days.',
    fabric: 'Soft Rayon'
  },
  {
    id: 'sm-w16',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Biba Festive Kanjeevaram Art Silk Saree',
    brand: 'Biba',
    category: 'women',
    subcategory: 'saree',
    price: 2799,
    originalPrice: 6999,
    discount: 60,
    rating: 4.7,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Kanjeevaram Drape', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['Free Size'],
    colors: ['Royal Crimson Red'],
    tags: ['Festive Luxury', 'Best Seller'],
    isFlashSale: true,
    stockLeft: 8,
    description: 'Regal Kanjeevaram art silk saree featuring elaborate golden zari peacock motifs on the pallu and running borders.',
    fabric: 'Kanjeevaram Art Silk'
  },
  {
    id: 'sm-w17',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'W for Woman Floral Printed Chiffon Saree',
    brand: 'W for Woman',
    category: 'women',
    subcategory: 'saree',
    price: 1499,
    originalPrice: 3999,
    discount: 62,
    rating: 4.4,
    reviewsCount: 280,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Floral Drape', url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['Free Size'],
    colors: ['Pastel Rose'],
    tags: ['Party Wear'],
    isFlashSale: false,
    stockLeft: 12,
    description: 'Feather-light printed chiffon saree with scalloped lace border. Includes coordinating unstitched blouse piece.',
    fabric: 'Lightweight Chiffon'
  },
  {
    id: 'sm-w18',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Global Desi Handwoven Zari Border Saree',
    brand: 'Global Desi',
    category: 'women',
    subcategory: 'saree',
    price: 1999,
    originalPrice: 4999,
    discount: 60,
    rating: 4.3,
    reviewsCount: 175,
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Zari Border Drape', url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['Free Size'],
    colors: ['Mustard Gold'],
    tags: ['Traditional'],
    isFlashSale: false,
    stockLeft: 10,
    description: 'Traditional woven saree with intricate border detailing and elegant motifs for poojas and festivities.',
    fabric: 'Chanderi Silk Cotton'
  },

  // --------------------------------------------------------------------------
  // KIDS CATEGORY
  // Options: boy, girl, nightwear
  // Brands: Mothercare, Gini & Jony, FirstCry, Hopscotch, Tommy Kids, U.S. Polo Kids, H&M Kids
  // --------------------------------------------------------------------------
  {
    id: 'sm-107',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Tommy Kids Boys Cotton Striped Polo & Shorts Set',
    brand: 'Tommy Kids',
    category: 'kids',
    subcategory: 'boy',
    price: 1299,
    originalPrice: 2799,
    discount: 54,
    rating: 4.6,
    reviewsCount: 310,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/9/m/d/3-4-years-nttz04-nuttiezzz-original-imahqtgarqz8yhyq.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/9/m/d/3-4-years-nttz04-nuttiezzz-original-imahqtgarqz8yhyq.jpeg?q=90' }
    ],
    sizes: ['2-3 years', '4-5 years', '6-7 years', '8-9 years', '10-12 years'],
    colors: ['Navy Striped'],
    tags: ['Best Seller', 'Boys Set'],
    isFlashSale: true,
    stockLeft: 12,
    description: 'Dapper 2-piece set for boys including a smart cotton polo tee and matching tailored chino shorts.',
    fabric: '100% Breathable Combed Cotton'
  },
  {
    id: 'sm-k02',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'U.S. Polo Kids Boys Graphic Crewneck T-Shirt',
    brand: 'U.S. Polo Kids',
    category: 'kids',
    subcategory: 'boy',
    price: 599,
    originalPrice: 1299,
    discount: 54,
    rating: 4.4,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['3-4 years', '5-6 years', '7-8 years', '9-10 years'],
    colors: ['Cobalt Blue'],
    tags: ['Everyday Wear'],
    isFlashSale: false,
    stockLeft: 18,
    description: 'Sporty active graphic tee with signature polo badge and bio-washed gentle cotton.',
    fabric: '100% Cotton'
  },
  {
    id: 'sm-k03',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Gini & Jony Boys Stretch Denim Jeans',
    brand: 'Gini & Jony',
    category: 'kids',
    subcategory: 'boy',
    price: 899,
    originalPrice: 1999,
    discount: 55,
    rating: 4.3,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['4-5 years', '6-7 years', '8-9 years', '10-12 years'],
    colors: ['Dark Wash Indigo'],
    tags: ['Durable'],
    isFlashSale: false,
    stockLeft: 10,
    description: 'Hard-wearing stretch denim jeans featuring adjustable inner waistband elastic for growing boys.',
    fabric: 'Cotton Denim Stretch'
  },
  {
    id: 'sm-108',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Mothercare Girls Floral Tiered Party Frock',
    brand: 'Mothercare',
    category: 'kids',
    subcategory: 'girl',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.6,
    reviewsCount: 380,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-dress/e/8/d/18-24-months-frock-mom-dad-stgarment-resized-original-imah9y4gpjpeb2ta.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-dress/e/8/d/18-24-months-frock-mom-dad-stgarment-resized-original-imah9y4gpjpeb2ta.jpeg?q=90' }
    ],
    sizes: ['2-3 years', '4-5 years', '6-7 years', '8-9 years'],
    colors: ['Blossom Pink'],
    tags: ['Best Seller', 'Party Frock'],
    isFlashSale: true,
    stockLeft: 8,
    description: 'Charming festive dress for girls with delicate floral lace overlay, satin sash ribbon bow, and cotton lining.',
    fabric: 'Cotton Lining with Net'
  },
  {
    id: 'sm-k05',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'FirstCry Girls Embroidered Cotton Sundress',
    brand: 'FirstCry',
    category: 'kids',
    subcategory: 'girl',
    price: 799,
    originalPrice: 1799,
    discount: 56,
    rating: 4.3,
    reviewsCount: 195,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['1-2 years', '3-4 years', '5-6 years'],
    colors: ['Sunny Yellow'],
    tags: ['Casual Dress'],
    isFlashSale: false,
    stockLeft: 14,
    description: 'Lightweight summer frock with embroidered hemline and soft ruffled sleeves for active play.',
    fabric: '100% Breathable Cotton'
  },
  {
    id: 'sm-k06',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Hopscotch Girls Embellished Tutu Party Jumpsuit',
    brand: 'Hopscotch',
    category: 'kids',
    subcategory: 'girl',
    price: 999,
    originalPrice: 2299,
    discount: 57,
    rating: 4.4,
    reviewsCount: 155,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Party Outfit', url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['3-4 years', '5-6 years', '7-8 years'],
    colors: ['Lavender Purple'],
    tags: ['Trending'],
    isFlashSale: false,
    stockLeft: 9,
    description: 'Eye-catching party jumpsuit with sparkling sequin yoke and fluffy tulle layered waist.',
    fabric: 'Georgette & Tulle'
  },
  {
    id: 'sm-k07',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Mothercare Kids Pure Organic Cotton Pajama Set',
    brand: 'Mothercare',
    category: 'kids',
    subcategory: 'nightwear',
    price: 699,
    originalPrice: 1499,
    discount: 53,
    rating: 4.7,
    reviewsCount: 410,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/9/m/d/3-4-years-nttz04-nuttiezzz-original-imahqtgarqz8yhyq.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-apparel-combo/9/m/d/3-4-years-nttz04-nuttiezzz-original-imahqtgarqz8yhyq.jpeg?q=90' }
    ],
    sizes: ['2-3 years', '4-5 years', '6-7 years', '8-9 years'],
    colors: ['Cloud Blue'],
    tags: ['Sleepwear', 'Organic Cotton'],
    isFlashSale: false,
    stockLeft: 22,
    description: 'Cozy two-piece sleepwear suit made with certified skin-safe organic cotton. Soft elasticated cuffs prevent riding up.',
    fabric: '100% Organic Cotton'
  },
  {
    id: 'sm-k08',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'H&M Kids Fun Dinosaur Printed Sleepwear Suit',
    brand: 'H&M Kids',
    category: 'kids',
    subcategory: 'nightwear',
    price: 899,
    originalPrice: 1699,
    discount: 47,
    rating: 4.5,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Sleepwear Front', url: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['2-3 years', '4-5 years', '6-7 years'],
    colors: ['Mint Green'],
    tags: ['Cute Sleepwear'],
    isFlashSale: false,
    stockLeft: 16,
    description: 'Fun glow-in-the-dark dinosaur illustration print on super soft brushed cotton jersey.',
    fabric: 'Brushed Cotton Jersey'
  },
  {
    id: 'sm-k09',
    showInDealsOfDay: true,
    showInAllFashion: false,
    title: 'FirstCry Starry Night Soft Cotton Sleep Suit (2-Pack)',
    brand: 'FirstCry',
    category: 'kids',
    subcategory: 'nightwear',
    price: 549,
    originalPrice: 1199,
    discount: 54,
    rating: 4.4,
    reviewsCount: 340,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Cotton Sleepsuit', url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['1-2 years', '2-3 years', '3-4 years'],
    colors: ['Starry Grey & White'],
    tags: ['Value Pack'],
    isFlashSale: true,
    stockLeft: 20,
    description: 'Pack of two all-night comfortable sleep suits with snap buttons for easy midnight changes.',
    fabric: '100% Interlock Cotton'
  },

  // --------------------------------------------------------------------------
  // FOOTWEAR CATEGORY
  // Options: men, women, formal, casual, sports
  // Brands: Nike, Adidas, Puma, Woodland, Bata, Red Tape, Clarks, Skechers
  // --------------------------------------------------------------------------
  {
    id: 'sm-301',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Woodland Brown Leather Rugged Men Boots',
    brand: 'Woodland',
    category: 'footwear',
    subcategory: 'men',
    price: 3295,
    originalPrice: 4995,
    discount: 34,
    rating: 4.6,
    reviewsCount: 1840,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Rugged Boot Profile', url: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85' },
      { label: 'Nubuck Leather Texture', url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: ['Camel Brown'],
    tags: ['Rugged Outdoor', 'Best Seller'],
    isFlashSale: true,
    stockLeft: 11,
    description: 'Iconic Woodland nubuck leather high-ankle outdoor boots with deep-tread grooved rubber outsole.',
    fabric: 'Genuine Nubuck Leather'
  },
  {
    id: 'sm-f02',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Bata Men Classic Derby Brogue Shoes',
    brand: 'Bata',
    category: 'footwear',
    subcategory: 'men',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.3,
    reviewsCount: 620,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Classic Brogue Punching', url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Tan Brown', 'Black'],
    tags: ['Workwear'],
    isFlashSale: false,
    stockLeft: 15,
    description: 'Traditional brogue punching on burnished synthetic leather upper with cushioned insole for day-long office comfort.',
    fabric: 'Synthetic Leather & TPR Sole'
  },
  {
    id: 'sm-202',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Clarks Women Comfort Block Heel Sandals',
    brand: 'Clarks',
    category: 'footwear',
    subcategory: 'women',
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.5,
    reviewsCount: 390,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Block Heel Profile', url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7'],
    colors: ['Nude Blush', 'Black'],
    tags: ['Women Comfort'],
    isFlashSale: false,
    stockLeft: 8,
    description: 'Elegant 2-inch block heel sandals with Clarks Cushion Soft padding and adjustable ankle strap.',
    fabric: 'Faux Suede Leather'
  },
  {
    id: 'sm-f04',
    showInDealsOfDay: true,
    showInAllFashion: false,
    title: 'Bata Women Comfy Memory Foam Ballerinas',
    brand: 'Bata',
    category: 'footwear',
    subcategory: 'women',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.2,
    reviewsCount: 510,
    image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Ballerina Flat Profile', url: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    colors: ['Cherry Red', 'Black'],
    tags: ['Under ₹999'],
    isFlashSale: true,
    stockLeft: 22,
    description: 'Slip-on flat ballerinas equipped with high-density memory foam insole and bow toe accent.',
    fabric: 'Soft Synthetic Fabric'
  },
  {
    id: 'sm-203',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Red Tape Men Formal Leather Oxford Shoes',
    brand: 'Red Tape',
    category: 'footwear',
    subcategory: 'formal',
    price: 1799,
    originalPrice: 4299,
    discount: 58,
    rating: 4.4,
    reviewsCount: 880,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/w/6/2/8-accs-5035-black-8-allen-cooper-black-original-imahg3cymbebbhhc.jpeg?q=90',
    thumbs: [
      { label: 'Formal Oxford Profile', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/w/6/2/8-accs-5035-black-8-allen-cooper-black-original-imahg3cymbebbhhc.jpeg?q=90' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Polished Black', 'Cognac Brown'],
    tags: ['Executive Oxford', 'Formal Shoes'],
    isFlashSale: false,
    stockLeft: 14,
    description: 'Classic closed-lacing Oxford formal dress shoes with clean toe cap and anti-slip rubberised outsole.',
    fabric: '100% Genuine Leather'
  },
  {
    id: 'sm-f06',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Clarks Formal Black Leather Slip-On Dress Shoes',
    brand: 'Clarks',
    category: 'footwear',
    subcategory: 'formal',
    price: 3199,
    originalPrice: 5999,
    discount: 47,
    rating: 4.7,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Black Loafer Profile', url: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Classic Black'],
    tags: ['Luxury Formal'],
    isFlashSale: false,
    stockLeft: 7,
    description: 'Slip-on formal loafers with hidden elastic side gussets for effortless wear and timeless executive appeal.',
    fabric: 'Premium Full-Grain Leather'
  },
  {
    id: 'sm-106',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Puma Smashic Retro Canvas Lifestyle Sneakers',
    brand: 'Puma',
    category: 'footwear',
    subcategory: 'casual',
    price: 1869,
    originalPrice: 5499,
    discount: 66,
    rating: 4.7,
    reviewsCount: 4500,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/e/h/3/-original-imahrrjhwaqft4rf.jpeg?q=90',
    thumbs: [
      { label: 'Puma Sneaker Profile', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/e/h/3/-original-imahrrjhwaqft4rf.jpeg?q=90' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['White-Navy'],
    tags: ['Best Seller', 'Sneakers'],
    isFlashSale: false,
    stockLeft: 18,
    description: 'Chunky tennis-inspired retro sneakers with cushioned SoftFoam+ sockliner and durable rubber cupsole.',
    fabric: 'Synthetic Leather & Mesh'
  },
  {
    id: 'sm-f08',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Skechers GOwalk Memory Foam Slip-On Casual Shoes',
    brand: 'Skechers',
    category: 'footwear',
    subcategory: 'casual',
    price: 2799,
    originalPrice: 4999,
    discount: 44,
    rating: 4.6,
    reviewsCount: 1120,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Slip-On Comfort Profile', url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85' },
      { label: 'Breathable Mesh Upper', url: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Charcoal Grey'],
    tags: ['Ultra Comfort'],
    isFlashSale: false,
    stockLeft: 12,
    description: 'High-rebound cushioning with responsive ULTRA GO technology and breathable athletic mesh upper.',
    fabric: 'Athletic Mesh Knit'
  },
  {
    id: 'sm-201',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Nike Air Zoom Pegasus Running Sports Shoes',
    brand: 'Nike',
    category: 'footwear',
    subcategory: 'sports',
    price: 4295,
    originalPrice: 7995,
    discount: 46,
    rating: 4.8,
    reviewsCount: 3200,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Nike Profile with Swoosh', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85' },
      { label: 'Side Angle Running Fit', url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=85' },
      { label: 'Air Zoom Sole Cushion', url: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85' },
      { label: 'Top-Down Lacing View', url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Volt Grey & White'],
    tags: ['Pro Running', 'Best Seller'],
    isFlashSale: true,
    stockLeft: 8,
    description: 'Signature Nike Air Zoom unit in forefoot delivers energetic bounce. Engineered mesh for maximum airflow during marathons.',
    fabric: 'Engineered Breathable Mesh'
  },
  {
    id: 'sm-f10',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Adidas Ultraboost Lightweight Sports Shoes',
    brand: 'Adidas',
    category: 'footwear',
    subcategory: 'sports',
    price: 3899,
    originalPrice: 7599,
    discount: 49,
    rating: 4.7,
    reviewsCount: 2450,
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Adidas 3-Stripes Angle', url: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=1200&q=85' },
      { label: 'Ultraboost Sole Profile', url: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1200&q=85' },
      { label: 'Front Mesh Upper', url: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Core Black', 'Solar Red'],
    tags: ['Boost Technology'],
    isFlashSale: false,
    stockLeft: 10,
    description: 'Hundreds of Boost capsules fused together to deliver incredible energy return on every running stride.',
    fabric: 'Primeknit Textile Upper'
  },

  // --------------------------------------------------------------------------
  // ETHNIC CATEGORY
  // Options: men, women, kids
  // Brands: Manyavar, FabIndia, Laxmipati sarees, Mohey, Biba Ethnic, Soch, Kalki Fashion
  // --------------------------------------------------------------------------
  {
    id: 'sm-110',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Manyavar Regal Jacquard Sherwani & Kurta Set',
    brand: 'Manyavar',
    category: 'ethnic',
    subcategory: 'men',
    price: 4999,
    originalPrice: 11999,
    discount: 58,
    rating: 4.8,
    reviewsCount: 740,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/v/j/v/s-hopmk451-house-of-pataudi-original-imahggvrdbd9ezaz.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/v/j/v/s-hopmk451-house-of-pataudi-original-imahggvrdbd9ezaz.jpeg?q=90' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Royal Gold & Ivory'],
    tags: ['Wedding Collection', 'Best Seller'],
    isFlashSale: true,
    stockLeft: 7,
    description: 'Magnificent brocade jacquard sherwani set tailored with mandarin collar, ornate metallic buttons, and matching churidar.',
    fabric: 'Brocade Silk Blend'
  },
  {
    id: 'sm-e02',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'FabIndia Men Embroidered Silk Kurta Pajama',
    brand: 'FabIndia',
    category: 'ethnic',
    subcategory: 'men',
    price: 1890,
    originalPrice: 3790,
    discount: 50,
    rating: 4.5,
    reviewsCount: 390,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Silk Kurta Profile', url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Tussar Beige'],
    tags: ['Festive Classic'],
    isFlashSale: false,
    stockLeft: 12,
    description: 'Handcrafted tussar silk kurta featuring traditional thread embroidery along the placket, paired with cotton pajama.',
    fabric: 'Tussar Silk & Cotton'
  },
  {
    id: 'sm-e03',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Manyavar Silk Blend Festive Nehru Jacket Set',
    brand: 'Manyavar',
    category: 'ethnic',
    subcategory: 'men',
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    rating: 4.6,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Nehru Jacket Fit', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['38', '40', '42', '44'],
    colors: ['Forest Green'],
    tags: ['Festive Edit'],
    isFlashSale: false,
    stockLeft: 9,
    description: 'Sleeveless woven Nehru jacket featuring welt pockets and metallic buttons, worn over fine solid kurta.',
    fabric: 'Silk Blend'
  },
  {
    id: 'sm-103',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'FabIndia Authentic Woven Banarasi Art Saree',
    brand: 'FabIndia',
    category: 'ethnic',
    subcategory: 'women',
    price: 1578,
    originalPrice: 4999,
    discount: 68,
    rating: 4.5,
    reviewsCount: 890,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/g/z/i/free-red-slvr-pln-bhm-kathla-unstitched-original-imahmbabfeqdnfet.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/g/z/i/free-red-slvr-pln-bhm-kathla-unstitched-original-imahmbabfeqdnfet.jpeg?q=90' }
    ],
    sizes: ['Free Size'],
    colors: ['Royal Crimson Red'],
    tags: ['Luxury Ethnic', 'Best Seller'],
    isFlashSale: true,
    stockLeft: 14,
    description: 'Authentic Banarasi Art Saree featuring regal floral motifs and gold zari border work. Includes unstitched blouse piece.',
    fabric: 'Banarasi Art Silk'
  },
  {
    id: 'sm-401',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Laxmipati Sarees Pure Silk Blend Saree',
    brand: 'Laxmipati sarees',
    category: 'ethnic',
    subcategory: 'women',
    price: 3539,
    originalPrice: 14999,
    discount: 76,
    rating: 4.7,
    reviewsCount: 7190,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/8/i/d/free-n-3357-laxmipati-sarees-unstitched-original-imahzpu3gggm9zgt.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/8/i/d/free-n-3357-laxmipati-sarees-unstitched-original-imahzpu3gggm9zgt.jpeg?q=90' }
    ],
    sizes: ['Free Size'],
    colors: ['Festive Rose Pink'],
    tags: ['Festive Wear', 'Wedding Special'],
    isFlashSale: true,
    stockLeft: 8,
    description: 'Exquisite silk blend saree with intricate zari work and contrasting designer blouse piece.',
    fabric: 'Silk Blend'
  },
  {
    id: 'sm-e06',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Mohey Heavily Embroidered Bridal Lehenga Choli',
    brand: 'Mohey',
    category: 'ethnic',
    subcategory: 'women',
    price: 6999,
    originalPrice: 15999,
    discount: 56,
    rating: 4.9,
    reviewsCount: 620,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['Semi-Stitched', 'M', 'L'],
    colors: ['Ruby Red'],
    tags: ['Bridal Edition'],
    isFlashSale: false,
    stockLeft: 5,
    description: 'Masterpiece semi-stitched velvet lehenga choli layered with resham dori and zardozi embroidery.',
    fabric: 'Micro Velvet with Satin Lining'
  },
  {
    id: 'sm-e07',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'Biba Ethnic Anarkali Suit with Zari Dupatta',
    brand: 'Biba Ethnic',
    category: 'ethnic',
    subcategory: 'women',
    price: 2999,
    originalPrice: 6499,
    discount: 54,
    rating: 4.6,
    reviewsCount: 480,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    thumbs: [
      { label: 'Front View', url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Teal Green'],
    tags: ['Festive Pick'],
    isFlashSale: false,
    stockLeft: 11,
    description: 'Floor-length flared Anarkali kurta adorned with gotta patti accents on neckline and borders.',
    fabric: 'Chanderi Silk'
  },
  {
    id: 'sm-e08',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Soch Georgette Embroidered Sharara Festive Suit',
    brand: 'Soch',
    category: 'ethnic',
    subcategory: 'women',
    price: 2499,
    originalPrice: 5299,
    discount: 53,
    rating: 4.5,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Sharara Suit Profile', url: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Plum Purple'],
    tags: ['Celebration Wear'],
    isFlashSale: false,
    stockLeft: 7,
    description: 'Short peplum style kurta with flared sharara pants and sheer dupatta carrying mirror work.',
    fabric: 'Georgette'
  },
  {
    id: 'sm-402',
    showInDealsOfDay: true,
    showInAllFashion: true,
    title: 'Kalki Fashion Girls Festive Angarkha & Sharara Set',
    brand: 'Kalki Fashion',
    category: 'ethnic',
    subcategory: 'kids',
    price: 1326,
    originalPrice: 3999,
    discount: 67,
    rating: 4.4,
    reviewsCount: 180,
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-ethnic-set/t/j/s/6-7-years-g136-md-enterprise-original-imahgbg2ydn4thxf.jpeg?q=90',
    thumbs: [
      { label: 'Front View', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/kids-ethnic-set/t/j/s/6-7-years-g136-md-enterprise-original-imahgbg2ydn4thxf.jpeg?q=90' }
    ],
    sizes: ['3-4 years', '5-6 years', '7-8 years', '9-10 years'],
    colors: ['Royal Purple'],
    tags: ['Traditional Kids'],
    isFlashSale: true,
    stockLeft: 10,
    description: 'Beautifully crafted girls festive Angarkha kurta and ruffled sharara set with gold foil print borders.',
    fabric: 'Cotton Blend'
  },
  {
    id: 'sm-e10',
    showInDealsOfDay: false,
    showInAllFashion: true,
    title: 'FabIndia Kids Pure Silk Kurta Dhoti Set',
    brand: 'FabIndia',
    category: 'ethnic',
    subcategory: 'kids',
    price: 1290,
    originalPrice: 2590,
    discount: 50,
    rating: 4.6,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Silk Kurta Dhoti Fit', url: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['2-3 years', '4-5 years', '6-7 years'],
    colors: ['Turmeric Yellow'],
    tags: ['Festive Kids'],
    isFlashSale: false,
    stockLeft: 12,
    description: 'Traditional readymade dhoti with golden zari border paired with fine silk-blend mandarin collar kurta.',
    fabric: 'Pure Silk Blend'
  },
  {
    id: 'sm-e11',
    showInDealsOfDay: false,
    showInAllFashion: false,
    title: 'Manyavar Kids Festive Brocade Sherwani Set',
    brand: 'Manyavar',
    category: 'ethnic',
    subcategory: 'kids',
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    rating: 4.7,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1200&q=85',
    thumbs: [
      { label: 'Boys Sherwani Profile', url: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: ['3-4 years', '5-6 years', '7-8 years', '9-10 years'],
    colors: ['Maroon Gold'],
    tags: ['Wedding Special'],
    isFlashSale: false,
    stockLeft: 8,
    description: 'Royal brocade sherwani with pocket square, broach, and elasticated churidar pants for young boys.',
    fabric: 'Brocade Jacquard'
  }
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

function safeGetStoredJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw || raw === 'undefined' || raw === 'null') return fallback;
    const parsed = JSON.parse(raw);
    return parsed !== null && parsed !== undefined ? parsed : fallback;
  } catch (err) {
    console.warn(`Could not read "${key}" from localStorage:`, err);
    return fallback;
  }
}

function loadCustomProducts() {
  try {
    const savedProducts = localStorage.getItem(CUSTOM_PRODUCTS_STORAGE_KEY);
    if (!savedProducts || savedProducts === 'undefined' || savedProducts === 'null') return;

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
          return;
        }
        PRODUCTS_DATA.push(normalizedProduct);
      } catch (error) {
        console.error('Skipped an invalid saved custom product.', error);
      }
    });
  } catch (err) {
    console.warn('loadCustomProducts failed safely:', err);
  }
}

function addProduct(product) {
  const normalizedProduct = normalizeProduct(product);
  if (PRODUCTS_DATA.some(existing => existing.id === normalizedProduct.id)) {
    throw new Error(`A product with id "${normalizedProduct.id}" already exists.`);
  }

  const customProducts = PRODUCTS_DATA.filter(item => item.isCustomProduct);
  const savedProducts = [...customProducts, normalizedProduct];
  try {
    localStorage.setItem(CUSTOM_PRODUCTS_STORAGE_KEY, JSON.stringify(savedProducts));
  } catch (e) {
    console.warn('Could not save custom product to localStorage:', e);
  }
  PRODUCTS_DATA.push(normalizedProduct);

  renderFlashSaleProducts();
  renderProductsCatalog();
  return normalizedProduct;
}

loadCustomProducts();

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// --------------------------------------------------------------------------
const IS_CATEGORY_PAGE = window.location.pathname.toLowerCase().includes('category.html');
const DELIVERY_LOCATION_STORAGE_KEY = 'stylemart_delivery_location';

let state = {
  cart: safeGetStoredJSON('stylemart_cart', []),
  wishlist: safeGetStoredJSON('stylemart_wishlist', []),
  userProfile: safeGetStoredJSON('stylemart_user', null),
  deliveryLocation: loadSavedDeliveryLocation(),
  pendingCheckout: false,
  selectedCategory: getInitialCategory(),
  maxPrice: 10000,
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
  const supportedCategories = ['women', 'men', 'ethnic', 'budget', 'kids', 'footwear'];
  if (IS_CATEGORY_PAGE) {
    return (category && supportedCategories.includes(category)) ? category : 'women';
  }
  return (category && supportedCategories.includes(category)) ? category : 'all';
}

function updateActiveNavigation() {
  const isAboutPage = window.location.pathname.toLowerCase().includes('about.html');
  document.querySelectorAll('.nav-link, .amazon-sub-link').forEach(link => {
    const isHomeLink = link.dataset.home === 'true';
    const isCategoryLink = link.dataset.category !== undefined;
    const isAboutLink = link.dataset.about === 'true';
    link.classList.toggle('active',
      (isHomeLink && !IS_CATEGORY_PAGE && !isAboutPage)
      || (IS_CATEGORY_PAGE && isCategoryLink && link.dataset.category === state.selectedCategory)
      || (isAboutPage && isAboutLink));
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
  const addressInput = document.getElementById('userAddress');

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, '');
      nameInput.setCustomValidity('');
    });
  }

  if (cityInput) {
    cityInput.disabled = false;
    cityInput.addEventListener('input', () => {
      cityInput.value = cityInput.value.replace(/[^a-zA-Z\s]/g, '');
      cityInput.setCustomValidity('');
    });
  }

  if (mobileInput) {
    mobileInput.addEventListener('input', () => {
      const digits = mobileInput.value.replace(/\D/g, '');
      mobileInput.value = digits.slice(0, 10);
      mobileInput.setCustomValidity('');
    });
  }

  if (pincodeInput) {
    pincodeInput.disabled = false;
    pincodeInput.addEventListener('input', () => {
      pincodeInput.value = pincodeInput.value.replace(/\D/g, '').slice(0, 6);
      pincodeInput.setCustomValidity('');
    });
  }

  if (addressInput) {
    addressInput.disabled = false;
    addressInput.addEventListener('input', () => {
      addressInput.setCustomValidity('');
    });
  }
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
function initApp() {
  try { initHeroSlider(); } catch (e) { console.error('Hero slider init error:', e); }
  try { initCountdownTimers(); } catch (e) { console.error('Timers init error:', e); }

  try {
    const catalogHeading = document.getElementById('catalogHeading');
    if (catalogHeading) catalogHeading.textContent = CATEGORY_HEADINGS[state.selectedCategory] || CATEGORY_HEADINGS.all;
    const categoryPageTitle = document.getElementById('categoryPageTitle');
    if (categoryPageTitle) categoryPageTitle.textContent = CATEGORY_HEADINGS[state.selectedCategory] || CATEGORY_HEADINGS.all;
    const categoryCatalogHeading = document.getElementById('categoryCatalogHeading');
    if (categoryCatalogHeading) categoryCatalogHeading.textContent = CATEGORY_HEADINGS[state.selectedCategory] || CATEGORY_HEADINGS.all;
    if (state.selectedCategory !== 'all') {
      document.title = `${CATEGORY_HEADINGS[state.selectedCategory] || 'Fashion'} | StyleMart`;
    }
    const deptSelect = document.getElementById('categoryDepartmentSelect');
    if (deptSelect && state.selectedCategory) {
      deptSelect.value = state.selectedCategory;
    }
    const searchInput = document.getElementById('searchInput');
    if (searchInput && state.searchQuery) searchInput.value = state.searchQuery;
    const clearSearchButton = document.getElementById('clearSearchBtn');
    if (clearSearchButton && state.searchQuery) clearSearchButton.style.display = 'block';
    updateActiveNavigation();
    initProfileInputValidation();
    updateUserProfileUI();
  } catch (e) {
    console.error('Header & navigation init error:', e);
  }

  // Critical product render steps - resilient to individual issues
  try { renderFlashSaleProducts(); } catch (e) { console.error('Flash sale render error:', e); }
  try { renderFashionProducts('all'); } catch (e) { console.error('Fashion products render error:', e); }
  try { renderProductsCatalog(); } catch (e) { console.error('Products catalog render error:', e); }
  try { initSearchAutocomplete(); } catch (e) { console.error('Search autocomplete error:', e); }
  try { initPageScrollLock(); } catch (e) { console.error('Page scroll lock error:', e); }
  try { updateBadgesUI(); } catch (e) { console.error('Badges update error:', e); }
  try { initProductDetailPage(); } catch (e) { console.error('Product detail page error:', e); }
  try { updatePriceBarFill(); } catch (e) { console.error('Price bar fill error:', e); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function syncLocalStorage() {
  try {
    localStorage.setItem('stylemart_cart', JSON.stringify(state.cart));
    localStorage.setItem('stylemart_wishlist', JSON.stringify(state.wishlist));
    if (state.userProfile) {
      localStorage.setItem('stylemart_user', JSON.stringify(state.userProfile));
    }
  } catch (e) {
    console.warn('Could not write to localStorage:', e);
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
let sliderInterval = null;

function goToSlide(index) {
  const slides = document.querySelectorAll('#heroSliderTrack .slide');
  const dots = document.querySelectorAll('#sliderDots .dot');
  if (!slides.length) return;
  const targetIndex = ((index % slides.length) + slides.length) % slides.length;
  state.activeSlide = targetIndex;
  slides.forEach((s, i) => s.classList.toggle('active', i === targetIndex));
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === targetIndex);
    if (i === targetIndex) d.setAttribute('aria-current', 'true');
    else if (typeof d.removeAttribute === 'function') d.removeAttribute('aria-current');
  });

  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
      goToSlide(state.activeSlide + 1);
    }, 5500);
  }
}
window.goToSlide = goToSlide;

function initHeroSlider() {
  const slides = document.querySelectorAll('#heroSliderTrack .slide');
  if (!slides.length) return;

  document.getElementById('nextSlideBtn')?.addEventListener('click', () => {
    goToSlide(state.activeSlide + 1);
  });

  document.getElementById('prevSlideBtn')?.addEventListener('click', () => {
    goToSlide(state.activeSlide - 1);
  });

  if (sliderInterval) clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    goToSlide(state.activeSlide + 1);
  }, 5500);
}

// --------------------------------------------------------------------------
// 5. COUNTDOWN TIMERS
// --------------------------------------------------------------------------
function initCountdownTimers() {
  let secondsRemaining = 10 * 3600 + 35 * 60 + 25; // Matching 10:35:25 in Template 1

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
    const flashMinutes = document.getElementById('flashMinutes') || document.getElementById('flashMins');
    const flashSeconds = document.getElementById('flashSeconds') || document.getElementById('flashSecs');
    if (flashHours) {
      flashHours.textContent = String(h).padStart(2, '0');
      if (flashMinutes) flashMinutes.textContent = String(m).padStart(2, '0');
      if (flashSeconds) flashSeconds.textContent = String(s).padStart(2, '0');
    }
  }, 1000);
}

// --------------------------------------------------------------------------
// 6. FLASH SALE, FASHION & CATALOG RENDER
// --------------------------------------------------------------------------
let activeFlashIndex = 0;
let isFlashTransitioning = false;
let flashAutoScrollTimer = null;

function getFlashDealsProducts() {
  const filtered = PRODUCTS_DATA.filter(p => p.showInDealsOfDay);
  const list = (filtered && filtered.length > 0)
    ? [...filtered]
    : [...PRODUCTS_DATA].sort((a, b) => b.discount - a.discount).slice(0, 16);

  // Guarantee sm-401 (Laxmipati Sarees Pure Silk Blend Saree) is at index 0 as default hero deal
  const targetIdx = list.findIndex(p => p.id === 'sm-401');
  if (targetIdx > 0) {
    const [target] = list.splice(targetIdx, 1);
    list.unshift(target);
  } else if (targetIdx === -1) {
    const target = PRODUCTS_DATA.find(p => p.id === 'sm-401');
    if (target) list.unshift(target);
  }
  return list;
}

let flashAutoScrollInterval = null;

function renderFlashSaleProducts() {
  const container = document.getElementById('flashProductsGrid');
  if (!container) return;

  const deals = getFlashDealsProducts();
  if (!deals || deals.length === 0) return;

  // Render clean flash cards with dynamic JS pricing without special highlighting
  container.innerHTML = deals.map(p => createProductCardHTML(p, true, false)).join('');

  initFlashCardsScroll();
}

function navigateFlashCards(direction) {
  const wrapper = document.getElementById('flashCarouselContainer');
  if (!wrapper) return;
  const scrollAmount = Math.max(220, Math.floor(wrapper.clientWidth * 0.75));
  wrapper.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function initFlashCardsScroll() {
  const wrapper = document.getElementById('flashCarouselContainer');
  if (!wrapper) return;

  if (flashAutoScrollInterval) clearInterval(flashAutoScrollInterval);

  flashAutoScrollInterval = setInterval(() => {
    if (!wrapper) return;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    if (maxScroll <= 0) return;

    if (wrapper.scrollLeft + 10 >= maxScroll) {
      wrapper.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      wrapper.scrollBy({ left: 240, behavior: 'smooth' });
    }
  }, 4000);

  wrapper.onmouseenter = () => {
    if (flashAutoScrollInterval) {
      clearInterval(flashAutoScrollInterval);
      flashAutoScrollInterval = null;
    }
  };
  wrapper.onmouseleave = () => {
    initFlashCardsScroll();
  };
  wrapper.ontouchstart = () => {
    if (flashAutoScrollInterval) {
      clearInterval(flashAutoScrollInterval);
      flashAutoScrollInterval = null;
    }
  };

  // Smooth desktop mouse drag-to-scroll
  if (!wrapper.dataset.dragBound) {
    wrapper.dataset.dragBound = 'true';
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let hasDragged = false;

    wrapper.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) return;
      isDown = true;
      hasDragged = false;
      wrapper.classList.add('grabbing');
      startX = e.pageX - wrapper.offsetLeft;
      scrollStart = wrapper.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        wrapper.classList.remove('grabbing');
      }
    });

    wrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.25;
      if (Math.abs(walk) > 5) hasDragged = true;
      wrapper.scrollLeft = scrollStart - walk;
    });

    wrapper.addEventListener('click', (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        hasDragged = false;
      }
    }, true);
  }
}

function navigateFlashCarousel(direction) {
  navigateFlashCards(direction);
}

function renderFashionProducts(category = 'all') {
  const container = document.getElementById('fashionProductsGrid');
  if (!container) return;

  let fashionItems = PRODUCTS_DATA.filter(p => {
    if (category === 'men') return p.category === 'men';
    if (category === 'women') return p.category === 'women';
    if (category === 'kids') return p.category === 'kids';
    if (category === 'best-deals') return p.discount >= 60;
    return true;
  });

  if (fashionItems.length === 0) {
    fashionItems = PRODUCTS_DATA.slice(0, 8);
  }

  container.innerHTML = fashionItems.map(p => createProductCardHTML(p, false)).join('');

  document.querySelectorAll('.fashion-tab-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    btn.classList.toggle('active', cat === category);
  });
}

function redirectToCategoryPage(category) {
  renderFashionProducts(category);
}

function openProductWindow(productId, event) {
  if (event) event.stopPropagation();
  const url = `product.html?id=${encodeURIComponent(productId)}`;
  window.location.href = url;
}

let selectedModalSize = null;
let currentProductSizeCategory = 'all';
let currentProductDetail = null;

const EDITORIAL_COLOR_MAP = {
  'Camel': '#c19a6b',
  'Camel Beige': '#c5a059',
  'Camel Brown': '#a77b46',
  'Tan Brown': '#9a3412',
  'Cognac Brown': '#854d0e',
  'Rust Brown': '#7c2d12',
  'Black': '#18181b',
  'Jet Black': '#09090b',
  'Core Black': '#111827',
  'Onyx Black': '#1c1917',
  'Classic Black': '#171717',
  'Vintage Black': '#262626',
  'Polished Black': '#18181b',
  'White': '#ffffff',
  'Pure White': '#ffffff',
  'Crisp White': '#fcfcfc',
  'Off White': '#f5f5f0',
  'Off-White': '#f5f5f0',
  'Cream': '#fef9c3',
  'Pearl White': '#f8fafc',
  'Charcoal Grey': '#475569',
  'Dark Charcoal': '#334155',
  'Starry Grey & White': '#64748b',
  'Volt Grey & White': '#94a3b8',
  'Melange Heather Grey': '#64748b',
  'Navy': '#1e293b',
  'Navy Blue': '#172554',
  'Midnight Navy': '#0f172a',
  'Classic Blue': '#1d4ed8',
  'Formal Blue': '#2563eb',
  'Sky Blue': '#7dd3fc',
  'Cloud Blue': '#93c5fd',
  'Cobalt Blue': '#1d4ed8',
  'Vintage Blue': '#3b82f6',
  'Light Vintage Blue': '#60a5fa',
  'Medium Blue Fade': '#60a5fa',
  'Medium Indigo Wash': '#4338ca',
  'Indigo Dark Wash': '#1e1b4b',
  'Dark Wash Indigo': '#312e81',
  'Indigo Block Print': '#1e3a8a',
  'Sage Green': '#84a98c',
  'Sage Mint': '#86efac',
  'Mint Green': '#a7f3d0',
  'Forest Green': '#065f46',
  'Emerald Green': '#047857',
  'Teal Green': '#0f766e',
  'Military Olive': '#4d7c0f',
  'Maroon': '#881337',
  'Wine Red': '#4c0519',
  'Ruby Red': '#9f1239',
  'Cherry Red': '#be123c',
  'Royal Crimson Red': '#dc2626',
  'Solar Red': '#ef4444',
  'Baby Pink': '#fbcfe8',
  'Blush Pink': '#f472b6',
  'Pastel Rose': '#fda4af',
  'Festive Rose Pink': '#e11d48',
  'Coral Pink': '#fb7185',
  'Nude Blush': '#fecdd3',
  'Lavender Purple': '#c084fc',
  'Plum Purple': '#7e22ce',
  'Royal Purple': '#581c87',
  'Mustard Gold': '#d97706',
  'Sunny Yellow': '#facc15',
  'Turmeric Yellow': '#eab308',
  'Tussar Beige': '#e7dfd5',
  'Maroon Gold': '#78350f',
  'Royal Gold & Ivory': '#fef08a'
};

function getEditorialColorHex(colorName) {
  if (!colorName) return '#94a3b8';
  if (EDITORIAL_COLOR_MAP[colorName]) return EDITORIAL_COLOR_MAP[colorName];
  const lower = colorName.toLowerCase();
  for (const [k, v] of Object.entries(EDITORIAL_COLOR_MAP)) {
    if (lower.includes(k.toLowerCase()) || k.toLowerCase().includes(lower)) return v;
  }
  return '#cbd5e1';
}

function getEditorialHeroTitle(product) {
  if (!product) return 'The Essential Collection';
  const title = (product.title || '').toLowerCase();
  if (title.includes('overcoat') || title.includes('coat') || title.includes('jacket') || title.includes('blazer')) {
    return 'The Essential Coat';
  }
  if (title.includes('saree') || title.includes('sari')) {
    return 'The Essential Saree';
  }
  if (title.includes('shirt')) {
    return 'The Essential Shirt';
  }
  if (title.includes('dress') || title.includes('gown') || title.includes('jumpsuit')) {
    return 'The Essential Dress';
  }
  if (title.includes('kurta') || title.includes('kurti')) {
    return 'The Essential Kurta';
  }
  if (title.includes('jeans') || title.includes('denim')) {
    return 'The Essential Denim';
  }
  if (title.includes('t-shirt') || title.includes('tshirt') || title.includes('tee')) {
    return 'The Essential Tee';
  }
  if (title.includes('shoe') || title.includes('sneaker') || title.includes('heel') || product.category === 'footwear') {
    return 'The Essential Footwear';
  }
  if (product.category === 'men') return 'The Essential Menswear';
  if (product.category === 'women') return 'The Essential Womenswear';
  if (product.category === 'ethnic') return 'The Essential Ethnic Edit';
  return 'The Essential Collection';
}

function renderEditorialStars(rating) {
  const r = Math.round(Number(rating) || 4.5);
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    starsHtml += i <= r ? '★' : '☆';
  }
  return starsHtml;
}

function getProductViewTemplates(product) {
  if (!product) return [];
  const main = product.image;
  const title = (product.title || '').toLowerCase();
  const cat = (product.category || '').toLowerCase();
  const sub = (product.subcategory || '').toLowerCase();

  // If product already has multiple distinct thumbs defined
  if (product.thumbs && product.thumbs.length > 1) {
    const urls = new Set(product.thumbs.map(t => t.url));
    if (urls.size > 1) {
      return product.thumbs;
    }
  }

  // Distinct templates providing genuine alternate views so switching is visibly effective
  if (title.includes('saree') || title.includes('sari') || sub === 'saree') {
    return [
      { label: 'Front Model View', url: main },
      { label: 'Draped Pallu Detail', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/8/i/d/free-n-3357-laxmipati-sarees-unstitched-original-imahzpu3gggm9zgt.jpeg?q=90' },
      { label: 'Zari Border Detail', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/g/z/i/free-red-slvr-pln-bhm-kathla-unstitched-original-imahmbabfeqdnfet.jpeg?q=90' },
      { label: 'Pleats & Texture Macro', url: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/s/u/t/free-3004s2099-samah-unstitched-original-imahf3hyy5dfh6wz.jpeg?q=90' }
    ];
  }

  if (title.includes('t-shirt') || title.includes('tshirt') || title.includes('polo') || title.includes('tee') || sub === 'tshirts') {
    return [
      { label: 'Front Studio View', url: main },
      { label: 'Side Angle Perspective', url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
      { label: 'Collar & Fabric Macro', url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80' },
      { label: 'Streetwear Model View', url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80' }
    ];
  }

  if (title.includes('shirt') || sub === 'casual' || sub === 'formal') {
    return [
      { label: 'Front Studio View', url: main },
      { label: 'Side Angle Profile', url: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80' },
      { label: 'Cuff & Fabric Texture', url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80' },
      { label: 'Tailored Styling Fit', url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80' }
    ];
  }

  if (title.includes('jeans') || title.includes('denim') || title.includes('trouser') || title.includes('pant') || sub === 'jeans' || sub === 'track pants') {
    return [
      { label: 'Front Full Length', url: main },
      { label: 'Pocket & Rivet Detail', url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80' },
      { label: 'Wash Texture Detail', url: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80' },
      { label: 'Side Seam Profile', url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80' }
    ];
  }

  if (title.includes('dress') || title.includes('gown') || title.includes('kurta') || title.includes('kurti') || cat === 'women') {
    return [
      { label: 'Front Silhouette', url: main },
      { label: 'Side Angle Perspective', url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80' },
      { label: 'Neckline & Pattern Macro', url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80' },
      { label: 'Back Drape Silhouette', url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80' }
    ];
  }

  if (cat === 'footwear' || title.includes('shoe') || title.includes('sneaker') || title.includes('heel') || title.includes('sandal')) {
    return [
      { label: 'Side Angle Profile', url: main },
      { label: 'Top Down Pair View', url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80' },
      { label: 'Sole & Grip Macro', url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80' },
      { label: 'Heel Counter View', url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80' }
    ];
  }

  if (cat === 'kids') {
    return [
      { label: 'Front Cheerful View', url: main },
      { label: 'Print Graphic Detail', url: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80' },
      { label: 'Soft Cotton Texture', url: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80' },
      { label: 'Folded Flat Lay View', url: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80' }
    ];
  }

  return [
    { label: 'Front View', url: main },
    { label: 'Side Angle View', url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
    { label: 'Fabric Detail', url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80' },
    { label: 'Back Angle View', url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80' }
  ];
}

function toggleEditorialWishlist(productId) {
  toggleWishlist(productId);
  const btn = document.getElementById('editorialWishlistBtn');
  if (btn) {
    const isW = state.wishlist.includes(productId);
    btn.classList.toggle('active', isW);
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', isW ? 'currentColor' : 'none');
    }
  }
}

function isFreeSizeProduct(product) {
  if (!product) return false;
  if (product.sizes && product.sizes.length === 1) {
    const s = String(product.sizes[0]).trim().toLowerCase();
    if (s === 'free size' || s === 'standard' || s === 'one size' || s === 'onesize') return true;
  }
  const title = (product.title || '').toLowerCase();
  const cat = (product.category || '').toLowerCase();
  if (title.includes('saree') || title.includes('sari') || title.includes('dupatta') || title.includes('shawl')) {
    return true;
  }
  if (cat === 'ethnic' && product.sizes && product.sizes.length === 1 && String(product.sizes[0]).toLowerCase() === 'free size') {
    return true;
  }
  return false;
}

function initProductDetailPage() {
  const layout = document.getElementById('productDetailLayout');
  if (!layout) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || params.get('product') || 'sm-101';
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

  if (!product) return;
  currentProductSizeCategory = getProductSizeGuideCategory(product);
  currentProductDetail = product;

  document.title = `${product.title} - ${product.brand} | StyleMart`;

  const bCategory = document.getElementById('breadcrumbCategory');
  const bTitle = document.getElementById('breadcrumbTitle');
  if (bCategory) {
    bCategory.textContent = product.category.toUpperCase();
    bCategory.href = `category.html?category=${encodeURIComponent(product.category)}`;
  }
  if (bTitle) bTitle.textContent = product.title;

  const isFreeSize = isFreeSizeProduct(product);
  const isSaree = isFreeSize || (product.title || '').toLowerCase().includes('saree') || (product.title || '').toLowerCase().includes('sari');
  selectedModalSize = isFreeSize ? 'Free Size' : null;

  // Distinct templates for interactive image switching
  const thumbs = getProductViewTemplates(product);

  // Editorial SKU format (e.g. ALL-CT-010, MSN-CT-001, BIB-ET-016)
  const brandCode = (product.brand || 'MSN').replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase().padEnd(3, 'X');
  const catCode = (product.category === 'footwear' ? 'FT' : product.category === 'ethnic' ? 'ET' : product.category === 'women' ? 'WN' : product.category === 'kids' ? 'KD' : 'CT');
  const numCode = (product.id || '001').replace(/[^0-9]/g, '').padStart(3, '0').slice(-3);
  const productSku = `${brandCode}-${catCode}-${numCode}`;

  const isWishlisted = state.wishlist.includes(product.id);

  layout.innerHTML = `
    <div class="editorial-page-wrapper">
      <!-- Main 2-Column Showcase Layout (Clean, snug top without featured header) -->
      <div class="editorial-showcase-card product-detail-card product-detail-layout">
        
        <!-- Left Column: Main Image on Top, Templates Strictly at the Bottom -->
        <section class="editorial-gallery-col">
          <div class="editorial-main-img-wrap" id="mainProductViewWrap">
            <img id="mainProductViewImg" 
                 src="${thumbs[0].url}" 
                 alt="${product.title}" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80';">
          </div>

          <!-- Template Images Placed Directly at the Bottom with Interactive Switching -->
          <div class="editorial-thumbs-row" id="editorialThumbsRow">
            ${thumbs.map((t, idx) => `
              <button type="button" 
                      class="editorial-thumb-card ${idx === 0 ? 'active' : ''}" 
                      onclick="switchMainProductThumb('${t.url}', this)" 
                      title="${t.label} (Click to switch image)" 
                      aria-label="${t.label}">
                <img src="${t.url}" alt="${t.label}">
              </button>
            `).join('')}
          </div>
        </section>

        <!-- Right Column: Product Information & Controls (No color clutter, snug spacing) -->
        <section class="editorial-info-col">
          <!-- Top Meta Row: Brand on left, SKU code on right -->
          <div class="editorial-meta-row">
            <span class="editorial-brand">${product.brand.toUpperCase()}</span>
            <span class="editorial-sku">${productSku}</span>
          </div>

          <!-- Product Title -->
          <h1 class="editorial-product-title">${product.title}</h1>

          <!-- Rating & Reviews Row -->
          <div class="editorial-rating-row">
            <div class="editorial-stars" aria-label="${product.rating} stars out of 5">
              ${renderEditorialStars(product.rating)}
            </div>
            <span class="editorial-reviews-text">${product.rating} · ${product.reviewsCount} reviews</span>
          </div>

          <!-- Price Row: Original Price First, Then Price -->
          <div class="editorial-price-row">
            ${product.originalPrice > product.price ? `<span class="editorial-original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            <span class="editorial-current-price">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.discount ? `<span class="editorial-discount-tag">${product.discount}% OFF</span>` : ''}
          </div>

          <!-- Size Selector -->
          <div class="editorial-size-section">
            <div class="editorial-size-header">
              <span class="editorial-size-label">Size</span>
              ${!isSaree ? `<button type="button" class="editorial-size-guide-btn" onclick="openSizeChartModal('${getProductSizeGuideCategory(product)}')">Size guide</button>` : ''}
            </div>
            <div class="editorial-sizes-grid">
              ${product.sizes.map((sz, idx) => `
                <button type="button" 
                        class="editorial-size-btn size-chip-btn ${sz === selectedModalSize ? 'active' : ''}" 
                        onclick="selectProductPageSize('${sz}', this)">
                  ${formatProductSize(product, sz)}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Action Buttons: Add to Cart + Wishlist -->
          <div class="editorial-actions-row">
            <button type="button" 
                    class="editorial-add-to-cart-btn" 
                    id="editorialAddToCartBtn" 
                    onclick="addProductDetailToCart(false)">
              <span class="btn-check-icon">✓</span> ADD TO CART
            </button>
            <button type="button" 
                    class="editorial-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    id="editorialWishlistBtn" 
                    onclick="toggleEditorialWishlist('${product.id}')" 
                    aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}" 
                    title="Save to Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          <!-- Delivery Perk Note -->
          <div class="editorial-perk-note">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            <span>Free delivery on orders over ₹999</span>
          </div>

          <!-- Clean Compact Accordion -->
          <div class="editorial-accordion-container">
            <details class="editorial-details-item" open>
              <summary class="editorial-details-summary">
                <span>Product Overview & Details</span>
                <span class="acc-chevron">›</span>
              </summary>
              <div class="editorial-details-body">
                <p>${product.description || 'Elevate your daily style with this premium fashion piece. Designed with superior fabric and a modern fitment.'}</p>
                <div class="editorial-specs-grid">
                  <div><span class="spec-k">Fabric:</span> <span class="spec-v">${product.fabric || '100% Pure Cotton'}</span></div>
                  <div><span class="spec-k">Fit:</span> <span class="spec-v">${product.title.includes('Relaxed') ? 'Relaxed Fit' : product.title.includes('Slim') ? 'Slim Fit' : isSaree ? 'Traditional Draped' : 'Regular Fit'}</span></div>
                  <div><span class="spec-k">Pattern:</span> <span class="spec-v">${isSaree ? 'Woven Zari' : 'Solid / Casual'}</span></div>
                  <div><span class="spec-k">Care:</span> <span class="spec-v">${isSaree ? 'Dry Clean Only' : 'Machine Wash'}</span></div>
                </div>
              </div>
            </details>
            
            <details class="editorial-details-item">
              <summary class="editorial-details-summary">
                <span>Returns & Delivery Guarantee</span>
                <span class="acc-chevron">›</span>
              </summary>
              <div class="editorial-details-body">
                <p>Hassle-free 7-day doorstep returns & exchanges. 100% genuine guaranteed, sourced directly from verified brand manufacturers.</p>
              </div>
            </details>
          </div>

        </section>
      </div>
    </div>
  `;

  // Render Exactly 6 Similar Products
  const relatedContainer = document.getElementById('relatedProductsGrid');
  if (relatedContainer) {
    let relatedList = PRODUCTS_DATA.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand));
    if (relatedList.length < 6) {
      const fallback = PRODUCTS_DATA.filter(p => p.id !== product.id && !relatedList.some(r => r.id === p.id));
      relatedList = [...relatedList, ...fallback];
    }
    const listToDisplay = relatedList.slice(0, 6);
    relatedContainer.innerHTML = listToDisplay.map(p => createProductCardHTML(p, false)).join('');
  }
}

function switchMainProductThumb(imgUrl, elem) {
  const mainImg = document.getElementById('mainProductViewImg');
  if (mainImg) {
    mainImg.style.transition = 'opacity 0.15s ease';
    mainImg.style.opacity = '0.35';
    mainImg.src = imgUrl;
    setTimeout(() => {
      mainImg.style.opacity = '1';
    }, 150);
  }
  document.querySelectorAll('.editorial-thumb-card').forEach(t => {
    t.classList.remove('active');
  });
  if (elem) {
    elem.classList.add('active');
  }
}

function checkDeliveryPincode() {
  const input = document.getElementById('pincodeInput');
  const result = document.getElementById('pincodeResult');
  if (!input || !result) return;
  const pin = input.value.trim();
  result.style.display = 'flex';
  if (pin.length === 6 && /^\d+$/.test(pin)) {
    result.innerHTML = `<span style="color:#16a34a; font-size:0.82rem; font-weight:600;">✓ Delivery available for <strong>${pin}</strong>! Guaranteed delivery by <strong>Thursday, 5 PM</strong> with Free Express Shipping. COD available.</span>`;
  } else {
    result.innerHTML = `<span style="color:#dc2626; font-size:0.82rem; font-weight:600;">⚠ Please enter a valid 6-digit postal PIN code.</span>`;
  }
}

function checkDetailDeliveryPincode() {
  const input = document.getElementById('detailPincodeInput');
  const result = document.getElementById('detailPincodeResult');
  if (!input || !result) return;
  const pin = input.value.trim();
  if (pin.length === 6 && /^\d+$/.test(pin)) {
    result.innerHTML = `
      <div class="pincode-badge-success">
        <span class="check-icon">✓</span>
        <span>Delivery to <strong>${pin}</strong> by <strong>Tomorrow, 5:00 PM</strong> | <strong style="color:var(--budget-green);">FREE Delivery</strong></span>
      </div>
      <div class="delivery-perks-row">
        <span>💵 Cash on Delivery available</span>
        <span>⚡ Dispatched within 24 hours</span>
        <span>🛡️ 100% Genuine Certified</span>
      </div>
    `;
    showToast(`Delivery available for pincode ${pin}!`, 'success');
  } else {
    result.innerHTML = `
      <div style="color:#e11d48; font-size:0.78rem; font-weight:700; margin-top:4px;">
        ⚠️ Please enter a valid 6-digit Indian pincode.
      </div>
    `;
  }
}

function selectProductPageSize(size, btnElem) {
  selectedModalSize = size;
  document.querySelectorAll('.editorial-size-btn, .size-chip-btn').forEach(b => b.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');
}

function addProductDetailToCart(openCartAfterAdd) {
  if (!currentProductDetail) return;
  const isFreeSize = isFreeSizeProduct(currentProductDetail);

  if (!isFreeSize && !selectedModalSize) {
    showToast('Please select a size first before adding to cart!', 'warning');
    const sizeSec = document.querySelector('.editorial-size-section') || document.querySelector('.size-select-section');
    if (sizeSec) {
      sizeSec.classList.add('highlight-pulse');
      sizeSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => sizeSec.classList.remove('highlight-pulse'), 1800);
    }
    return;
  }

  const targetSize = isFreeSize ? ((currentProductDetail.sizes && currentProductDetail.sizes[0]) || 'Free Size') : selectedModalSize;
  quickAddToCart(currentProductDetail.id, targetSize);
  
  const btn = document.getElementById('editorialAddToCartBtn');
  if (btn) {
    const origHtml = btn.innerHTML;
    btn.innerHTML = '<span class="btn-check-icon">✓</span> ADDED TO CART';
    btn.classList.add('added');
    setTimeout(() => {
      btn.innerHTML = origHtml;
      btn.classList.remove('added');
    }, 1500);
  }
  
  if (openCartAfterAdd) openCartDrawer();
}

const CATEGORY_SUBFILTERS = {
  men: [
    { id: 'all', label: 'All Men' },
    { id: 'casual', label: 'Casual' },
    { id: 'formal', label: 'Formal' },
    { id: 'jeans', label: 'Jeans' },
    { id: 'tshirts', label: 'T-Shirts' },
    { id: 'track pants', label: 'Track Pants' }
  ],
  women: [
    { id: 'all', label: 'All Women' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'top', label: 'Top' },
    { id: 'jeans', label: 'Jeans' },
    { id: 'formal', label: 'Formal' },
    { id: 'casual', label: 'Casual' },
    { id: 'saree', label: 'Saree' }
  ],
  kids: [
    { id: 'all', label: 'All Kids' },
    { id: 'boy', label: 'Boy' },
    { id: 'girl', label: 'Girl' },
    { id: 'nightwear', label: 'Nightwear' }
  ],
  footwear: [
    { id: 'all', label: 'All Footwear' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'formal', label: 'Formal' },
    { id: 'casual', label: 'Casual' },
    { id: 'sports', label: 'Sports' }
  ],
  ethnic: [
    { id: 'all', label: 'All Ethnic' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'kids', label: 'Kids' }
  ],
  budget: [
    { id: 'all', label: 'All Under ₹499' },
    { id: 'casual', label: 'Casual' },
    { id: 'formal', label: 'Formal' }
  ],
  all: [
    { id: 'all', label: 'All Collections' },
    { id: 'casual', label: 'Casual' },
    { id: 'formal', label: 'Formal' },
    { id: 'jeans', label: 'Jeans' }
  ]
};

const CATEGORY_BRANDS = {
  men: ['Allen Solly', "Levi's", 'Louis Philippe', 'Peter England', 'Rare Rabbit', 'Raymond', 'Roadster', 'The Indian Garage Co.', 'Tommy Hilfiger', 'Wrogn'],
  women: ['Biba', 'Forever 21', 'Global Desi', 'H&M', "Levi's", 'MANGO', 'Tokyo Talkies', 'Vero Moda', 'W for Woman', 'Zara'],
  kids: ['FirstCry', 'Gini & Jony', 'H&M Kids', 'Hopscotch', 'Mothercare', 'Tommy Kids', 'U.S. Polo Kids'],
  footwear: ['Adidas', 'Bata', 'Clarks', 'Nike', 'Puma', 'Red Tape', 'Skechers', 'Woodland'],
  ethnic: ['Biba Ethnic', 'FabIndia', 'Kalki Fashion', 'Laxmipati sarees', 'Manyavar', 'Mohey', 'Soch']
};

let activeSubfilter = 'all';

function formatProductSize(product, size) {
  if (product && product.category === 'footwear') {
    return String(size).replace(/^uk\s*/i, '').trim();
  }
  return size;
}

function getProductSizeGuideCategory(product) {
  if (product.category === 'kids' || /\b(kids?|children|boys?|girls?)\b/i.test(product.title)) {
    return 'kids';
  }
  return product.category;
}

function renderCategorySubfilterBar() {
  const selectElem = document.getElementById('categorySubfilterSelect');
  const container = document.getElementById('categorySubfilterBar');
  if (!selectElem && !container) return;

  const currentCat = state.selectedCategory || 'all';
  const filtersList = CATEGORY_SUBFILTERS[currentCat] || CATEGORY_SUBFILTERS.all;

  if (!filtersList.some(f => f.id === activeSubfilter)) {
    activeSubfilter = 'all';
  }

  const optionsHtml = filtersList.map(item => `
    <option value="${item.id}" ${item.id === activeSubfilter ? 'selected' : ''}>${item.label}</option>
  `).join('');

  if (selectElem) {
    selectElem.innerHTML = optionsHtml;
    selectElem.value = activeSubfilter;
  } else if (container) {
    container.innerHTML = `
      <label class="category-control" style="display:block; margin:0;">
        <select id="categorySubfilterSelect" class="studio-select" onchange="setSubfilter(this.value)">
          ${optionsHtml}
        </select>
      </label>
    `;
  }
}

function renderCategorySizeFilters() {
  const select = document.getElementById('categorySizeFilterSelect');
  const container = document.getElementById('categorySizeFilters');
  if (!select && !container) return;

  const categoryProducts = PRODUCTS_DATA.filter(product => {
    if (state.selectedCategory === 'budget') return product.price <= 499;
    if (state.selectedCategory === 'all') return true;
    return product.category === state.selectedCategory;
  });
  const sizes = [...new Set(categoryProducts.flatMap(product => product.sizes))];

  const sizeOrder = ['Free Size', 'XS', 'S', 'M', 'L', 'XL', '2XL', 'XXL', '3XL', '38', '40', '42', '44', '46', '6', '7', '8', '9', '10', '11', '12'];
  sizes.sort((a, b) => {
    const idxA = sizeOrder.indexOf(a);
    const idxB = sizeOrder.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return String(a).localeCompare(String(b), undefined, { numeric: true });
  });

  const currentSelectedSize = state.selectedSizes.length > 0 ? state.selectedSizes[0] : 'all';

  const optionsHtml = `
    <option value="all">All Sizes</option>
    ${sizes.map(size => {
      const productForSize = categoryProducts.find(product => product.sizes.includes(size));
      const formatted = formatProductSize(productForSize, size);
      const isSelected = state.selectedSizes.includes(size);
      return `<option value="${size}" ${isSelected ? 'selected' : ''}>Size ${formatted}</option>`;
    }).join('')}
  `;

  if (select) {
    select.innerHTML = optionsHtml;
    select.value = currentSelectedSize;
  } else if (container) {
    container.innerHTML = `
      <label class="category-control" style="display:block; margin:0;">
        <select id="categorySizeFilterSelect" class="studio-select" onchange="handleCategorySizeSelect(this.value)">
          ${optionsHtml}
        </select>
      </label>
    `;
  }
}

function handleCategorySizeSelect(size) {
  if (!size || size === 'all') {
    state.selectedSizes = [];
  } else {
    state.selectedSizes = [size];
  }
  const select = document.getElementById('categorySizeFilterSelect');
  if (select && select.value !== size) {
    select.value = size;
  }
  renderProductsCatalog();
  if (typeof updateCategoryPageActiveChips === 'function') {
    updateCategoryPageActiveChips();
  }
}

function setSubfilter(subId, btnElem) {
  activeSubfilter = subId;
  const selectElem = document.getElementById('categorySubfilterSelect');
  if (selectElem && selectElem.value !== subId) {
    selectElem.value = subId;
  }
  document.querySelectorAll('.subfilter-pill').forEach(b => b.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');

  renderProductsCatalog();
  if (typeof updateCategoryPageActiveChips === 'function') {
    updateCategoryPageActiveChips();
  }
}

function renderCategoryBrandFilter() {
  const select = document.getElementById('categoryBrandFilter');
  if (!select) return;

  const currentCat = state.selectedCategory || 'all';
  let brands = [];
  if (CATEGORY_BRANDS[currentCat]) {
    brands = CATEGORY_BRANDS[currentCat];
  } else {
    const categoryProducts = currentCat === 'budget'
      ? PRODUCTS_DATA.filter(p => p.price <= 499)
      : currentCat === 'all'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => p.category === currentCat);
    brands = [...new Set(categoryProducts.map(p => p.brand).filter(Boolean))].sort();
  }

  const currentValue = state.selectedBrands.length === 1 ? state.selectedBrands[0] : 'all';

  select.innerHTML = `<option value="all">All Brands</option>` +
    brands.map(b => `<option value="${b}" ${b === currentValue ? 'selected' : ''}>${b}</option>`).join('');
}

function handleCategoryBrandFilter(brand) {
  if (brand === 'all') {
    state.selectedBrands = [];
  } else {
    state.selectedBrands = [brand];
  }
  renderProductsCatalog();
}

function getFilteredProducts() {
  return PRODUCTS_DATA.filter(p => {
    if (state.selectedCategory === 'budget') {
      if (p.price > 499) return false;
    } else if (state.selectedCategory !== 'all' && p.category !== state.selectedCategory) {
      return false;
    }
    if (p.price > state.maxPrice) return false;
    if (state.selectedBrands.length > 0 && !state.selectedBrands.includes(p.brand)) return false;
    if (state.selectedSizes.length > 0 && !p.sizes.some(sz => state.selectedSizes.includes(sz))) return false;
    if (p.rating < state.minRating) return false;

    if (activeSubfilter && activeSubfilter !== 'all') {
      const targetSub = activeSubfilter.toLowerCase();
      const pSub = (p.subcategory || '').toLowerCase();
      const text = (p.title + ' ' + (p.description || '') + ' ' + (p.fabric || '') + ' ' + (p.tags || []).join(' ') + ' ' + pSub).toLowerCase();

      // Ethnic category filtering
      if (p.category === 'ethnic') {
        if (pSub) {
          if (pSub !== targetSub) return false;
        } else {
          if (targetSub === 'men' && (!/\bmen\b/i.test(p.title) || /\bwomen\b/i.test(p.title) || /\b(girls?|boys?|kids?)\b/i.test(p.title))) return false;
          if (targetSub === 'women' && !/\b(women|woman|saree|sari|lehenga|anarkali|choli)\b/i.test(text)) return false;
          if (targetSub === 'kids' && !/\b(kids?|boys?|girls?|dhoti)\b/i.test(text)) return false;
        }
      } else if (p.category === 'footwear') {
        // Footwear category filtering
        if (targetSub === 'men') {
          if (pSub === 'women' || /\bwomen\b/i.test(p.title)) return false;
          if (pSub !== 'men' && !/\bmen\b/i.test(text) && !/\b(boots|derby|oxford)\b/i.test(text)) return false;
        } else if (targetSub === 'women') {
          if (pSub === 'men') return false;
          if (pSub !== 'women' && !/\b(women|heels|ballerinas?|sandals?)\b/i.test(text)) return false;
        } else if (targetSub === 'formal') {
          if (pSub !== 'formal' && !/\b(formal|oxford|derby|dress|leather)\b/i.test(text)) return false;
        } else if (targetSub === 'casual') {
          if (pSub !== 'casual' && !/\b(casual|sneakers?|canvas|slip-on)\b/i.test(text)) return false;
        } else if (targetSub === 'sports') {
          if (pSub !== 'sports' && !/\b(sports?|running|boost|pegasus)\b/i.test(text)) return false;
        } else if (pSub !== targetSub) {
          return false;
        }
      } else if (pSub === targetSub) {
        // Direct subcategory match
      } else if (targetSub === 'casual' && (text.includes('casual') || text.includes('street') || text.includes('relax') || text.includes('regular'))) {
        // match
      } else if (targetSub === 'formal' && (text.includes('formal') || text.includes('executive') || text.includes('blazer') || text.includes('trousers') || text.includes('oxford') || text.includes('derby'))) {
        // match
      } else if (targetSub === 'jeans' && (text.includes('jean') || text.includes('denim'))) {
        // match
      } else if (targetSub === 'tshirts' && (text.includes('t-shirt') || text.includes('tee') || text.includes('tshirt') || text.includes('polo'))) {
        // match
      } else if (targetSub === 'track pants' && (text.includes('track') || text.includes('jogger') || text.includes('sweatpant'))) {
        // match
      } else if (targetSub === 'dresses' && (text.includes('dress') || text.includes('frock') || text.includes('gown'))) {
        // match
      } else if (targetSub === 'top' && (text.includes('top') || text.includes('blouse') || text.includes('shirt') || text.includes('crop') || text.includes('tunic'))) {
        // match
      } else if (targetSub === 'saree' && (text.includes('saree') || text.includes('sari'))) {
        // match
      } else if (targetSub === 'boy' && (text.includes('boy') || text.includes('boys'))) {
        // match
      } else if (targetSub === 'girl' && (text.includes('girl') || text.includes('girls') || text.includes('frock') || text.includes('ghagra'))) {
        // match
      } else if (targetSub === 'nightwear' && (text.includes('night') || text.includes('sleep') || text.includes('pajama') || text.includes('pyjama'))) {
        // match
      } else if (targetSub === 'sports' && (text.includes('sport') || text.includes('running') || text.includes('ultraboost') || text.includes('sneaker') || text.includes('pegasus'))) {
        // match
      } else {
        return false;
      }
    }

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

  renderCategorySubfilterBar();
  renderCategorySizeFilters();
  renderCategoryBrandFilter();

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
      countLabel.textContent = `Showing ${filteredList.length} of ${categoryProducts.length} items`;
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

function createProductCardHTML(product, isFlash = false, isFeatured = false) {
  const isWishlisted = state.wishlist && state.wishlist.includes(product.id);
  const initialImg = product.image;
  const imageList = [product.image, ...(product.thumbs ? product.thumbs.map(t => t.url).filter(u => u && u !== product.image) : [])];
  
  // Dynamic pricing and ratings directly taken from JS (PRODUCTS_DATA)
  const currentPriceFormatted = `₹${product.price.toLocaleString('en-IN')}`;
  const origPriceFormatted = `₹${product.originalPrice.toLocaleString('en-IN')}`;
  const discountFormatted = `${product.discount}% OFF`;
  const ratingVal = (product.rating || 4.8).toFixed(1);
  const reviewCountFormatted = product.reviewsCount
    ? (product.reviewsCount >= 1000 ? `${(product.reviewsCount / 1000).toFixed(1)}k` : product.reviewsCount)
    : '4.2k';

  // -------------------------------------------------------------------------
  // 1. TEMPLATE 1: FLASH SALE PRODUCT CARD (Reference: media_1792571028358_f563b565.png)
  // -------------------------------------------------------------------------
  if (isFlash) {
    return `
      <div class="flash-product-card" data-id="${product.id}" onclick="openProductWindow('${product.id}', event)">
        <div class="flash-card-img-wrap">
          <img id="flash-img-${product.id}" src="${initialImg}" alt="${product.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80';">
        </div>

        <div class="flash-card-info">
          <div class="flash-placeholder-lines" aria-hidden="true">
            <div class="flash-line line-1"></div>
            <div class="flash-line line-2"></div>
          </div>
          <div class="flash-card-title-snippet" title="${product.brand} - ${product.title}">${product.title}</div>

          <div class="flash-price-row">
            <span class="flash-original-price">${origPriceFormatted}</span>
            <span class="flash-current-price">${currentPriceFormatted}</span>
          </div>

          <button type="button" class="flash-add-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')">Add to Cart</button>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // 2. TEMPLATE 2: STANDARD PRODUCT CARD (Reference: media_1792571044343_4bb63e9a.png)
  // -------------------------------------------------------------------------
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-img-wrap${product.id === 'sm-106' ? ' puma-shoe-image' : ''}" onclick="openProductWindow('${product.id}', event)">
        <img id="card-img-${product.id}" src="${initialImg}" alt="${product.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80';">
        
        <button type="button" class="card-wishlist-btn wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}"
                onclick="event.stopPropagation(); toggleWishlist('${product.id}')" title="${isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}" aria-label="Save to Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#ef4444' : 'none'}" stroke="${isWishlisted ? '#ef4444' : '#ffffff'}" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        <div class="card-image-dots" onclick="event.stopPropagation();">
          ${imageList.slice(0, 5).map((_, idx) => `
            <span class="card-img-dot ${idx === 0 ? 'active' : ''}" id="dot-${product.id}-${idx}" onclick="event.stopPropagation(); setCardImage('${product.id}', ${idx})" title="Image ${idx + 1}"></span>
          `).join('')}
        </div>
      </div>

      <div class="product-card-info" onclick="openProductWindow('${product.id}', event)">
        <div class="card-brand-row">
          <span class="product-brand">${product.brand}</span>
          <div class="card-rating-pill">
            <span class="rating-star">★</span>
            <span class="rating-val">${ratingVal}</span>
            <span class="rating-divider">|</span>
            <span class="rating-count">${reviewCountFormatted}</span>
          </div>
        </div>

        <h3 class="product-title" title="${product.title}">${product.title}</h3>
        
        <div class="price-row">
          <span class="original-price">${origPriceFormatted}</span>
          <span class="current-price">${currentPriceFormatted}</span>
          <span class="discount-tag">${discountFormatted}</span>
        </div>

        <button type="button" class="card-add-to-cart-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')">Add to cart</button>
      </div>
    </div>
  `;
}

function setCardImage(productId, index) {
  const product = PRODUCTS_DATA.find(item => item.id === productId);
  const image = document.getElementById(`card-img-${productId}`);
  if (!product || !image) return;
  const imageList = (product.thumbs || []).map(thumb => thumb.url).filter(Boolean);
  if (!imageList[index]) return;

  image.src = imageList[index];

  // Update active dot in this card
  const card = image.closest('.product-card');
  if (card) {
    const dots = card.querySelectorAll('.card-img-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }
}

// --------------------------------------------------------------------------
// 7. FILTER HANDLERS
// --------------------------------------------------------------------------
function switchCategoryPageDepartment(category) {
  if (!category) return;
  window.location.href = `category.html?category=${encodeURIComponent(category)}`;
}

function filterByCategory(category) {
  if (!IS_CATEGORY_PAGE && category !== 'all') {
    window.location.href = `category.html?category=${encodeURIComponent(category)}`;
    return;
  }

  state.selectedCategory = category;
  activeSubfilter = 'all';
  document.querySelectorAll('input[name="categoryFilter"]').forEach(r => r.checked = (r.value === category));
  updateActiveNavigation();

  const headingElem = document.getElementById('catalogHeading');
  if (headingElem) headingElem.textContent = CATEGORY_HEADINGS[category] || CATEGORY_HEADINGS.all;

  scrollToCatalog();
}

function setCategoryFilter(category) {
  state.selectedCategory = category;
  activeSubfilter = 'all';
  renderProductsCatalog();
}

function updatePriceBarFill(priceBar) {
  if (!priceBar) priceBar = document.getElementById('categoryPriceBar');
  if (!priceBar) return;
  const min = parseFloat(priceBar.min) || 0;
  const max = parseFloat(priceBar.max) || 10000;
  const val = parseFloat(priceBar.value) || 0;
  const pct = Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100));
  priceBar.style.setProperty('background', `linear-gradient(to right, #0f5948 0%, #0f5948 ${pct}%, #cbd5e1 ${pct}%, #cbd5e1 100%)`, 'important');
}

function handlePriceBarChange(val) {
  const numVal = parseInt(val, 10);
  state.maxPrice = numVal;
  const priceDisplay = document.getElementById('priceRangeDisplay');
  const priceBar = document.getElementById('categoryPriceBar');
  if (priceDisplay) {
    priceDisplay.textContent = numVal >= 10000 ? '₹0 - ₹10,000+' : `₹0 - ₹${numVal.toLocaleString('en-IN')}`;
  }
  if (priceBar) {
    if (parseInt(priceBar.value, 10) !== numVal) {
      priceBar.value = numVal;
    }
    updatePriceBarFill(priceBar);
  }
  document.querySelectorAll('.price-chip-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.price, 10) === numVal);
  });
  renderProductsCatalog();
}

function handlePriceRangeChange(val) {
  handlePriceBarChange(val);
}

function handleBrandFilterChange() {
  const brandChecks = document.querySelectorAll('.brand-check:checked');
  state.selectedBrands = Array.from(brandChecks).map(cb => cb.value);
  renderProductsCatalog();
}

function toggleSizeFilter(size, btnElem) {
  if (state.selectedSizes.includes(size)) {
    state.selectedSizes = state.selectedSizes.filter(s => s !== size);
  } else {
    state.selectedSizes.push(size);
  }
  if (btnElem) btnElem.classList.toggle('active', state.selectedSizes.includes(size));
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

function clearCategoryPageFilters() {
  state.maxPrice = 10000;
  state.selectedBrands = [];
  state.selectedSizes = [];
  state.minRating = 0;
  state.sortBy = 'popular';
  state.searchQuery = '';
  activeSubfilter = 'all';
  const priceBar = document.getElementById('categoryPriceBar');
  const priceDisplay = document.getElementById('priceRangeDisplay');
  const rating = document.getElementById('categoryRatingFilter');
  const sort = document.getElementById('categorySortFilter');
  const brand = document.getElementById('categoryBrandFilter');
  if (priceBar) {
    priceBar.value = '10000';
    updatePriceBarFill(priceBar);
  }
  if (priceDisplay) priceDisplay.textContent = '₹0 - ₹10,000';
  if (rating) rating.value = '0';
  if (sort) sort.value = 'popular';
  if (brand) brand.value = 'all';
  const subfilterSelect = document.getElementById('categorySubfilterSelect');
  if (subfilterSelect) subfilterSelect.value = 'all';
  const sizeSelect = document.getElementById('categorySizeFilterSelect');
  if (sizeSelect) sizeSelect.value = 'all';
  document.querySelectorAll('.price-chip-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.price === '10000');
  });
  document.querySelectorAll('.category-size-chip').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.subfilter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === 'all styles' || btn.textContent.trim().toLowerCase() === 'all');
  });
  const search = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearchBtn');
  if (search) search.value = '';
  if (clearSearch) clearSearch.style.display = 'none';
  renderProductsCatalog();
  showToast('Filters reset', 'info');
}

function clearAllFilters() {
  if (IS_CATEGORY_PAGE) {
    clearCategoryPageFilters();
    return;
  }
  state.selectedCategory = 'all';
  state.maxPrice = 5000;
  state.selectedBrands = [];
  state.selectedSizes = [];
  state.minRating = 0;
  state.searchQuery = '';
  state.sortBy = 'popular';
  activeSubfilter = 'all';
  const catInput = document.querySelector('input[name="categoryFilter"]');
  if (catInput) catInput.checked = true;
  const priceInput = document.getElementById('priceRangeInput');
  if (priceInput) priceInput.value = 5000;
  const priceVal = document.getElementById('priceRangeValue');
  if (priceVal) priceVal.textContent = '₹5,000';
  document.querySelectorAll('.brand-check').forEach(cb => cb.checked = false);
  document.querySelectorAll('.size-chip-btn').forEach(b => b.classList.remove('active'));
  const ratingInput = document.querySelector('input[name="ratingFilter"]');
  if (ratingInput) ratingInput.checked = true;
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  renderProductsCatalog();
  showToast('Filters reset', 'info');
}

function toggleMobileSearch() {
  const wrappers = document.querySelectorAll('.search-wrapper');
  wrappers.forEach(w => {
    w.classList.toggle('mobile-active');
    if (w.classList.contains('mobile-active')) {
      const input = w.querySelector('#searchInput') || w.querySelector('input');
      if (input) input.focus();
    }
  });
}

function scrollToCatalog() {
  const section = document.getElementById('catalogSection');
  if (section) {
    section.hidden = false;
    section.scrollIntoView({ behavior: 'smooth' });
    renderProductsCatalog();
    return;
  }
  if (!IS_CATEGORY_PAGE) {
    const search = state.searchQuery.trim();
    const query = search ? `&search=${encodeURIComponent(search)}` : '';
    window.location.href = `category.html?category=all${query}`;
    return;
  }
}

function scrollToStudio() {
  document.getElementById('customStudioSection')?.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileFilters() {
  const sidebar = document.getElementById('filterSidebar') || document.getElementById('categoryFilterSidebar');
  const overlay = document.getElementById('categoryFilterOverlay');
  if (sidebar) sidebar.classList.toggle('active');
  if (overlay) overlay.classList.toggle('active');
}

function toggleMobileCategoryFilters() {
  toggleMobileFilters();
}

function closeMobileCategoryFilters() {
  const sidebar = document.getElementById('filterSidebar') || document.getElementById('categoryFilterSidebar');
  const overlay = document.getElementById('categoryFilterOverlay');
  if (sidebar) sidebar.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
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
  if (!IS_CATEGORY_PAGE && state.selectedCategory !== 'all') {
    chips.push(`Category: ${state.selectedCategory} <span onclick="setCategoryFilter('all')" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  }
  if (IS_CATEGORY_PAGE && state.maxPrice < 10000) {
    chips.push(`Max ₹${state.maxPrice.toLocaleString('en-IN')} <span onclick="handlePriceBarChange(10000)" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  } else if (!IS_CATEGORY_PAGE && state.maxPrice < 5000) {
    chips.push(`Max ₹${state.maxPrice.toLocaleString('en-IN')} <span onclick="handlePriceRangeChange(5000)" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
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
  if (activeSubfilter && activeSubfilter !== 'all') {
    chips.push(`Style: ${activeSubfilter} <span onclick="setSubfilter('all')" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  }
  if (state.minRating > 0) {
    chips.push(`Rating: ${state.minRating}★+ <span onclick="setRatingFilter(0)" style="cursor:pointer; font-weight:800; margin-left:4px;">&times;</span>`);
    count++;
  }

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
  if (IS_CATEGORY_PAGE) {
    const sel = document.getElementById('categoryBrandFilter');
    if (sel) sel.value = 'all';
    handleCategoryBrandFilter('all');
    return;
  }
  const cb = Array.from(document.querySelectorAll('.brand-check')).find(c => c.value === brand);
  if (cb) cb.checked = false;
  handleBrandFilterChange();
}

function removeSizeChip(size) {
  if (IS_CATEGORY_PAGE) {
    state.selectedSizes = state.selectedSizes.filter(s => s !== size);
    const sizeSelect = document.getElementById('categorySizeFilterSelect');
    if (sizeSelect) {
      sizeSelect.value = state.selectedSizes.length > 0 ? state.selectedSizes[0] : 'all';
    }
    renderProductsCatalog();
    if (typeof updateCategoryPageActiveChips === 'function') {
      updateCategoryPageActiveChips();
    }
    return;
  }
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

  const searchSubmitBtn = document.getElementById('headerSearchSubmitBtn');
  searchSubmitBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    suggestionsBox?.classList.remove('active');
    scrollToCatalog();
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
    const isWishlisted = state.wishlist.includes(productId);
    button.classList.toggle('active', isWishlisted);
    if (button.classList.contains('product-image-wishlist-btn')) {
      button.setAttribute('aria-label', isWishlisted ? 'Remove from wishlist' : 'Add to wishlist');
      button.title = isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist';
    }
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
  const footer = document.getElementById('wishlistDrawerFooter');
  if (!body) return;

  const wishlistedProducts = PRODUCTS_DATA.filter(p => state.wishlist.includes(p.id));
  if (countLabel) countLabel.textContent = wishlistedProducts.length;

  if (wishlistedProducts.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding:40px 20px;">
        <div style="font-size:3rem; margin-bottom:8px;">♥</div>
        <h4 style="margin-top:10px; color:var(--secondary); font-weight:700;">Your Wishlist is Empty</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">Save your favorite styles here to shop later!</p>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="toggleWishlistDrawer()">Explore Catalog</button>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  body.innerHTML = wishlistedProducts.map(p => `
    <div class="cart-item-card" style="display:flex; gap:12px; align-items:center; padding:12px; background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius-md); margin-bottom:12px; position:relative;">
      <img src="${p.image}" class="cart-item-img" alt="${p.title}" style="width:70px; height:85px; object-fit:contain; border-radius:var(--radius-sm); background:#ffffff; border:1px solid var(--border-color);">
      <div class="cart-item-info" style="flex:1;">
        <span class="product-brand" style="font-size:0.75rem; font-weight:800; color:var(--primary); text-transform:uppercase;">${p.brand}</span>
        <h4 class="cart-item-title" style="font-size:0.9rem; font-weight:700; color:var(--secondary); margin:2px 0 6px 0;">${p.title}</h4>
        <div class="price-row" style="margin-bottom:8px; display:flex; align-items:baseline; gap:8px;">
          <span class="original-price" style="text-decoration:line-through; color:var(--text-muted); font-size:0.8rem;">₹${p.originalPrice.toLocaleString('en-IN')}</span>
          <span class="current-price" style="font-size:0.95rem; font-weight:800; color:var(--secondary);">₹${p.price.toLocaleString('en-IN')}</span>
        </div>
        <button class="btn btn-primary btn-block" style="padding:6px 12px; font-size:0.8rem;" onclick="moveItemFromWishlistToCart('${p.id}')">
          Move to Cart
        </button>
      </div>
      <button class="remove-cart-item" onclick="toggleWishlist('${p.id}')" title="Remove from Wishlist" style="position:absolute; top:8px; right:8px; background:none; border:none; font-size:1.2rem; color:var(--text-muted); cursor:pointer;">&times;</button>
    </div>
  `).join('');
}

function moveItemFromWishlistToCart(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
  }
  syncLocalStorage();
  renderProductsCatalog();
  renderWishlistDrawer();

  document.querySelectorAll(`.wishlist-toggle-btn[data-product-id="${productId}"], .icon-action-btn[onclick*="${productId}"]`).forEach(button => {
    button.classList.remove('active');
  });

  quickAddToCart(productId);
}

function addAllWishlistToCart() {
  if (state.wishlist.length === 0) {
    showToast('Your wishlist is empty!', 'warning');
    return;
  }

  const wishlistedIds = [...state.wishlist];
  wishlistedIds.forEach(id => {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    if (product) {
      const defaultSize = product.sizes[0] || 'Free Size';
      const existingItem = state.cart.find(item => item.id === id && item.selectedSize === defaultSize);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ id, selectedSize: defaultSize, qty: 1 });
      }
    }
  });

  state.wishlist = [];
  syncLocalStorage();
  renderWishlistDrawer();
  renderProductsCatalog();

  document.querySelectorAll('.wishlist-toggle-btn, .icon-action-btn').forEach(button => {
    if (button.id !== 'wishlistBtn' && button.id !== 'cartBtn' && button.id !== 'userProfileBtn') {
      button.classList.remove('active');
    }
  });

  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistDrawerOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');

  openCartDrawer();
  showToast('Moved all wishlisted items to Cart! 🛒', 'success');
}

function changeCartItemSize(index, newSize) {
  if (!state.cart[index]) return;
  state.cart[index].selectedSize = newSize;
  syncLocalStorage();
  renderCartDrawer();
  showToast(`Updated item size to ${newSize}`, 'info');
}

let pendingSizeProductId = null;
let selectedPromptSize = null;

function openSelectSizeModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  pendingSizeProductId = productId;
  selectedPromptSize = null;

  let modal = document.getElementById('selectSizeModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'selectSizeModal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-container size-select-modal" style="max-width: 440px; padding: 24px; border-radius: var(--radius-lg); background: #ffffff; text-align: left; position: relative;" onclick="event.stopPropagation()">
      <button class="modal-close-btn" onclick="closeSelectSizeModal()">&times;</button>
      
      <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
        <img src="${product.image}" alt="${product.title}" style="width: 70px; height: 85px; object-fit: contain; border-radius: var(--radius-sm); background: #f8fafc; border: 1px solid var(--border-color);">
        <div>
          <span style="font-size: 0.75rem; font-weight: 800; color: var(--primary); text-transform: uppercase;">${product.brand}</span>
          <h4 style="font-size: 0.98rem; font-weight: 700; color: var(--secondary); margin: 2px 0 6px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.3;">${product.title}</h4>
          <div style="display: flex; align-items: baseline; gap: 8px;">
            <span style="font-size: 0.88rem; font-weight: 500; color: var(--text-muted); text-decoration: line-through;">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            <span style="font-size: 1.1rem; font-weight: 800; color: var(--secondary);">₹${product.price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <label style="font-weight: 800; font-size: 0.88rem; color: var(--secondary); display: block; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
          Select Size to Add to Cart:
        </label>
        <div class="prompt-size-grid" style="display: flex; gap: 10px; flex-wrap: wrap;">
          ${product.sizes.map(sz => `
            <button type="button" class="size-chip-btn" onclick="selectPromptSizeChoice('${sz}', this)">${formatProductSize(product, sz)}</button>
          `).join('')}
        </div>
      </div>

      <button type="button" class="btn btn-primary btn-block btn-lg btn-glow" id="confirmSizeAndAddButton" onclick="confirmSizeAndAddToCart()" disabled>
        Confirm Size & Add to Cart &rarr;
      </button>
    </div>
  `;

  modal.onclick = function(e) { if (e.target === this) closeSelectSizeModal(); };
  modal.classList.add('active');
}

function selectPromptSizeChoice(size, btnElem) {
  selectedPromptSize = size;
  const parent = btnElem.closest('.modal-container');
  if (parent) {
    parent.querySelectorAll('.size-chip-btn').forEach(b => b.classList.remove('active'));
  }
  btnElem.classList.add('active');
  const confirmButton = document.getElementById('confirmSizeAndAddButton');
  if (confirmButton) confirmButton.disabled = false;
}

function confirmSizeAndAddToCart() {
  if (pendingSizeProductId && selectedPromptSize) {
    const pid = pendingSizeProductId;
    const sz = selectedPromptSize;
    closeSelectSizeModal();
    quickAddToCart(pid, sz);
    pendingSizeProductId = null;
    selectedPromptSize = null;
  }
}

function closeSelectSizeModal() {
  const modal = document.getElementById('selectSizeModal');
  if (modal) modal.classList.remove('active');
}

function quickAddToCart(productId, sizeOverride = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const isFreeSize = isFreeSizeProduct(product);

  if (!sizeOverride) {
    if (isFreeSize) {
      sizeOverride = (product.sizes && product.sizes[0]) || 'Free Size';
    } else {
      openSelectSizeModal(productId);
      return;
    }
  }

  const targetSize = sizeOverride;
  const existingItem = state.cart.find(item => item.id === productId && item.selectedSize === targetSize);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    state.cart.push({ id: productId, selectedSize: targetSize, qty: 1 });
  }

  syncLocalStorage();
  updateCartBadges();
  showToast(`Added "${product.title}" (${formatProductSize(product, targetSize)}) to Cart! 🛍️`, 'success');
  showCartAddedPopup(product, targetSize);
}

function showCartAddedPopup(product, size) {
  let modal = document.getElementById('cartAddedModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'cartAddedModal';
    modal.className = 'modal-overlay cart-added-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'cartAddedTitle');
    modal.onclick = function(e) { if (e.target === this) closeCartAddedPopup(); };
    modal.innerHTML = `
      <section class="modal-container cart-added-modal">
        <button type="button" class="modal-close-btn" onclick="closeCartAddedPopup()" aria-label="Close confirmation">&times;</button>
        <div class="cart-added-check" aria-hidden="true">✓</div>
        <h2 id="cartAddedTitle">Item added to cart</h2>
        <div class="cart-added-product">
          <img id="cartAddedImage" src="${product.image}" alt="${product.title}">
          <div>
            <strong id="cartAddedProductName">${product.title}</strong>
            <span id="cartAddedProductSize">Size: ${formatProductSize(product, size)}</span>
          </div>
        </div>
        <div class="cart-added-actions">
          <button type="button" class="btn btn-secondary" onclick="closeCartAddedPopup()">Continue shopping</button>
          <button type="button" class="btn btn-primary" onclick="closeCartAddedPopup(); openCartDrawer()">View cart</button>
        </div>
      </section>
    `;
    document.body.appendChild(modal);
  } else {
    const image = document.getElementById('cartAddedImage');
    const name = document.getElementById('cartAddedProductName');
    const selectedSize = document.getElementById('cartAddedProductSize');
    if (image) {
      image.src = product.image;
      image.alt = product.title;
    }
    if (name) name.textContent = product.title;
    if (selectedSize) selectedSize.textContent = `Size: ${formatProductSize(product, size)}`;
  }

  modal.classList.add('active');
}

function closeCartAddedPopup() {
  document.getElementById('cartAddedModal')?.classList.remove('active');
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
                ${product.sizes.map(s => `<option value="${s}" ${s === item.selectedSize ? 'selected' : ''}>${formatProductSize(product, s)}</option>`).join('')}
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
function goBackToProducts() {
  const referrer = document.referrer;
  if (referrer && new URL(referrer).origin === window.location.origin) {
    window.history.back();
    return;
  }
  const category = currentProductDetail?.category || 'all';
  window.location.href = `category.html?category=${encodeURIComponent(category)}`;
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const isFreeSize = isFreeSizeProduct(product);
  selectedModalSize = isFreeSize ? ((product.sizes && product.sizes[0]) || 'Free Size') : null;
  currentProductSizeCategory = getProductSizeGuideCategory(product);
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
        ${product.rating} / 5.0 | ${product.reviewsCount} Customer Reviews
      </div>

      <div class="modal-price-box" style="display:flex; align-items:baseline; gap:8px;">
        <span class="modal-original-price" style="text-decoration: line-through; color: var(--text-muted); font-size: 1.05rem; font-weight: 500;">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        <span class="modal-current-price" style="font-size: 1.6rem; font-weight: 800; color: var(--secondary);">₹${product.price.toLocaleString('en-IN')}</span>
      </div>

      <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:16px;">
        ${product.description || ''}
      </p>

      <div class="size-select-section">
        <div class="size-header-row">
          <label style="font-size:0.88rem; font-weight:700;">SELECT SIZE</label>
          ${!isFreeSize ? `<span class="size-guide-link" onclick="openSizeChartModal('${getProductSizeGuideCategory(product)}')">Size Guide</span>` : ''}
        </div>
        <div class="size-options-grid">
          ${product.sizes.map((sz) => `
            <button class="modal-size-btn ${isFreeSize ? 'selected' : ''}" onclick="selectModalSize('${sz}', this)">${formatProductSize(product, sz)}</button>
          `).join('')}
        </div>
      </div>

      <div style="background:#f8fafc; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; margin-top:14px;">
        <div style="font-size:0.82rem; font-weight:700; color:var(--secondary); margin-bottom:4px;">
          Guaranteed Delivery & Service
        </div>
        <div style="font-size:0.8rem; color:var(--budget-green); font-weight:600;">
          ✓ Delivery to your logged-in address available on checkout
        </div>
      </div>

      <div class="modal-actions-row" style="margin-top:20px; display:flex; gap:12px;">
        <button class="btn btn-primary btn-block btn-lg btn-glow modal-add-cart-btn" onclick="addFromModalToCart('${product.id}')" ${isFreeSize ? '' : 'disabled'}>
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
  const addButton = document.querySelector('.modal-add-cart-btn');
  if (addButton) addButton.disabled = false;
}

function switchModalThumb(imgSrc, cardElem) {
  const mainImg = document.getElementById('mainModalImg');
  if (mainImg) mainImg.src = imgSrc;
  document.querySelectorAll('.modal-template-card').forEach(t => t.classList.remove('active'));
  if (cardElem) cardElem.classList.add('active');
}

function addFromModalToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const isFreeSize = isFreeSizeProduct(product);
  if (!isFreeSize && !selectedModalSize) {
    showToast('Please select a size first before adding to cart!', 'warning');
    return;
  }
  const targetSize = isFreeSize ? ((product && product.sizes && product.sizes[0]) || 'Free Size') : selectedModalSize;
  quickAddToCart(productId, targetSize);
  closeProductModal();
}

function closeProductModal() { document.getElementById('productModal')?.classList.remove('active'); }
function openSizeChartModal(category = currentProductSizeCategory) {
  const modal = document.getElementById('sizeChartModal');
  if (!modal) return;
  const guides = {
    women: {
      title: "Women's Size Guide",
      note: 'Body measurements in inches. Choose the size that best matches your bust, waist, and hip measurements.',
      columns: ['Size', 'Bust (in)', 'Waist (in)', 'Hip (in)'],
      rows: [['XS', '32–33', '26–27', '35–36'], ['S', '34–35', '28–29', '37–38'], ['M', '36–37', '30–31', '39–40'], ['L', '38–40', '32–34', '41–43'], ['XL', '41–43', '35–37', '44–46']]
    },
    men: {
      title: "Men's Size Guide",
      note: 'Body measurements in inches. For a relaxed fit, consider choosing one size up.',
      columns: ['Size', 'Chest (in)', 'Waist (in)', 'Length (in)'],
      rows: [['S', '36–38', '30–32', '27'], ['M', '38–40', '32–34', '28'], ['L', '40–42', '34–36', '29'], ['XL', '42–44', '36–38', '30'], ['XXL', '44–46', '38–40', '31']]
    },
    kids: {
      title: "Kids' Size Guide",
      note: 'Approximate body measurements. Age ranges are a guide; height is the best fit reference.',
      columns: ['Age range', 'Height (cm)', 'Chest (in)'],
      rows: [['2-3 years', '92-98', '21-22'], ['4-5 years', '104-110', '22-23'], ['6-7 years', '116-122', '24-25'], ['8-9 years', '128-134', '26-27'], ['10-12 years', '140-152', '28-31']]
    },
    footwear: {
      title: 'Footwear Size Guide',
      note: 'Indian shoe sizes with approximate foot length. Measure from heel to the tip of your longest toe.',
      columns: ['India size', 'Foot length (cm)'],
      rows: [['4', '22.9'], ['5', '23.7'], ['6', '24.6'], ['7', '25.4'], ['8', '26.2'], ['9', '27.1'], ['10', '27.9']]
    },
    ethnic: {
      title: 'Ethnic Wear Size Guide',
      note: 'Body measurements in inches. Blouse and kurta sizing may vary by garment style.',
      columns: ['Size', 'Bust (in)', 'Waist (in)', 'Hip (in)'],
      rows: [['XS', '32–33', '26–27', '35–36'], ['S', '34–35', '28–29', '37–38'], ['M', '36–37', '30–31', '39–40'], ['L', '38–40', '32–34', '41–43'], ['XL', '41–43', '35–37', '44–46']]
    }
  };
  const guide = guides[category] || guides.men;
  const title = modal.querySelector('#sizeGuideTitle');
  const content = modal.querySelector('#sizeGuideContent');
  if (title) title.textContent = guide.title;
  if (content) {
    content.innerHTML = `
      <p>${guide.note}</p>
      <div class="size-guide-table-wrap"><table class="size-table">
        <thead><tr>${guide.columns.map(column => `<th>${column}</th>`).join('')}</tr></thead>
        <tbody>${guide.rows.map(row => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<strong>${cell}</strong>` : cell}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>
    `;
  }
  modal.classList.add('active');
}
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
      <img class="profile-brand-logo" src="assets/images/stylemart-logo.png" alt="StyleMart" width="48" height="48">
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
  const address = addressInput?.value.trim() || '';
  const city = cityInput?.value.trim() || '';
  const pincode = pinInput?.value.trim() || '';

  const fieldsToValidate = [];
  if (profileFormMode === 'login') {
    if (nameInput) {
      nameInput.setCustomValidity(/^[a-zA-Z\s]+$/.test(name || '') ? '' : 'Full Name must contain only letters and spaces.');
      fieldsToValidate.push(nameInput);
    }
    if (phoneInput) {
      phoneInput.setCustomValidity(/^[6-9]\d{9}$/.test(phone || '') ? '' : 'Enter a 10-digit mobile number starting with 6, 7, 8, or 9.');
      fieldsToValidate.push(phoneInput);
    }
  }

  if (addressInput) {
    addressInput.setCustomValidity(address.length >= 5 ? '' : 'Enter a complete street address (at least 5 characters).');
    fieldsToValidate.push(addressInput);
  }

  if (cityInput) {
    cityInput.setCustomValidity(/^[a-zA-Z\s]+$/.test(city) ? '' : 'City must contain only letters.');
    fieldsToValidate.push(cityInput);
  }

  if (pinInput) {
    pinInput.setCustomValidity(/^\d{6}$/.test(pincode) ? '' : 'Pincode must contain only numbers and length must be 6 digits.');
    fieldsToValidate.push(pinInput);
  }

  const invalidInput = fieldsToValidate.find(input => input && !input.checkValidity());
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
    wishlistBadge.hidden = true;
    wishlistBadge.style.display = 'none';
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

// Mobile Filter helper alias
window.toggleMobileCategoryFilters = toggleMobileCategoryFilters;
window.closeMobileCategoryFilters = closeMobileCategoryFilters;

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
