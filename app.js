// --------------------------------------------------------------------------
// 1. MEN'S REFERENCE IMAGE TEMPLATES (8 Views per Category)
// Reference: media_1792648672149_e209a014.jpg
// Categories: Casual Shirts, Casual T-Shirts, Formal Shirts, Jeans, Track Pants, T-Shirts
// --------------------------------------------------------------------------
const MEN_IMAGE_TEMPLATES = {
  'casual-shirt': [
    { label: 'Front View', url: 'assets/images/men/casual-shirt/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/casual-shirt/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/casual-shirt/back.jpg' },
    { label: 'Collar Detail', url: 'assets/images/men/casual-shirt/detail-collar.jpg' },
    { label: 'Button Detail', url: 'assets/images/men/casual-shirt/detail-button.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/casual-shirt/detail-pocket.jpg' },
    { label: 'Cuff Detail', url: 'assets/images/men/casual-shirt/detail-cuff.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/casual-shirt/detail-fabric.jpg' }
  ],
  'casual-tshirt': [
    { label: 'Front View', url: 'assets/images/men/casual-tshirt/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/casual-tshirt/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/casual-tshirt/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/men/casual-tshirt/detail-neckline.jpg' },
    { label: 'Sleeve Detail', url: 'assets/images/men/casual-tshirt/detail-sleeve.jpg' },
    { label: 'Logo Detail', url: 'assets/images/men/casual-tshirt/detail-logo.jpg' },
    { label: 'Hem Detail', url: 'assets/images/men/casual-tshirt/detail-hem.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/casual-tshirt/detail-fabric.jpg' }
  ],
  'formal-shirt': [
    { label: 'Front View', url: 'assets/images/men/formal-shirt/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/formal-shirt/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/formal-shirt/back.jpg' },
    { label: 'Collar Detail', url: 'assets/images/men/formal-shirt/detail-collar.jpg' },
    { label: 'Button Detail', url: 'assets/images/men/formal-shirt/detail-button.jpg' },
    { label: 'Cuff Detail', url: 'assets/images/men/formal-shirt/detail-cuff.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/formal-shirt/detail-pocket.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/formal-shirt/detail-fabric.jpg' }
  ],
  'jeans': [
    { label: 'Front View', url: 'assets/images/men/jeans/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/jeans/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/jeans/back.jpg' },
    { label: 'Button Detail', url: 'assets/images/men/jeans/detail-button.jpg' },
    { label: 'Zipper Detail', url: 'assets/images/men/jeans/detail-zipper.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/jeans/detail-pocket.jpg' },
    { label: 'Back Pocket Detail', url: 'assets/images/men/jeans/detail-backpocket.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/jeans/detail-fabric.jpg' }
  ],
  'track-pants': [
    { label: 'Front View', url: 'assets/images/men/track-pants/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/track-pants/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/track-pants/back.jpg' },
    { label: 'Waistband Detail', url: 'assets/images/men/track-pants/detail-waistband.jpg' },
    { label: 'Side Stripe Detail', url: 'assets/images/men/track-pants/detail-sidestripe.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/track-pants/detail-pocket.jpg' },
    { label: 'Ankle Cuff Detail', url: 'assets/images/men/track-pants/detail-anklecuff.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/track-pants/detail-fabric.jpg' }
  ],
  'tshirt': [
    { label: 'Front View', url: 'assets/images/men/tshirt/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/tshirt/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/tshirt/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/men/tshirt/detail-neckline.jpg' },
    { label: 'Sleeve Detail', url: 'assets/images/men/tshirt/detail-sleeve.jpg' },
    { label: 'Hem Detail', url: 'assets/images/men/tshirt/detail-hem.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/tshirt/detail-fabric.jpg' },
    { label: 'Print Detail', url: 'assets/images/men/tshirt/detail-print.jpg' }
  ],
  'hoodie-solid-black': [
    { label: 'Front View', url: 'assets/images/men/hoodie-solid-black/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/hoodie-solid-black/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/hoodie-solid-black/back.jpg' },
    { label: 'Hood Detail', url: 'assets/images/men/hoodie-solid-black/detail-hood.jpg' },
    { label: 'Drawstring Detail', url: 'assets/images/men/hoodie-solid-black/detail-drawstring.jpg' },
    { label: 'Cuff Detail', url: 'assets/images/men/hoodie-solid-black/detail-cuff.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/hoodie-solid-black/detail-pocket.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/hoodie-solid-black/detail-fabric.jpg' }
  ],
  'hoodie-printed-grey': [
    { label: 'Front View', url: 'assets/images/men/hoodie-printed-grey/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/hoodie-printed-grey/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/hoodie-printed-grey/back.jpg' },
    { label: 'Hood Detail', url: 'assets/images/men/hoodie-printed-grey/detail-hood.jpg' },
    { label: 'Print Detail', url: 'assets/images/men/hoodie-printed-grey/detail-print.jpg' },
    { label: 'Drawstring Detail', url: 'assets/images/men/hoodie-printed-grey/detail-drawstring.jpg' },
    { label: 'Cuff Detail', url: 'assets/images/men/hoodie-printed-grey/detail-cuff.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/hoodie-printed-grey/detail-fabric.jpg' }
  ],
  'hoodie-colorblock-navy': [
    { label: 'Front View', url: 'assets/images/men/hoodie-colorblock-navy/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/hoodie-colorblock-navy/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/hoodie-colorblock-navy/back.jpg' },
    { label: 'Hood Detail', url: 'assets/images/men/hoodie-colorblock-navy/detail-hood.jpg' },
    { label: 'Drawstring Detail', url: 'assets/images/men/hoodie-colorblock-navy/detail-drawstring.jpg' },
    { label: 'Color Block Detail', url: 'assets/images/men/hoodie-colorblock-navy/detail-colorblock.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/hoodie-colorblock-navy/detail-pocket.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/hoodie-colorblock-navy/detail-fabric.jpg' }
  ],
  'hoodie-zipup-green': [
    { label: 'Front View', url: 'assets/images/men/hoodie-zipup-green/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/hoodie-zipup-green/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/hoodie-zipup-green/back.jpg' },
    { label: 'Hood Detail', url: 'assets/images/men/hoodie-zipup-green/detail-hood.jpg' },
    { label: 'Zipper Detail', url: 'assets/images/men/hoodie-zipup-green/detail-zipper.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/hoodie-zipup-green/detail-pocket.jpg' },
    { label: 'Cuff Detail', url: 'assets/images/men/hoodie-zipup-green/detail-cuff.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/hoodie-zipup-green/detail-fabric.jpg' }
  ],
  'hoodie-graphic-beige': [
    { label: 'Front View', url: 'assets/images/men/hoodie-graphic-beige/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/hoodie-graphic-beige/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/hoodie-graphic-beige/back.jpg' },
    { label: 'Hood Detail', url: 'assets/images/men/hoodie-graphic-beige/detail-hood.jpg' },
    { label: 'Drawstring Detail', url: 'assets/images/men/hoodie-graphic-beige/detail-drawstring.jpg' },
    { label: 'Print Detail', url: 'assets/images/men/hoodie-graphic-beige/detail-print.jpg' },
    { label: 'Cuff Detail', url: 'assets/images/men/hoodie-graphic-beige/detail-cuff.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/hoodie-graphic-beige/detail-fabric.jpg' }
  ],
  'hoodies': [
    { label: 'Front View', url: 'assets/images/men/hoodie-solid-black/front.jpg' },
    { label: 'Side View', url: 'assets/images/men/hoodie-solid-black/side.jpg' },
    { label: 'Back View', url: 'assets/images/men/hoodie-solid-black/back.jpg' },
    { label: 'Hood Detail', url: 'assets/images/men/hoodie-solid-black/detail-hood.jpg' },
    { label: 'Drawstring Detail', url: 'assets/images/men/hoodie-solid-black/detail-drawstring.jpg' },
    { label: 'Cuff Detail', url: 'assets/images/men/hoodie-solid-black/detail-cuff.jpg' },
    { label: 'Pocket Detail', url: 'assets/images/men/hoodie-solid-black/detail-pocket.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/men/hoodie-solid-black/detail-fabric.jpg' }
  ]
};

// --------------------------------------------------------------------------
// 1B. WOMEN'S REFERENCE IMAGE TEMPLATES (8 Views per Category)
// Reference: media_1792669992763_5c3bbd84.jpg
// Categories: Casual Dresses, Western Dresses, Ethnic Wear, Tops & Blouses, Kurtis, Party Wear & Gowns
// --------------------------------------------------------------------------
const WOMEN_IMAGE_TEMPLATES = {
  'casual-dress': [
    { label: 'Front View', url: 'assets/images/women/casual-dress/front.jpg' },
    { label: 'Side View', url: 'assets/images/women/casual-dress/side.jpg' },
    { label: 'Back View', url: 'assets/images/women/casual-dress/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/women/casual-dress/detail-neckline.jpg' },
    { label: 'Sleeve Detail', url: 'assets/images/women/casual-dress/detail-sleeve.jpg' },
    { label: 'Back Detail', url: 'assets/images/women/casual-dress/detail-back.jpg' },
    { label: 'Waist Detail', url: 'assets/images/women/casual-dress/detail-waist.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/women/casual-dress/detail-fabric.jpg' }
  ],
  'western-dress': [
    { label: 'Front View', url: 'assets/images/women/western-dress/front.jpg' },
    { label: 'Side View', url: 'assets/images/women/western-dress/side.jpg' },
    { label: 'Back View', url: 'assets/images/women/western-dress/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/women/western-dress/detail-neckline.jpg' },
    { label: 'Strap Detail', url: 'assets/images/women/western-dress/detail-strap.jpg' },
    { label: 'Ruffle Detail', url: 'assets/images/women/western-dress/detail-ruffle.jpg' },
    { label: 'Back Tie Detail', url: 'assets/images/women/western-dress/detail-backtie.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/women/western-dress/detail-fabric.jpg' }
  ],
  'ethnic-wear': [
    { label: 'Front View', url: 'assets/images/women/ethnic-wear/front.jpg' },
    { label: 'Side View', url: 'assets/images/women/ethnic-wear/side.jpg' },
    { label: 'Back View', url: 'assets/images/women/ethnic-wear/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/women/ethnic-wear/detail-neckline.jpg' },
    { label: 'Embroidery Detail', url: 'assets/images/women/ethnic-wear/detail-embroidery.jpg' },
    { label: 'Sleeve Detail', url: 'assets/images/women/ethnic-wear/detail-sleeve.jpg' },
    { label: 'Dupatta Detail', url: 'assets/images/women/ethnic-wear/detail-dupatta.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/women/ethnic-wear/detail-fabric.jpg' }
  ],
  'tops-blouses': [
    { label: 'Front View', url: 'assets/images/women/tops-blouses/front.jpg' },
    { label: 'Side View', url: 'assets/images/women/tops-blouses/side.jpg' },
    { label: 'Back View', url: 'assets/images/women/tops-blouses/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/women/tops-blouses/detail-neckline.jpg' },
    { label: 'Sleeve Detail', url: 'assets/images/women/tops-blouses/detail-sleeve.jpg' },
    { label: 'Smocking Detail', url: 'assets/images/women/tops-blouses/detail-smocking.jpg' },
    { label: 'Print Detail', url: 'assets/images/women/tops-blouses/detail-print.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/women/tops-blouses/detail-fabric.jpg' }
  ],
  'kurtis': [
    { label: 'Front View', url: 'assets/images/women/kurtis/front.jpg' },
    { label: 'Side View', url: 'assets/images/women/kurtis/side.jpg' },
    { label: 'Back View', url: 'assets/images/women/kurtis/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/women/kurtis/detail-neckline.jpg' },
    { label: 'Button Detail', url: 'assets/images/women/kurtis/detail-button.jpg' },
    { label: 'Sleeve Detail', url: 'assets/images/women/kurtis/detail-sleeve.jpg' },
    { label: 'Print Detail', url: 'assets/images/women/kurtis/detail-print.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/women/kurtis/detail-fabric.jpg' }
  ],
  'party-gown': [
    { label: 'Front View', url: 'assets/images/women/party-gown/front.jpg' },
    { label: 'Side View', url: 'assets/images/women/party-gown/side.jpg' },
    { label: 'Back View', url: 'assets/images/women/party-gown/back.jpg' },
    { label: 'Neckline Detail', url: 'assets/images/women/party-gown/detail-neckline.jpg' },
    { label: 'Sequins Detail', url: 'assets/images/women/party-gown/detail-sequins.jpg' },
    { label: 'Sleeve Detail', url: 'assets/images/women/party-gown/detail-sleeve.jpg' },
    { label: 'Back Detail', url: 'assets/images/women/party-gown/detail-back.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/women/party-gown/detail-fabric.jpg' }
  ],
    'ethnic-sarees': [
    { label: 'Front Drape View', url: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/sari/n/n/u/free-silk-saree-kanjivaram-silk-unstitched-original-imahha4mt9mwcbvn.jpeg?q=70' },
    { label: 'Pallu View', url: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/sari/g/x/i/free-banarasi-silk-saree-kanjivaram-silk-unstitched-original-imahhb85fszzgnf7.jpeg?q=70' },
    { label: 'Pleats & Border Detail', url: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/sari/6/f/y/adjustable-xs-6xl-114rs477a-samah-unstitched-original-imahpcsqu2kzg59z.jpeg?q=70' },
    { label: 'Fabric Details', url: 'https://rukmini3.flixcart.com/image/1200/1200/xif0q/sari/c/7/2/free-pkp-299-001-devatvam-surat-unstitched-original-imahrgq7dmy4jhnk.jpeg?q=90' },
    { label: 'Zari Weave Detail', url: 'https://rukmini3.flixcart.com/image/1200/1200/xif0q/sari/w/o/m/free-latest-design-saree-for-women-bond-unstitched-original-imagpx6cfnsfwggz.jpeg?q=90' },
    { label: 'Blouse Contrast View', url: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/sari/r/l/c/free-sc-nv-or-saricholi-unstitched-original-imahzbkhgvzm9sjs.jpeg?q=70' }
  ],
  'indigo-anarkali-suit': [
    { label: 'Front View', url: 'assets/images/women/indigo-anarkali-suit/front.jpg' },
    { label: 'Back View', url: 'assets/images/women/indigo-anarkali-suit/back.jpg' },
    { label: 'Side & Flare View', url: 'assets/images/women/indigo-anarkali-suit/side.jpg' },
    { label: 'Fabric & Neckline Detail', url: 'assets/images/women/indigo-anarkali-suit/detail-fabric.jpg' },
    { label: 'Editorial View', url: 'assets/images/women/indigo-anarkali-suit/lifestyle.jpg' }
  ]
};

// --------------------------------------------------------------------------
// 2. PRODUCT DATABASE
// --------------------------------------------------------------------------
const PRODUCTS_DATA = [
  {
    "id": "sm-k-boy-02",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "UNIQUEBY SANTU Boys Festive & Party Kurta and Pyjama Set",
    "brand": "UNIQUEBY SANTU",
    "category": "kids",
    "subcategory": "boy",
    "price": 291,
    "originalPrice": 999,
    "discount": 71,
    "rating": 4.3,
    "reviewsCount": 44,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/3/m/v/6-7-years-yellow-uniqueby-santu-original-imahqxwg5bapbgdf.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/3/m/v/6-7-years-yellow-uniqueby-santu-original-imahqxwg5bapbgdf.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/r/g/z/6-7-years-yellow-uniqueby-santu-original-imahqxwgazcjgasz.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/1/k/k/12-18-months-yellow-uniqueby-santu-original-imahqxwg3ryn3zez.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "YELLOW"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 14,
    "description": "Buy UNIQUEBY SANTU Boys Festive & Party Kurta and Pyjama Set for Rs.999.0 online. UNIQUEBY SANTU Boys Festive & Party Kurta and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-w-anarkali-01",
    "showInDealsOfDay": true,
    "showInAllFashion": true,
    "title": "Biba Women Indigo Blue Pure Cotton Printed Anarkali Kurta Set with Dupatta",
    "brand": "Biba",
    "category": "women",
    "subcategory": "ethnic wear",
    "price": 1899,
    "originalPrice": 4299,
    "discount": 56,
    "rating": 4.8,
    "reviewsCount": 640,
    "image": "assets/images/women/indigo-anarkali-suit/front.jpg",
    "thumbs": [
      {
        "label": "Front View",
        "url": "assets/images/women/indigo-anarkali-suit/front.jpg"
      },
      {
        "label": "Back View",
        "url": "assets/images/women/indigo-anarkali-suit/back.jpg"
      },
      {
        "label": "Side & Flare View",
        "url": "assets/images/women/indigo-anarkali-suit/side.jpg"
      },
      {
        "label": "Fabric Details",
        "url": "assets/images/women/indigo-anarkali-suit/detail-fabric.jpg"
      },
      {
        "label": "Editorial Styling",
        "url": "assets/images/women/indigo-anarkali-suit/lifestyle.jpg"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Indigo Blue"
    ],
    "tags": [
      "Trending",
      "Flash Deal",
      "Ethnic Wear",
      "Anarkali Set",
      "Pure Cotton",
      "Best Seller",
      "Women Dresses"
    ],
    "isFlashSale": true,
    "stockLeft": 12,
    "description": "Artisanal indigo blue pure cotton printed Anarkali kurta set featuring traditional floral block motifs, structured V-neckline with geometric border trimming, coordinating straight trousers, and an airy matching dupatta.",
    "fabric": "100% Pure Cambric Cotton with Soft Voile Dupatta"
  },
  {
    "id": "sm-m-kurta-02",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "MENSKURTA Men Embellished Straight Kurta",
    "brand": "MENSKURTA",
    "category": "ethnic",
    "subcategory": "men's kurta",
    "price": 366,
    "originalPrice": 1199,
    "discount": 69,
    "rating": 4.5,
    "reviewsCount": 1702,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/k/r/p/s-lakhnawi-rama-blue-menskurta-original-imahmpdkntppa4zf.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/k/r/p/s-lakhnawi-rama-blue-menskurta-original-imahmpdkntppa4zf.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/c/3/m/xl-c-men-lakhnaw-kurta-progetto-original-imahgnucryz7gg4d.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/i/g/s/xxl-c-men-lakhnaw-kurta-progetto-original-imahgnuc5bh8w6kf.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/0/s/n/xl-c-men-lakhnaw-kurta-progetto-original-imahgnuc8pngqktg.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/a/s/a/l-kfm-kurta-s-blue-kurtaformen-original-imahmpcza7mngz7w.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "RAMA BLUE"
    ],
    "tags": [
      "Ethnic Wear",
      "MEN'S KURTA",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 18,
    "description": "MENSKURTA Men Embellished Straight Kurta",
    "fabric": "100% Pure Cambric Cotton Blend"
  },
  {
    "id": "sm-k-girl-02",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "KDM FASHION Girls Festive & Party Kurta and Sharara Set",
    "brand": "KDM FASHION",
    "category": "kids",
    "subcategory": "girl",
    "price": 446,
    "originalPrice": 1999,
    "discount": 78,
    "rating": 4.1,
    "reviewsCount": 3016,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/n/c/2/13-14-years-k-d-m-kids-red-sarasara-set-kdm-fashion-resized-original-imahhzsdkhkyjzbh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/n/c/2/13-14-years-k-d-m-kids-red-sarasara-set-kdm-fashion-resized-original-imahhzsdkhkyjzbh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/x/c/a/7-8-years-kids-kurti-and-sarara-set-kdmcollection-original-imahrhss73c9yqba.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/t/u/s/7-8-years-k-d-m-kids-red-sarasara-set-kdm-fashion-original-imahrpjfppzdmucw.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/i/6/y/7-8-years-k-d-m-kids-red-sarasara-set-kdm-fashion-original-imahrpjfw7fv3kzk.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/8/d/v/6-7-years-kids-kurti-sarara-set-kdmcollection-original-imahrhtn2rhp9mah.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Red"
    ],
    "tags": [
      "Kids",
      "Girls' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "description": "Buy KDM FASHION Girls Festive & Party Kurta and Sharara Set for Rs.1899.0 online. KDM FASHION Girls Festive & Party Kurta and Sharara Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-girl-03",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "HouseOfCommon Girls Festive & Party Kurta and Sharara Set",
    "brand": "HouseOfCommon",
    "category": "kids",
    "subcategory": "girl",
    "price": 434,
    "originalPrice": 1299,
    "discount": 67,
    "rating": 4.1,
    "reviewsCount": 2448,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/i/k/y/9-10-years-hoc-101-house-of-common-original-imahpvs6ehxvfhpf.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/i/k/y/9-10-years-hoc-101-house-of-common-original-imahpvs6ehxvfhpf.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/g/b/u/12-13-years-hoc-101-house-of-common-original-imahpuj4scjgjxem.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/o/d/7/12-13-years-hoc-101-house-of-common-original-imahpuj4wsbfzkrp.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "BLUE"
    ],
    "tags": [
      "Kids",
      "Girls' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 11,
    "description": "Buy HouseOfCommon Girls Festive & Party Kurta and Sharara Set for Rs.1699.0 online. HouseOfCommon Girls Festive & Party Kurta and Sharara Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-girl-05",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "SHIVAM MINI MALL Girls Casual, Festive & Party, Formal, Wedding Kurta and Palazzo Set",
    "brand": "SHIVAM MINI MALL",
    "category": "kids",
    "subcategory": "girl",
    "price": 643,
    "originalPrice": 899,
    "discount": 28,
    "rating": 3.9,
    "reviewsCount": 150,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/a/q/z/7-8-years-pari-purple-8-shivam-mini-mall-original-imahrqnfvhupbzzv.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/a/q/z/7-8-years-pari-purple-8-shivam-mini-mall-original-imahrqnfvhupbzzv.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-lehenga-choli/h/6/d/9-10-years-12-pari-nevy-blue-24-9-10-shivam-mini-mall-original-imahrcxreuh8w5sr.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-lehenga-choli/n/z/i/8-9-years-12-pari-nevy-blue-24-8-9-shivam-mini-mall-original-imahrcxrqgyuxhez.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-lehenga-choli/5/q/q/8-9-years-12-pari-nevy-blue-24-8-9-shivam-mini-mall-original-imahrcxryv68g5nq.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-lehenga-choli/5/t/4/4-5-years-12-pari-nevy-blue-24-3-4-shivam-mini-mall-original-imahrcxrygfkkvnf.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "PURPLE"
    ],
    "tags": [
      "Kids",
      "Girls' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "Buy SHIVAM MINI MALL Girls Casual, Festive & Party, Formal, Wedding Kurta and Palazzo Set for Rs.1999.0 online. SHIVAM MINI MALL Girls Casual, Festive & Party, Formal, Wedding Kurta and Palazzo Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-m-ts-09",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "nykrafashion Printed Men Round Neck Black T-Shirt",
    "brand": "nykrafashion",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 235,
    "originalPrice": 499,
    "discount": 53,
    "rating": 3.9,
    "reviewsCount": 150,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/s/o/w/s-newyork23-nykrafashion-original-imahrzamtcdvg8pw.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/s/o/w/s-newyork23-nykrafashion-original-imahrzamtcdvg8pw.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/5/v/x/m-newyork23-nykrafashion-original-imahrzamvy3hevxa.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/h/i/a/s-newyork23-nykrafashion-original-imahrzamqhgtscae.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/w/1/5/s-newyork23-nykrafashion-original-imahrzamj9nphrth.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 5,
    "description": "nykrafashion Printed Men Round Neck Black T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-m-ts-10",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "CINE ELEVEN Printed Men Round Neck Black T-Shirt",
    "brand": "CINE ELEVEN",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 220,
    "originalPrice": 1999,
    "discount": 89,
    "rating": 4.3,
    "reviewsCount": 150,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/x/i/c/s-005-cine-eleven-original-imahqpwjdnwcygqn.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/x/i/c/s-005-cine-eleven-original-imahqpwjdnwcygqn.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/x/k/g/xl-005-cine-eleven-original-imahqpwjyxj3tejg.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/l/a/e/m-005-cine-eleven-original-imahqpwjchcxzdb6.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "BLACK"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 4,
    "description": "CINE ELEVEN Printed Men Round Neck Black T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-saree-02",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "Pionex fab Embellished Bollywood Satin Saree",
    "brand": "Pionex fab",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 775,
    "originalPrice": 2999,
    "discount": 74,
    "rating": 4.1,
    "reviewsCount": 18,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/i/l/g/free-fendy-satin-embroidered-bridal-saree-em-kaya-pionex-fab-original-imahpapdhrw3pmhe.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/i/l/g/free-fendy-satin-embroidered-bridal-saree-em-kaya-pionex-fab-original-imahpapdhrw3pmhe.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/k/j/v/free-fendy-satin-embroidered-bridal-saree-em-kaya-pionex-fab-original-imahpapdw4yp8mzg.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/k/j/5/free-fendy-satin-embroidered-bridal-saree-em-kaya-pionex-fab-original-imahpapdszc25heh.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Maroon"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 8,
    "description": "Pionex fab Embellished Bollywood Satin Saree",
    "fabric": "Smooth Flowing Satin Silk"
  },
  {
    "id": "sm-saree-13",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "GajGajra Woven Kasavu Silk Blend Saree",
    "brand": "GajGajra",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 353,
    "originalPrice": 2999,
    "discount": 88,
    "rating": 4.4,
    "reviewsCount": 157,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/q/5/w/free-jacquard-silk-blend-kanjivaram-banarasi-dailywear-saree-159-resized-original-imaheqrzeazdpafe.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/q/5/w/free-jacquard-silk-blend-kanjivaram-banarasi-dailywear-saree-159-resized-original-imaheqrzeazdpafe.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/y/o/x/free-jacquard-silk-blend-kanjivaram-banarasi-dailywear-saree-159-original-imaheqrz8gvkhgzb.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/r/e/d/free-jacquard-silk-blend-kanjivaram-banarasi-dailywear-saree-159-original-imaheqrz5ejhqzpv.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/r/f/e/free-jacquard-silk-blend-kanjivaram-banarasi-dailywear-saree-159-original-imaheqrzagzpyxma.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/v/o/h/free-jacquard-silk-blend-kanjivaram-banarasi-dailywear-saree-159-original-imaheqrzznvffyyw.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "ROYAL BLUE"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 13,
    "description": "GajGajra Woven Kasavu Silk Blend Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-m-ts-11",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "Woops studio! Printed Men Round Neck Black, Red T-Shirt",
    "brand": "Woops studio!",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 353,
    "originalPrice": 1499,
    "discount": 76,
    "rating": 3.7,
    "reviewsCount": 2416,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/l/g/h/l-spider-woops-studio-original-imahzvf7a4hcyubh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/l/g/h/l-spider-woops-studio-original-imahzvf7a4hcyubh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/a/0/a/l-spider-woops-studio-original-imahzvf7s6ne6xnf.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/9/b/e/l-spider-woops-studio-original-imahzvf7hugmh6fy.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/e/t/l/l-spider-woops-studio-original-imahzvf79hffhhza.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/e/m/d/l-spider-woops-studio-original-imahzvf7vfuh2ttn.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black, Red"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 4,
    "description": "Woops studio! Printed Men Round Neck Black, Red T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-saree-01",
    "showInDealsOfDay": true,
    "showInAllFashion": true,
    "title": "Kriti Woven, Temple Border Bollywood Pure Silk, Silk Blend Saree",
    "brand": "Kriti",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 589,
    "originalPrice": 1299,
    "discount": 55,
    "rating": 4.3,
    "reviewsCount": 120,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/n/g/9/free-sfk2-kriti-unstitched-original-imahs4mgzjv73dgq.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/n/g/9/free-sfk2-kriti-unstitched-original-imahs4mgzjv73dgq.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/h/k/6/free-sfk2-kriti-unstitched-original-imahs4mg8syy3yka.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/n/f/a/free-sfk2-kriti-unstitched-original-imahs4mguyucgpg3.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/y/k/4/free-sfk2-kriti-unstitched-original-imahs4mgfny2wkb5.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/o/y/f/free-sfk2-kriti-unstitched-original-imahs4mgnc4h2zbf.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Cream"
    ],
    "tags": [
      "Flash Deal",
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": true,
    "stockLeft": 14,
    "description": "Kriti Woven, Temple Border Bollywood Pure Silk, Silk Blend Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-05",
    "showInDealsOfDay": true,
    "showInAllFashion": true,
    "title": "J6 Designers Printed Madhubani Cotton Silk Saree",
    "brand": "J6 Designers",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 623,
    "originalPrice": 5999,
    "discount": 90,
    "rating": 4.5,
    "reviewsCount": 103,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/b/x/c/free-riya-j6-designers-unstitched-original-imahmayrakspqm2t.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/b/x/c/free-riya-j6-designers-unstitched-original-imahmayrakspqm2t.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/l/s/2/free-riya-j6-designers-unstitched-original-imahmaysbrbzuymj.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/p/s/n/free-riya-j6-designers-unstitched-original-imahmayrpwfgknw5.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/7/s/z/free-riya-j6-designers-unstitched-original-imahmayrttvd3ftv.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/k/s/s/free-riya-j6-designers-unstitched-original-imahmayrxwhz2vdh.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Green"
    ],
    "tags": [
      "Flash Deal",
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": true,
    "stockLeft": 6,
    "description": "J6 Designers Printed Madhubani Cotton Silk Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-k-boy-01",
    "showInDealsOfDay": true,
    "showInAllFashion": true,
    "title": "New Ekta Dresses Boys Festive & Party Kurta and Dhoti Pant Set",
    "brand": "New Ekta Dresses",
    "category": "kids",
    "subcategory": "boy",
    "price": 366,
    "originalPrice": 999,
    "discount": 63,
    "rating": 3.9,
    "reviewsCount": 531,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-kids-ethnic-set/w/9/n/4-5-years-yellow-pant-new-01-new-ekta-dresses-original-imahgfthq7htqpzg.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-kids-ethnic-set/w/9/n/4-5-years-yellow-pant-new-01-new-ekta-dresses-original-imahgfthq7htqpzg.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/u/1/g/4-5-years-yellow-pant-new03-new-ekta-dresses-original-imahjufvydgugr3f.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-kids-ethnic-set/f/q/s/5-6-years-yellow-pant-new-01-new-ekta-dresses-original-imahgfthqwzhuavr.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-kids-ethnic-set/j/l/e/5-6-years-yellow-pant-new-01-new-ekta-dresses-original-imahgfthby6mh6ph.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Beige"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic",
      "Flash Deal"
    ],
    "isFlashSale": true,
    "stockLeft": 14,
    "description": "Buy New Ekta Dresses Boys Festive & Party Kurta and Dhoti Pant Set for Rs.999.0 online. New Ekta Dresses Boys Festive & Party Kurta and Dhoti Pant Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-girl-01",
    "showInDealsOfDay": true,
    "showInAllFashion": true,
    "title": "MIMI CLOTHINGS Girls Festive & Party Kurta and Sharara Set",
    "brand": "MIMI CLOTHINGS",
    "category": "kids",
    "subcategory": "girl",
    "price": 412,
    "originalPrice": 1599,
    "discount": 74,
    "rating": 4.3,
    "reviewsCount": 1849,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/7/c/v/7-8-years-ks-red-08-st-mimi-clothings-resized-original-imahdcqfaya2vzhh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/7/c/v/7-8-years-ks-red-08-st-mimi-clothings-resized-original-imahdcqfaya2vzhh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/z/l/h/7-8-years-ks-red-08-st-mimi-clothings-original-imahdcqfbuyp8ggq.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/2/w/8/2-3-years-ks-red-08-st-mimi-clothings-original-imahdcqfftnhs7rv.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/f/t/d/7-8-years-ks-red-08-st-mimi-clothings-original-imahdcqfkgpngzcx.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/p/6/s/7-8-years-ks-red-08-st-mimi-clothings-original-imahdcqfqqrztvrk.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "RED"
    ],
    "tags": [
      "Kids",
      "Girls' Ethnic",
      "Kids Ethnic",
      "Flash Deal"
    ],
    "isFlashSale": true,
    "stockLeft": 8,
    "description": "Buy MIMI CLOTHINGS Girls Festive & Party Kurta and Sharara Set for Rs.999.0 online. MIMI CLOTHINGS Girls Festive & Party Kurta and Sharara Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-fw-sp-02",
    "showInDealsOfDay": true,
    "showInAllFashion": true,
    "title": "U.S. POLO ASSN. Running Shoes For Men",
    "brand": "U.S. POLO ASSN.",
    "category": "footwear",
    "subcategory": "sports",
    "price": 3919,
    "originalPrice": 8999,
    "discount": 56,
    "rating": 3.8,
    "reviewsCount": 114,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/c/0/-watermarked-original-imahh6wf28fhtjf2.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/c/0/-watermarked-original-imahh6wf28fhtjf2.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/1/p/b/-original-imahh6wewhkzx4s4.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/a/n/-original-imahh6wfac2byzbq.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/e/c/-original-imahh6wfar6wbz5c.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/e/w/j/-original-imahh6wfbueqhpau.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "WHITE"
    ],
    "tags": [
      "Footwear",
      "Sports",
      "Men's Footwear",
      "Flash Deal"
    ],
    "isFlashSale": true,
    "stockLeft": 10,
    "description": "U.S. POLO ASSN. Running Shoes For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-m-kurta-01",
    "showInDealsOfDay": true,
    "showInAllFashion": true,
    "title": "ellark Men Printed, Floral Print, Woven Design, Self Design Straight Kurta",
    "brand": "ellark",
    "category": "ethnic",
    "subcategory": "men's kurta",
    "price": 423,
    "originalPrice": 999,
    "discount": 58,
    "rating": 4.4,
    "reviewsCount": 915,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/z/d/u/s-only-daman-ellark-resized-original-imahknsj3wkrhyhh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/z/d/u/s-only-daman-ellark-resized-original-imahknsj3wkrhyhh.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/s/y/f/s-only-daman-ellark-original-imahknsg9s8ggquk.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/o/o/2/s-only-daman-ellark-original-imahknshmftgkgfy.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/a/7/k/s-only-daman-ellark-original-imahknsfthjzfq83.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/o/n/m/l-only-new-lp-hiknock-original-imahf94jahzpczbx.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Multicolor 5"
    ],
    "tags": [
      "Flash Deal",
      "Ethnic Wear",
      "MEN'S KURTA",
      "Authentic Fabric"
    ],
    "isFlashSale": true,
    "stockLeft": 11,
    "description": "ellark Men Printed, Floral Print, Woven Design, Self Design Straight Kurta",
    "fabric": "100% Pure Cambric Cotton Blend"
  },
  {
    "id": "sm-saree-09",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "AVYAANA Graphic Print, Geometric Print, Woven, Temple Border Bollywood Tissue Saree",
    "brand": "AVYAANA",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 699,
    "originalPrice": 2999,
    "discount": 77,
    "rating": 4.6,
    "reviewsCount": 120,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/n/e/u/free-ct002-avyaana-unstitched-original-imahr7tyxsgaua5q.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/n/e/u/free-ct002-avyaana-unstitched-original-imahr7tyxsgaua5q.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/q/z/g/free-ct002-avyaana-unstitched-original-imahr7tytnxfuhxv.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/t/b/u/free-ct002-avyaana-unstitched-original-imahr7tys7javhct.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/j/7/t/free-ct002-avyaana-unstitched-original-imahr7tyrxhd3zka.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/r/3/l/free-ct002-avyaana-unstitched-original-imahr7tyc57mdxad.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "ORANGE"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 14,
    "description": "AVYAANA Graphic Print, Geometric Print, Woven, Temple Border Bollywood Tissue Saree",
    "fabric": "Pure Cotton & Silk Blend"
  },
  {
    "id": "sm-k-boy-03",
    "showInDealsOfDay": true,
    "showInAllFashion": false,
    "title": "Sangria Boys Festive & Party Kurta and Pyjama Set",
    "brand": "Sangria",
    "category": "kids",
    "subcategory": "boy",
    "price": 562,
    "originalPrice": 1599,
    "discount": 65,
    "rating": 4.5,
    "reviewsCount": 12,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/v/7/v/4-5-years-39516812-sangria-original-imahkhzfsbwt4ckw.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/v/7/v/4-5-years-39516812-sangria-original-imahkhzfsbwt4ckw.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/y/4/g/4-5-years-39516812-sangria-original-imahkhzfn3zx988z.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/5/q/o/4-5-years-39516812-sangria-original-imahkhzfjtnvarwf.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/4/e/w/4-5-years-39516812-sangria-original-imahkhzfcnvhe5ts.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Purple"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic",
      "Flash Deal"
    ],
    "isFlashSale": true,
    "stockLeft": 12,
    "description": "Buy Sangria Boys Festive & Party Kurta and Pyjama Set for Rs.2499.0 online. Sangria Boys Festive & Party Kurta and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-girl-04",
    "showInDealsOfDay": true,
    "showInAllFashion": false,
    "title": "Pinkshierd Girls Wedding Kurta and Pyjama Set",
    "brand": "Pinkshierd",
    "category": "kids",
    "subcategory": "girl",
    "price": 434,
    "originalPrice": 999,
    "discount": 57,
    "rating": 4.1,
    "reviewsCount": 1982,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/w/r/u/11-12-years-ssf-0021-pinkshierd-original-imahkvp2cgjzubx2.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/w/r/u/11-12-years-ssf-0021-pinkshierd-original-imahkvp2cgjzubx2.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/9/h/s/11-12-years-ssf-0021-pinkshierd-original-imahkvp2zbmmsthr.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/y/c/x/11-12-years-ssf-0021-pinkshierd-original-imahkvp2zsqde5vf.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/8/i/n/11-12-years-ssf-0021-pinkshierd-original-imahkvp2yefstfyc.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/3/u/k/11-12-years-ssf-0021-pinkshierd-original-imahkvp25dh4e9jw.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Sky"
    ],
    "tags": [
      "Kids",
      "Girls' Ethnic",
      "Kids Ethnic",
      "Flash Deal"
    ],
    "isFlashSale": true,
    "stockLeft": 5,
    "description": "Buy Pinkshierd Girls Wedding Kurta and Pyjama Set for Rs.1699.0 online. Pinkshierd Girls Wedding Kurta and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-m-tshirt-01",
    "showInDealsOfDay": true,
    "showInAllFashion": false,
    "title": "DIMMY Men Solid A-line Kurta",
    "brand": "DIMMY",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 363,
    "originalPrice": 999,
    "discount": 64,
    "rating": 4.2,
    "reviewsCount": 987,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/f/i/m/l-liop03-dimmy-resized-original-imahgw9dxyfqs8zd.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/f/i/m/l-liop03-dimmy-resized-original-imahgw9dxyfqs8zd.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/u/5/n/l-liop03-dimmy-original-imahgw9dhzzjgb5t.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/z/z/w/l-liop03-dimmy-original-imahgw9dzxkgy6ee.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/r/b/t/l-liop03-dimmy-original-imahgw9dshvgcphh.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "BLACK"
    ],
    "tags": [
      "Flash Deal",
      "T-SHIRTS",
      "Authentic Fabric"
    ],
    "isFlashSale": true,
    "stockLeft": 7,
    "description": "DIMMY Men Solid A-line Kurta",
    "fabric": "100% Pure Cambric Cotton Blend"
  },
  {
    "id": "sm-m-ts-08",
    "showInDealsOfDay": true,
    "showInAllFashion": false,
    "title": "WROGN Solid Men Polo Neck Dark Green T-Shirt",
    "brand": "WROGN",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 419,
    "originalPrice": 1199,
    "discount": 65,
    "rating": 4.1,
    "reviewsCount": 556,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/u/1/j/-original-imahs3hwhvawrgwh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/u/1/j/-original-imahs3hwhvawrgwh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/n/1/d/m-wsts013bf-wrogn-original-imah2uqfbj2xewd5.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/v/q/j/m-wsts013bf-wrogn-original-imah2uqfcx4z3trx.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/r/i/0/m-wsts013bf-wrogn-original-imah2uqfymqcqq84.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/q/e/b/m-wsts013bf-wrogn-original-imah2uqftcqe3ee9.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "DARK GREEN"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts",
      "Flash Deal"
    ],
    "isFlashSale": true,
    "stockLeft": 7,
    "description": "WROGN Solid Men Polo Neck Dark Green T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-saree-03",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "FLIPSAFE Digital Print, Floral Print, Paisley, Color Block, Blocked Printed Bollywood Art Silk Saree",
    "brand": "FLIPSAFE",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 478,
    "originalPrice": 2999,
    "discount": 84,
    "rating": 4.2,
    "reviewsCount": 120,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/p/q/n/free-premium-designer-soft-silk-digital-print-saree-for-women-original-imahrh874qq4mvxz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/p/q/n/free-premium-designer-soft-silk-digital-print-saree-for-women-original-imahrh874qq4mvxz.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/x/q/p/free-premium-designer-soft-silk-digital-print-saree-for-women-original-imahrh86z7p9vg7n.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/h/d/v/free-premium-designer-soft-silk-digital-print-saree-for-women-original-imahrh87zb6havh5.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/g/b/0/free-premium-designer-soft-silk-digital-print-saree-for-women-original-imahrh86wchhmkcd.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Multicolor"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 13,
    "description": "FLIPSAFE Digital Print, Floral Print, Paisley, Color Block, Blocked Printed Bollywood Art Silk Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-04",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Acuity Woven Kanjivaram Art Silk, Pure Silk Saree",
    "brand": "Acuity",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 566,
    "originalPrice": 3999,
    "discount": 86,
    "rating": 4.4,
    "reviewsCount": 37,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/1/v/v/free-women-s-banarasi-kanjivaram-saree-acuity-unstitched-original-imahrjmmaj24cay5.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/1/v/v/free-women-s-banarasi-kanjivaram-saree-acuity-unstitched-original-imahrjmmaj24cay5.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/n/u/f/free-women-s-banarasi-kanjivaram-saree-acuity-unstitched-original-imahrjmme3n8f8bs.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/i/m/m/free-women-s-banarasi-kanjivaram-saree-acuity-unstitched-original-imahrjmmxyepgz6h.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/c/y/l/free-women-s-banarasi-kanjivaram-saree-acuity-unstitched-original-imahrjmmzxvryzsw.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/m/u/s/free-women-s-banarasi-kanjivaram-saree-acuity-unstitched-original-imahqtydfdhymgzv.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Teal, Yellow"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 18,
    "description": "Acuity Woven Kanjivaram Art Silk, Pure Silk Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-06",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "YASHIKA Woven Kanjivaram Art Silk, Jacquard Saree",
    "brand": "YASHIKA",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 439,
    "originalPrice": 2599,
    "discount": 83,
    "rating": 4.3,
    "reviewsCount": 638,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/w/g/i/free-fk-ys-p2-maliya-red-new-yashika-unstitched-original-imah3ck6xczeutqf.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/w/g/i/free-fk-ys-p2-maliya-red-new-yashika-unstitched-original-imah3ck6xczeutqf.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/g/1/e/free-fk-ys-p2-maliya-red-new-yashika-unstitched-original-imah3ck6ut6fpyfw.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/6/s/r/free-fk-ys-p2-maliya-red-new-yashika-unstitched-original-imah3ck6uwbfj9xs.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/4/y/f/free-fk-ys-p1-maliya-red-new-yashika-unstitched-original-imahgubsygdbu7np.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/p/w/b/free-fk-ys-p2-maliya-red-new-yashika-unstitched-original-imah3ck6k7vgaaff.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "FK-YS-P1-MALIYA RED NEW-Red"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 8,
    "description": "YASHIKA Woven Kanjivaram Art Silk, Jacquard Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-07",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Houri Fab Woven Banarasi Jacquard Saree",
    "brand": "Houri Fab",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 378,
    "originalPrice": 2499,
    "discount": 85,
    "rating": 4,
    "reviewsCount": 5,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/l/t/2/free-hathi-houri-fab-unstitched-original-imahgvhcqgqjyjtg.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/l/t/2/free-hathi-houri-fab-unstitched-original-imahgvhcqgqjyjtg.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/k/o/9/free-hathi-houri-fab-unstitched-original-imahgvhcfumyyq94.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Maroon"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 13,
    "description": "Houri Fab Woven Banarasi Jacquard Saree",
    "fabric": "Pure Cotton & Silk Blend"
  },
  {
    "id": "sm-saree-08",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Houri Fab Woven, Embellished Banarasi Silk Blend Saree",
    "brand": "Houri Fab",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 359,
    "originalPrice": 2499,
    "discount": 86,
    "rating": 4.1,
    "reviewsCount": 9,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/f/m/r/free-banarasi-8-houri-fab-unstitched-resized-original-imah4fwm2vzfugkf.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/f/m/r/free-banarasi-8-houri-fab-unstitched-resized-original-imah4fwm2vzfugkf.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/1/b/p/free-banarasi-8-houri-fab-unstitched-original-imah4fwmmpxuhmb2.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/l/z/o/free-banarasi-8-houri-fab-unstitched-original-imah4fwmtetzkggg.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/0/v/f/free-banarasi-8-houri-fab-unstitched-original-imah4fwmj7mhz5sq.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "LIGHT BLUE"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 18,
    "description": "Houri Fab Woven, Embellished Banarasi Silk Blend Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-10",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Houri Fab Woven, Embellished Banarasi Pure Silk, Jacquard Saree",
    "brand": "Houri Fab",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 357,
    "originalPrice": 1999,
    "discount": 82,
    "rating": 4.2,
    "reviewsCount": 2315,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/o/t/q/free-pari-124-wedding-top-brand-banarasi-high-quality-pure-original-imahe9zefwqkxday.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/o/t/q/free-pari-124-wedding-top-brand-banarasi-high-quality-pure-original-imahe9zefwqkxday.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/t/1/2/free-pari-124-wedding-top-brand-banarasi-high-quality-pure-original-imahgdvfcndf6gyy.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/t/e/j/free-pari-124-wedding-top-brand-banarasi-high-quality-pure-original-imahgdvfhhghxda3.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/q/e/e/free-pari-124-wedding-top-brand-banarasi-high-quality-pure-original-imahgdvfsf6cwedt.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "BLUE"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 7,
    "description": "Houri Fab Woven, Embellished Banarasi Pure Silk, Jacquard Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-11",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Heturaj fashion Self Design Bollywood Georgette Saree",
    "brand": "Heturaj fashion",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 435,
    "originalPrice": 1999,
    "discount": 78,
    "rating": 4.3,
    "reviewsCount": 805,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/l/c/m/free-hotfix-sadi-for-women-new-swiroski-diamond-also-hotfix-work-resized-original-imaheafcfnqyeszz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/l/c/m/free-hotfix-sadi-for-women-new-swiroski-diamond-also-hotfix-work-resized-original-imaheafcfnqyeszz.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/y/9/w/free-swiroski-daimond-work-hotfix-saree-houseofcommon-unstitched-original-imah7ze9gbtskb7z.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/m/e/t/free-swiroski-daimond-work-hotfix-saree-houseofcommon-unstitched-original-imah7ze9um7fdjmh.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/q/u/k/free-swiroski-daimond-work-hotfix-saree-houseofcommon-unstitched-original-imah7ze9c3vyhzem.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/5/d/f/free-swiroski-daimond-work-hotfix-saree-houseofcommon-unstitched-original-imah7ze98dbyvyfn.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Maroon"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "description": "Heturaj fashion Self Design Bollywood Georgette Saree",
    "fabric": "Pure Georgette with Embellished Border"
  },
  {
    "id": "sm-saree-12",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "kevami fashion Printed Banarasi Cotton Blend Saree",
    "brand": "kevami fashion",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 378,
    "originalPrice": 1999,
    "discount": 81,
    "rating": 4.2,
    "reviewsCount": 9,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/j/z/u/free-hm-631-gariya-unstitched-resized-original-imahnwgjt8tn2g4h.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/j/z/u/free-hm-631-gariya-unstitched-resized-original-imahnwgjt8tn2g4h.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/w/a/t/free-hm-631-gariya-unstitched-original-imahnwgjscjjwajc.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/5/n/b/free-hm-631-gariya-unstitched-original-imahnwgjvqzsq3vu.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Wine"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "kevami fashion Printed Banarasi Cotton Blend Saree",
    "fabric": "Cotton Silk / Handloom Blend"
  },
  {
    "id": "sm-saree-14",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "J6 Designers Woven Bollywood Cotton Blend Saree",
    "brand": "J6 Designers",
    "category": "women",
    "subcategory": "saree",
    "price": 737,
    "originalPrice": 6299,
    "discount": 88,
    "rating": 4.3,
    "reviewsCount": 120,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/u/o/y/free-sk-zara-j6-designers-unstitched-original-imahzbhsnmyygnfn.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/u/o/y/free-sk-zara-j6-designers-unstitched-original-imahzbhsnmyygnfn.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/i/9/b/free-sk-zara-j6-designers-unstitched-original-imahzbktrqgfg7kk.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Green"
    ],
    "tags": [
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 10,
    "description": "J6 Designers Woven Bollywood Cotton Blend Saree",
    "fabric": "Cotton Silk / Handloom Blend"
  },
  {
    "id": "sm-saree-15",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "NEELKAMAL FASHION Ombre, Embroidered, Embellished Bollywood Georgette Saree",
    "brand": "NEELKAMAL FASHION",
    "category": "women",
    "subcategory": "saree",
    "price": 951,
    "originalPrice": 2799,
    "discount": 66,
    "rating": 4.7,
    "reviewsCount": 120,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/h/t/n/free-kaushalya-j-71-neelkamal-fashion-unstitched-original-imahrw7wjpryydqg.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/h/t/n/free-kaushalya-j-71-neelkamal-fashion-unstitched-original-imahrw7wjpryydqg.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/a/q/c/free-kaushalya-j-124-neelkamal-fashion-unstitched-original-imahrw7vk9fm9ngd.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/6/a/d/free-kaushalya-j-184-neelkamal-fashion-unstitched-original-imahrw7vkth5ehwy.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/f/y/o/free-kaushalya-j-124-neelkamal-fashion-unstitched-original-imahrw7vkygfthes.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/v/u/a/free-kaushalya-j-124-neelkamal-fashion-unstitched-original-imahrw7vhgaz7au7.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "Multicolor"
    ],
    "tags": [
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 17,
    "description": "NEELKAMAL FASHION Ombre, Embroidered, Embellished Bollywood Georgette Saree",
    "fabric": "Pure Georgette with Embellished Border"
  },
  {
    "id": "sm-saree-16",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "NEZAA EXPORT Woven Kanjivaram Jacquard, Pure Silk Saree",
    "brand": "NEZAA EXPORT",
    "category": "women",
    "subcategory": "saree",
    "price": 489,
    "originalPrice": 2999,
    "discount": 84,
    "rating": 4.3,
    "reviewsCount": 101,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/m/c/a/free-preetifashion-ar501511-preetifashion-unstitched-original-imagbkcarwxeqgsh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/m/c/a/free-preetifashion-ar501511-preetifashion-unstitched-original-imagbkcarwxeqgsh.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/y/i/5/free-riya-rama-ramjay-unstitched-original-imagbkcargc4z4nh.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/w/c/i/free-riya-rama-ramjay-unstitched-original-imagbkcatrhmgsne.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/y/i/y/free-riya-rama-ramjay-unstitched-original-imagbkpuyvmfj6pw.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/c/j/d/free-riya-rama-ramjay-unstitched-original-imagcqwbkzhhbpbh.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "SKY BLUE"
    ],
    "tags": [
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "NEZAA EXPORT Woven Kanjivaram Jacquard, Pure Silk Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-17",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Bansari Textiles Self Design, Woven, Applique, Printed, Temple Border, Striped Kanjivaram Jacquard, Art Silk Saree",
    "brand": "Bansari Textiles",
    "category": "women",
    "subcategory": "saree",
    "price": 571,
    "originalPrice": 1029,
    "discount": 45,
    "rating": 4.2,
    "reviewsCount": 16,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/p/l/v/free-banara-s-168-white-lichi-soft-silk-jacquard-woven-saree-original-imahdg5es4dgyj8u.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/p/l/v/free-banara-s-168-white-lichi-soft-silk-jacquard-woven-saree-original-imahdg5es4dgyj8u.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/d/y/j/free-banara-s-168-white-lichi-soft-silk-jacquard-woven-saree-original-imahdg5efrtur2tj.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/sari/j/9/w/free-banara-s-168-white-lichi-soft-silk-jacquard-woven-saree-original-imahdg5ewpggqhx2.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "White"
    ],
    "tags": [
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 9,
    "description": "Bansari Textiles Self Design, Woven, Applique, Printed, Temple Border, Striped Kanjivaram Jacquard, Art Silk Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-saree-18",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Houri Fab Woven, Floral Print Banarasi Pure Silk, Jacquard Saree",
    "brand": "Houri Fab",
    "category": "ethnic",
    "subcategory": "saree",
    "price": 332,
    "originalPrice": 2599,
    "discount": 87,
    "rating": 4.1,
    "reviewsCount": 32,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/s/c/z/free-kanjeevaram-saree-39-houri-fab-unstitched-resized-original-imah4uc6gd5tkhey.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/s/c/z/free-kanjeevaram-saree-39-houri-fab-unstitched-resized-original-imah4uc6gd5tkhey.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/x/x/b/free-kanjeevaram-saree-39-houri-fab-unstitched-original-imah4uc622fgekrc.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/u/o/1/free-kanjeevaram-saree-39-houri-fab-unstitched-original-imah4uc6gvrc6rcy.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/r/g/c/free-kanjeevaram-saree-39-houri-fab-unstitched-original-imah4uc6u2h36dhp.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-sari/b/2/0/free-kanjeevaram-saree-39-houri-fab-unstitched-original-imah4uc6yed527zy.jpeg?q=70"
      }
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      "RED"
    ],
    "tags": [
      "Ethnic Wear",
      "SAREE",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 8,
    "description": "Houri Fab Woven, Floral Print Banarasi Pure Silk, Jacquard Saree",
    "fabric": "Art Silk / Banarasi Silk Blend"
  },
  {
    "id": "sm-m-casual-01",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "VeBNoR Men Solid Straight Kurta",
    "brand": "VeBNoR",
    "category": "men",
    "subcategory": "casual shirts",
    "price": 300,
    "originalPrice": 999,
    "discount": 70,
    "rating": 4.1,
    "reviewsCount": 65005,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/d/a/5/s-kt2-vebnor-original-imahpzbf6phwe6yx.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/d/a/5/s-kt2-vebnor-original-imahpzbf6phwe6yx.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/k/o/i/s-kt2-vebnor-original-imahpzanpdkahcj7.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/a/o/d/s-kt2-vebnor-original-imahpzb2mhertauc.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/f/n/l/s-kt2-vebnor-original-imahpzanurz4crgj.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/s/i/a/s-kt2-vebnor-original-imahpzanfjwdvcg2.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Maroon"
    ],
    "tags": [
      "CASUAL SHIRTS",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 16,
    "description": "VeBNoR Men Solid Straight Kurta",
    "fabric": "100% Pure Cambric Cotton Blend"
  },
  {
    "id": "sm-m-kurta-03",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Tibra Collection Men Solid Straight Kurta",
    "brand": "Tibra Collection",
    "category": "ethnic",
    "subcategory": "men's kurta",
    "price": 253,
    "originalPrice": 999,
    "discount": 75,
    "rating": 4.3,
    "reviewsCount": 41669,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/4/v/a/s-356-tibra-collection-original-imahmpnchaqugchu.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/4/v/a/s-356-tibra-collection-original-imahmpnchaqugchu.jpeg?q=70"
      },
      {
        "label": "Full Draped View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/n/w/r/s-356-tibra-collection-original-imahmpnct4qmqzym.jpeg?q=70"
      },
      {
        "label": "Pallu & Border Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/t/u/h/s-356-tibra-collection-original-imahmpnckhspagsg.jpeg?q=70"
      },
      {
        "label": "Fabric & Weave Close-up",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/z/i/s/s-356-tibra-collection-original-imahmpnczqfrnync.jpeg?q=70"
      },
      {
        "label": "Back / Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kurta/c/j/g/s-356-tibra-collection-original-imahmpncsgq8ghku.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Yellow"
    ],
    "tags": [
      "Ethnic Wear",
      "MEN'S KURTA",
      "Authentic Fabric"
    ],
    "isFlashSale": false,
    "stockLeft": 16,
    "description": "Tibra Collection Men Solid Straight Kurta",
    "fabric": "100% Pure Cambric Cotton Blend"
  },
  {
    "id": "sm-k-boy-04",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "vadli fashion Boys Festive & Party Kurta and Pyjama Set",
    "brand": "vadli fashion",
    "category": "kids",
    "subcategory": "boy",
    "price": 407,
    "originalPrice": 1999,
    "discount": 80,
    "rating": 4.1,
    "reviewsCount": 5159,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/6/1/r/3-4-years-kurta-1-vadli-fashion-resized-original-imah2mv6fgv2npw2.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/6/1/r/3-4-years-kurta-1-vadli-fashion-resized-original-imah2mv6fgv2npw2.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/b/o/b/3-4-years-65897-vadli-fashion-original-imahatcyxzkpm64a.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "black"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 14,
    "description": "Buy vadli fashion Boys Festive & Party Kurta and Pyjama Set for Rs.1999.0 online. vadli fashion Boys Festive & Party Kurta and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-boy-05",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "MahadevGarments Boys Festive & Party Kurta, Waistcoat and Pyjama Set",
    "brand": "MahadevGarments",
    "category": "kids",
    "subcategory": "boy",
    "price": 184,
    "originalPrice": 999,
    "discount": 82,
    "rating": 4.1,
    "reviewsCount": 150,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/p/p/t/9-12-months-tip-top-maroon-12-18-months-mahadevgarments-original-imahqeyf96rrcq37.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/p/p/t/9-12-months-tip-top-maroon-12-18-months-mahadevgarments-original-imahqeyf96rrcq37.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/v/j/j/3-4-years-tiptop-maroon-3-4-years-shree-shyam-garments-original-imahzfhf5hj8hwfu.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Maroon"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 15,
    "description": "Buy MahadevGarments Boys Festive & Party Kurta, Waistcoat and Pyjama Set for Rs.999.0 online. MahadevGarments Boys Festive & Party Kurta, Waistcoat and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-boy-06",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "LaskarGarments Boys Festive & Party Kurta, Waistcoat and Pyjama Set",
    "brand": "LaskarGarments",
    "category": "kids",
    "subcategory": "boy",
    "price": 357,
    "originalPrice": 999,
    "discount": 64,
    "rating": 4.3,
    "reviewsCount": 5,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/s/b/l/6-12-months-new-choto-03-mk-laskar-fashion-original-imahmfr3ymrbfkjh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/s/b/l/6-12-months-new-choto-03-mk-laskar-fashion-original-imahmfr3ymrbfkjh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/x/i/f/9-12-months-new-choto-03-mk-laskar-fashion-original-imahmfr3ygs8ehhq.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/b/w/w/6-12-months-new-choto-03-mk-laskar-fashion-original-imahmfr3ngqrednd.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Beige"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 11,
    "description": "Buy LaskarGarments Boys Festive & Party Kurta, Waistcoat and Pyjama Set for Rs.999.0 online. LaskarGarments Boys Festive & Party Kurta, Waistcoat and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-boy-07",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "tammu designer Boys Festive & Party Kurta and Pyjama Set",
    "brand": "tammu designer",
    "category": "kids",
    "subcategory": "boy",
    "price": 447,
    "originalPrice": 999,
    "discount": 55,
    "rating": 4.2,
    "reviewsCount": 78,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/v/p/8/7-8-years-dizital-kid-set-batic-pink-tammu-designer-original-imahmsspzyekbpga.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/v/p/8/7-8-years-dizital-kid-set-batic-pink-tammu-designer-original-imahmsspzyekbpga.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/2/j/f/12-13-years-dizital-kid-set-batic-pink-tammu-designer-original-imahmssq8rnfjagy.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/d/n/r/8-9-years-dizital-kid-set-batic-pink-tammu-designer-original-imahmssptqckx7eq.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "PINK"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 11,
    "description": "Buy tammu designer Boys Festive & Party Kurta and Pyjama Set for Rs.999.0 online. tammu designer Boys Festive & Party Kurta and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-boy-08",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Mboyzethnicwear Boys Festive & Party Kurta and Pyjama Set",
    "brand": "Mboyzethnicwear",
    "category": "kids",
    "subcategory": "boy",
    "price": 427,
    "originalPrice": 999,
    "discount": 57,
    "rating": 3.9,
    "reviewsCount": 150,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/h/r/n/2-3-years-new-d-3-beige-masterkid-original-imahqcj7gbyjtbcd.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/h/r/n/2-3-years-new-d-3-beige-masterkid-original-imahqcj7gbyjtbcd.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/z/c/s/3-4-years-new-d-3-beige-masterkid-original-imahq6wdcheywefa.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/d/e/i/3-4-years-new-d-3-beige-masterkid-original-imahq6wdjarn2r5v.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Beige"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 10,
    "description": "Buy Mboyzethnicwear Boys Festive & Party Kurta and Pyjama Set for Rs.948.0 online. Mboyzethnicwear Boys Festive & Party Kurta and Pyjama Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-boy-09",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Kids Stylish Boys Festive & Party Shirt & Dhoti Set",
    "brand": "Kids Stylish",
    "category": "kids",
    "subcategory": "boy",
    "price": 288,
    "originalPrice": 999,
    "discount": 71,
    "rating": 4.2,
    "reviewsCount": 23199,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/p/w/a/6-12-months-ds-ramar-blue-kids-stylish-resized-original-imag9hhm4znapgyr.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/p/w/a/6-12-months-ds-ramar-blue-kids-stylish-resized-original-imag9hhm4znapgyr.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/l31x2fk0/kids-ethnic-set/d/g/f/6-12-months-ds-ramar-blue-kids-stylish-original-imag2t2uchh8ux2n.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Ramar Blue"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 4,
    "description": "Buy Kids Stylish Boys Festive & Party Shirt & Dhoti Set for Rs.1599.0 online. Kids Stylish Boys Festive & Party Shirt & Dhoti Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-boy-10",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Jaii Shree Boys Festive & Party Dhoti & Kurta Set",
    "brand": "Jaii Shree",
    "category": "kids",
    "subcategory": "boy",
    "price": 395,
    "originalPrice": 999,
    "discount": 60,
    "rating": 4.2,
    "reviewsCount": 150,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/0/e/q/3-4-years-maroon-white-b-jaii-shree-original-imahpafwa6cvzhkj.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/0/e/q/3-4-years-maroon-white-b-jaii-shree-original-imahpafwa6cvzhkj.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/6/k/a/1-2-years-maroon-white-b-jaii-shree-original-imahpafw6gd5hzw4.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "Maroon"
    ],
    "tags": [
      "Kids",
      "Boys' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 10,
    "description": "Buy Jaii Shree Boys Festive & Party Dhoti & Kurta Set for Rs.1399.0 online. Jaii Shree Boys Festive & Party Dhoti & Kurta Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-k-girl-06",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "PN fashion Girls Festive & Party Kurta, Dhoti Pant & Dupatta Set",
    "brand": "PN fashion",
    "category": "kids",
    "subcategory": "girl",
    "price": 327,
    "originalPrice": 1299,
    "discount": 75,
    "rating": 4.1,
    "reviewsCount": 1374,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/u/2/e/5-6-years-multi-gold-pn-fashion-original-imahp5anz3x3xgkf.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/u/2/e/5-6-years-multi-gold-pn-fashion-original-imahp5anz3x3xgkf.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/d/1/5/6-7-years-multi-gold-pn-fashion-original-imahp5anr9zhyd77.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/c/8/r/5-6-years-multi-gold-pn-fashion-original-imahp5anw5k9ewgb.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-ethnic-set/c/4/5/3-4-years-multi-gold-pn-fashion-original-imahp5angjzfdzdx.jpeg?q=70"
      }
    ],
    "sizes": [
      "2-3 Y",
      "3-4 Y",
      "5-6 Y",
      "7-8 Y",
      "9-10 Y"
    ],
    "colors": [
      "MULTICOLOR"
    ],
    "tags": [
      "Kids",
      "Girls' Ethnic",
      "Kids Ethnic"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "Buy PN fashion Girls Festive & Party Kurta, Dhoti Pant & Dupatta Set for Rs.999.0 online. PN fashion Girls Festive & Party Kurta, Dhoti Pant & Dupatta Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "fabric": "Gentle Pure Cotton & Jacquard Silk Blend"
  },
  {
    "id": "sm-fw-sp-01",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "SG SAVAGE STUD Cricket Shoes For Men",
    "brand": "SG",
    "category": "footwear",
    "subcategory": "sports",
    "price": 664,
    "originalPrice": 1049,
    "discount": 37,
    "rating": 4.1,
    "reviewsCount": 3090,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/9/5/u/-original-imahrrjjdz3gtufz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/9/5/u/-original-imahrrjjdz3gtufz.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/7/e/s/2-savage-stud-2-sg-wht-navy-orange-original-imahqc7gt35asuhy.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/g/v/2-savage-stud-2-sg-wht-navy-orange-original-imahqc7gf39gqznz.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/u/a/j/6-savage-stud-6-sg-wht-navy-orange-original-imahqc7ggefeeprg.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/h/j/e/2-savage-stud-2-sg-wht-navy-orange-original-imahqc7g4yqnvkpz.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "White, Navy, Orange"
    ],
    "tags": [
      "Footwear",
      "Sports",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 9,
    "description": "SG SAVAGE STUD Cricket Shoes For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-sp-03",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "CAMPUS HURRICANE Running Shoes For Men",
    "brand": "CAMPUS",
    "category": "footwear",
    "subcategory": "sports",
    "price": 753,
    "originalPrice": 2499,
    "discount": 70,
    "rating": 4.3,
    "reviewsCount": 453138,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/6/n/g/9-6g-842-9-campus-bt-grn-blk-watermarked-original-imahhdjhbpncmxtz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/6/n/g/9-6g-842-9-campus-bt-grn-blk-watermarked-original-imahhdjhbpncmxtz.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/u/q/k/6-6g-842-6-campus-bt-grn-blk-original-imahhdjh4akhyhnt.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/n/q/10-6g-842-10-campus-bt-grn-blk-original-imahhdjhfbfssbsh.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/z/t/z/6-6g-842-6-campus-bt-grn-blk-original-imahhdjhawzrxyhu.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/a/7/g/10-6g-842-10-campus-bt-grn-blk-original-imahhdjhdtmutje9.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "BT.GRN/BLK"
    ],
    "tags": [
      "Footwear",
      "Sports",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 4,
    "description": "CAMPUS HURRICANE Running Shoes For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-sp-04",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "HRX by Hrithik Roshan RC-110X_8 Outdoors For Men",
    "brand": "HRX by Hrithik Roshan",
    "category": "footwear",
    "subcategory": "sports",
    "price": 773,
    "originalPrice": 1699,
    "discount": 55,
    "rating": 4.1,
    "reviewsCount": 2693,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/q/d/6-rc-110x-6-6-0-hrx-by-hrithik-roshan-black-watermarked-original-imahhgkfhf73ctwk.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/q/d/6-rc-110x-6-6-0-hrx-by-hrithik-roshan-black-watermarked-original-imahhgkfhf73ctwk.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/w/h/r/6-rc-110x-6-6-0-hrx-by-hrithik-roshan-black-original-imahhgkfqappcpzz.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/a/k/a/10-rc-110x-10-10-0-hrx-by-hrithik-roshan-black-original-imahhgkffbfzdkja.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/f/w/9-rc-110x-9-9-0-hrx-by-hrithik-roshan-black-original-imahhgkfyvp4zkpq.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/p/y/p/8-rc-110x-8-8-0-hrx-by-hrithik-roshan-black-original-imahhgkfxxrc8gpa.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Black"
    ],
    "tags": [
      "Footwear",
      "Sports",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 14,
    "description": "HRX by Hrithik Roshan RC-110X_8 Outdoors For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-sp-05",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "SG SAVAGE STUD Cricket Shoes For Men",
    "brand": "SG",
    "category": "footwear",
    "subcategory": "sports",
    "price": 664,
    "originalPrice": 1049,
    "discount": 37,
    "rating": 4.1,
    "reviewsCount": 3090,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/3/y/8-savage-stud-8-sg-wht-r-blue-lime-original-imahqc7grf4xvhns.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/3/y/8-savage-stud-8-sg-wht-r-blue-lime-original-imahqc7grf4xvhns.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/n/d/z/7-savage-stud-7-sg-wht-r-blue-lime-original-imahbjznrhwfgrsw.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/z/y/c/7-savage-stud-7-sg-wht-r-blue-lime-original-imahbjznakamphkm.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/9/m/a/3-savage-stud-3-sg-wht-r-blue-lime-original-imahqc7g6pzwerwf.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/a/v/e/9-savage-stud-9-sg-wht-r-blue-lime-original-imahqc7gghgxpp29.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "White, Royal Blue, Lime"
    ],
    "tags": [
      "Footwear",
      "Sports",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "SG SAVAGE STUD Cricket Shoes For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-sp-06",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "asian wndr-13 sports shoes for men | Latest Stylish Casual sport shoes for men |running shoes for boys | Lace up Lightweight grey shoes for running, walking, gym, trekking, hiking & party Running Shoes For Men",
    "brand": "asian",
    "category": "footwear",
    "subcategory": "sports",
    "price": 739,
    "originalPrice": 2499,
    "discount": 70,
    "rating": 4.1,
    "reviewsCount": 354064,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/f/n/w/-original-imahrrjscup4zqqz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/f/n/w/-original-imahrrjscup4zqqz.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/c/b/-original-imahgbrxgk8nyfk7.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/a/g/-original-imahgbrx6pyxvfsv.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/j/f/-original-imahgbrxvgum4nhu.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "GreyGreen"
    ],
    "tags": [
      "Footwear",
      "Sports",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 4,
    "description": "asian wndr-13 sports shoes for men | Latest Stylish Casual sport shoes for men |running shoes for boys | Lace up Lightweight grey shoes for running, walking, gym, trekking, hiking & party Running Shoes For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-sp-07",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "CAMPUS MIKE (N) Running Shoes For Men",
    "brand": "CAMPUS",
    "category": "footwear",
    "subcategory": "sports",
    "price": 1299,
    "originalPrice": 7399,
    "discount": 82,
    "rating": 4.2,
    "reviewsCount": 656761,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/k/i/-watermarked-original-imahmd3wrjw5fggc.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/k/i/-watermarked-original-imahmd3wrjw5fggc.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/n/q/w/-original-imahmd3whkz9etqb.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/v/q/6/-original-imahmd3wmfzk6sst.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/7/y/c/-original-imahmd3wvveuh6tz.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/f/t/-original-imahmd3v3bfgbysv.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "BLK/GOLDEN"
    ],
    "tags": [
      "Footwear",
      "Sports",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 15,
    "description": "CAMPUS MIKE (N) Running Shoes For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-01",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "asian Casual Sneakers Shoes For Men Mexico-11 Sneakers For Men",
    "brand": "asian",
    "category": "footwear",
    "subcategory": "casual",
    "price": 924,
    "originalPrice": 2999,
    "discount": 69,
    "rating": 3.9,
    "reviewsCount": 75930,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/v/4/-watermarked-original-imahgcsbgtyr3ygg.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/v/4/-watermarked-original-imahgcsbgtyr3ygg.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/z/d/f/-original-imahgcsbnstwgdmx.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/p/j/6-mexiko-11-6-asian-green-original-imahzu237ubmz6dx.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/s/m/u/6-mexiko-11-6-asian-green-original-imahzu23yxguymhs.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/8/z/6-mexiko-11-6-asian-green-original-imahzu23tc3xmhg6.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Green"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 9,
    "description": "asian Casual Sneakers Shoes For Men Mexico-11 Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-02",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Echor Echor ESMGOD, White Gym Shoes Sneakers For Men (White , 7) Sneakers For Men",
    "brand": "Echor",
    "category": "footwear",
    "subcategory": "casual",
    "price": 428,
    "originalPrice": 1899,
    "discount": 77,
    "rating": 3.7,
    "reviewsCount": 2278,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/4/v/8-esmgod-8-0-echor-white-grey-resized-original-imahmqhqgj5ccds8.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/4/v/8-esmgod-8-0-echor-white-grey-resized-original-imahmqhqgj5ccds8.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/o/y/o/8-esmgod-8-0-echor-white-grey-original-imahmqhq4m8jgdzp.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/6/q/m/10-esmgod-10-0-echor-white-grey-original-imahmqhqynazbfzm.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/w/q/5/8-esmgod-8-0-echor-white-grey-original-imahmqhqby4zdyqe.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "White, Grey"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 14,
    "description": "Echor Echor ESMGOD, White Gym Shoes Sneakers For Men (White , 7) Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-03",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "TANVEO Mens Stylish, Partywear, Casual Shoes, Loafers Loafers For Men",
    "brand": "TANVEO",
    "category": "footwear",
    "subcategory": "casual",
    "price": 341,
    "originalPrice": 1399,
    "discount": 76,
    "rating": 3.8,
    "reviewsCount": 383,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/e/p/s/9-luv018-brn-9-0-luvleo-brown-resized-original-imahhgbh75xcmzfq.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/e/p/s/9-luv018-brn-9-0-luvleo-brown-resized-original-imahhgbh75xcmzfq.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/e/m/4/8-luv018-brn-8-0-luvleo-brown-original-imahhgbhhkypufrh.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/h/d/p/8-luv018-brn-8-0-luvleo-brown-original-imahhgbhzyqj4pqv.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/d/l/9-luv018-brn-9-0-luvleo-brown-original-imahhgbhabzsxebq.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/9/d/3/8-luv018-brn-8-0-luvleo-brown-original-imahhgbhvgvnrafr.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Brown"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 15,
    "description": "TANVEO Mens Stylish, Partywear, Casual Shoes, Loafers Loafers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-04",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "PUMA Zod Runner V3 IDP Sneakers For Men",
    "brand": "PUMA",
    "category": "footwear",
    "subcategory": "casual",
    "price": 995,
    "originalPrice": 6899,
    "discount": 86,
    "rating": 4.1,
    "reviewsCount": 371303,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/y/9/k/-original-imahrrjzubfhm9qg.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/y/9/k/-original-imahrrjzubfhm9qg.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/7/j/-original-imahpjpybcbmzj49.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/c/i/-original-imahpjpyvtrm9ac6.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/t/t/6/-original-imahpjpyccagtrfq.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/t/h/k/-original-imahpjpygkv6dfza.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Black-White"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "description": "PUMA Zod Runner V3 IDP Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-05",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "action DOTCOM DRIVE-45 Trendy Comfortable Durable Casual Slip-On Loafers For Men",
    "brand": "ACTION",
    "category": "footwear",
    "subcategory": "casual",
    "price": 638,
    "originalPrice": 1699,
    "discount": 62,
    "rating": 4.1,
    "reviewsCount": 6368,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/w/7/y/7-swift-115-7-action-r-slate-navy-original-imahrf849ezatc3w.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/w/7/y/7-swift-115-7-action-r-slate-navy-original-imahrf849ezatc3w.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/q/u/a/9-drive-45-9-action-brown-original-imahrjyjhgttyc9u.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/g/o/z/9-drive-45-9-action-brown-original-imahrjyjpy4y5jsr.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/g/0/c/9-drive-45-9-action-brown-original-imahrjyj8ddagsuk.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/j/7/7-swift-115-7-action-r-slate-navy-original-imahrf84pjpqpdzu.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "BROWN"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "description": "action DOTCOM DRIVE-45 Trendy Comfortable Durable Casual Slip-On Loafers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-06",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "BRUTON MOVEX- Premium Slip-On Loafers | Lightweight Comfortable Loafers For Men",
    "brand": "BRUTON",
    "category": "footwear",
    "subcategory": "casual",
    "price": 496,
    "originalPrice": 2999,
    "discount": 83,
    "rating": 3.7,
    "reviewsCount": 208,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/f/m/t/6-lfr-eva-613-beige-6-bruton-beige-resized-original-imahm692wycn3ywz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/f/m/t/6-lfr-eva-613-beige-6-bruton-beige-resized-original-imahm692wycn3ywz.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/5/h/r/6-lfr-eva-613-beige-6-bruton-beige-original-imahrkxuc9nd8fgt.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/q/a/b/6-lfr-eva-613-beige-6-bruton-beige-original-imahrkxunuajmg9t.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/e/e/6-lfr-eva-613-beige-6-bruton-beige-original-imahm692vz76emgy.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/q/d/6-lfr-eva-613-beige-6-bruton-beige-original-imahm692terdhrva.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Beige"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 7,
    "description": "BRUTON MOVEX- Premium Slip-On Loafers | Lightweight Comfortable Loafers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-07",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "BOLDFIT Men Klunys Sneakers for Men | Casual Stylish Shoes|Premium PU Leather|TPR Sole Sneakers For Men",
    "brand": "BOLDFIT",
    "category": "footwear",
    "subcategory": "casual",
    "price": 1133,
    "originalPrice": 3949,
    "discount": 71,
    "rating": 4.1,
    "reviewsCount": 177,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/6/g/7-klunys-7-boldfit-white-maroon-watermarked-original-imahng529hgx2mp6.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/6/g/7-klunys-7-boldfit-white-maroon-watermarked-original-imahng529hgx2mp6.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/3/n/8-klunys-8-boldfit-white-maroon-original-imahnbq8vkbtn8zx.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/e/l/r/6-klunys-6-boldfit-white-maroon-original-imahnbq8gpzpdjus.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/e/v/10-klunys-10-boldfit-white-maroon-original-imahnbqebs4hf9e9.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/2/h/z/6-klunys-6-boldfit-white-maroon-original-imahnbqe6fyyj8y5.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "White,Maroon"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 8,
    "description": "BOLDFIT Men Klunys Sneakers for Men | Casual Stylish Shoes|Premium PU Leather|TPR Sole Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-08",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "asian Carnival-02 Mens High Top Casual Chunky High Tops For Men",
    "brand": "asian",
    "category": "footwear",
    "subcategory": "casual",
    "price": 991,
    "originalPrice": 1799,
    "discount": 45,
    "rating": 3.8,
    "reviewsCount": 23158,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/n/t/h/-original-imahrrjsumbzmpe2.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/n/t/h/-original-imahrrjsumbzmpe2.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/l/y/-original-imahgcsu5jgwzjh7.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/e/c/-original-imahgcsuw4j6ysck.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/f/o/-original-imahgcsuzcq8eyvh.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/f/o/t/-original-imahgcsu2zfyg93c.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "FULL WHITE"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "description": "asian Carnival-02 Mens High Top Casual Chunky High Tops For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-09",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Bata Loafers For Men",
    "brand": "Bata",
    "category": "footwear",
    "subcategory": "casual",
    "price": 449,
    "originalPrice": 1699,
    "discount": 74,
    "rating": 4.1,
    "reviewsCount": 5244,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/h/h/a/-original-imahrzjqfbst8qcv.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/h/h/a/-original-imahrzjqfbst8qcv.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/8/k/a/-original-imahrzjqh6ep9hw7.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/d/6/n/-original-imahrzjqef4nh68h.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/n/s/w/-original-imahrzjqhsxacpeu.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Black"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 11,
    "description": "Bata Loafers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-10",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Sparx SM 323 | Stylish, Comfortable | Sneakers For Men",
    "brand": "Sparx",
    "category": "footwear",
    "subcategory": "casual",
    "price": 629,
    "originalPrice": 1699,
    "discount": 63,
    "rating": 4.3,
    "reviewsCount": 307102,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/d/4/d/-original-imahmxfamdjuguye.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/d/4/d/-original-imahmxfamdjuguye.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/g/o/-original-imahmxfafbfftdzn.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/g/r/h/-original-imahmxfagskzqnxj.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/n/k/-original-imahmxfacrk3ayuq.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/l/w/8/-original-imahmxfaywxdhkzz.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Black White"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 5,
    "description": "Sparx SM 323 | Stylish, Comfortable | Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-11",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "JQR RUMBA Sneakers For Men",
    "brand": "JQR",
    "category": "footwear",
    "subcategory": "casual",
    "price": 706,
    "originalPrice": 1499,
    "discount": 53,
    "rating": 4.2,
    "reviewsCount": 5948,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/b/l/w/-watermarked-original-imahegzpd98chnre.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/b/l/w/-watermarked-original-imahegzpd98chnre.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/p/f/a/-original-imahegzpnfy5yusq.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/n/t/a/-original-imahd2zmjpq75zwc.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/f/r/d/-original-imahd2zm3tcsmzmk.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/u/n/3/-original-imahd2zm7ynegfsk.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "OIL GRN/MISTY GRN"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 8,
    "description": "JQR RUMBA Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-12",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "PUMA Buzz Sneakers For Men",
    "brand": "PUMA",
    "category": "footwear",
    "subcategory": "casual",
    "price": 1103,
    "originalPrice": 2999,
    "discount": 63,
    "rating": 4.2,
    "reviewsCount": 164477,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/q/6/-watermarked-original-imahgbrwu75cngkg.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/q/6/-watermarked-original-imahgbrwu75cngkg.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/g/g/r/-original-imahgbrwwrf4nhgh.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/z/7/-original-imahgbrw3g7hhujc.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/1/r/f/-original-imahgbrwhwchrhag.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/o/q/v/-original-imahgbrwpnh5dhck.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Black-Black"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 10,
    "description": "PUMA Buzz Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-13",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "asian Casual Shoe | Soft Cushioned Insole | THUNDER-0 Sneakers For Men",
    "brand": "asian",
    "category": "footwear",
    "subcategory": "casual",
    "price": 849,
    "originalPrice": 2999,
    "discount": 72,
    "rating": 4.3,
    "reviewsCount": 12701,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-shoe/y/l/f/5-thunder-07-kids-asian-watermarked-original-imahger6vypnzjwm.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-shoe/y/l/f/5-thunder-07-kids-asian-watermarked-original-imahger6vypnzjwm.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/9/o/e/5-blossom-11-5-asian-black-pink-original-imahgnemtjns5md2.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-shoe/t/w/e/5-thunder-07-kids-asian-original-imahger6uemswj2s.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/q/l/s/7-thunder-07-asian-beige-leaf-green-original-imah568ahvnyzqhs.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/v/6/12-thunder-07-12-asian-beige-leaf-green-original-imahgvpysfztsqbg.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Beige Leaf Green"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "asian Casual Shoe | Soft Cushioned Insole | THUNDER-0 Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-14",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "U.S. POLO ASSN. IGNACIO Sneakers For Men",
    "brand": "U.S. POLO ASSN.",
    "category": "footwear",
    "subcategory": "casual",
    "price": 3194,
    "originalPrice": 3999,
    "discount": 20,
    "rating": 4.1,
    "reviewsCount": 123,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/1/i/m/-original-imahh6wf9hfspzg6.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/1/i/m/-original-imahh6wf9hfspzg6.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/j/o/g/-original-imahh6wfteerm7g4.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/u/q/e/-original-imahh6wfmqvyjq3q.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/n/q/2/-original-imahh6wfxdquke75.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/z/1/c/-original-imahh6wft5szmxgz.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Tan"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 13,
    "description": "U.S. POLO ASSN. IGNACIO Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-15",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Sparx SM 9118 | Stylish, Comfortable | Sneakers For Men",
    "brand": "Sparx",
    "category": "footwear",
    "subcategory": "casual",
    "price": 792,
    "originalPrice": 1399,
    "discount": 43,
    "rating": 4.2,
    "reviewsCount": 388,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/y/v/w/8-sd9118g-8-sparx-black-original-imahpthz7rwfhw6h.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/y/v/w/8-sd9118g-8-sparx-black-original-imahpthz7rwfhw6h.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/s/h/o/8-sd9118g-8-sparx-black-original-imahpthzza2sf6vq.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/s/m/8-sd9118g-8-sparx-black-original-imahpthzxzckgvzu.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/v/a/n/8-sd9118g-8-sparx-black-original-imahpthz9qc7nkgh.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/b/i/8-sd9118g-8-sparx-black-original-imahpthzrcx7shv9.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Black"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "Sparx SM 9118 | Stylish, Comfortable | Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-16",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "BOLDFIT Tracer Chunky Street Style Sneakers Sneakers For Men",
    "brand": "BOLDFIT",
    "category": "footwear",
    "subcategory": "casual",
    "price": 1189,
    "originalPrice": 3999,
    "discount": 70,
    "rating": 4.2,
    "reviewsCount": 27,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/v/y/10-tracer-44-boldfit-white-original-imahrzffmzbdvxhz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/v/y/10-tracer-44-boldfit-white-original-imahrzffmzbdvxhz.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/h/v/7/9-tracer-43-boldfit-white-beige-original-imahrzffhehx3gzv.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/p/z/4/6-tracer-40-boldfit-white-original-imahrjqxgmjr4y4y.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/t/4/3/6-tracer-40-boldfit-white-original-imahrjqxjhhxehj3.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/a/d/6-tracer-40-boldfit-white-original-imahrjqxmphrmmfh.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "White"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 7,
    "description": "BOLDFIT Tracer Chunky Street Style Sneakers Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-17",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "asian Superfit Training Shoes,Walking Shoes,Canvas Shoes,Loafers,Gym Shoes,Party Wear Walking Shoes For Men",
    "brand": "asian",
    "category": "footwear",
    "subcategory": "casual",
    "price": 481,
    "originalPrice": 1499,
    "discount": 68,
    "rating": 4.1,
    "reviewsCount": 83590,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/a/w/f/-watermarked-original-imahgcthnskaudfv.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/a/w/f/-watermarked-original-imahgcthnskaudfv.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/e/o/o/-original-imahgcthj6z5fhgk.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/z/9/f/-original-imahfxymguqv7yzg.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/v/0/c/-original-imahgcthqe4nfvua.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/x/s/v/-original-imahgcthadh8k9pj.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Brown Black"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 8,
    "description": "asian Superfit Training Shoes,Walking Shoes,Canvas Shoes,Loafers,Gym Shoes,Party Wear Walking Shoes For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-18",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "BERSACHE Sneaker, Loafers ,Casual With Extra Comfort Sneakers For Men",
    "brand": "BERSACHE",
    "category": "footwear",
    "subcategory": "casual",
    "price": 835,
    "originalPrice": 4999,
    "discount": 83,
    "rating": 4.2,
    "reviewsCount": 273,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/y/r/7-jh-9062-7-bersache-white-resized-original-imah4fmbscspdzdz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/y/r/7-jh-9062-7-bersache-white-resized-original-imah4fmbscspdzdz.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/7/5/8-xv-r-9062-8-bersache-white-original-imah4by5qz9pqzc7.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/v/7/s/7-jh-9062-7-bersache-white-original-imah4fmbjvsqzgeh.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/p/p/i/7-jh-9062-7-bersache-white-original-imah4fmbzkmfzpez.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/p/x/b/7-jh-9062-7-bersache-white-original-imah4fmbmkpjkhpf.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "White"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Men's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 4,
    "description": "BERSACHE Sneaker, Loafers ,Casual With Extra Comfort Sneakers For Men",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-19",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Deals4you Sneakers For Women",
    "brand": "Deals4you",
    "category": "footwear",
    "subcategory": "casual",
    "price": 350,
    "originalPrice": 999,
    "discount": 65,
    "rating": 3.9,
    "reviewsCount": 126868,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-shoe/4/o/r/6-875-mlt-6-deals4you-multi-original-imahgucfjdknvu92.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-shoe/4/o/r/6-875-mlt-6-deals4you-multi-original-imahgucfjdknvu92.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-shoe/0/4/5/6-875-mlt-6-deals4you-multi-original-imahgucfzgjs6sgd.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shopsy-shoe/x/g/t/6-875-mlt-6-deals4you-multi-original-imahgucfm5ep3yak.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Multi"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Women's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 13,
    "description": "Deals4you Sneakers For Women",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-20",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Deals4you Sneakers For Women",
    "brand": "Deals4you",
    "category": "footwear",
    "subcategory": "casual",
    "price": 397,
    "originalPrice": 999,
    "discount": 60,
    "rating": 3.9,
    "reviewsCount": 76104,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-shoe/b/y/g/8-1331-kids-deals4you-original-imah22xehbqwakjh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-shoe/b/y/g/8-1331-kids-deals4you-original-imah22xehbqwakjh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/2/m/b/4-774-womn-4-deals4you-brown-beige-original-imahgstuxzbgsbqk.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-shoe/o/p/h/8-1331-kids-deals4you-original-imah22xedgnugdg2.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/kids-shoe/s/d/7/8-1331-kids-deals4you-original-imah22xepuyegtfe.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/x/9/h/4-774-womn-4-deals4you-brown-beige-original-imahgstutz8smv8x.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Brown, Beige"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Women's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 9,
    "description": "Deals4you Sneakers For Women",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-21",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "asian Casual Sneaker Shoes For Women | Stylish and Comfortable | NANCY-02 Sneakers For Women",
    "brand": "asian",
    "category": "footwear",
    "subcategory": "casual",
    "price": 583,
    "originalPrice": 1499,
    "discount": 61,
    "rating": 3.9,
    "reviewsCount": 6933,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/5/e/-watermarked-original-imahfgbtwkcp3a3a.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/5/e/-watermarked-original-imahfgbtwkcp3a3a.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/o/n/7/-original-imahfgbukmh6hsdd.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/d/s/5/-original-imahfgbuz5p5r3x2.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/d/z/c/-original-imahfgburrgxzg4p.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/r/i/f/-original-imahfgbu5asdpv9g.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "White Peach"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Women's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "asian Casual Sneaker Shoes For Women | Stylish and Comfortable | NANCY-02 Sneakers For Women",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-22",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "RED TAPE NA Sneakers For Women",
    "brand": "RED TAPE",
    "category": "footwear",
    "subcategory": "casual",
    "price": 1035,
    "originalPrice": 7399,
    "discount": 86,
    "rating": 4.1,
    "reviewsCount": 1854,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/4/w/e/-watermarked-original-imahnsbhmn7rtekq.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/4/w/e/-watermarked-original-imahnsbhmn7rtekq.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/5/4/h/-original-imahnsbh258bruhb.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/q/u/b/-original-imahnsbm2uebqcfz.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/m/a/e/-original-imahnsbmphtzvajx.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/f/d/s/-original-imahnsbhvgw8mw57.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "BLUE"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Women's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 5,
    "description": "RED TAPE NA Sneakers For Women",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-fw-cs-23",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "VENDOZ Formal Stylish Loafers For Women",
    "brand": "VENDOZ",
    "category": "footwear",
    "subcategory": "casual",
    "price": 611,
    "originalPrice": 999,
    "discount": 39,
    "rating": 4.2,
    "reviewsCount": 1524,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/j/d/8-lf801-41-0-vendoz-beige-original-imahef2gtrajctyu.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/i/j/d/8-lf801-41-0-vendoz-beige-original-imahef2gtrajctyu.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/5/s/3/3-lf801-36-0-vendoz-beige-original-imahef2gyabgsjtb.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/c/q/m/8-lf801-41-0-vendoz-beige-original-imahef2gjq6fpdc8.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/u/j/7/8-lf801-41-0-vendoz-beige-original-imahef2gahbnzvzj.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/k/p/f/8-lf801-41-0-vendoz-beige-original-imahef2gn7ypjqaz.jpeg?q=70"
      }
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Beige"
    ],
    "tags": [
      "Footwear",
      "Casual",
      "Women's Footwear"
    ],
    "isFlashSale": false,
    "stockLeft": 13,
    "description": "VENDOZ Formal Stylish Loafers For Women",
    "fabric": "High-Grip EVA / Rubber Sole with Breathable Mesh Upper"
  },
  {
    "id": "sm-m-ts-01",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "WROGN Solid Men Polo Neck Beige T-Shirt",
    "brand": "WROGN",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 479,
    "originalPrice": 1199,
    "discount": 60,
    "rating": 3.9,
    "reviewsCount": 485,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/2/q/e/-original-imahdgzm5jghbyxu.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/2/q/e/-original-imahdgzm5jghbyxu.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/f/q/z/-original-imahdgzmaenzhuc3.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/z/g/2/-original-imahdgzmdsgwadhj.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/j/t/n/-original-imahdgzmamj5zbp5.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/a/l/d/-original-imahdgzmsgqhyabu.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "BEIGE"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 14,
    "description": "WROGN Solid Men Polo Neck Beige T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-m-ts-02",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "crewmax Printed Men Round Neck Multicolor T-Shirt",
    "brand": "crewmax",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 272,
    "originalPrice": 1000,
    "discount": 73,
    "rating": 4.4,
    "reviewsCount": 70,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/s/r/v/m-rn-paris-rwpati-crewmax-original-imahqkcqysnkcmht.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/s/r/v/m-rn-paris-rwpati-crewmax-original-imahqkcqysnkcmht.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/2/m/6/xxl-rn-whatever-crewmax-original-imahqg3yghvdezt9.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/s/q/t/xxl-rn-cm-mary-nevy-crewmax-original-imahjf5pmsvfjbuk.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "NEVY BLUE"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 15,
    "description": "crewmax Printed Men Round Neck Multicolor T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-m-ts-03",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "KAJARU Striped, Self Design Men Polo Neck Black, Brown, Beige T-Shirt",
    "brand": "KAJARU",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 320,
    "originalPrice": 1699,
    "discount": 81,
    "rating": 4.2,
    "reviewsCount": 1751,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/h/z/n/xxl-polo-8094-kajaru-original-imahhmnrau2n8yd6.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/h/z/n/xxl-polo-8094-kajaru-original-imahhmnrau2n8yd6.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/8/x/s/xl-polo-8094-kajaru-original-imahhmnrrm2wqbdb.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/x/v/s/xl-polo-8094-kajaru-original-imahhmnrgd39nxef.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/p/6/m/xl-polo-8094-kajaru-original-imahhmnra3mh4zhw.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/v/t/g/xl-polo-8094-kajaru-original-imahhmnrqjmsda5m.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "BROWN2"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 7,
    "description": "KAJARU Striped, Self Design Men Polo Neck Black, Brown, Beige T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-m-ts-04",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "WROGN Solid Men Polo Neck White T-Shirt",
    "brand": "WROGN",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 419,
    "originalPrice": 1299,
    "discount": 68,
    "rating": 4.1,
    "reviewsCount": 545,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/5/1/y/-original-imahs3hwk6ddtcwx.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/5/1/y/-original-imahs3hwk6ddtcwx.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/i/k/g/-original-imahdgznka8mgync.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/n/k/7/-original-imahdgzntvndquc3.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/x/w/c/-original-imahdgznzzwthpfv.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/r/e/v/-original-imahdgzn9nwfdybn.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "WHITE"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 10,
    "description": "WROGN Solid Men Polo Neck White T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-m-ts-05",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Allen Solly Solid Men Polo Neck Black T-Shirt",
    "brand": "Allen Solly",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 479,
    "originalPrice": 1199,
    "discount": 60,
    "rating": 4.3,
    "reviewsCount": 139765,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/a/9/3/-original-imahq5ngpfav8ycj.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/a/9/3/-original-imahq5ngpfav8ycj.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/j/q/s/-original-imahq5ng6eg82jzs.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/n/p/i/-original-imahq5ngahg82mhg.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/v/i/a/-original-imahq5ngrsrqhkgg.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/c/z/3/-original-imahq5ngtsfhwkg6.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "BLACK"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "Allen Solly Solid Men Polo Neck Black T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-m-ts-06",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "WROGN Solid Men Polo Neck Green T-Shirt",
    "brand": "WROGN",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 439,
    "originalPrice": 1299,
    "discount": 66,
    "rating": 4.2,
    "reviewsCount": 57,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/a/4/k/l-wwts253f-wrogn-original-imahqmgvuvcqkw4h.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/a/4/k/l-wwts253f-wrogn-original-imahqmgvuvcqkw4h.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/m/3/g/s-wwts253f-wrogn-original-imahqmgvp6yjymw7.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/s/d/b/l-wwts253f-wrogn-original-imahqmgv4uz884tf.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/f/b/n/s-wwts253f-wrogn-original-imahqmgv4z9nv6u4.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/2/1/y/l-wwts253f-wrogn-original-imahqmgvcramv4md.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Green"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 6,
    "description": "WROGN Solid Men Polo Neck Green T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-m-ts-07",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "WROGN Printed Men Round Neck Black T-Shirt",
    "brand": "WROGN",
    "category": "men",
    "subcategory": "t-shirts",
    "price": 629,
    "originalPrice": 1399,
    "discount": 55,
    "rating": 4.5,
    "reviewsCount": 27,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/x/k/w/m-wuts1021s-wrogn-original-imahc68axhq6gheq.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/x/k/w/m-wuts1021s-wrogn-original-imahc68axhq6gheq.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/u/a/o/m-wuts1021s-wrogn-original-imahc68azqfgjukz.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/7/s/l/m-wuts1021s-wrogn-original-imahc68ac2dwkvqr.jpeg?q=70"
      },
      {
        "label": "Texture & Detail",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/7/q/b/m-wuts1021s-wrogn-original-imahc68a3az7mhmj.jpeg?q=70"
      },
      {
        "label": "Styling / Top Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/4/e/j/m-wuts1021s-wrogn-original-imahc68azrdgmbvf.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black"
    ],
    "tags": [
      "Men's Fashion",
      "T-Shirts"
    ],
    "isFlashSale": false,
    "stockLeft": 10,
    "description": "WROGN Printed Men Round Neck Black T-Shirt",
    "fabric": "Premium Quality Cotton & Breathable Blend"
  },
  {
    "id": "sm-w-dress-01",
    "showInDealsOfDay": true,
    "showInAllFashion": false,
    "title": "Dnyanada Unstitched Silk Blend Salwar Suit Material Embroidered",
    "brand": "Dnyanada",
    "category": "women",
    "subcategory": "dresses",
    "price": 674,
    "originalPrice": 1999,
    "discount": 66,
    "rating": 4.4,
    "reviewsCount": 85,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/o/d/u/yes-2-m-unstitched-2-10m-premium-cotton-blend-dress-material-for-original-imahrz5t5gxk3jyn.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/o/d/u/yes-2-m-unstitched-2-10m-premium-cotton-blend-dress-material-for-original-imahrz5t5gxk3jyn.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/z/y/u/yes-2-m-unstitched-2-10m-premium-cotton-blend-dress-material-for-original-imahrz5tz7zygpdr.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/p/o/5/yes-2-m-unstitched-2-10m-premium-cotton-blend-dress-material-for-original-imahrz5tgnzxwfgr.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/x/b/o/yes-2-m-unstitched-2-10m-premium-cotton-blend-dress-material-for-original-imahrz5t9g5eg2ym.jpeg?q=70"
      }
    ],
    "sizes": [
      "Unstitched",
      "Free Size",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Rose Gold"
    ],
    "tags": [
      "Women Dresses",
      "Salwar Suit",
      "Flash Deal",
      "Silk Blend",
      "Embroidered",
      "Ethnic Wear"
    ],
    "isFlashSale": true,
    "stockLeft": 7,
    "salesCount": 500,
    "freeDelivery": true,
    "ratingCount": 340,
    "description": "Dnyanada Unstitched Silk Blend Salwar Suit Material Embroidered by Dnyanada. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Cotton Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-dress-02",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "Thok Unstitched Cotton Blend Gown/Anarkali Kurta & Bottom Material Geometric Print",
    "brand": "Thok",
    "category": "women",
    "subcategory": "dresses",
    "price": 899,
    "originalPrice": 2500,
    "discount": 64,
    "rating": 4.4,
    "reviewsCount": 85,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/salwar-kurta-dupatta/r/d/3/xxl-thok0001-thok-original-imahzavy9hyfschq.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/salwar-kurta-dupatta/r/d/3/xxl-thok0001-thok-original-imahzavy9hyfschq.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/salwar-kurta-dupatta/z/7/b/xxl-thok0001-thok-original-imahzavyy5yvk9uy.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/salwar-kurta-dupatta/v/r/1/xxl-thok0001-thok-original-imahzavymf83awvm.jpeg?q=70"
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "Free Size"
    ],
    "colors": [
      "Red & Black",
      "Multi-color"
    ],
    "tags": [
      "Women Dresses",
      "Anarkali",
      "Cotton Blend",
      "Geometric Print",
      "Ethnic Wear",
      "Gown"
    ],
    "isFlashSale": false,
    "stockLeft": 20,
    "salesCount": 394,
    "freeDelivery": true,
    "ratingCount": 340,
    "description": "Thok Unstitched Cotton Blend Gown/Anarkali Kurta & Bottom Material Geometric Print by Thok. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Cotton Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-dress-03",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "dashandloomstore Unstitched Khadi Cotton Kurta & Churidar Material Printed",
    "brand": "dashandloomstore",
    "category": "women",
    "subcategory": "dresses",
    "price": 1730,
    "originalPrice": 3499,
    "discount": 51,
    "rating": 4.4,
    "reviewsCount": 85,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/a/e/4/yes-2-5-m-unstitched-2-36-m-sambalpuri-kurti-set-original-imahqvh7znnhhydh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/a/e/4/yes-2-5-m-unstitched-2-36-m-sambalpuri-kurti-set-original-imahqvh7znnhhydh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/a/k/p/yes-2-5-m-unstitched-2-36-m-sambalpuri-kurti-set-original-imahqug9hjrrurwg.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/p/3/q/yes-2-5-m-unstitched-2-36-m-sambalpuri-kurti-set-original-imahqug99sdxvtyc.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/l/d/w/yes-2-5-m-unstitched-2-36-m-sambalpuri-kurti-set-original-imahqug9zfgtznff.jpeg?q=70"
      }
    ],
    "sizes": [
      "Unstitched",
      "Free Size",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Earthy Red"
    ],
    "tags": [
      "Women Dresses",
      "Khadi Cotton",
      "Printed",
      "Churidar",
      "Ethnic Wear",
      "Handloom"
    ],
    "isFlashSale": false,
    "stockLeft": 20,
    "salesCount": 227,
    "freeDelivery": true,
    "ratingCount": 340,
    "description": "dashandloomstore Unstitched Khadi Cotton Kurta & Churidar Material Printed by dashandloomstore. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Cotton Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-dress-04",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "dashandloomstore Unstitched Khadi Cotton Kurta & Churidar Material Embroidered, Self Design",
    "brand": "dashandloomstore",
    "category": "women",
    "subcategory": "dresses",
    "price": 1771,
    "originalPrice": 3499,
    "discount": 49,
    "rating": 4.4,
    "reviewsCount": 85,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/u/q/g/yes-2-5-m-unstitched-2-36-m-sambalpuri-black-pink-kurti-set-resized-original-imahhnmjhbvtqzef.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/u/q/g/yes-2-5-m-unstitched-2-36-m-sambalpuri-black-pink-kurti-set-resized-original-imahhnmjhbvtqzef.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/a/o/a/yes-2-5-m-unstitched-2-36-m-sambalpuri-black-pink-kurti-set-original-imahhnmjxee9qdnt.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/fabric/5/g/p/yes-2-5-m-unstitched-2-36-m-sambalpuri-black-pink-kurti-set-original-imahhnmjskmzzrcb.jpeg?q=70"
      }
    ],
    "sizes": [
      "Unstitched",
      "Free Size",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black & Pink",
      "Pink"
    ],
    "tags": [
      "Women Dresses",
      "Khadi Cotton",
      "Embroidered",
      "Self Design",
      "Ethnic Wear",
      "Handloom"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "salesCount": 320,
    "freeDelivery": true,
    "ratingCount": 340,
    "description": "dashandloomstore Unstitched Khadi Cotton Kurta & Churidar Material Embroidered, Self Design by dashandloomstore. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Cotton Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-leh-01",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "nilormy Embellished Stitched Lehenga & Crop Top (Pink)",
    "brand": "nilormy",
    "category": "women",
    "subcategory": "lehenga",
    "price": 1649,
    "originalPrice": 5999,
    "discount": 73,
    "rating": 3.8,
    "reviewsCount": 663,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/4/w/r/xl-sleeveless-lg-001-pink-nilormy-resized-original-imahcmwvnt2kpjra.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/4/w/r/xl-sleeveless-lg-001-pink-nilormy-resized-original-imahcmwvnt2kpjra.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/h/1/0/xl-sleeveless-lg-001-pink-nilormy-original-imahcmwvtsbfk9pg.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/x/o/g/xl-sleeveless-lg-001-pink-nilormy-original-imahcmwvyhewm3sz.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/f/p/b/xl-sleeveless-lg-001-pink-nilormy-original-imahcmwvqevgetkd.jpeg?q=70"
      },
      {
        "label": "Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/y/k/j/xl-sleeveless-lg-001-pink-nilormy-original-imahcmwvmgm9yyps.jpeg?q=70"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Baby Pink"
    ],
    "tags": [
      "Women Lehenga",
      "Ethnic Dress",
      "Crop Top",
      "Embellished",
      "Stitched Lehenga",
      "Festive"
    ],
    "isFlashSale": false,
    "stockLeft": 10,
    "salesCount": 345,
    "freeDelivery": true,
    "ratingCount": 2652,
    "description": "nilormy Embellished Stitched Lehenga & Crop Top (Pink) by nilormy. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Silk & Georgette Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-leh-02",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "Trivety Embroidered Semi Stitched Lehenga Choli (Purple)",
    "brand": "Trivety",
    "category": "women",
    "subcategory": "lehenga",
    "price": 886,
    "originalPrice": 2999,
    "discount": 70,
    "rating": 4.3,
    "reviewsCount": 65,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/p/p/d/free-full-sleeve-big-taaj-trivety-original-imahktbnzr77axvz.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/p/p/d/free-full-sleeve-big-taaj-trivety-original-imahktbnzr77axvz.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/p/v/g/free-full-sleeve-big-taaj-trivety-original-imahktbzhyqz5pvf.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/r/p/m/free-full-sleeve-big-taaj-trivety-original-imahktbzshvggjkd.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/a/e/s/free-full-sleeve-big-taaj-trivety-original-imahktbz8zxdxhjg.jpeg?q=70"
      },
      {
        "label": "Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/o/0/9/free-full-sleeve-big-taaj-trivety-original-imahktbzsgfawrmv.jpeg?q=70"
      }
    ],
    "sizes": [
      "Semi Stitched",
      "Free Size"
    ],
    "colors": [
      "Purple",
      "Wine"
    ],
    "tags": [
      "Women Lehenga",
      "Ethnic Dress",
      "Embroidered",
      "Semi Stitched",
      "Lehenga Choli",
      "Party Wear"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "salesCount": 191,
    "freeDelivery": true,
    "ratingCount": 260,
    "description": "Trivety Embroidered Semi Stitched Lehenga Choli (Purple) by Trivety. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Silk & Georgette Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-leh-03",
    "showInDealsOfDay": true,
    "showInAllFashion": false,
    "title": "MITRABIZ Embroidered Semi Stitched Lehenga Choli (Beige)",
    "brand": "MITRABIZ",
    "category": "women",
    "subcategory": "lehenga",
    "price": 951,
    "originalPrice": 4999,
    "discount": 81,
    "rating": 4.2,
    "reviewsCount": 18,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/2/s/5/free-short-sleeve-sonpari-santosa-fashion-original-imahaefvprcs4dnu.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/2/s/5/free-short-sleeve-sonpari-santosa-fashion-original-imahaefvprcs4dnu.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/8/g/m/free-3-4-sleeve-sonpari-730-vastramall-original-imahcyp7yv9q6rjg.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/c/x/2/free-3-4-sleeve-sonpari-730-vastramall-original-imahcyp7gxnaktyu.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/6/y/5/free-3-4-sleeve-elegant-art-silk-embroidered-lehenga-choli-with-original-imahc6bwqwwkkzcd.jpeg?q=70"
      },
      {
        "label": "Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/g/y/e/free-short-sleeve-sonpari-santosa-fashion-original-imahaefvsgz32r3y.jpeg?q=70"
      }
    ],
    "sizes": [
      "Semi Stitched",
      "Free Size"
    ],
    "colors": [
      "Beige",
      "Gold"
    ],
    "tags": [
      "Women Lehenga",
      "Ethnic Dress",
      "Flash Deal",
      "Embroidered",
      "Semi Stitched",
      "Lehenga Choli"
    ],
    "isFlashSale": true,
    "stockLeft": 20,
    "salesCount": 213,
    "freeDelivery": true,
    "ratingCount": 72,
    "description": "MITRABIZ Embroidered Semi Stitched Lehenga Choli (Beige) by MITRABIZ. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Silk & Georgette Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-leh-04",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "Trivety Embroidered Semi Stitched Lehenga Choli (Purple)",
    "brand": "Trivety",
    "category": "women",
    "subcategory": "lehenga",
    "price": 916,
    "originalPrice": 2999,
    "discount": 69,
    "rating": 4.2,
    "reviewsCount": 77,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/i/b/g/free-short-sleeve-big-siddhi-wine-trivety-resized-original-imahhy4d2nejcyzq.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/i/b/g/free-short-sleeve-big-siddhi-wine-trivety-resized-original-imahhy4d2nejcyzq.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/3/b/0/free-short-sleeve-big-siddhi-wine-trivety-original-imahhy4dnmgwhzjb.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/5/b/4/free-short-sleeve-big-siddhi-wine-trivety-original-imahhy4dsbhf9bvy.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/o/4/k/free-short-sleeve-big-siddhi-wine-trivety-original-imahhy4dqzeukebz.jpeg?q=70"
      },
      {
        "label": "Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/m/v/c/free-short-sleeve-big-siddhi-wine-trivety-original-imahhy4dr3v6js9z.jpeg?q=70"
      }
    ],
    "sizes": [
      "Semi Stitched",
      "Free Size"
    ],
    "colors": [
      "Wine",
      "Deep Purple"
    ],
    "tags": [
      "Women Lehenga",
      "Ethnic Dress",
      "All Fashion",
      "Embroidered",
      "Semi Stitched",
      "Lehenga Choli"
    ],
    "isFlashSale": false,
    "stockLeft": 19,
    "salesCount": 489,
    "freeDelivery": true,
    "ratingCount": 308,
    "description": "Trivety Embroidered Semi Stitched Lehenga Choli (Purple) by Trivety. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Silk & Georgette Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-leh-05",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "R K INFINITIVE Solid Semi Stitched Lehenga Choli (Dark Green, Yellow)",
    "brand": "R K INFINITIVE",
    "category": "women",
    "subcategory": "lehenga",
    "price": 467,
    "originalPrice": 3999,
    "discount": 88,
    "rating": 4.1,
    "reviewsCount": 162,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/4/k/g/free-na-ariya-tr-r-k-infinitive-resized-original-imah2qegbr9wnr2m.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/4/k/g/free-na-ariya-tr-r-k-infinitive-resized-original-imah2qegbr9wnr2m.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/b/s/v/free-na-ariya-d9-pavitraa-sarees-original-imah28mayhgm4qrm.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/z/b/b/free-na-ariya-f9-pavitraa-sarees-original-imah28z4crrt6jhx.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/k/w/t/free-na-ariya-d6-pavitraa-sarees-original-imah28m74nubczwe.jpeg?q=70"
      }
    ],
    "sizes": [
      "Semi Stitched",
      "Free Size"
    ],
    "colors": [
      "Dark Green",
      "Yellow"
    ],
    "tags": [
      "Women Lehenga",
      "Ethnic Dress",
      "All Fashion",
      "Solid",
      "Semi Stitched",
      "Lehenga Choli"
    ],
    "isFlashSale": false,
    "stockLeft": 8,
    "salesCount": 164,
    "freeDelivery": true,
    "ratingCount": 648,
    "description": "R K INFINITIVE Solid Semi Stitched Lehenga Choli (Dark Green, Yellow) by R K INFINITIVE. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Silk & Georgette Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-leh-06",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "SHREE SANT SAREES Embellished Semi Stitched Lehenga Choli (Multicolor, Blue)",
    "brand": "SHREE SANT SAREES",
    "category": "women",
    "subcategory": "lehenga",
    "price": 530,
    "originalPrice": 2999,
    "discount": 82,
    "rating": 4.4,
    "reviewsCount": 85,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/3/x/o/free-na-29-new-shree-sant-sarees-original-imahs76vhpgqyxzb.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/3/x/o/free-na-29-new-shree-sant-sarees-original-imahs76vhpgqyxzb.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/lehenga-choli/w/e/8/free-na-29-new-shree-sant-sarees-original-imahs76v4ptwqgwg.jpeg?q=70"
      }
    ],
    "sizes": [
      "Semi Stitched",
      "Free Size"
    ],
    "colors": [
      "Royal Blue",
      "Multicolor"
    ],
    "tags": [
      "Women Lehenga",
      "Ethnic Dress",
      "Embellished",
      "Semi Stitched",
      "Lehenga Choli",
      "Festive"
    ],
    "isFlashSale": false,
    "stockLeft": 11,
    "salesCount": 217,
    "freeDelivery": true,
    "ratingCount": 340,
    "description": "SHREE SANT SAREES Embellished Semi Stitched Lehenga Choli (Multicolor, Blue) by SHREE SANT SAREES. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Silk & Georgette Blend",
    "fit": "Regular Fit",
    "pattern": "Embroidered / Printed",
    "careInstructions": "Dry clean only"
  },
  {
    "id": "sm-w-jean-01",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "H&H Women Wide Leg High Rise Blue Jeans",
    "brand": "H&H",
    "category": "women",
    "subcategory": "jeans",
    "price": 666,
    "originalPrice": 2999,
    "discount": 78,
    "rating": 4.2,
    "reviewsCount": 292,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/n/j/i/32-mt-hh-8037-spring-blue-32-h-h-original-imahhnbweknuvzgf.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/n/j/i/32-mt-hh-8037-spring-blue-32-h-h-original-imahhnbweknuvzgf.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/o/2/c/26-mt-hh-8037-spring-blue-26-h-h-original-imahhnbwtftthhf9.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/p/u/x/34-mt-hh-8037-spring-blue-34-h-h-original-imahhnbwgkbdgzgh.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/6/6/b/32-mt-hh-8037-spring-blue-32-h-h-original-imahhnbxjfexcdxy.jpeg?q=70"
      },
      {
        "label": "Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/b/t/t/34-mt-hh-8037-spring-blue-34-h-h-original-imahhnbxzg5enc6e.jpeg?q=70"
      }
    ],
    "sizes": [
      "26",
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      "Spring Blue",
      "Classic Blue"
    ],
    "tags": [
      "Women Jeans",
      "Wide Leg",
      "High Rise",
      "Denim",
      "Casual",
      "Bestseller"
    ],
    "isFlashSale": false,
    "stockLeft": 7,
    "salesCount": 327,
    "freeDelivery": true,
    "ratingCount": 1168,
    "description": "H&H Women Wide Leg High Rise Blue Jeans by H&H. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Denim Cotton",
    "fit": "Flared / Wide Leg Fit",
    "pattern": "Solid",
    "careInstructions": "Machine wash cold with like colors"
  },
  {
    "id": "sm-w-jean-02",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "HUNTER & HAYES Women Baggy Fit High Rise Blue Jeans",
    "brand": "HUNTER & HAYES",
    "category": "women",
    "subcategory": "jeans",
    "price": 672,
    "originalPrice": 2499,
    "discount": 73,
    "rating": 4.3,
    "reviewsCount": 31,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/x/j/g/34-8049-smoky-green-3-hunter-hayes-resized-original-imahnt8zbwnzzfyg.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/x/j/g/34-8049-smoky-green-3-hunter-hayes-resized-original-imahnt8zbwnzzfyg.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/j/c/r/34-8049-smoky-green-3-hunter-hayes-original-imahnt8zarmfcpdv.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/9/8/j/34-8049-smoky-green-3-hunter-hayes-original-imahnt8qzu3z2nwa.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/y/p/x/34-8049-smoky-green-3-hunter-hayes-original-imahnt8zuxqgytwh.jpeg?q=70"
      },
      {
        "label": "Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/m/l/q/34-8049-smoky-green-3-hunter-hayes-original-imahnt8zs8cpfgt3.jpeg?q=70"
      }
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      "Smoky Green",
      "Vintage Blue"
    ],
    "tags": [
      "Women Jeans",
      "Baggy Fit",
      "High Rise",
      "Denim",
      "Streetwear",
      "Casual"
    ],
    "isFlashSale": false,
    "stockLeft": 20,
    "salesCount": 486,
    "freeDelivery": true,
    "ratingCount": 124,
    "description": "HUNTER & HAYES Women Baggy Fit High Rise Blue Jeans by HUNTER & HAYES. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Denim Cotton",
    "fit": "Flared / Wide Leg Fit",
    "pattern": "Solid",
    "careInstructions": "Machine wash cold with like colors"
  },
  {
    "id": "sm-w-jean-03",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "rehular fit Women Straight Fit Mid Rise Light Blue Jeans",
    "brand": "rehular fit",
    "category": "women",
    "subcategory": "jeans",
    "price": 411,
    "originalPrice": 799,
    "discount": 49,
    "rating": 4,
    "reviewsCount": 5,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/c/2/8/34-baggy-loose-fit-light-blue-jeans-rehular-fit-original-imahhjhffkzzdg8h.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/c/2/8/34-baggy-loose-fit-light-blue-jeans-rehular-fit-original-imahhjhffkzzdg8h.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/e/j/m/34-baggy-loose-fit-light-blue-jeans-rehular-fit-original-imahhjhfhzjyghmg.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/v/x/s/34-baggy-loose-fit-light-blue-jeans-rehular-fit-original-imahhjhfthfj9dez.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/m/u/n/26-baggy-loose-fit-light-blue-jeans-rehular-fit-original-imahhjheghgqnmzg.jpeg?q=70"
      }
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      "Light Blue"
    ],
    "tags": [
      "Women Jeans",
      "Straight Fit",
      "Mid Rise",
      "Denim",
      "Light Blue",
      "Casual"
    ],
    "isFlashSale": false,
    "stockLeft": 12,
    "salesCount": 276,
    "freeDelivery": true,
    "ratingCount": 20,
    "description": "rehular fit Women Straight Fit Mid Rise Light Blue Jeans by rehular fit. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Denim Cotton",
    "fit": "Flared / Wide Leg Fit",
    "pattern": "Solid",
    "careInstructions": "Machine wash cold with like colors"
  },
  {
    "id": "sm-w-jean-04",
    "showInDealsOfDay": false,
    "showInAllFashion": false,
    "title": "3BUTTERFLIES Women Flared High Rise White Jeans",
    "brand": "3BUTTERFLIES",
    "category": "women",
    "subcategory": "jeans",
    "price": 483,
    "originalPrice": 2199,
    "discount": 78,
    "rating": 4,
    "reviewsCount": 242,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/l/7/2/38-pl-pant-3-butterflies-original-imahmayhfbbbsuzb.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/l/7/2/38-pl-pant-3-butterflies-original-imahmayhfbbbsuzb.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/7/r/v/38-pl-pant-3-butterflies-original-imahmayhkhssnebd.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/2/s/v/38-pl-pant-3-butterflies-original-imahmayhbsmvq5xm.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/q/u/a/38-pl-pant-3-butterflies-original-imahmayhvqrwqzwb.jpeg?q=70"
      },
      {
        "label": "Styling Angle",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/p/k/l/38-pl-pant-3-butterflies-original-imahmayh5f9bybfp.jpeg?q=70"
      }
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      "White",
      "Pure White"
    ],
    "tags": [
      "Women Jeans",
      "Flared",
      "High Rise",
      "White Denim",
      "Chic",
      "Summer"
    ],
    "isFlashSale": false,
    "stockLeft": 11,
    "salesCount": 494,
    "freeDelivery": true,
    "ratingCount": 968,
    "description": "3BUTTERFLIES Women Flared High Rise White Jeans by 3BUTTERFLIES. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Denim Cotton",
    "fit": "Flared / Wide Leg Fit",
    "pattern": "Solid",
    "careInstructions": "Machine wash cold with like colors"
  },
  {
    "id": "sm-w-jean-05",
    "showInDealsOfDay": false,
    "showInAllFashion": true,
    "title": "KOTTY Women Flared High Rise Blue Jeans",
    "brand": "KOTTY",
    "category": "women",
    "subcategory": "jeans",
    "price": 408,
    "originalPrice": 2499,
    "discount": 84,
    "rating": 4,
    "reviewsCount": 2061,
    "image": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/k/u/q/34-ns2-kttladiesjeans817-kotty-original-imahzbk8qdyn4xmh.jpeg?q=70",
    "thumbs": [
      {
        "label": "Front View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/k/u/q/34-ns2-kttladiesjeans817-kotty-original-imahzbk8qdyn4xmh.jpeg?q=70"
      },
      {
        "label": "Side Profile",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/b/n/w/34-ns2-kttladiesjeans817-kotty-original-imahzbg4zzgcsstt.jpeg?q=70"
      },
      {
        "label": "Back View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/e/v/3/34-ns2-kttladiesjeans817-kotty-original-imahzbg8rejjphtj.jpeg?q=70"
      },
      {
        "label": "Detail / Fabric View",
        "url": "https://rukmini1.flixcart.com/image/1500/1500/xif0q/jean/h/u/a/34-ns2-kttladiesjeans817-kotty-original-imahzbkvde5wxjru.jpeg?q=70"
      }
    ],
    "sizes": [
      "26",
      "28",
      "30",
      "32",
      "34"
    ],
    "colors": [
      "Soft Blue",
      "Light Blue"
    ],
    "tags": [
      "Women Jeans",
      "Flared",
      "High Rise",
      "All Fashion",
      "Denim",
      "Soft Blue"
    ],
    "isFlashSale": false,
    "stockLeft": 17,
    "salesCount": 280,
    "freeDelivery": true,
    "ratingCount": 8244,
    "description": "KOTTY Women Flared High Rise Blue Jeans by KOTTY. Premium quality craftsmanship, comfortable fit, and elegant modern styling perfect for both casual wear and festive occasions.",
    "fabric": "Denim Cotton",
    "fit": "Flared / Wide Leg Fit",
    "pattern": "Solid",
    "careInstructions": "Machine wash cold with like colors"
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
    localStorage.removeItem(CUSTOM_PRODUCTS_STORAGE_KEY);
  } catch (err) {
    console.warn('loadCustomProducts clear failed safely:', err);
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
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const search = (urlParams.get('search') || '').toLowerCase();
  const subfilter = (urlParams.get('subfilter') || '').toLowerCase();
  if (search.includes('hoodie') || search.includes('hoodies') || subfilter === 'hoodies') {
    return 'men';
  }
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
  try { initAvolochProductCardsEffect(); } catch (e) { console.error('Avoloch effect init error:', e); }
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
  const track = document.getElementById('heroSliderTrack');
  const slides = document.querySelectorAll('#heroSliderTrack .slide');
  const dots = document.querySelectorAll('#sliderDots .dot');
  const counter = document.getElementById('lasseSlideCounter');
  const progressFill = document.getElementById('lasseProgressFill');
  if (!slides.length) return;

  const targetIndex = ((index % slides.length) + slides.length) % slides.length;
  state.activeSlide = targetIndex;

  slides.forEach((s, i) => s.classList.toggle('active', i === targetIndex));

  // Lasse Pedersen smooth horizontal scroll to target slide
  if (track) {
    const slideTarget = slides[targetIndex];
    if (slideTarget) {
      const scrollPos = slideTarget.offsetLeft - track.offsetLeft;
      track.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }

  // Update Lasse Pedersen editorial progress bar & counter
  if (counter) {
    counter.textContent = `${String(targetIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  if (progressFill) {
    const pct = ((targetIndex + 1) / slides.length) * 100;
    progressFill.style.width = `${pct}%`;
  }

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
  const track = document.getElementById('heroSliderTrack');
  const slides = document.querySelectorAll('#heroSliderTrack .slide');
  if (!slides.length) return;

  document.getElementById('nextSlideBtn')?.addEventListener('click', () => {
    goToSlide(state.activeSlide + 1);
  });

  document.getElementById('prevSlideBtn')?.addEventListener('click', () => {
    goToSlide(state.activeSlide - 1);
  });

  // Lasse Pedersen Mousewheel Horizontal Scroll Support
  if (track && !track.dataset.wheelBound) {
    track.dataset.wheelBound = 'true';
    track.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    // Lasse Pedersen Click-and-Drag Horizontal Scrubbing
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    track.addEventListener('mousedown', (e) => {
      if (e.target.closest('a, button')) return;
      isDown = true;
      track.classList.add('grabbing');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        track.classList.remove('grabbing');
        const slideWidth = slides[0]?.offsetWidth || track.clientWidth;
        const nearestIndex = Math.round(track.scrollLeft / slideWidth);
        goToSlide(nearestIndex);
      }
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.4;
      track.scrollLeft = scrollLeft - walk;
    });

    // Real-time progress bar update during manual track scrolling
    track.addEventListener('scroll', () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 0) {
        const progressFill = document.getElementById('lasseProgressFill');
        if (progressFill) {
          const ratio = (track.scrollLeft / maxScroll);
          const pct = Math.min(100, Math.max(15, (ratio * 100)));
          progressFill.style.width = `${pct}%`;
        }
      }
    });
  }

  // Initial position
  goToSlide(0);

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
// 6. FLASH SALE LOGIC (TheMOZZARELLA 3D PARALLAX COVERFLOW CAROUSEL)
// --------------------------------------------------------------------------
let activeFlashIndex = 0;
let flashDealsCache = [];
let flash3dAutoTimer = null;

function getFlashDealsProducts() {
  const FLASH_DEALS_ORDER = [
    'sm-w-anarkali-01', // 1st
    'sm-k-boy-03',      // 2nd place (Sangria boys kurta pyjama set)
    'sm-w-dress-01',    // Dnyanada Silk Blend Salwar Suit (Flash Deal)
    'sm-w-leh-03',      // MITRABIZ Embroidered Lehenga (Flash Deal)
    'sm-saree-01',      // Kriti Saree
    'sm-saree-05',      // J6 Designers Saree
    'sm-m-kurta-01',    // ellark Kurta
    'sm-k-girl-01',     // Mimi clothings girls sharara
    'sm-k-boy-01',      // New Ekta
    'sm-k-girl-04',     // Pinkshierd
    'sm-fw-sp-02',      // US Polo running shoes
    'sm-m-tshirt-01',   // DIMMY
    'sm-m-ts-08'        // Wrogn polo dark green
  ];

  const filtered = PRODUCTS_DATA.filter(p => p.showInDealsOfDay);
  if (!filtered || filtered.length === 0) {
    return [...PRODUCTS_DATA].sort((a, b) => b.discount - a.discount).slice(0, 16);
  }

  return [...filtered].sort((a, b) => {
    const idxA = FLASH_DEALS_ORDER.indexOf(a.id);
    const idxB = FLASH_DEALS_ORDER.indexOf(b.id);
    const posA = idxA !== -1 ? idxA : 999;
    const posB = idxB !== -1 ? idxB : 999;
    return posA - posB;
  });
}

function renderFlashSaleProducts() {
  const container = document.getElementById('flashProductsGrid');
  if (!container) return;

  flashDealsCache = getFlashDealsProducts();
  if (!flashDealsCache || flashDealsCache.length === 0) {
    container.innerHTML = '<div style="padding: 24px; text-align: center; width: 100%; color: #64748b; font-size: 0.95rem;">No flash sale products currently available.</div>';
    if (flash3dAutoTimer) clearInterval(flash3dAutoTimer);
    return;
  }

  // Render clean flash cards
  container.innerHTML = flashDealsCache.map(p => createProductCardHTML(p, true, false)).join('');

  // Add 3D card attributes & click-to-center listeners
  const cards = container.querySelectorAll('.product-card');
  cards.forEach((card, idx) => {
    card.classList.add('flash-product-card');
    card.setAttribute('data-flash-index', idx);
    card.addEventListener('click', (e) => {
      if (e.target.closest('button, a')) return;
      if (idx !== activeFlashIndex) {
        e.preventDefault();
        e.stopPropagation();
        setFlashActiveCard(idx);
      }
    });
  });

  // Remove dots reference
  const pagination = document.getElementById('flash3dPagination');
  if (pagination) pagination.innerHTML = '';

  // Initialize TheMOZZARELLA 3D Carousel controls & auto-play
  initTheMozzarella3DControls();

  // Apply initial 3D transforms
  updateMozzarella3DPositions();
}

function setFlashActiveCard(index) {
  if (!flashDealsCache.length) return;
  activeFlashIndex = ((index % flashDealsCache.length) + flashDealsCache.length) % flashDealsCache.length;
  updateMozzarella3DPositions();
}

function navigateFlashCards(direction) {
  if (!flashDealsCache.length) return;
  setFlashActiveCard(activeFlashIndex + direction);
}

function navigateFlashCarousel(direction) {
  navigateFlashCards(direction);
}

function updateMozzarella3DPositions() {
  const cards = document.querySelectorAll('.mozzarella-3d-track .flash-product-card');
  if (!cards.length) return;

  const total = cards.length;
  const isMobile = window.innerWidth <= 768;
  const stepX = isMobile ? 100 : 185;

  cards.forEach((card, idx) => {
    let diff = idx - activeFlashIndex;
    // Circular shortest path
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    if (diff === 0) {
      card.style.transform = 'translate(-50%, -50%) translateZ(60px) rotateY(0deg) scale(1.03)';
      card.style.zIndex = '12';
      card.style.opacity = '1';
      card.style.filter = 'none';
      card.style.pointerEvents = 'auto';
      card.style.boxShadow = '0 20px 42px -8px rgba(7, 38, 30, 0.35), 0 0 0 1.5px rgba(212, 175, 55, 0.45)';
      card.classList.add('flash-3d-center');
    } else if (absDiff === 1) {
      const transX = diff * stepX;
      const rotY = diff > 0 ? -24 : 24;
      card.style.transform = `translate(calc(-50% + ${transX}px), -50%) translateZ(-50px) rotateY(${rotY}deg) scale(0.86)`;
      card.style.zIndex = '8';
      card.style.opacity = '0.88';
      card.style.filter = 'brightness(0.92)';
      card.style.pointerEvents = 'auto';
      card.style.boxShadow = '0 12px 24px -6px rgba(0, 0, 0, 0.2)';
      card.classList.remove('flash-3d-center');
    } else if (absDiff === 2) {
      const transX = diff * (stepX * 1.55);
      const rotY = diff > 0 ? -36 : 36;
      card.style.transform = `translate(calc(-50% + ${transX}px), -50%) translateZ(-130px) rotateY(${rotY}deg) scale(0.72)`;
      card.style.zIndex = '5';
      card.style.opacity = '0.6';
      card.style.filter = 'brightness(0.8)';
      card.style.pointerEvents = 'auto';
      card.style.boxShadow = 'none';
      card.classList.remove('flash-3d-center');
    } else {
      const transX = diff > 0 ? (stepX * 2.1) : (-stepX * 2.1);
      const rotY = diff > 0 ? -45 : 45;
      card.style.transform = `translate(calc(-50% + ${transX}px), -50%) translateZ(-220px) rotateY(${rotY}deg) scale(0.6)`;
      card.style.zIndex = '2';
      card.style.opacity = '0';
      card.style.filter = 'brightness(0.6)';
      card.style.pointerEvents = 'none';
      card.style.boxShadow = 'none';
      card.classList.remove('flash-3d-center');
    }
  });

  // Update Counter (matching mockup XX / 13)
  const counter = document.getElementById('flash3dCounter');
  if (counter) {
    counter.textContent = `${String(activeFlashIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  }
}

function initTheMozzarella3DControls() {
  const viewport = document.getElementById('flashCarouselContainer');
  if (!viewport || viewport.dataset.controlsBound) return;
  viewport.dataset.controlsBound = 'true';

  // Touch Swipe for mobile
  let touchStartX = 0;
  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    if (flash3dAutoTimer) clearInterval(flash3dAutoTimer);
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) navigateFlashCards(1);
      else navigateFlashCards(-1);
    }
    startFlash3dAutoplay();
  }, { passive: true });

  // Mouse wheel scroll for desktop coverflow
  viewport.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 20) {
      e.preventDefault();
      if (e.deltaX > 20 || e.deltaY > 20) navigateFlashCards(1);
      else navigateFlashCards(-1);
    }
  }, { passive: false });

  viewport.addEventListener('mouseenter', () => {
    if (flash3dAutoTimer) clearInterval(flash3dAutoTimer);
  });

  viewport.addEventListener('mouseleave', () => {
    startFlash3dAutoplay();
  });

  startFlash3dAutoplay();
}

function startFlash3dAutoplay() {
  if (flash3dAutoTimer) clearInterval(flash3dAutoTimer);
  flash3dAutoTimer = setInterval(() => {
    navigateFlashCards(1);
  }, 4800);
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

  if (fashionItems.length === 0) {
    container.innerHTML = '<div style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; color: #64748b; font-size: 1rem;">No products currently in this collection.</div>';
    return;
  }

  container.innerHTML = fashionItems.map(p => createProductCardHTML(p, false)).join('');
  if (typeof initAvolochProductCardsEffect === 'function') {
    initAvolochProductCardsEffect();
  }

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
  'Royal Gold & Ivory': '#fef08a',
  'Crisp White & Navy': '#1e3a8a',
  'Cognac Tan': '#9a3412',
  'Navy Blue & White': '#172554',
  'Nude Beige': '#c5a059',
  'Royal Maroon & Gold': '#881337',
  'Blue & Yellow': '#2563eb',
  'Pastel Pink': '#f9a8d4',
  'Black & Red': '#dc2626',
  'Royal Blue': '#1d4ed8'
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

// --------------------------------------------------------------------------
// DYNAMIC PRODUCT TEMPLATE & IMAGE GENERATOR
// Takes product name as input and generates:
// - Front View
// - Back View
// - Side View
// - Fabric Details
// along with the full multi-angle studio template breakdown
// --------------------------------------------------------------------------
function createTemplateResult(productName, category, templateList) {
  const list = Array.isArray(templateList) && templateList.length > 0 ? templateList : [
    { label: 'Front View', url: 'assets/images/women/casual-dress/front.jpg' },
    { label: 'Side View', url: 'assets/images/women/casual-dress/side.jpg' },
    { label: 'Back View', url: 'assets/images/women/casual-dress/back.jpg' },
    { label: 'Fabric Detail', url: 'assets/images/women/casual-dress/detail-fabric.jpg' }
  ];

  const front = list.find(t => t.label.toLowerCase().includes('front')) || list[0];
  const back = list.find(t => t.label.toLowerCase().includes('back')) || list[2] || list[0];
  const side = list.find(t => t.label.toLowerCase().includes('side')) || list[1] || list[0];
  const fabric = list.find(t => t.label.toLowerCase().includes('fabric')) || list[list.length - 1];

  return {
    productName: productName,
    category: category,
    keyViews: {
      frontView: front ? front.url : list[0].url,
      backView: back ? back.url : (list[2] ? list[2].url : list[0].url),
      sideView: side ? side.url : (list[1] ? list[1].url : list[0].url),
      fabricDetails: fabric ? fabric.url : list[list.length - 1].url
    },
    template: list,
    totalViews: list.length
  };
}

function generateProductTemplate(productName, categoryHint = '') {
  const name = String(productName || '').trim();
  const lower = name.toLowerCase();

  // 1. Women's Categories (Reference: media_1792669992763_5c3bbd84.jpg)
  if (
    lower.includes('saree') || 
    lower.includes('sari') || 
    lower.includes('kanjivaram') || 
    lower.includes('banarasi') || 
    lower.includes('chiffon') || 
    lower.includes('georgette') ||
    lower.includes('pallu') ||
    categoryHint.toLowerCase() === 'ethnic'
  ) {
    return createTemplateResult(name, 'Ethnic Sarees', WOMEN_IMAGE_TEMPLATES['ethnic-sarees']);
  }
  if (
    lower.includes('western') || 
    lower.includes('lavender') || 
    lower.includes('lilac') || 
    lower.includes('ruffle') || 
    lower.includes('cami') || 
    lower.includes('cocktail dress') ||
    lower.includes('forever new')
  ) {
    return createTemplateResult(name, 'Western Dresses', WOMEN_IMAGE_TEMPLATES['western-dress']);
  }

  if (
    lower.includes('anarkali') || 
    lower.includes('biba') || 
    lower.includes('zari') || 
    lower.includes('dupatta') || 
    (lower.includes('ethnic') && (lower.includes('wear') || lower.includes('dress') || lower.includes('suit') || lower.includes('set') || lower.includes('anarkali') || lower.includes('green')))
  ) {
    return createTemplateResult(name, 'Ethnic Wear', WOMEN_IMAGE_TEMPLATES['ethnic-wear']);
  }

  if (
    lower.includes('top') || 
    lower.includes('blouse') || 
    lower.includes('crop') || 
    lower.includes('peplum') || 
    lower.includes('smocked')
  ) {
    return createTemplateResult(name, 'Tops & Blouses', WOMEN_IMAGE_TEMPLATES['tops-blouses']);
  }

  if (
    lower.includes('kurti') || 
    lower.includes('kurta') || 
    lower.includes('w for woman') || 
    lower.includes('straight kurti')
  ) {
    return createTemplateResult(name, 'Kurtis', WOMEN_IMAGE_TEMPLATES['kurtis']);
  }

  if (
    lower.includes('gown') || 
    lower.includes('party') || 
    lower.includes('ball') || 
    lower.includes('sequin') || 
    lower.includes('wine red') || 
    lower.includes('evening') ||
    lower.includes('global desi')
  ) {
    return createTemplateResult(name, 'Party Wear & Gowns', WOMEN_IMAGE_TEMPLATES['party-gown']);
  }

  // 2. Men's Categories Check (Specific items like shirts, hoodies, t-shirts, jeans, track pants)
  if (lower.includes('hoodie') || lower.includes('sweatshirt')) {
    if (lower.includes('solid') || lower.includes('black') || lower.includes('rabbit')) {
      return createTemplateResult(name, 'Hoodies (Solid Black)', MEN_IMAGE_TEMPLATES['hoodie-solid-black']);
    }
    if (lower.includes('printed') || lower.includes('grey') || lower.includes('gray') || lower.includes('brooklyn') || lower.includes('roadster')) {
      return createTemplateResult(name, 'Hoodies (Printed Grey)', MEN_IMAGE_TEMPLATES['hoodie-printed-grey']);
    }
    if (lower.includes('color') || lower.includes('block') || lower.includes('navy') || lower.includes('wrogn')) {
      return createTemplateResult(name, 'Hoodies (Color Block Navy)', MEN_IMAGE_TEMPLATES['hoodie-colorblock-navy']);
    }
    if (lower.includes('zip') || lower.includes('green') || lower.includes('olive') || lower.includes('solly')) {
      return createTemplateResult(name, 'Hoodies (Zip-Up Green)', MEN_IMAGE_TEMPLATES['hoodie-zipup-green']);
    }
    if (lower.includes('graphic') || lower.includes('explore') || lower.includes('beige') || lower.includes('garage')) {
      return createTemplateResult(name, 'Hoodies (Graphic Beige)', MEN_IMAGE_TEMPLATES['hoodie-graphic-beige']);
    }
    return createTemplateResult(name, 'Hoodies', MEN_IMAGE_TEMPLATES['hoodie-solid-black']);
  }

  if (lower.includes('formal shirt') || lower.includes('executive') || (lower.includes('white shirt') && !lower.includes('dress'))) {
    return createTemplateResult(name, 'Formal Shirts', MEN_IMAGE_TEMPLATES['formal-shirt']);
  }
  if (lower.includes('casual shirt') || lower.includes('oxford') || lower.includes('button-down') || (lower.includes('shirt') && !lower.includes('t-shirt') && !lower.includes('tshirt') && !lower.includes('dress') && !lower.includes('skirt'))) {
    return createTemplateResult(name, 'Casual Shirts', MEN_IMAGE_TEMPLATES['casual-shirt']);
  }
  if (lower.includes('jean') || lower.includes('denim')) {
    return createTemplateResult(name, 'Jeans', MEN_IMAGE_TEMPLATES['jeans']);
  }
  if (lower.includes('track') || lower.includes('jogger')) {
    return createTemplateResult(name, 'Track Pants', MEN_IMAGE_TEMPLATES['track-pants']);
  }
  if (lower.includes('t-shirt') || lower.includes('tshirt') || lower.includes('tee')) {
    if (lower.includes('casual')) {
      return createTemplateResult(name, 'Casual T-Shirts', MEN_IMAGE_TEMPLATES['casual-tshirt']);
    }
    return createTemplateResult(name, 'T-Shirts', MEN_IMAGE_TEMPLATES['tshirt']);
  }

  // 3. Women's Casual Dresses & Fallback
  if (
    lower.includes('casual dress') ||
    lower.includes('dress') || 
    lower.includes('casual') || 
    lower.includes('floral') || 
    lower.includes('pink') || 
    lower.includes('puff sleeve') || 
    lower.includes('tiered') ||
    lower.includes('vero moda')
  ) {
    return createTemplateResult(name, 'Casual Dresses', WOMEN_IMAGE_TEMPLATES['casual-dress']);
  }

  // 3. Fallbacks
  if (categoryHint === 'men') {
    return createTemplateResult(name, 'Casual Shirts', MEN_IMAGE_TEMPLATES['casual-shirt']);
  }
  return createTemplateResult(name, 'Casual Dresses', WOMEN_IMAGE_TEMPLATES['casual-dress']);
}

function handlePtgGenerate(customName) {
  const input = document.getElementById('ptgProductNameInput');
  const resultsArea = document.getElementById('ptgResultsArea');
  const name = (customName || (input ? input.value : '')).trim();
  if (!name) {
    if (input) input.focus();
    return;
  }
  if (input) input.value = name;

  const result = generateProductTemplate(name);
  if (!resultsArea) return;

  resultsArea.style.display = 'block';
  resultsArea.innerHTML = `
    <div class="ptg-results-card">
      <div class="ptg-result-header">
        <div class="ptg-result-title-wrap">
          <span class="ptg-result-cat-badge">${escapeHTML(result.category)}</span>
          <h4 class="ptg-result-title">${escapeHTML(result.productName)}</h4>
          <span class="ptg-result-sub">Generated 4 Core Perspectives + Macro Detail Templates (${result.totalViews} Studio Angles)</span>
        </div>
      </div>
      
      <!-- 4 Core Views: Front View, Back View, Side View, Fabric Details -->
      <div class="ptg-core-grid">
        <div class="ptg-view-card" onclick="openStudioViewModal('${result.keyViews.frontView}', 'Front View - ${escapeHTML(result.productName)}')">
          <div class="ptg-card-media">
            <img src="${result.keyViews.frontView}" alt="Front View" loading="lazy" />
            <span class="ptg-view-tag front-tag">Front View</span>
          </div>
          <div class="ptg-card-caption">
            <strong>Front View</strong>
            <span>Studio Perspective</span>
          </div>
        </div>

        <div class="ptg-view-card" onclick="openStudioViewModal('${result.keyViews.backView}', 'Back View - ${escapeHTML(result.productName)}')">
          <div class="ptg-card-media">
            <img src="${result.keyViews.backView}" alt="Back View" loading="lazy" />
            <span class="ptg-view-tag back-tag">Back View</span>
          </div>
          <div class="ptg-card-caption">
            <strong>Back View</strong>
            <span>Reverse Silhouette</span>
          </div>
        </div>

        <div class="ptg-view-card" onclick="openStudioViewModal('${result.keyViews.sideView}', 'Side View - ${escapeHTML(result.productName)}')">
          <div class="ptg-card-media">
            <img src="${result.keyViews.sideView}" alt="Side View" loading="lazy" />
            <span class="ptg-view-tag side-tag">Side View</span>
          </div>
          <div class="ptg-card-caption">
            <strong>Side View</strong>
            <span>Profile Drape</span>
          </div>
        </div>

        <div class="ptg-view-card" onclick="openStudioViewModal('${result.keyViews.fabricDetails}', 'Fabric Details - ${escapeHTML(result.productName)}')">
          <div class="ptg-card-media">
            <img src="${result.keyViews.fabricDetails}" alt="Fabric Details" loading="lazy" />
            <span class="ptg-view-tag fabric-tag">Fabric Details</span>
          </div>
          <div class="ptg-card-caption">
            <strong>Fabric Details</strong>
            <span>Macro Weave Texture</span>
          </div>
        </div>
      </div>

      <!-- Additional Close-up Details Strip -->
      <div class="ptg-details-strip">
        <span class="ptg-details-title">All ${result.totalViews} Studio Angle Breakdowns:</span>
        <div class="ptg-details-scroller">
          ${result.template.map(item => `
            <div class="ptg-detail-thumb" onclick="openStudioViewModal('${item.url}', '${escapeHTML(item.label)} - ${escapeHTML(result.productName)}')">
              <img src="${item.url}" alt="${escapeHTML(item.label)}" loading="lazy" />
              <span>${escapeHTML(item.label)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function applyPtgSample(sampleName) {
  const input = document.getElementById('ptgProductNameInput');
  if (input) input.value = sampleName;
  handlePtgGenerate(sampleName);
}

function openStudioViewModal(imgUrl, caption) {
  let modal = document.getElementById('studioViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'studioViewModal';
    modal.className = 'studio-modal-overlay';
    modal.innerHTML = `
      <div class="studio-modal-box">
        <button class="studio-modal-close" onclick="closeStudioViewModal()">&times;</button>
        <div class="studio-modal-media">
          <img id="studioModalImg" src="" alt="Studio View" />
        </div>
        <div class="studio-modal-footer">
          <h4 id="studioModalCaption"></h4>
          <span class="studio-modal-badge">Studio Perspective</span>
        </div>
      </div>
    `;
    modal.onclick = (e) => {
      if (e.target === modal) closeStudioViewModal();
    };
    document.body.appendChild(modal);
  }
  const imgElem = document.getElementById('studioModalImg');
  const captionElem = document.getElementById('studioModalCaption');
  if (imgElem) imgElem.src = imgUrl;
  if (captionElem) captionElem.textContent = caption || 'Product Studio View';
  modal.classList.add('open');
}

function closeStudioViewModal() {
  const modal = document.getElementById('studioViewModal');
  if (modal) modal.classList.remove('open');
}

// --------------------------------------------------------------------------
// INTERACTIVE PRODUCT IMAGE & TEMPLATE STUDIO GENERATOR
// Takes product name as input and generates front view, back view, side view,
// fabric details, and 8-view angle studio templates.
// --------------------------------------------------------------------------
function openProductTemplateStudio(initialQuery) {
  let modal = document.getElementById('productTemplateStudioModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'productTemplateStudioModal';
    modal.className = 'studio-generator-modal-overlay';
    modal.innerHTML = `
      <div class="studio-generator-modal-dialog">
        <div class="studio-modal-head">
          <div class="studio-head-left">
            <span class="studio-kicker"><i class="fa-solid fa-wand-magic-sparkles" style="color:#d4af37"></i> StyleMart Studio Generator</span>
            <h3>Product Image & Template Studio</h3>
            <p>Enter any product name below to generate 4 core perspectives (Front, Back, Side, Fabric Details) and 8-angle studio templates.</p>
          </div>
          <button type="button" class="studio-close-btn" onclick="closeProductTemplateStudio()" aria-label="Close Studio">&times;</button>
        </div>

        <div class="studio-input-section">
          <div class="studio-search-bar-wrap">
            <i class="fa-solid fa-magnifying-glass studio-search-icon"></i>
            <input type="text" id="studioProductInput" class="studio-product-input" placeholder="Enter product name (e.g. Lavender Ruffle Dress, Solid Black Fleece Hoodie, Slim Fit Jeans)..." autocomplete="off" />
            <button type="button" id="studioRunGenerateBtn" class="btn btn-primary studio-generate-submit-btn" onclick="triggerStudioGeneration()">
              <i class="fa-solid fa-bolt"></i> Generate Templates
            </button>
          </div>
          <div class="studio-quick-samples">
            <span class="studio-samples-label">Popular Presets:</span>
            <button type="button" class="studio-sample-chip" onclick="applyStudioSample('Summer Tiered Floral Dress')">Summer Floral Dress</button>
            <button type="button" class="studio-sample-chip" onclick="applyStudioSample('Rare Rabbit Solid Black Fleece Hoodie')">Solid Black Hoodie</button>
            <button type="button" class="studio-sample-chip" onclick="applyStudioSample('Lavender Ruffle Tiered Dress')">Western Gown</button>
            <button type="button" class="studio-sample-chip" onclick="applyStudioSample('Anarkali Embroidered Kurti Set')">Ethnic Kurti</button>
            <button type="button" class="studio-sample-chip" onclick="applyStudioSample('Roadster Brooklyn Printed Grey Hoodie')">Printed Hoodie</button>
            <button type="button" class="studio-sample-chip" onclick="applyStudioSample('Executive Oxford Formal Shirt')">Formal Shirt</button>
            <button type="button" class="studio-sample-chip" onclick="applyStudioSample('Slim Fit Washed Denim Jeans')">Denim Jeans</button>
          </div>
        </div>

        <div id="studioResultsCanvas" class="studio-results-canvas">
          <!-- Dynamic templates rendered here -->
        </div>
      </div>
    `;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProductTemplateStudio();
    });
    document.body.appendChild(modal);

    const input = document.getElementById('studioProductInput');
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        triggerStudioGeneration();
      }
    });
  }

  modal.classList.add('active');
  const input = document.getElementById('studioProductInput');
  const query = initialQuery || (input ? input.value : '') || 'Summer Tiered Floral Dress';
  if (input) {
    input.value = query;
    input.focus();
    input.select();
  }
  triggerStudioGeneration(query);
}

function closeProductTemplateStudio() {
  const modal = document.getElementById('productTemplateStudioModal');
  if (modal) modal.classList.remove('active');
}

function applyStudioSample(name) {
  const input = document.getElementById('studioProductInput');
  if (input) input.value = name;
  triggerStudioGeneration(name);
}

function triggerStudioGeneration(nameOverride) {
  const input = document.getElementById('studioProductInput');
  const query = (nameOverride || (input ? input.value : '')).trim();
  if (!query) {
    if (input) input.focus();
    return;
  }
  const canvas = document.getElementById('studioResultsCanvas');
  if (!canvas) return;

  const result = generateProductTemplate(query);
  canvas.innerHTML = `
    <div class="studio-output-wrapper">
      <div class="studio-output-header">
        <div class="studio-output-meta">
          <span class="studio-badge-category">${escapeHTML(result.category)}</span>
          <h4 class="studio-output-title">${escapeHTML(result.productName)}</h4>
          <p class="studio-output-subtitle">Generated 4 Core Perspectives + Macro Angle Breakdown (${result.totalViews} Studio Templates)</p>
        </div>
        <div class="studio-output-actions">
          <a href="category.html?search=${encodeURIComponent(query)}" class="btn btn-outline btn-sm studio-shop-link">
            <i class="fa-solid fa-bag-shopping"></i> Shop in Store
          </a>
        </div>
      </div>

      <!-- 4 Core Views Grid (Front View, Back View, Side View, Fabric Details) -->
      <div class="studio-core-grid">
        <div class="studio-view-card" onclick="openStudioViewModal('${result.keyViews.frontView}', 'Front View - ${escapeHTML(result.productName)}')">
          <div class="studio-card-media">
            <img src="${result.keyViews.frontView}" alt="Front View" loading="lazy" />
            <span class="studio-view-tag">Front View</span>
          </div>
          <div class="studio-card-footer">
            <strong>Front View</strong>
            <span>Studio Perspective</span>
          </div>
        </div>

        <div class="studio-view-card" onclick="openStudioViewModal('${result.keyViews.backView}', 'Back View - ${escapeHTML(result.productName)}')">
          <div class="studio-card-media">
            <img src="${result.keyViews.backView}" alt="Back View" loading="lazy" />
            <span class="studio-view-tag">Back View</span>
          </div>
          <div class="studio-card-footer">
            <strong>Back View</strong>
            <span>Reverse Silhouette</span>
          </div>
        </div>

        <div class="studio-view-card" onclick="openStudioViewModal('${result.keyViews.sideView}', 'Side View - ${escapeHTML(result.productName)}')">
          <div class="studio-card-media">
            <img src="${result.keyViews.sideView}" alt="Side View" loading="lazy" />
            <span class="studio-view-tag">Side View</span>
          </div>
          <div class="studio-card-footer">
            <strong>Side View</strong>
            <span>Profile Drape</span>
          </div>
        </div>

        <div class="studio-view-card" onclick="openStudioViewModal('${result.keyViews.fabricDetails}', 'Fabric Details - ${escapeHTML(result.productName)}')">
          <div class="studio-card-media">
            <img src="${result.keyViews.fabricDetails}" alt="Fabric Details" loading="lazy" />
            <span class="studio-view-tag">Fabric Details</span>
          </div>
          <div class="studio-card-footer">
            <strong>Fabric Details</strong>
            <span>Macro Weave Texture</span>
          </div>
        </div>
      </div>

      <!-- Complete 8-View Studio Strip -->
      <div class="studio-strip-section">
        <h5 class="studio-strip-heading">All ${result.totalViews} Studio Angle Template Breakdowns:</h5>
        <div class="studio-strip-row">
          ${result.template.map((item) => `
            <div class="studio-angle-pill-card" onclick="openStudioViewModal('${item.url}', '${escapeHTML(item.label)} - ${escapeHTML(result.productName)}')">
              <img src="${item.url}" alt="${escapeHTML(item.label)}" loading="lazy" />
              <span>${escapeHTML(item.label)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

window.generateProductTemplate = generateProductTemplate;
window.createTemplateResult = createTemplateResult;
window.handlePtgGenerate = handlePtgGenerate;
window.applyPtgSample = applyPtgSample;
window.openStudioViewModal = openStudioViewModal;
window.closeStudioViewModal = closeStudioViewModal;
window.openProductTemplateStudio = openProductTemplateStudio;
window.closeProductTemplateStudio = closeProductTemplateStudio;
window.applyStudioSample = applyStudioSample;
window.triggerStudioGeneration = triggerStudioGeneration;

function getProductViewTemplates(product) {
  if (!product) return [];
  const main = product.image;
  const title = (product.title || '').toLowerCase();
  const cat = (product.category || '').toLowerCase();
  const sub = (product.subcategory || '').toLowerCase();

  // 1. If product already has multiple distinct thumbs defined
  if (product.thumbs && product.thumbs.length > 1) {
    const urls = new Set(product.thumbs.map(t => t.url));
    if (urls.size > 1) {
      return product.thumbs;
    }
  }

  // 2. Women's 8-View Image Templates (Reference: media_1792669992763_5c3bbd84.jpg)
  if (cat === 'women' || cat === 'ethnic' || sub.includes('dress') || sub.includes('top') || sub.includes('kurti')) {
    const gen = generateProductTemplate(product.title, cat);
    if (gen && gen.template && gen.template.length > 0) {
      return gen.template;
    }
  }

  // 3. Men's 8-View Image Templates
  if (cat === 'men') {
    const gen = generateProductTemplate(product.title, 'men');
    if (gen && gen.template && gen.template.length > 0) {
      return gen.template;
    }
  }

  // 4. Fallback via generator
  const gen = generateProductTemplate(product.title, cat);
  if (gen && gen.template && gen.template.length > 0) {
    return gen.template;
  }

  // If product already has multiple distinct thumbs defined
  if (product.thumbs && product.thumbs.length > 1) {
    const urls = new Set(product.thumbs.map(t => t.url));
    if (urls.size > 1) {
      return product.thumbs;
    }
  }

  // 1. Men's 8-View Image Templates (Reference: media_1792648672149_e209a014.jpg and media_1792665086209_b579ab67.jpg)
  // Categories: Hoodies, Casual Shirts, Casual T-Shirts, Formal Shirts, Jeans, Track Pants, T-Shirts
  if (cat === 'men') {
    if (sub.includes('hoodie') || title.includes('hoodie') || title.includes('sweatshirt')) {
      const lower = title.toLowerCase();
      if (lower.includes('solid') || lower.includes('black')) {
        return MEN_IMAGE_TEMPLATES['hoodie-solid-black'];
      }
      if (lower.includes('brooklyn') || lower.includes('printed') || lower.includes('grey') || lower.includes('gray')) {
        return MEN_IMAGE_TEMPLATES['hoodie-printed-grey'];
      }
      if (lower.includes('color') || lower.includes('block') || lower.includes('navy')) {
        return MEN_IMAGE_TEMPLATES['hoodie-colorblock-navy'];
      }
      if (lower.includes('zip') || lower.includes('green')) {
        return MEN_IMAGE_TEMPLATES['hoodie-zipup-green'];
      }
      if (lower.includes('graphic') || lower.includes('explore') || lower.includes('beige')) {
        return MEN_IMAGE_TEMPLATES['hoodie-graphic-beige'];
      }
      return MEN_IMAGE_TEMPLATES['hoodie-solid-black'] || MEN_IMAGE_TEMPLATES['hoodies'];
    }
    if (sub.includes('casual shirt') || title.includes('casual shirt') || title.includes('button-down') || title.includes('oxford')) {
      return MEN_IMAGE_TEMPLATES['casual-shirt'];
    }
    if (sub.includes('casual t-shirt') || title.includes('casual t-shirt') || title.includes('stag') || title.includes('casual tee')) {
      return MEN_IMAGE_TEMPLATES['casual-tshirt'];
    }
    if (sub.includes('formal shirt') || title.includes('formal shirt') || title.includes('executive') || title.includes('white shirt') || title.includes('formal')) {
      return MEN_IMAGE_TEMPLATES['formal-shirt'];
    }
    if (sub.includes('jean') || title.includes('jean') || title.includes('denim')) {
      return MEN_IMAGE_TEMPLATES['jeans'];
    }
    if (sub.includes('track') || title.includes('track') || title.includes('jogger')) {
      return MEN_IMAGE_TEMPLATES['track-pants'];
    }
    if (sub.includes('t-shirt') || title.includes('t-shirt') || title.includes('graphic') || title.includes('mountain') || title.includes('tshirt')) {
      return MEN_IMAGE_TEMPLATES['tshirt'];
    }
    return MEN_IMAGE_TEMPLATES['casual-shirt'];
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

  if (!product) {
    layout.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; width: 100%;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🛍️</div>
        <h3 style="color: #0f172a; font-weight: 700; margin-bottom: 8px;">No Product Selected</h3>
        <p style="color: #64748b; margin-bottom: 24px;">The store catalog is currently empty. Please provide product details to add new products.</p>
        <a href="index.html" class="btn btn-primary" style="background: #07261e; border: none; border-radius: 9999px; padding: 12px 28px; text-decoration: none; color: #fff; font-weight: 600;">Return to Home</a>
      </div>
    `;
    const relGrid = document.getElementById('relatedProductsGrid');
    if (relGrid) relGrid.innerHTML = '';
    return;
  }
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
  const relatedSection = document.querySelector('.related-products-section');
  if (relatedContainer) {
    let relatedList = PRODUCTS_DATA.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand));
    if (relatedList.length < 6) {
      const fallback = PRODUCTS_DATA.filter(p => p.id !== product.id && !relatedList.some(r => r.id === p.id));
      relatedList = [...relatedList, ...fallback];
    }
    const listToDisplay = relatedList.slice(0, 6);
    if (listToDisplay.length === 0) {
      if (relatedSection) relatedSection.style.display = 'none';
      relatedContainer.innerHTML = '';
    } else {
      if (relatedSection) relatedSection.style.display = '';
      relatedContainer.innerHTML = listToDisplay.map(p => createProductCardHTML(p, false)).join('');
      if (typeof initAvolochProductCardsEffect === 'function') {
        initAvolochProductCardsEffect();
      }
    }
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
    { id: 'casual shirts', label: 'Casual Shirts' },
    { id: 'formal shirts', label: 'Formal Shirts' },
    { id: 't-shirts', label: 'T-Shirts' },
    { id: 'ethnic', label: "Men's Kurtas" },
    { id: 'hoodies', label: 'Hoodies' },
    { id: 'jeans', label: 'Jeans' },
    { id: 'track pants', label: 'Track Pants' }
  ],
  women: [
    { id: 'all', label: 'All Women' },
    { id: 'dresses', label: 'Dresses & Suits' },
    { id: 'lehenga', label: 'Lehenga Choli' },
    { id: 'jeans', label: 'Jeans & Denim' },
    { id: 'ethnic wear', label: 'Ethnic Sets & Suits' },
    { id: 'tops & blouses', label: 'Tops & Blouses' },
    { id: 'casual dresses', label: 'Casual Dresses' },
    { id: 'western dresses', label: 'Western Dresses' },
    { id: 'kurtis', label: 'Kurtis' },
    { id: 'party wear', label: 'Party Wear & Gowns' },
    { id: 'saree', label: 'Sarees' }
  ],
  kids: [
    { id: 'all', label: 'All Kids' },
    { id: 'girl', label: "Girls' Ethnic & Wear" },
    { id: 'boy', label: "Boys' Ethnic & Wear" },
    { id: 'nightwear', label: 'Nightwear' }
  ],
  footwear: [
    { id: 'all', label: 'All Footwear' },
    { id: 'men', label: "Men's Footwear" },
    { id: 'women', label: "Women's Footwear" },
    { id: 'kids', label: "Kids' Footwear" },
    { id: 'formal', label: 'Formal Shoes' },
    { id: 'casual', label: 'Casual & Sneakers' },
    { id: 'sports', label: 'Sports & Running' }
  ],
  ethnic: [
    { id: 'all', label: 'All Ethnic' },
    { id: 'sarees', label: 'Sarees' },
    { id: 'men', label: "Men's Kurtas" },
    { id: 'ethnic wear', label: "Women's Ethnic Sets" },
    { id: 'girl', label: "Girls' Ethnic Sets" },
    { id: 'boy', label: "Boys' Ethnic Sets" },
    { id: 'women', label: 'All Women Ethnic' }
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
  footwear: ['Adidas', 'Bata', 'Clarks', 'Hopscotch', 'Mohey', 'Nike', 'Puma', 'Red Tape', 'Skechers', 'Woodland'],
  ethnic: ['Biba Ethnic', 'FabIndia', 'Kalki Fashion', 'Laxmipati sarees', 'Manyavar', 'Mohey', 'Soch']
};

const urlSubfilterParam = new URLSearchParams(window.location.search).get('subfilter');
const urlSearchParam = (new URLSearchParams(window.location.search).get('search') || '').toLowerCase();
let activeSubfilter = (urlSubfilterParam && urlSubfilterParam.trim())
  ? urlSubfilterParam.trim().toLowerCase()
  : ((urlSearchParam.includes('hoodie') || urlSearchParam.includes('hoodies')) ? 'hoodies' : 'all');

function formatProductSize(product, size) {
  if (product && product.category === 'footwear') {
    return String(size).replace(/^uk\s*/i, '').trim();
  }
  return size;
}

function getProductSizeGuideCategory(product) {
  if (!product) return 'men';
  const isKids = product.category === 'kids' || 
                 product.subcategory === 'kids' || 
                 (product.tags && product.tags.some(t => /kids/i.test(t))) || 
                 /\b(kids?|children|boys?|girls?|toddler)\b/i.test(product.title);

  if (isKids) {
    if (product.category === 'footwear' || /\b(shoe|shoes|sneaker|sneakers|clogs?|sandals?|footwear)\b/i.test(product.title + ' ' + (product.tags || []).join(' '))) {
      return 'kids-footwear';
    }
    const isBottom = product.subcategory === 'jeans' || 
                     product.subcategory === 'bottom' || 
                     /\b(jeans?|denim|trousers?|pants?|shorts?|joggers?|track)\b/i.test(product.title + ' ' + (product.tags || []).join(' '));
    if (isBottom) {
      return 'kids-bottoms';
    }
    return 'kids-tops';
  }

  if (product.category === 'footwear') return 'footwear';
  if (product.category === 'ethnic') return 'ethnic';
  if (product.category === 'women') return 'women';

  const sub = (product.subcategory || '').toLowerCase();
  const text = (product.title + ' ' + (product.tags || []).join(' ')).toLowerCase();
  if (sub === 'track pants' || sub === 'jeans' || /\b(pants?|track\s*pants?|joggers?|jeans?|denim|trousers?)\b/i.test(text)) {
    return 'pants';
  }

  return 'shirts';
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

  const sizeOrder = [
    'Free Size', 'XS', 'S', 'M', 'L', 'XL', '2XL', 'XXL', '3XL', 
    '38', '40', '42', '44', '46', 
    '2Y', '3Y', '4Y', '5Y', '6Y', '8Y', '10Y', '12Y', 
    'UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12', 
    '5', '6', '7', '8', '9', '10', '11', '12'
  ];
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
  const categoryProducts = currentCat === 'budget'
    ? PRODUCTS_DATA.filter(p => p.price <= 499)
    : currentCat === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter(p => p.category === currentCat || (currentCat === 'ethnic' && p.subcategory === 'ethnic wear') || (currentCat === 'women' && p.category === 'ethnic'));
  brands = [...new Set(categoryProducts.map(p => p.brand).filter(Boolean))].sort();

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
    // If on homepage without category filter or search, show only All Fashion curated products
    if (!IS_CATEGORY_PAGE && state.selectedCategory === 'all' && !state.searchQuery.trim() && (!activeSubfilter || activeSubfilter === 'all')) {
      if (!p.showInAllFashion) return false;
    }

    if (state.selectedCategory === 'budget') {
      if (p.price > 499) return false;
    } else if (state.selectedCategory === 'women') {
      // STRICT FILTER: Reject ANY men or boy items immediately
      if (p.category === 'men' || p.category === 'kids' || p.subcategory === "men's kurta" || p.subcategory === 'boy' || /\b(men|men's|boy|boys)\b/i.test(p.title)) {
        return false;
      }
      const isWomenDirect = p.category === 'women';
      const isWomenSaree = (p.category === 'ethnic' && (p.subcategory === 'saree' || (p.tags || []).includes('Women Saree') || /\b(saree|sari|anarkali|lehenga)\b/i.test(p.title)));
      const isWomenFootwear = (p.category === 'footwear' && (p.subcategory === 'women' || /\b(women|woman|ladies)\b/i.test(p.title) || /\b(heels|ballerinas?|pumps?)\b/i.test(p.title)));
      if (!isWomenDirect && !isWomenSaree && !isWomenFootwear) {
        return false;
      }
    } else if (state.selectedCategory === 'men') {
      // STRICT FILTER: Reject ANY women or girl items
      if (p.category === 'women' || p.category === 'kids' || p.subcategory === 'saree' || p.subcategory === 'girl' || /\b(women|woman|girl|girls|ladies|saree|sari)\b/i.test(p.title)) {
        return false;
      }
      const isMenDirect = p.category === 'men';
      const isMenKurta = (p.category === 'ethnic' && (p.subcategory === "men's kurta" || p.subcategory === 'men' || /\b(men|men's|kurta for men)\b/i.test(p.title)));
      const isMenFootwear = (p.category === 'footwear' && (p.subcategory === 'men' || /\b(men|men's)\b/i.test(p.title)));
      if (!isMenDirect && !isMenKurta && !isMenFootwear) {
        return false;
      }
    } else if (state.selectedCategory === 'kids') {
      if (p.category !== 'kids' && !(p.category === 'footwear' && p.subcategory === 'kids')) return false;
    } else if (state.selectedCategory === 'ethnic') {
      const isEthnicDirect = p.category === 'ethnic';
      const isWomenSaree = (p.category === 'women' && (p.subcategory === 'saree' || (p.tags || []).includes('Ethnic Wear') || /\b(saree|sari|anarkali|lehenga)\b/i.test(p.title)));
      const isKidsEthnic = (p.category === 'kids' && (p.tags || []).includes('Kids Ethnic'));
      if (!isEthnicDirect && !isWomenSaree && !isKidsEthnic) return false;
    } else if (state.selectedCategory === 'footwear') {
      if (p.category !== 'footwear') return false;
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
      if (p.category === 'ethnic' || (p.category === 'kids' && (p.tags || []).includes('Kids Ethnic'))) {
        if (targetSub === 'all') {
          // match all
        } else if (targetSub === 'sarees' || targetSub === 'saree') {
          if (pSub !== 'sarees' && !text.includes('saree') && !text.includes('sari')) return false;
        } else if (targetSub === 'ethnic wear') {
          if (pSub !== 'ethnic wear' && !text.includes('kurta set') && !text.includes('anarkali') && !text.includes('suit')) return false;
        } else if (targetSub === 'men' || targetSub === 'ethnic') {
          if (pSub !== 'men' && !/\bmen\b/i.test(p.title) && !text.includes('kurta for men')) return false;
        } else if (targetSub === 'girl') {
          if (pSub !== 'girl' && !/\bgirls?\b/i.test(text)) return false;
        } else if (targetSub === 'boy') {
          if (pSub !== 'boy' && !/\bboys?\b/i.test(text)) return false;
        } else if (targetSub === 'women') {
          if (!/\b(women|woman|saree|sari|lehenga|anarkali)\b/i.test(text)) return false;
        } else if (pSub !== targetSub) {
          return false;
        }
      } else if (p.category === 'footwear') {
        // Footwear category filtering
        if (targetSub === 'men') {
          if (pSub === 'women' || pSub === 'kids' || /\b(women|woman|girls?|boys?|kids?)\b/i.test(p.title)) return false;
          if (pSub !== 'men' && !/\bmen\b/i.test(text) && !/\b(boots|derby|oxford)\b/i.test(text)) return false;
        } else if (targetSub === 'women') {
          if (pSub === 'men' || pSub === 'kids' || /\b(men|kids?|boys?)\b/i.test(p.title)) return false;
          if (pSub !== 'women' && !/\b(women|heels|ballerinas?|sandals?|juttis?|pumps?)\b/i.test(text)) return false;
        } else if (targetSub === 'kids') {
          if (pSub !== 'kids' && !/\b(kids?|boys?|girls?|toddler|clogs?|dinosaur)\b/i.test(text)) return false;
        } else if (targetSub === 'formal') {
          const isFormalTag = (p.tags || []).some(t => /formal/i.test(t));
          const isFormalTitle = /\b(formal|oxford|derby|stiletto|pumps?|heels?|juttis?)\b/i.test(p.title);
          if (pSub !== 'formal' && !isFormalTag && !isFormalTitle) return false;
        } else if (targetSub === 'casual') {
          const isCasualTag = (p.tags || []).some(t => /casual/i.test(t));
          const isCasualTitle = /\b(casual|sneakers?|canvas|slip-on|clogs?|retro)\b/i.test(p.title);
          if (pSub !== 'casual' && !isCasualTag && !isCasualTitle) return false;
        } else if (targetSub === 'sports') {
          const isSportsTag = (p.tags || []).some(t => /sports?/i.test(t));
          const isSportsTitle = /\b(sports?|running|athletic|hoops|pegasus|runners?)\b/i.test(p.title);
          if (pSub !== 'sports' && !isSportsTag && !isSportsTitle) return false;
        } else if (pSub !== targetSub) {
          return false;
        }
      } else if (pSub === targetSub) {
        // Direct subcategory match
      } else if ((targetSub === 'hoodies' || targetSub === 'hoodie') && (pSub === 'hoodies' || pSub === 'hoodie' || text.includes('hoodie') || text.includes('sweatshirt'))) {
        // match
      } else if (targetSub === 'casual shirts' && (pSub === 'casual shirts' || (text.includes('casual') && text.includes('shirt')))) {
        // match
      } else if (targetSub === 'casual t-shirts' && (pSub === 'casual t-shirts' || (text.includes('casual') && (text.includes('t-shirt') || text.includes('tee') || text.includes('tshirt'))))) {
        // match
      } else if (targetSub === 'formal shirts' && (pSub === 'formal shirts' || (text.includes('formal') && text.includes('shirt')))) {
        // match
      } else if (targetSub === 'casual' && (text.includes('casual') || text.includes('street') || text.includes('relax') || text.includes('regular'))) {
        // match
      } else if (targetSub === 'formal' && (text.includes('formal') || text.includes('executive') || text.includes('blazer') || text.includes('trousers') || text.includes('oxford') || text.includes('derby'))) {
        // match
      } else if (targetSub === 'jeans' && (pSub === 'jeans' || text.includes('jean') || text.includes('denim'))) {
        // match
      } else if ((targetSub === 'lehenga' || targetSub === 'lehengas') && (pSub === 'lehenga' || text.includes('lehenga') || text.includes('choli'))) {
        // match
      } else if ((targetSub === 't-shirts' || targetSub === 'tshirts') && (pSub === 't-shirts' || text.includes('t-shirt') || text.includes('tee') || text.includes('tshirt') || text.includes('polo'))) {
        // match
      } else if (targetSub === 'track pants' && (pSub === 'track pants' || text.includes('track') || text.includes('jogger') || text.includes('sweatpant'))) {
        // match
      } else if (targetSub === 'casual dresses' && (pSub === 'casual dresses' || (text.includes('casual') && text.includes('dress')))) {
        // match
      } else if (targetSub === 'western dresses' && (pSub === 'western dresses' || text.includes('western') || (text.includes('lavender') && text.includes('dress')))) {
        // match
      } else if ((targetSub === 'ethnic wear' || targetSub === 'ethnic-dress') && (pSub === 'ethnic wear' || pSub === 'lehenga' || text.includes('ethnic') || text.includes('anarkali') || text.includes('kurta') || text.includes('suit') || text.includes('lehenga'))) {
        // match
      } else if (targetSub === 'tops & blouses' && (pSub === 'tops & blouses' || text.includes('blouse') || text.includes('crop') || text.includes('peplum') || (text.includes('top') && !text.includes('stop')))) {
        // match
      } else if (targetSub === 'kurtis' && (pSub === 'kurtis' || text.includes('kurti') || text.includes('kurta'))) {
        // match
      } else if (targetSub === 'party wear' && (pSub === 'party wear' || text.includes('party') || text.includes('gown') || text.includes('ball'))) {
        // match
      } else if (targetSub === 'dresses' && (pSub === 'dresses' || text.includes('dress') || text.includes('frock') || text.includes('gown') || text.includes('suit') || text.includes('salwar') || text.includes('anarkali') || text.includes('churidar'))) {
        // match
      } else if (targetSub === 'top' && (text.includes('top') || text.includes('blouse') || text.includes('shirt') || text.includes('crop') || text.includes('tunic'))) {
        // match
      } else if (targetSub === 'saree' && (text.includes('saree') || text.includes('sari'))) {
        // match
      } else if ((targetSub === 'boy' || targetSub === 'boys') && (pSub === 'boy' || (p.tags || []).includes("Boys' Ethnic") || text.includes('boy') || text.includes('boys'))) {
        // match
      } else if ((targetSub === 'girl' || targetSub === 'girls') && (pSub === 'girl' || (p.tags || []).includes("Girls' Ethnic") || text.includes('girl') || text.includes('girls') || text.includes('frock') || text.includes('sharara') || text.includes('ghagra'))) {
        // match
      } else if (targetSub === 'nightwear' && (text.includes('night') || text.includes('sleep') || text.includes('pajama') || text.includes('pyjama'))) {
        // match
      } else if ((targetSub === 'ethnic' || targetSub === 'kurtas' || targetSub === 'kurta') && (p.category === 'ethnic' || pSub === 'men' || text.includes('kurta'))) {
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
      case 'popular':
      default: return 0;
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
    const mobileCatHeading = document.getElementById('mobileCategoryHeading');
    if (mobileCatHeading) {
      mobileCatHeading.textContent = CATEGORY_HEADINGS[state.selectedCategory] || 'Collections';
    }
    const mobileCatCount = document.getElementById('mobileCategoryCount');
    if (mobileCatCount) {
      mobileCatCount.textContent = `(${filteredList.length} items)`;
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
    if (typeof initAvolochProductCardsEffect === 'function') {
      initAvolochProductCardsEffect();
    }
  }

  updateActiveFilterChips();
}

function createProductCardHTML(product, isFlash = false, isFeatured = false) {
  const isWishlisted = state.wishlist && state.wishlist.includes(product.id);
  const initialImg = product.image;
  
  // Dynamic pricing and ratings directly taken from JS (PRODUCTS_DATA)
  const currentPriceFormatted = `₹${product.price.toLocaleString('en-IN')}`;
  const origPriceFormatted = `₹${product.originalPrice.toLocaleString('en-IN')}`;
  const ratingVal = (product.rating || 4.7).toFixed(1);
  const reviewCountFormatted = product.reviewsCount
    ? (product.reviewsCount >= 1000 ? `${(product.reviewsCount / 1000).toFixed(1)}k` : product.reviewsCount)
    : '520';

  // Single unified card template matching user reference (media_1792680531212_fe4fa35c.png)
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="avoloch-glow" aria-hidden="true"></div>
      <div class="avoloch-hologram-sheen" aria-hidden="true"></div>
      <div class="avoloch-scanline" aria-hidden="true"></div>
      <div class="product-card-img-wrap${product.category === 'footwear' || product.id === 'sm-106' ? ' footwear-card-img' : ''}" onclick="openProductWindow('${product.id}', event)">
        <img id="card-img-${product.id}" src="${initialImg}" alt="${product.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80';">
        
        <button type="button" class="card-wishlist-btn wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}"
                onclick="event.stopPropagation(); toggleWishlist('${product.id}')" title="${isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}" aria-label="Save to Wishlist">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? '#ff2d87' : 'none'}" stroke="${isWishlisted ? '#ff2d87' : '#ffffff'}" stroke-width="2.4">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
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

        <div class="product-title" title="${product.title}">
          <span class="desktop-title">${product.title}</span>
          <span class="mobile-title">${product.title.trim().split(/\s+/)[0]}</span>
        </div>
        
        <div class="price-row">
          <span class="original-price">${origPriceFormatted}</span>
          <span class="current-price">${currentPriceFormatted}</span>
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
// AVOLOCH 3D HOLOGRAPHIC PRODUCT CARD EFFECT (PEN KwwXrvb)
// --------------------------------------------------------------------------
function initAvolochProductCardsEffect() {
  const cards = document.querySelectorAll('.product-card:not(.flash-product-card)');
  cards.forEach(card => {
    if (card.dataset.avolochBound) return;
    card.dataset.avolochBound = 'true';

    // Ensure Avoloch overlay layers exist
    if (!card.querySelector('.avoloch-glow')) {
      const glow = document.createElement('div');
      glow.className = 'avoloch-glow';
      glow.setAttribute('aria-hidden', 'true');
      card.prepend(glow);
    }
    if (!card.querySelector('.avoloch-hologram-sheen')) {
      const sheen = document.createElement('div');
      sheen.className = 'avoloch-hologram-sheen';
      sheen.setAttribute('aria-hidden', 'true');
      card.prepend(sheen);
    }
    if (!card.querySelector('.avoloch-scanline')) {
      const scanline = document.createElement('div');
      scanline.className = 'avoloch-scanline';
      scanline.setAttribute('aria-hidden', 'true');
      card.prepend(scanline);
    }

    const glowEl = card.querySelector('.avoloch-glow');
    let rafId = null;

    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rotY = (deltaX * 12).toFixed(2);
        const rotX = (-deltaY * 12).toFixed(2);
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) translateZ(12px)`;

        if (glowEl) {
          const shadowX = (-deltaX * 14).toFixed(1);
          const shadowY = (-deltaY * 14).toFixed(1);
          glowEl.style.boxShadow = `inset ${shadowX}px ${shadowY}px 26px rgba(255, 255, 255, 0.25), inset 0 0 16px rgba(212, 175, 55, 0.3)`;
        }
      });
    });

    card.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = '';
      if (glowEl) {
        glowEl.style.boxShadow = '';
      }
    });
  });
}
window.initAvolochProductCardsEffect = initAvolochProductCardsEffect;

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

function toggleMobileSearch(forceState) {
  const expBar = document.getElementById('mobileExpandableSearchBar');
  const header = document.getElementById('mainHeader');
  if (expBar) {
    const isCurrentlyActive = header ? header.classList.contains('search-expanded') : (expBar.classList.contains('active') && expBar.style.display !== 'none');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyActive;
    if (shouldOpen) {
      expBar.classList.add('active');
      expBar.style.setProperty('display', 'block', 'important');
      if (header) header.classList.add('search-expanded');
      const input = expBar.querySelector('input') || document.getElementById('mobileSearchInput');
      if (input) {
        setTimeout(() => input.focus(), 60);
      }
    } else {
      expBar.classList.remove('active');
      expBar.style.setProperty('display', 'none', 'important');
      if (header) header.classList.remove('search-expanded');
    }
    return;
  }
  const wrappers = document.querySelectorAll('.search-wrapper');
  wrappers.forEach(w => {
    w.classList.toggle('mobile-active');
    if (w.classList.contains('mobile-active')) {
      const input = w.querySelector('#searchInput') || w.querySelector('input');
      if (input) input.focus();
    }
  });
}

function handleMobileSearchInput(query) {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = query;
  }
}

function executeMobileSearch(query) {
  const q = (query || '').trim();
  if (!q) return;
  if (window.location.pathname.includes('category.html')) {
    state.searchQuery = q;
    const catInput = document.getElementById('searchInput');
    if (catInput) catInput.value = q;
    renderProductsCatalog();
    const catSec = document.getElementById('catalogSection');
    if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = 'category.html?search=' + encodeURIComponent(q);
  }
}

window.toggleMobileSearch = toggleMobileSearch;
window.handleMobileSearchInput = handleMobileSearchInput;
window.executeMobileSearch = executeMobileSearch;

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
  const sidebar = document.getElementById('categoryFilterSidebar') || document.getElementById('filterSidebar');
  const overlay = document.getElementById('categoryFilterOverlay');
  if (sidebar) sidebar.classList.toggle('active');
  if (overlay) overlay.classList.toggle('active');
  if (sidebar && sidebar.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function toggleMobileCategoryFilters() {
  toggleMobileFilters();
}

function closeMobileCategoryFilters() {
  const sidebar = document.getElementById('categoryFilterSidebar') || document.getElementById('filterSidebar');
  const overlay = document.getElementById('categoryFilterOverlay');
  if (sidebar) sidebar.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function updateActiveFilterChips() {
  const chipsContainer = document.getElementById('activeFilterChips');
  const bar = document.getElementById('activeFiltersBar');
  const activeBadge = document.getElementById('filterActiveBadge');
  const mobileFilterBadge = document.getElementById('mobileFilterBadge');
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

      const studioActionHtml = `
        <div class="live-search-studio-action" onclick="openProductTemplateStudio('${escapeHTML(val)}')">
          <div class="studio-action-icon"><i class="fa-solid fa-wand-magic-sparkles" style="color:#d4af37"></i></div>
          <div class="studio-action-info">
            <span class="studio-action-title">Generate Templates for <strong>"${escapeHTML(val)}"</strong></span>
            <span class="studio-action-sub">Front, Back, Side Views & Fabric Details</span>
          </div>
          <span class="studio-action-badge"><i class="fa-solid fa-bolt"></i> Generate</span>
        </div>
      `;

      if (matches.length > 0 && liveResultsContainer) {
        liveResultsContainer.innerHTML = studioActionHtml + matches.map(m => `
          <div class="live-search-item" onclick="openProductModal('${m.id}')">
            <img src="${m.image}" class="live-search-thumb" alt="${m.title}">
            <div class="live-search-info">
              <h5>${m.title}</h5>
              <p>₹${m.price.toLocaleString('en-IN')}</p>
            </div>
          </div>
        `).join('');
      } else if (liveResultsContainer) {
        liveResultsContainer.innerHTML = studioActionHtml + '<p style="font-size:0.8rem; color:var(--text-muted); padding:8px;">No matching store items found. Click above to generate templates!</p>';
      }
    } else if (liveResultsContainer) {
      liveResultsContainer.innerHTML = `
        <div class="live-search-studio-action live-search-studio-action-empty" onclick="openProductTemplateStudio()">
          <div class="studio-action-icon"><i class="fa-solid fa-wand-magic-sparkles" style="color:#d4af37"></i></div>
          <div class="studio-action-info">
            <span class="studio-action-title">Product Image & Template Studio</span>
            <span class="studio-action-sub">Input any product name to generate views</span>
          </div>
          <span class="studio-action-badge">Launch</span>
        </div>
      `;
    }

    renderProductsCatalog();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      suggestionsBox?.classList.remove('active');
      const val = input.value.trim();
      if (!val) {
        scrollToCatalog();
        return;
      }
      if (val.toLowerCase().includes('template') || val.toLowerCase().includes('generate') || val.toLowerCase().includes('view')) {
        const cleaned = val.replace(/templates?|generate|views?/gi, '').trim() || val;
        openProductTemplateStudio(cleaned);
        return;
      }
      executeSearchRedirect(val);
    }
  });

  const searchSubmitBtn = document.getElementById('headerSearchSubmitBtn');
  searchSubmitBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    suggestionsBox?.classList.remove('active');
    const val = input ? input.value.trim() : '';
    if (val) {
      executeSearchRedirect(val);
    } else {
      scrollToCatalog();
    }
  });

  clearBtn?.addEventListener('click', () => {
    clearSearchQuery();
  });
}

function executeSearchRedirect(query) {
  if (!query) return;
  const q = query.trim().toLowerCase();
  if (!q) return;

  // 1. Direct keyword mapping to category & subfilter
  if (/\b(hoodie|hoodies|sweatshirt|sweatshirts)\b/i.test(q)) {
    window.location.href = `category.html?category=men&subfilter=hoodies&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(casual\s*shirts?)\b/i.test(q)) {
    window.location.href = `category.html?category=men&subfilter=casual shirts&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(formal\s*shirts?)\b/i.test(q)) {
    window.location.href = `category.html?category=men&subfilter=formal shirts&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(t-?shirts?|tees?)\b/i.test(q)) {
    window.location.href = `category.html?category=men&subfilter=t-shirts&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(jeans?|denim)\b/i.test(q)) {
    window.location.href = `category.html?category=men&subfilter=jeans&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(track\s*pants?|joggers?|trackpant)\b/i.test(q)) {
    window.location.href = `category.html?category=men&subfilter=track pants&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(saree|sari|lehenga|lehengas|kurta|kurtas|anarkali|sherwani|ethnic)\b/i.test(q)) {
    window.location.href = `category.html?category=ethnic&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(dresses?|gown|gowns|tops?|skirt|skirts|women)\b/i.test(q)) {
    window.location.href = `category.html?category=women&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(shoes?|sneakers?|boots?|sandals?|footwear|loafers?|heels|flats)\b/i.test(q)) {
    window.location.href = `category.html?category=footwear&search=${encodeURIComponent(query.trim())}`;
    return;
  }
  if (/\b(kids?|boys?|girls?|baby|toddler|frock)\b/i.test(q)) {
    window.location.href = `category.html?category=kids&search=${encodeURIComponent(query.trim())}`;
    return;
  }

  // 2. Search in PRODUCTS_DATA
  const matched = PRODUCTS_DATA.find(p =>
    p.title.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
    (p.subcategory && p.subcategory.toLowerCase().includes(q))
  );

  if (matched) {
    const sub = matched.subcategory ? `&subfilter=${encodeURIComponent(matched.subcategory)}` : '';
    window.location.href = `category.html?category=${encodeURIComponent(matched.category)}${sub}&search=${encodeURIComponent(query.trim())}`;
    return;
  }

  // Fallback
  if (IS_CATEGORY_PAGE) {
    state.searchQuery = query.trim();
    renderProductsCatalog();
  } else {
    window.location.href = `category.html?category=all&search=${encodeURIComponent(query.trim())}`;
  }
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
  executeSearchRedirect(tag);
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
  updateBadgesUI();
  showToast(`Added "${product.title}" (${formatProductSize(product, targetSize)}) to Cart! 🛍️`, 'success');
  showCartAddedPopup(product, targetSize);
}

window.updateCartBadges = updateBadgesUI;

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

const KIDS_SIZE_CHARTS = {
  tops: {
    id: 'tops',
    title: 'Tops & T-Shirts (Boys & Girls)',
    badgeClass: 'badge-pink',
    unitText: 'All measurements are in centimeters (cm)',
    columns: ['Age Group', 'Size', 'Chest (cm)', 'Length (cm)', 'Shoulder (cm)', 'Sleeve Length (cm)', 'Height Range (cm)'],
    rows: [
      ['1 - 2 Years', '2Y', '52', '36', '22', '12', '80 - 92'],
      ['2 - 3 Years', '3Y', '54', '38', '23', '13', '92 - 98'],
      ['3 - 4 Years', '4Y', '56', '40', '24', '14', '98 - 104'],
      ['4 - 5 Years', '5Y', '58', '42', '25', '15', '104 - 110'],
      ['5 - 6 Years', '6Y', '62', '44', '26', '16', '110 - 116'],
      ['7 - 8 Years', '8Y', '66', '46', '28', '17', '116 - 128'],
      ['9 - 10 Years', '10Y', '70', '50', '30', '18', '128 - 140'],
      ['11 - 12 Years', '12Y', '74', '54', '32', '19', '140 - 152']
    ],
    howToMeasureTitle: 'How to Measure?',
    howToMeasure: [
      { num: '1', title: 'Chest', desc: 'Measure around the fullest part of the chest.' },
      { num: '2', title: 'Length', desc: 'Measure from the shoulder to the bottom hem.' },
      { num: '3', title: 'Shoulder', desc: 'Measure from one shoulder seam to the other.' },
      { num: '4', title: 'Sleeve Length', desc: 'Measure from shoulder seam to wrist.' }
    ]
  },
  bottoms: {
    id: 'bottoms',
    title: 'Bottoms & Jeans (Boys & Girls)',
    badgeClass: 'badge-blue',
    unitText: 'All measurements are in centimeters (cm)',
    columns: ['Age Group', 'Size', 'Waist (cm)', 'Hip (cm)', 'Length (cm)', 'Height Range (cm)'],
    rows: [
      ['1 - 2 Years', '2Y', '44', '56', '50', '80 - 92'],
      ['2 - 3 Years', '3Y', '46', '58', '54', '92 - 98'],
      ['3 - 4 Years', '4Y', '48', '60', '58', '98 - 104'],
      ['4 - 5 Years', '5Y', '50', '62', '62', '104 - 110'],
      ['5 - 6 Years', '6Y', '52', '64', '66', '110 - 116'],
      ['7 - 8 Years', '8Y', '54', '68', '72', '116 - 128'],
      ['9 - 10 Years', '10Y', '56', '72', '78', '128 - 140'],
      ['11 - 12 Years', '12Y', '58', '76', '84', '140 - 152']
    ],
    howToMeasureTitle: 'How to Measure Bottoms?',
    howToMeasure: [
      { num: '1', title: 'Waist', desc: 'Measure around the natural waistline where waistband rests.' },
      { num: '2', title: 'Hip', desc: 'Measure around fullest part of hips.' },
      { num: '3', title: 'Length', desc: 'Measure from waistband straight down to ankle hem.' }
    ]
  },
  footwear: {
    id: 'footwear',
    title: 'Footwear (Kids)',
    badgeClass: 'badge-green',
    unitText: 'All measurements are in centimeters (cm)',
    columns: ['Age Group', 'UK Size', 'EU Size', 'Foot Length (cm)'],
    rows: [
      ['1 - 2 Years', '5', '21', '12.5'],
      ['2 - 3 Years', '6', '23', '14.0'],
      ['3 - 4 Years', '7', '25', '15.0'],
      ['4 - 5 Years', '8', '26', '16.0'],
      ['5 - 6 Years', '9', '28', '17.0'],
      ['7 - 8 Years', '10', '30', '18.5'],
      ['9 - 10 Years', '11', '32', '20.0'],
      ['11 - 12 Years', '12', '34', '21.5']
    ],
    tip: 'Place your child\'s foot on a flat surface, measure from the heel to the longest toe, and add 0.5 – 1 cm for comfortable fit.'
  }
};

function renderKidsSizeChartContent(activeTab = 'tops') {
  const chart = KIDS_SIZE_CHARTS[activeTab] || KIDS_SIZE_CHARTS.tops;
  return `
    <div class="size-chart-tabs" role="tablist">
      <button type="button" class="size-chart-tab ${activeTab === 'tops' ? 'active' : ''}" onclick="switchKidsSizeTab('tops')">👕 Tops & T-Shirts</button>
      <button type="button" class="size-chart-tab ${activeTab === 'bottoms' ? 'active' : ''}" onclick="switchKidsSizeTab('bottoms')">👖 Bottoms & Jeans</button>
      <button type="button" class="size-chart-tab ${activeTab === 'footwear' ? 'active' : ''}" onclick="switchKidsSizeTab('footwear')">👟 Footwear (Kids)</button>
    </div>

    <div class="size-guide-header-badge ${chart.badgeClass}">
      <h4 class="size-guide-header-title">${chart.title}</h4>
      <span class="size-guide-subtitle">${chart.unitText}</span>
    </div>

    <div class="size-guide-table-wrap">
      <table class="size-table">
        <thead>
          <tr>${chart.columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${chart.rows.map(row => `
            <tr>${row.map((cell, idx) => `<td>${idx === 1 ? `<strong>${cell}</strong>` : cell}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    ${chart.howToMeasure ? `
      <div class="how-to-measure-card">
        <h4>${chart.howToMeasureTitle}</h4>
        ${chart.howToMeasure.map(step => `
          <div class="measure-step">
            <span class="step-num">${step.num}</span>
            <div><strong>${step.title}:</strong> ${step.desc}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${chart.tip ? `
      <div class="size-guide-tip-box">
        <span class="tip-bulb">💡</span>
        <div><strong>Tip:</strong> ${chart.tip}</div>
      </div>
    ` : ''}
  `;
}

window.switchKidsSizeTab = function(tabId) {
  const content = document.getElementById('sizeGuideContent');
  const title = document.getElementById('sizeGuideTitle');
  if (title) title.textContent = "Kids' Official Size Guide";
  if (content) content.innerHTML = renderKidsSizeChartContent(tabId);
};

function openSizeChartModal(category = currentProductSizeCategory) {
  const modal = document.getElementById('sizeChartModal');
  if (!modal) return;
  const title = modal.querySelector('#sizeGuideTitle');
  const content = modal.querySelector('#sizeGuideContent');

  if (category === 'kids' || category === 'kids-tops' || category === 'kids-bottoms' || category === 'kids-footwear') {
    if (title) title.textContent = "Kids' Official Size Guide";
    const initialTab = category === 'kids-footwear' ? 'footwear' : (category === 'kids-bottoms' ? 'bottoms' : 'tops');
    if (content) content.innerHTML = renderKidsSizeChartContent(initialTab);
    modal.classList.add('active');
    return;
  }

  const guides = {
    shirts: {
      title: "Shirts & T-Shirts Size Chart",
      note: "Garment measurements in inches. Features sizes XS, S, M, L, XL, XXL.",
      isApparel: true,
      columns: ['Size', 'Chest (in)', 'Shoulder (in)', 'Length (in)', 'Waist (in)'],
      rows: [
        ['XS', '34–36', '16.5', '26.5', '28–30'],
        ['S', '36–38', '17.0', '27.5', '30–32'],
        ['M', '38–40', '17.5', '28.5', '32–34'],
        ['L', '40–42', '18.0', '29.5', '34–36'],
        ['XL', '42–44', '18.5', '30.5', '36–38'],
        ['XXL', '44–46', '19.0', '31.5', '38–40']
      ]
    },
    pants: {
      title: "Pants & Track Pants Size Chart (Waist Length)",
      note: "Waist length measurements in inches. Features sizes 28, 30, 32, 34, 36, 38 (waist length).",
      isApparel: true,
      columns: ['Size (Waist)', 'Waist (in)', 'Inseam Length (in)', 'Hip (in)', 'Outseam Length (in)'],
      rows: [
        ['28', '28–29', '30.0', '35–36', '39.0'],
        ['30', '30–31', '31.0', '37–38', '40.0'],
        ['32', '32–33', '32.0', '39–40', '41.0'],
        ['34', '34–35', '32.0', '41–42', '41.5'],
        ['36', '36–37', '33.0', '43–44', '42.0'],
        ['38', '38–39', '33.0', '45–46', '42.5']
      ]
    },
    men: {
      title: "Shirts & T-Shirts Size Chart",
      note: "Garment measurements in inches. Features sizes XS, S, M, L, XL, XXL.",
      isApparel: true,
      columns: ['Size', 'Chest (in)', 'Shoulder (in)', 'Length (in)', 'Waist (in)'],
      rows: [
        ['XS', '34–36', '16.5', '26.5', '28–30'],
        ['S', '36–38', '17.0', '27.5', '30–32'],
        ['M', '38–40', '17.5', '28.5', '32–34'],
        ['L', '40–42', '18.0', '29.5', '34–36'],
        ['XL', '42–44', '18.5', '30.5', '36–38'],
        ['XXL', '44–46', '19.0', '31.5', '38–40']
      ]
    },
    women: {
      title: "Women's Size Guide",
      note: 'Body measurements in inches. Choose the size that best matches your bust, waist, and hip measurements.',
      columns: ['Size', 'Bust (in)', 'Waist (in)', 'Hip (in)'],
      rows: [['XS', '32–33', '26–27', '35–36'], ['S', '34–35', '28–29', '37–38'], ['M', '36–37', '30–31', '39–40'], ['L', '38–40', '32–34', '41–43'], ['XL', '41–43', '35–37', '44–46']]
    },
    footwear: {
      title: 'Footwear Size Guide',
      note: 'Foot length in centimeters (cm). Measure from heel to longest toe.',
      hasKidsTab: true,
      columns: ['UK / India Size', 'EU Size', 'US Size', 'Foot Length (cm)'],
      rows: [
        ['UK 6', '40', '7', '24.6'],
        ['UK 7', '41', '8', '25.4'],
        ['UK 8', '42', '9', '26.2'],
        ['UK 9', '43', '10', '27.1'],
        ['UK 10', '44', '11', '27.9'],
        ['UK 11', '45', '12', '28.8']
      ]
    },
    ethnic: {
      title: 'Ethnic Wear Size Guide',
      note: 'Body measurements in inches. Kurta and sherwani sizing with chest and length.',
      columns: ['Size', 'Chest (in)', 'Waist (in)', 'Length (in)'],
      rows: [['XS', '34–36', '28–30', '38'], ['S', '36–38', '30–32', '40'], ['M', '38–40', '32–34', '42'], ['L', '40–42', '34–36', '44'], ['XL', '42–44', '36–38', '45'], ['XXL', '44–46', '38–40', '46']]
    }
  };

  const guide = guides[category] || guides.shirts;
  if (title) title.textContent = guide.title;
  if (content) {
    let tabsHtml = '';
    if (guide.isApparel) {
      tabsHtml = `
        <div class="size-chart-tabs" role="tablist">
          <button type="button" class="size-chart-tab ${category === 'shirts' || category === 'men' ? 'active' : ''}" onclick="openSizeChartModal('shirts')">👕 Shirts & T-Shirts (XS - XXL)</button>
          <button type="button" class="size-chart-tab ${category === 'pants' ? 'active' : ''}" onclick="openSizeChartModal('pants')">👖 Pants & Track Pants (28 - 38 Waist)</button>
        </div>
      `;
    } else if (guide.hasKidsTab) {
      tabsHtml = `
        <div class="size-chart-tabs" role="tablist">
          <button type="button" class="size-chart-tab active" onclick="openSizeChartModal('footwear')">👞 Adults Footwear</button>
          <button type="button" class="size-chart-tab" onclick="openSizeChartModal('kids-footwear')">👟 Footwear (Kids)</button>
        </div>
      `;
    }
    content.innerHTML = `
      ${tabsHtml}
      <p style="font-size:0.88rem; color:#64748b; margin-bottom:12px;">${guide.note}</p>
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
  const orders = JSON.parse(localStorage.getItem('stylemart_orders') || '[]');
  let sectionContent = '';
  if (section === 'orders') {
    sectionContent = orders.length === 0
      ? `<div style="text-align:center; padding:30px 10px;">
          <div style="font-size:2.5rem; margin-bottom:8px;">📦</div>
          <h4 style="margin-bottom:6px;">No orders placed yet</h4>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:16px;">Browse our latest collections and place your first order.</p>
          <a href="index.html" class="btn btn-primary" onclick="closeProfileModal()">Start Shopping</a>
        </div>`
      : `<div class="profile-orders-list" style="max-height:360px; overflow-y:auto; padding-right:4px;">
          ${orders.map(ord => `
            <div class="profile-order-card" style="border:1px solid #e2e8f0; border-radius:10px; padding:12px; margin-bottom:12px; background:#f8fafc;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; border-bottom:1px solid #edf2f7; padding-bottom:6px;">
                <div>
                  <strong style="color:#0f172a; font-size:0.9rem;">#${ord.orderId}</strong>
                  <span style="font-size:0.75rem; color:#64748b; margin-left:6px;">${ord.date}</span>
                </div>
                <span class="badge" style="background:#dcfce7; color:#15803d; font-weight:700; padding:2px 8px; border-radius:4px; font-size:0.75rem;">${ord.status}</span>
              </div>
              ${ord.items.map(it => {
                const prod = (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA)) ? PRODUCTS_DATA.find(p => p.id === it.id) : null;
                const title = (it.title && it.title !== 'undefined') ? it.title : (prod && prod.title ? prod.title : 'StyleMart Product');
                const image = (it.image && it.image !== 'undefined' && it.image.trim() !== '') ? it.image : (prod && prod.image ? prod.image : (prod && prod.thumbs && prod.thumbs[0] ? prod.thumbs[0].url : 'assets/images/stylemart-logo.png'));
                const price = (it.price !== undefined && !isNaN(Number(it.price))) ? Number(it.price) : (prod && Number(prod.price) || 0);
                return `
                <div style="display:flex; gap:10px; align-items:center; margin-bottom:8px;">
                  <img src="${image}" alt="${title}" style="width:44px; height:54px; object-fit:cover; border-radius:6px; border:1px solid #e2e8f0;" onerror="this.src='assets/images/stylemart-logo.png'">
                  <div style="flex:1;">
                    <div style="font-size:0.82rem; font-weight:600; line-height:1.2; color:#1e293b; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${title}</div>
                    <div style="font-size:0.78rem; color:#64748b;">Qty: ${it.qty || 1} ${it.selectedSize ? '• Size: ' + it.selectedSize : ''} • ₹${price.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              `;
              }).join('')}
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; padding-top:6px; border-top:1px dashed #cbd5e1;">
                <span style="font-weight:700; font-size:0.85rem;">Total: ₹${(ord.totalAmount || 0).toLocaleString('en-IN')}</span>
                <a href="profile.html?tab=orders" style="font-size:0.8rem; color:#07261e; font-weight:700; text-decoration:none;">View Full Order &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>`;
  } else if (section === 'addresses') {
    sectionContent = `<div class="profile-address-list">${addresses.map((address, index) => `
        <article class="profile-address-card">
          <div class="profile-address-heading">${index === 0 ? 'Primary address' : `Address ${index + 1}`}</div>
          ${addressSummary(address)}
          <button type="button" class="btn btn-outline profile-edit-address" onclick="openAddressForm(${index})">Edit address</button>
        </article>`).join('')}
      </div>
      <button type="button" class="btn btn-primary btn-block profile-add-address" onclick="openAddressForm()">+ Add address</button>`;
  } else {
    sectionContent = `<section class="profile-details-card">
        <h4>Personal details</h4>
        <div><span>Name</span><strong>${escapeProfileText(profile.name)}</strong></div>
        <div><span>Phone number</span><strong>+91 ${escapeProfileText(profile.phone)}</strong></div>
        <div class="profile-detail-address"><span>Primary address</span>${addressSummary(primaryAddress)}</div>
      </section>`;
  }

  content.innerHTML = `
    <div class="profile-modal-header">
      <img class="profile-brand-logo" src="assets/images/stylemart-logo.png" alt="StyleMart" width="48" height="48">
      <h3>My Account</h3>
      <p>Welcome, ${escapeProfileText(profile.name)}</p>
    </div>
    <nav class="profile-modal-nav" aria-label="Profile sections">
      <button type="button" class="${section === 'orders' ? 'active' : ''}" onclick="openProfileModal('orders')">My Orders</button>
      <button type="button" class="${section === 'details' ? 'active' : ''}" onclick="openProfileModal('details')">Details</button>
      <button type="button" class="${section === 'addresses' ? 'active' : ''}" onclick="openProfileModal('addresses')">Addresses</button>
      <a href="profile.html" class="profile-page-link" style="margin-left:auto; font-size:0.8rem; font-weight:700; color:#07261e; text-decoration:none; padding:4px 8px; border-radius:6px; background:#e2e8f0;">Full Profile ↗</a>
      <button type="button" class="profile-logout" onclick="logoutAccount()">Logout</button>
    </nav>
    ${sectionContent}`;
  document.getElementById('profileModal')?.classList.add('active');
}

function closeProfileModal() {
  document.getElementById('profileModal')?.classList.remove('active');
}

function handleProfileIconClick() {
  window.location.href = 'profile.html';
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
  localStorage.setItem('stylemart_logged_out', 'true');
  closeProfileModal();
  updateUserProfileUI();
  showToast('You have been logged out successfully.', 'success');
  if (window.location.pathname.includes('profile.html')) {
    window.location.href = 'index.html';
  }
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
  localStorage.removeItem('stylemart_logged_out');
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

  const hasAddress = Boolean(
    state.userProfile &&
    state.userProfile.address &&
    state.userProfile.address.trim().length > 0
  );

  if (!hasAddress) {
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer && cartDrawer.classList.contains('active')) {
      toggleCartDrawer();
    }
    showToast('Please add your delivery address to proceed to checkout.', 'info');
    state.pendingCheckout = true;
    if (state.userProfile) {
      configureProfileForm('addAddress', -1);
      document.getElementById('authModal')?.classList.add('active');
    } else {
      openAuthModal();
    }
    return;
  }

  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer && cartDrawer.classList.contains('active')) {
    toggleCartDrawer();
  }

  // User has address: jump straight to payment method (UPI / COD)!
  checkoutStep = 2;
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
    const addr = state.userProfile || { name: 'Customer', phone: '', address: 'Delivery Address', city: '', pincode: '' };
    container.innerHTML = `
      <div style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:12px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:750; font-size:0.92rem; color:#07261e;">📍 Delivering to: ${addr.name}</div>
          <div style="font-size:0.84rem; color:#475569; margin-top:2px;">${addr.address}, ${addr.city} - <strong>${addr.pincode}</strong></div>
        </div>
        <button type="button" class="btn btn-sm btn-outline" style="font-size:0.78rem; padding:4px 10px;" onclick="closeCheckoutModal(); configureProfileForm('editAddress', 0); document.getElementById('authModal')?.classList.add('active');">Change</button>
      </div>
      <h3 style="margin-bottom:12px; font-size:1.15rem; color:#07261e;">Choose Payment Method</h3>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px;">
        <label class="quiz-option-card selected" style="display:flex; align-items:center; gap:12px; padding:12px; text-align:left; border-color:#07261e; background:#f0fdf4;">
          <input type="radio" name="payOpt" checked style="accent-color:#07261e;">
          <div>
            <strong style="color:#07261e;">UPI / Instant Pay (GPay / PhonePe / Paytm / QR)</strong>
            <div style="font-size:0.8rem; color:#16a34a; font-weight:600;">⚡ Instant 1-click verification & zero delivery fee</div>
          </div>
        </label>
        <label class="quiz-option-card" style="display:flex; align-items:center; gap:12px; padding:12px; text-align:left;">
          <input type="radio" name="payOpt" style="accent-color:#07261e;">
          <div>
            <strong style="color:#1e293b;">Cash on Delivery (COD)</strong>
            <div style="font-size:0.8rem; color:#64748b;">Pay via cash or UPI to delivery executive at doorstep</div>
          </div>
        </label>
      </div>
      <button class="btn btn-primary btn-block btn-lg" onclick="placeOrderFinal()">Pay ₹${bill.finalPayable.toLocaleString('en-IN')} & Place Order</button>
    `;
  } else if (checkoutStep === 3) {
    const orderID = 'SM-' + Math.floor(100000 + Math.random() * 900000);
    if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70 });

    const orderedItems = state.cart.map(cartItem => {
      const prod = (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA))
        ? PRODUCTS_DATA.find(p => p.id === cartItem.id)
        : null;
      const fallbackImage = (prod && prod.thumbs && prod.thumbs[0] && prod.thumbs[0].url)
        ? prod.thumbs[0].url
        : (prod && prod.images && prod.images[0] ? prod.images[0] : (prod && prod.image ? prod.image : 'assets/images/stylemart-logo.png'));
      return {
        id: cartItem.id,
        selectedSize: cartItem.selectedSize || 'Free Size',
        qty: cartItem.qty || 1,
        title: (prod && prod.title) ? prod.title : 'StyleMart Luxury Apparel',
        brand: (prod && prod.brand) ? prod.brand : 'StyleMart Fashion',
        image: (prod && prod.image) ? prod.image : fallbackImage,
        price: (prod && Number(prod.price) > 0) ? Number(prod.price) : 0,
        originalPrice: (prod && Number(prod.originalPrice) > 0) ? Number(prod.originalPrice) : (prod && Number(prod.price) > 0 ? Number(prod.price) : 0)
      };
    });
    const orderRecord = {
      orderId: orderID,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      items: orderedItems,
      totalAmount: bill.finalPayable,
      status: 'Confirmed',
      estimatedArrival: 'Tomorrow by 5:00 PM',
      deliveryAddress: state.userProfile ? `${state.userProfile.name}, ${state.userProfile.address}, ${state.userProfile.city} - ${state.userProfile.pincode}` : 'Delivery Address',
      customerName: state.userProfile ? state.userProfile.name : 'Valued Customer',
      paymentMethod: 'Prepaid / Verified'
    };

    try {
      const storedOrders = JSON.parse(localStorage.getItem('stylemart_orders') || '[]');
      storedOrders.unshift(orderRecord);
      localStorage.setItem('stylemart_orders', JSON.stringify(storedOrders));
    } catch (e) {
      console.error('Error saving order to localStorage:', e);
    }

    container.innerHTML = `
      <div class="order-success-box" style="text-align:center; padding:20px 10px;">
        <div class="success-icon-wrap" style="font-size:3rem; margin-bottom:8px;">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-top:4px;">Order ID: <strong>#${orderID}</strong></p>
        <p style="color:var(--budget-green); font-weight:700; margin-top:6px;">Delivering to ${state.userProfile ? state.userProfile.name : 'Customer'} (${state.userProfile ? state.userProfile.city + ' - ' + state.userProfile.pincode : ''})</p>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-top:2px;">Estimated Arrival: Tomorrow by 5:00 PM</p>
        <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
          <a href="profile.html?tab=orders" class="btn btn-primary btn-block btn-lg" style="text-decoration:none; display:flex; align-items:center; justify-content:center; background:#07261e; border-color:#07261e;">View My Orders in Profile &rarr;</a>
          <button class="btn btn-outline btn-block btn-lg" onclick="closeCheckoutModal(); scrollToCatalog();">Continue Shopping &rarr;</button>
        </div>
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
window.addToCart = quickAddToCart;
window.quickAddToCart = quickAddToCart;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
