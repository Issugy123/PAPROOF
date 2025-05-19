// Products functionality
document.addEventListener("DOMContentLoaded", () => {
  // Load products from JavaScript data
  loadProductsFromData()

  // Set up event listeners for product filtering
  setupProductFilters()

  // Set up search functionality
  setupSearch()
})

/**
 * Load products from JavaScript data
 */
function loadProductsFromData() {
  // Products data
  const productsData = [
    // LIPS CATEGORY
    {
      id: 1,
      name: "Velvet Bloom Lipstick",
      description: "Matte Red Lipstick",
      detailedDescription:
        "Experience the luxurious feel of our Velvet Bloom Lipstick. This highly pigmented matte formula glides on smoothly for a velvety finish that lasts all day. Infused with moisturizing ingredients like shea butter and vitamin E, it keeps your lips soft and hydrated while delivering bold, vibrant color. The lightweight formula won't feather or bleed, giving you perfect lips from morning to night.",
      ingredients:
        "Ricinus Communis (Castor) Seed Oil, Caprylic/Capric Triglyceride, Cetyl Ethylhexanoate, Candelilla Cera, Silica, Butyrospermum Parkii (Shea) Butter, Tocopheryl Acetate (Vitamin E), Parfum, May Contain: CI 15850, CI 77491.",
      howToUse:
        "Apply directly to lips from the bullet or use a lip brush for more precision. For a softer look, dab onto lips with fingertips. Can be layered for more intense color.",
      price: 18.99,
      image: "assets/products/lips/velvet-bloom-lipstick.jpg",
      rating: 4.8,
      category: "lips",
      stock: 15,
      is_new: false,
    },
    {
      id: 2,
      name: "Peach Shimmer Gloss",
      description: "Glossy Peach Lip Gloss",
      detailedDescription:
        "Add a touch of sparkle to your smile with our Peach Shimmer Gloss. This non-sticky formula delivers a sheer wash of peachy color with subtle golden shimmer that catches the light beautifully. Enriched with jojoba oil and vitamin E, it nourishes and conditions your lips while providing a high-shine finish. The cushiony texture feels comfortable and plumps lips for a fuller appearance.",
      ingredients:
        "Polybutene, Hydrogenated Polyisobutene, Ethylene/Propylene/Styrene Copolymer, Jojoba Oil, Tocopheryl Acetate, Silica, Synthetic Fluorphlogopite, Parfum, May Contain: CI 77891, CI 15850, CI 77491.",
      howToUse:
        "Apply to bare lips for a subtle shimmer or layer over lipstick to add dimension and shine. The doe-foot applicator makes application easy and precise.",
      price: 14.99,
      sale_price: 12.99,
      image: "assets/products/lips/peach-shimmer-gloss.jpg",
      rating: 4.5,
      category: "lips",
      stock: 20,
      is_new: true,
    },
    {
      id: 3,
      name: "Bare Whisper Liner",
      description: "Nude Lip Liner",
      detailedDescription:
        "Define your lips with precision using our Bare Whisper Liner. This creamy, long-wearing lip pencil glides on effortlessly without tugging or pulling. The universal nude shade works with a variety of lip colors to prevent feathering and bleeding while enhancing your natural lip shape. Waterproof and transfer-resistant, it stays put through meals and drinks, keeping your lip look flawless all day.",
      ingredients:
        "Cyclopentasiloxane, Synthetic Wax, Polyethylene, Mica, Trimethylsiloxysilicate, Silica, Tocopherol, May Contain: CI 77891, CI 77492, CI 77491.",
      howToUse:
        "Outline lips before applying lipstick or gloss for a defined look. Can also be used to fill in the entire lip as a base for longer-lasting lip color.",
      price: 12.99,
      image: "assets/products/lips/bare-whisper-liner.jpg",
      rating: 4.3,
      category: "lips",
      stock: 25,
      is_new: false,
    },
    {
      id: 4,
      name: "Berry Dew Balm",
      description: "Berry Tinted Lip Balm",
      detailedDescription:
        "Our Berry Dew Balm combines skincare and makeup in one delightful product. This hydrating lip balm delivers a subtle berry tint while deeply moisturizing your lips with coconut oil, shea butter, and vitamin E. The buildable color allows you to go from a hint of tint to a more noticeable flush. The natural berry flavor adds a pleasant sensory experience, making application a treat for your lips and senses.",
      ingredients:
        "Cocos Nucifera (Coconut) Oil, Beeswax, Butyrospermum Parkii (Shea) Butter, Ricinus Communis (Castor) Seed Oil, Tocopherol, Natural Flavor, May Contain: CI 77491, CI 15850.",
      howToUse:
        "Apply directly to lips whenever they need moisture. Reapply throughout the day as needed. Layer for more intense color.",
      price: 10.99,
      image: "assets/products/lips/berry-dew-balm.jpg",
      rating: 4.7,
      category: "lips",
      stock: 30,
      is_new: false,
    },
    {
      id: 5,
      name: "Plush Pout Gloss",
      description: "Plumping Lip Gloss",
      detailedDescription:
        "Achieve fuller-looking lips instantly with our Plush Pout Gloss. This innovative formula contains peptides and hyaluronic acid that visibly plump lips while adding gorgeous shine. The tingling sensation lets you know it's working its magic. Available in a universally flattering pink shade, this gloss can be worn alone or layered over lipstick for added dimension. The non-sticky texture ensures comfortable wear throughout the day.",
      ingredients:
        "Polybutene, Hydrogenated Polyisobutene, Ethylene/Propylene/Styrene Copolymer, Menthol, Palmitoyl Tripeptide-1, Sodium Hyaluronate, Parfum, May Contain: CI 15850, CI 77891.",
      howToUse:
        "Apply a thin layer to clean, dry lips. The cooling sensation indicates the plumping effect is activated. Reapply as needed for continued plumping benefits.",
      price: 16.99,
      image: "assets/products/lips/plush-pout-gloss.jpg",
      rating: 4.6,
      category: "lips",
      stock: 18,
      is_new: true,
    },
    {
      id: 6,
      name: "Rose Gleam Lipstick",
      description: "Metallic Rose Lipstick",
      detailedDescription:
        "Make a statement with our Rose Gleam Lipstick. This metallic formula delivers high-impact color with an eye-catching foiled finish. The creamy texture applies smoothly and evenly, while the rose gold shade flatters all skin tones. Despite its metallic finish, the formula is surprisingly comfortable and hydrating, with argan oil and vitamin E to keep lips soft. The long-wearing formula stays put for hours without fading or transferring.",
      ingredients:
        "Ricinus Communis (Castor) Seed Oil, Caprylic/Capric Triglyceride, Argania Spinosa Kernel Oil, Mica, Synthetic Fluorphlogopite, Tocopheryl Acetate, May Contain: CI 77891, CI 77491, CI 15850.",
      howToUse:
        "Apply directly from the bullet for full metallic impact. For a subtler effect, dab onto the center of lips over another lipstick to create dimension.",
      price: 19.99,
      image: "assets/products/lips/rose-gleam-lipstick.jpg",
      rating: 4.4,
      category: "lips",
      stock: 22,
      is_new: false,
    },
    {
      id: 7,
      name: "Infinite Kiss Liquid Lip",
      description: "Long-Lasting Liquid Lipstick",
      detailedDescription:
        "Our Infinite Kiss Liquid Lip delivers intense color that truly lasts. This lightweight liquid lipstick dries down to a comfortable matte finish that won't budge, feather, or transfer. The precision applicator makes it easy to define and fill lips with perfect color. Formulated with moisturizing oils to prevent drying, this long-wearing formula stays comfortable from application to removal. Kiss-proof, drink-proof, and life-proof for up to 12 hours of flawless wear.",
      ingredients:
        "Isododecane, Dimethicone, Trimethylsiloxysilicate, Polybutene, Silica, Jojoba Oil, Tocopheryl Acetate, May Contain: CI 15850, CI 77491, CI 77499.",
      howToUse:
        "Apply to clean, dry lips using the precision applicator. Start by outlining lips, then fill in. Allow to dry completely before pressing lips together for transfer-proof wear.",
      price: 21.99,
      sale_price: 18.99,
      image: "assets/products/lips/infinite-kiss-liquid-lip.jpg",
      rating: 4.9,
      category: "lips",
      stock: 15,
      is_new: true,
    },
    {
      id: 8,
      name: "Coral Veil Stain",
      description: "Sheer Coral Lip Stain",
      detailedDescription:
        "Our Coral Veil Stain delivers a weightless wash of color that lasts for hours. This water-based formula applies wet and dries to a natural-looking stain that won't budge or transfer. The buildable coral shade brightens your complexion while the aloe vera and glycerin keep lips hydrated. Perfect for those who want long-lasting color without the feel of traditional lipstick. The stain effect creates a youthful, just-bitten look that enhances your natural beauty.",
      ingredients:
        "Aqua, Glycerin, Aloe Barbadensis Leaf Juice, CI 15850, CI 77491, Phenoxyethanol, Sodium Hyaluronate.",
      howToUse:
        "Apply to clean lips using the applicator. For a subtle look, apply one layer and blot. For more intensity, apply multiple layers, allowing each to dry before adding the next.",
      price: 15.99,
      image: "assets/products/lips/coral-veil-stain.jpg",
      rating: 4.2,
      category: "lips",
      stock: 20,
      is_new: false,
    },
    {
      id: 9,
      name: "Mint Frost Scrub",
      description: "Minty Lip Scrub",
      detailedDescription:
        "Prep your lips for perfect color application with our Mint Frost Scrub. This gentle exfoliating treatment buffs away dry, flaky skin to reveal smooth, soft lips underneath. Sugar crystals provide physical exfoliation while coconut oil and shea butter nourish and condition. The refreshing mint flavor leaves lips feeling cool and tingly. Regular use helps lip products apply more evenly and last longer by creating the perfect canvas.",
      ingredients:
        "Sucrose, Cocos Nucifera (Coconut) Oil, Butyrospermum Parkii (Shea) Butter, Mentha Piperita (Peppermint) Oil, Tocopherol, Menthol.",
      howToUse:
        "Apply a small amount to lips and gently massage in circular motions. Rinse or tissue off. Use 1-2 times weekly or as needed before applying lip color.",
      price: 13.99,
      image: "assets/products/lips/mint-frost-scrub.jpg",
      rating: 4.6,
      category: "lips",
      stock: 25,
      is_new: false,
    },
    {
      id: 10,
      name: "Moonlit Lip Mask",
      description: "Lip Mask Overnight Treatment",
      detailedDescription:
        "Transform your lips while you sleep with our Moonlit Lip Mask. This intensive overnight treatment deeply hydrates and repairs dry, chapped lips with a nourishing blend of hyaluronic acid, shea butter, and antioxidants. The thick, balm-like texture creates a protective barrier that locks in moisture and active ingredients. Wake up to softer, plumper, and more supple lips. Perfect for use during seasonal changes or whenever your lips need extra TLC.",
      ingredients:
        "Butyrospermum Parkii (Shea) Butter, Cera Alba (Beeswax), Simmondsia Chinensis (Jojoba) Seed Oil, Sodium Hyaluronate, Tocopherol, Vanilla Planifolia Fruit Extract.",
      howToUse:
        "Apply a generous layer to clean lips before bedtime. Leave on overnight and wake up to softer, more hydrated lips. Can also be used as an intensive daytime treatment.",
      price: 22.99,
      image: "assets/products/lips/moonlit-lip-mask.jpg",
      rating: 4.8,
      category: "lips",
      stock: 18,
      is_new: true,
    },

    // CHEEKS CATEGORY
    {
      id: 11,
      name: "Blush Petal",
      description: "Soft Pink Blush",
      detailedDescription:
        "Add a natural flush to your cheeks with our Blush Petal powder. This finely-milled, silky formula blends seamlessly into skin for a natural-looking pop of color that brightens your complexion. The buildable soft pink shade is universally flattering and can be applied sheer for a subtle glow or layered for more impact. Infused with antioxidants and light-reflecting particles, it gives your skin a healthy, radiant finish that lasts all day.",
      ingredients:
        "Talc, Mica, Magnesium Stearate, Silica, Dimethicone, Tocopheryl Acetate, May Contain: CI 77891, CI 15850, CI 77491.",
      howToUse:
        "Apply with a fluffy blush brush to the apples of your cheeks, blending upward toward your temples for a natural-looking flush. Can be layered for more intensity.",
      price: 19.99,
      image: "assets/products/cheeks/blush-petal.jpg",
      rating: 4.9,
      category: "cheeks",
      stock: 22,
      is_new: false,
    },
    {
      id: 12,
      name: "Peach Glow Cream",
      description: "Cream Peach Blush",
      detailedDescription:
        "Our Peach Glow Cream Blush delivers a dewy, natural flush that melts into your skin. The creamy formula blends effortlessly for a seamless finish that looks like you're glowing from within. Infused with jojoba oil and vitamin E, it hydrates while adding a beautiful peachy tint to your cheeks. The buildable color works on all skin tones and can be applied with fingers, a brush, or a sponge for customizable coverage. Perfect for achieving that fresh, youthful glow.",
      ingredients:
        "Caprylic/Capric Triglyceride, Mica, Polyglyceryl-2 Triisostearate, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, May Contain: CI 77891, CI 15850, CI 77491.",
      howToUse:
        "Apply with fingertips, tapping onto the apples of cheeks and blending upward. For a more diffused look, use a synthetic brush or damp beauty sponge to blend.",
      price: 21.99,
      image: "assets/products/cheeks/peach-glow-cream.jpg",
      rating: 4.7,
      category: "cheeks",
      stock: 15,
      is_new: true,
    },
    {
      id: 13,
      name: "Sunlit Bronzer",
      description: "Shimmer Bronzer",
      detailedDescription:
        "Achieve a sun-kissed glow year-round with our Sunlit Bronzer. This silky powder formula contains subtle golden shimmer that mimics the natural radiance of sun-touched skin. The buildable formula allows you to go from a hint of warmth to a more defined bronze. Infused with light-reflecting particles, it adds dimension and warmth to your complexion without looking orange or muddy. The finely-milled texture blends seamlessly for a natural finish that lasts all day.",
      ingredients:
        "Talc, Mica, Magnesium Stearate, Silica, Dimethicone, Synthetic Fluorphlogopite, May Contain: CI 77491, CI 77492, CI 77499.",
      howToUse:
        "Apply with a fluffy bronzer brush to areas where the sun naturally hits: forehead, cheekbones, bridge of nose, and jawline. Build gradually for your desired level of bronze.",
      price: 24.99,
      sale_price: 19.99,
      image: "assets/products/cheeks/sunlit-bronzer.jpg",
      rating: 4.8,
      category: "cheeks",
      stock: 18,
      is_new: false,
    },
    {
      id: 14,
      name: "Rosy Veil Tint",
      description: "Rosy Cheek Tint",
      detailedDescription:
        "Our Rosy Veil Tint delivers a natural-looking flush that lasts all day. This water-based liquid formula creates a sheer wash of rosy color that looks like it's coming from within your skin. The lightweight texture blends easily before setting to a long-lasting stain that won't budge or transfer. Perfect for creating that just-pinched cheek look that stays fresh from morning to night. The buildable formula works on all skin types, including oily skin.",
      ingredients: "Aqua, Glycerin, CI 15850, Phenoxyethanol, Sodium Hyaluronate, Aloe Barbadensis Leaf Juice.",
      howToUse:
        "Apply a few dots to the apples of your cheeks and quickly blend with fingertips or a damp beauty sponge. Work one cheek at a time as the formula sets quickly.",
      price: 17.99,
      image: "assets/products/cheeks/rosy-veil-tint.jpg",
      rating: 4.5,
      category: "cheeks",
      stock: 20,
      is_new: false,
    },
    {
      id: 15,
      name: "Sculpted Glow Palette",
      description: "Contour Palette",
      detailedDescription:
        "Define and enhance your facial features with our Sculpted Glow Palette. This all-in-one palette contains three perfectly coordinated powders: a matte contour shade to create shadows and definition, a subtle highlighter to bring forward your best features, and a neutral blush to add life to your complexion. The silky, buildable formulas blend seamlessly for a natural-looking sculpted effect. Perfect for both everyday definition and more dramatic contouring.",
      ingredients:
        "Talc, Mica, Magnesium Stearate, Silica, Dimethicone, Nylon-12, Tocopheryl Acetate, May Contain: CI 77891, CI 77491, CI 77492, CI 77499.",
      howToUse:
        "Apply contour shade to areas you want to recede (under cheekbones, jawline, sides of nose). Apply highlighter to high points of face (cheekbones, brow bone, cupid's bow). Finish with blush on the apples of cheeks.",
      price: 34.99,
      image: "assets/products/cheeks/sculpted-glow-palette.jpg",
      rating: 4.9,
      category: "cheeks",
      stock: 12,
      is_new: true,
    },
    {
      id: 16,
      name: "Radiant Beam Duo",
      description: "Highlighter Duo",
      detailedDescription:
        "Illuminate your best features with our Radiant Beam Duo. This compact features two complementary highlighter shades: a champagne gold and a rose gold that flatter all skin tones. The buttery powder formula applies smoothly and blends effortlessly for a seamless glow. Micro-fine light-reflecting particles create a stunning luminosity without chunky glitter. Use separately or mix together for a customized highlight that catches the light beautifully.",
      ingredients:
        "Mica, Synthetic Fluorphlogopite, Silica, Dimethicone, Magnesium Stearate, Ethylhexyl Palmitate, May Contain: CI 77891, CI 77491, CI 77492.",
      howToUse:
        "Apply with a fan brush or small highlighting brush to the high points of your face: tops of cheekbones, brow bone, bridge of nose, cupid's bow, and inner corners of eyes.",
      price: 28.99,
      sale_price: 24.99,
      image: "assets/products/cheeks/radiant-beam-duo.jpg",
      rating: 4.7,
      category: "cheeks",
      stock: 15,
      is_new: false,
    },
    {
      id: 17,
      name: "Mauve Mist Stick",
      description: "Mauve Blush Stick",
      detailedDescription:
        "Our Mauve Mist Stick offers effortless color application in a convenient stick format. This creamy blush glides onto skin without tugging and blends seamlessly with just a few taps of your fingertips. The universally flattering mauve shade adds a sophisticated flush to all skin tones. The buildable formula can be applied sheer for a subtle hint of color or layered for more impact. The cream-to-powder finish looks natural and lasts throughout the day.",
      ingredients:
        "Caprylic/Capric Triglyceride, Mica, Polyethylene, Synthetic Wax, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, May Contain: CI 77891, CI 15850, CI 77491.",
      howToUse:
        "Apply directly to the apples of your cheeks and blend upward with fingertips. For a monochromatic look, can also be used on lips and eyelids.",
      price: 18.99,
      image: "assets/products/cheeks/mauve-mist-stick.jpg",
      rating: 4.4,
      category: "cheeks",
      stock: 22,
      is_new: false,
    },
    {
      id: 18,
      name: "Golden Aura Illuminator",
      description: "Golden Illuminator",
      detailedDescription:
        "Create a stunning lit-from-within glow with our Golden Aura Illuminator. This liquid highlighter features ultra-fine pearl particles suspended in a lightweight gel base that blends effortlessly into the skin. The golden champagne shade flatters all skin tones and can be applied under, over, or mixed with foundation for customizable radiance. The buildable formula allows you to achieve anything from a subtle sheen to an intense strobing effect.",
      ingredients:
        "Aqua, Glycerin, Mica, Synthetic Fluorphlogopite, Sodium Hyaluronate, Phenoxyethanol, May Contain: CI 77891, CI 77491.",
      howToUse:
        "Apply a few drops to the high points of your face and blend quickly with fingertips or a damp beauty sponge. Can also be mixed with foundation for an all-over glow.",
      price: 26.99,
      image: "assets/products/cheeks/golden-aura-illuminator.jpg",
      rating: 4.8,
      category: "cheeks",
      stock: 18,
      is_new: true,
    },
    {
      id: 19,
      name: "Terracotta Glow Blush",
      description: "Matte Terracotta Blush",
      detailedDescription:
        "Our Terracotta Glow Blush adds warmth and dimension to your complexion with its rich, earthy hue. This matte powder formula blends seamlessly into the skin for a natural-looking flush that enhances all skin tones, especially deeper complexions. The silky texture applies evenly without patchiness and builds beautifully for customizable color intensity. Infused with antioxidants to nourish skin while you wear it, this blush stays true to color all day without fading.",
      ingredients:
        "Talc, Mica, Magnesium Stearate, Silica, Dimethicone, Tocopheryl Acetate, May Contain: CI 77491, CI 77492, CI 77499.",
      howToUse:
        "Apply with a fluffy blush brush to the apples of your cheeks, blending toward your temples. Can also be used as a subtle bronzer on fair skin tones.",
      price: 19.99,
      image: "assets/products/cheeks/terracotta-glow-blush.jpg",
      rating: 4.6,
      category: "cheeks",
      stock: 20,
      is_new: false,
    },
    {
      id: 20,
      name: "Blush & Beam Combo",
      description: "Blush and Highlighter Combo",
      detailedDescription:
        "Our innovative Blush & Beam Combo features a dual-ended stick with creamy blush on one end and a complementary highlighter on the other. The blush delivers a natural flush of color while the highlighter adds a subtle luminosity to your high points. Both formulas blend effortlessly with fingertips and set to a long-wearing finish that won't fade or crease. This convenient 2-in-1 product is perfect for on-the-go touch-ups and travel.",
      ingredients:
        "Caprylic/Capric Triglyceride, Mica, Synthetic Wax, Polyethylene, Simmondsia Chinensis (Jojoba) Seed Oil, Synthetic Fluorphlogopite, May Contain: CI 77891, CI 15850, CI 77491.",
      howToUse:
        "Apply blush end directly to cheeks and blend with fingertips. Apply highlighter end to high points of face (cheekbones, brow bone, cupid's bow) and blend for a seamless finish.",
      price: 32.99,
      sale_price: 27.99,
      image: "assets/products/cheeks/blush-beam-combo.jpg",
      rating: 4.9,
      category: "cheeks",
      stock: 15,
      is_new: true,
    },

    // BASE CATEGORY
    {
      id: 21,
      name: "Luminous Veil Foundation",
      description: "Full Coverage Foundation",
      detailedDescription:
        "Our Luminous Veil Foundation offers full coverage with a natural, radiant finish. This lightweight formula effectively conceals imperfections while letting your skin shine through for a flawless, never-cakey appearance. Infused with hyaluronic acid and vitamin E, it hydrates and nourishes while providing long-lasting coverage. The buildable formula can be applied sheer or layered for more coverage, adapting to your skin's needs. Available in a wide range of shades to match all skin tones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Sodium Hyaluronate, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77891, CI 77492, CI 77491, CI 77499.",
      howToUse:
        "Apply with a foundation brush, beauty sponge, or fingertips, starting from the center of the face and blending outward. Build coverage as needed.",
      price: 32.99,
      image: "assets/products/base/luminous-veil-foundation.jpg",
      rating: 4.9,
      category: "base",
      stock: 20,
      is_new: true,
    },
    {
      id: 22,
      name: "Dew Dream Tint",
      description: "Tinted Moisturizer",
      detailedDescription:
        "Our Dew Dream Tint combines skincare and makeup in one effortless step. This lightweight tinted moisturizer provides sheer, natural-looking coverage while delivering hydration and protection. Formulated with hyaluronic acid, antioxidants, and SPF 30, it improves your skin while evening out tone and adding a healthy glow. The breathable formula won't clog pores and is ideal for everyday wear when you want a fresh-faced, no-makeup makeup look.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Sodium Hyaluronate, Tocopheryl Acetate, Titanium Dioxide, Zinc Oxide, Phenoxyethanol, May Contain: CI 77891, CI 77492, CI 77491, CI 77499.",
      howToUse:
        "Apply with fingertips, blending from the center of the face outward. Can be set with powder for longer wear or left dewy for a natural glow.",
      price: 28.99,
      image: "assets/products/base/dew-dream-tint.jpg",
      rating: 4.6,
      category: "base",
      stock: 25,
      is_new: false,
    },
    {
      id: 23,
      name: "Cloud Matte Primer",
      description: "Matte Primer",
      detailedDescription:
        "Create the perfect canvas for your makeup with our Cloud Matte Primer. This silky formula glides over skin, filling in pores and fine lines while controlling excess oil for a smooth, matte finish. The lightweight gel texture absorbs quickly without feeling heavy or silicone-y. Infused with niacinamide to improve skin texture over time, it helps your foundation apply more evenly and last longer. Ideal for normal to oily skin types and hot weather conditions.",
      ingredients: "Aqua, Dimethicone, Glycerin, Silica, Niacinamide, Phenoxyethanol, Tocopheryl Acetate.",
      howToUse:
        "Apply a small amount to clean, moisturized skin. Focus on T-zone and areas with visible pores or texture. Allow to set for 30 seconds before applying foundation.",
      price: 22.99,
      sale_price: 18.99,
      image: "assets/products/base/cloud-matte-primer.jpg",
      rating: 4.7,
      category: "base",
      stock: 30,
      is_new: false,
    },
    {
      id: 24,
      name: "Radiant Beam CC Cream",
      description: "Radiant CC Cream",
      detailedDescription:
        "Our Radiant Beam CC Cream is a multitasking marvel that color-corrects, evens skin tone, and adds a healthy glow in one step. This lightweight formula adjusts to your skin tone while neutralizing redness and dullness. Infused with vitamin C and niacinamide, it brightens and improves skin texture over time. The buildable coverage can be applied sheer for a natural look or layered for more coverage. SPF 35 provides essential sun protection for daily wear.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Niacinamide, Ascorbic Acid, Titanium Dioxide, Zinc Oxide, Phenoxyethanol, May Contain: CI 77891, CI 77492, CI 77491, CI 77499.",
      howToUse:
        "Apply with fingertips, beauty sponge, or brush, blending from the center of the face outward. Can be worn alone or under foundation for additional coverage.",
      price: 26.99,
      image: "assets/products/base/radiant-beam-cc-cream.jpg",
      rating: 4.5,
      category: "base",
      stock: 22,
      is_new: false,
    },
    {
      id: 25,
      name: "Perfect Glow Concealer Palette",
      description: "Concealer Palette",
      detailedDescription:
        "Our Perfect Glow Concealer Palette contains four creamy concealers to address all your coverage needs. The palette includes a color corrector to neutralize discoloration, a brightening shade for under eyes, a match-to-skin tone concealer for seamless coverage, and a slightly darker shade for contouring. Each creamy formula blends effortlessly and provides medium to full coverage without creasing or settling into fine lines. The compact design makes it perfect for travel and touch-ups.",
      ingredients:
        "Caprylic/Capric Triglyceride, Dimethicone, Synthetic Wax, Silica, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77891, CI 77492, CI 77491, CI 77499, CI 77288.",
      howToUse:
        "Apply color corrector first to specific areas of discoloration. Use the brightening shade under eyes in an inverted triangle. Apply match-to-skin shade on blemishes and imperfections. Blend well with fingertips, brush, or sponge.",
      price: 29.99,
      image: "assets/products/base/perfect-glow-concealer-palette.jpg",
      rating: 4.8,
      category: "base",
      stock: 18,
      is_new: true,
    },
    {
      id: 26,
      name: "Ethereal Mist Setting Spray",
      description: "Setting Spray",
      detailedDescription:
        "Lock your makeup in place all day with our Ethereal Mist Setting Spray. This fine, lightweight mist creates an invisible shield that prevents makeup from fading, creasing, or transferring for up to 16 hours. The hydrating formula contains aloe vera and cucumber extract to refresh and soothe skin while extending makeup wear. The microfine mist applies evenly without disturbing makeup underneath. Use it to set your finished look or throughout the day to refresh and revitalize your makeup.",
      ingredients:
        "Aqua, Glycerin, Aloe Barbadensis Leaf Juice, Cucumis Sativus (Cucumber) Fruit Extract, Phenoxyethanol, PVP.",
      howToUse:
        "Hold bottle 8-10 inches from face and spray in an 'X' and 'T' formation after completing your makeup. Can also be used to intensify eyeshadows by spraying brush before application.",
      price: 24.99,
      sale_price: 21.99,
      image: "assets/products/base/ethereal-mist-setting-spray.jpg",
      rating: 4.9,
      category: "base",
      stock: 25,
      is_new: false,
    },
    {
      id: 27,
      name: "Soft Focus Powder",
      description: "Powder Foundation",
      detailedDescription:
        "Our Soft Focus Powder Foundation delivers buildable coverage with a natural matte finish. This finely-milled powder applies smoothly and blends seamlessly, effectively minimizing the appearance of pores and imperfections. The lightweight formula never looks cakey or heavy, allowing skin to breathe while providing medium to full coverage. Infused with light-diffusing particles, it creates a soft-focus effect that blurs imperfections and gives skin a flawless appearance.",
      ingredients:
        "Talc, Mica, Silica, Nylon-12, Dimethicone, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77891, CI 77492, CI 77491, CI 77499.",
      howToUse:
        "Apply with a powder brush for light coverage or a sponge for fuller coverage. Can be used alone or over liquid foundation to set and add coverage.",
      price: 27.99,
      image: "assets/products/base/soft-focus-powder.jpg",
      rating: 4.6,
      category: "base",
      stock: 20,
      is_new: false,
    },
    {
      id: 28,
      name: "Starlight Primer",
      description: "Illuminating Primer",
      detailedDescription:
        "Create a luminous base with our Starlight Primer. This illuminating formula contains ultra-fine pearl particles that add a subtle glow to the skin while smoothing and prepping for makeup application. The lightweight gel texture absorbs quickly and helps foundation glide on more smoothly and last longer. Infused with hyaluronic acid and vitamin E, it hydrates and nourishes while creating a radiant canvas. Perfect for dull or dry skin that needs a boost of luminosity.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Mica, Synthetic Fluorphlogopite, Sodium Hyaluronate, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77891, CI 77491.",
      howToUse:
        "Apply a small amount to clean, moisturized skin before foundation. Can be used all over for a subtle glow or just on high points for targeted illumination.",
      price: 23.99,
      image: "assets/products/base/starlight-primer.jpg",
      rating: 4.7,
      category: "base",
      stock: 22,
      is_new: true,
    },
    {
      id: 29,
      name: "Cushion Glow Compact",
      description: "Cushion Compact",
      detailedDescription:
        "Our Cushion Glow Compact delivers buildable coverage with a dewy, radiant finish in a convenient portable format. The lightweight formula effectively evens skin tone while providing hydration and a healthy glow. Infused with hyaluronic acid and antioxidants, it improves skin while you wear it. The innovative cushion delivery system ensures fresh application every time and makes touch-ups throughout the day effortless. SPF 50 provides high sun protection for daily wear.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Sodium Hyaluronate, Niacinamide, Titanium Dioxide, Zinc Oxide, Phenoxyethanol, May Contain: CI 77891, CI 77492, CI 77491, CI 77499.",
      howToUse:
        "Press the included puff into the cushion and pat onto skin, starting from the center of the face and working outward. Build coverage as needed with additional layers.",
      price: 34.99,
      sale_price: 29.99,
      image: "assets/products/base/cushion-glow-compact.jpg",
      rating: 4.8,
      category: "base",
      stock: 15,
      is_new: true,
    },
    {
      id: 30,
      name: "Prism Glow Drops",
      description: "Color Correcting Drops",
      detailedDescription:
        "Target specific skin concerns with our Prism Glow Drops. This set includes three color correcting serums: green to neutralize redness, lavender to brighten sallowness, and peach to counteract dark circles and hyperpigmentation. The lightweight, fluid formula can be applied under foundation or mixed with moisturizer for subtle correction. Each drop contains skincare ingredients that treat the underlying causes of discoloration while providing immediate visual correction.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Niacinamide, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77288, CI 77007, CI 15850, CI 77891.",
      howToUse:
        "Apply 1-2 drops directly to areas of concern before foundation, or mix with moisturizer or foundation. Green neutralizes redness, lavender brightens dullness, and peach corrects dark circles.",
      price: 25.99,
      image: "assets/products/base/prism-glow-drops.jpg",
      rating: 4.5,
      category: "base",
      stock: 20,
      is_new: false,
    },

    // EYES CATEGORY
    {
      id: 31,
      name: "Twilight Haze Palette",
      description: "Smoky Eye Palette",
      detailedDescription:
        "Create endless eye looks with our Twilight Haze Palette. This versatile collection features 12 highly-pigmented eyeshadows in matte, shimmer, and metallic finishes. The carefully curated shades range from everyday neutrals to deep, smoky hues that can take you from day to night. Each shadow is buttery-soft and blends effortlessly for foolproof application. The long-wearing formula stays vibrant without creasing or fading, while the mix of textures allows for dimensional eye looks.",
      ingredients:
        "Talc, Mica, Dimethicone, Magnesium Stearate, Synthetic Fluorphlogopite, Silica, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 77007.",
      howToUse:
        "Apply lighter shades all over lid as a base, use medium tones in the crease for definition, and darker shades to line eyes or create depth in the outer corner. Shimmer and metallic shades can be applied to the lid or inner corner for dimension.",
      price: 38.99,
      image: "assets/products/eyes/twilight-haze-palette.jpg",
      rating: 4.9,
      category: "eyes",
      stock: 15,
      is_new: true,
    },
    {
      id: 32,
      name: "Endless Lash Mascara",
      description: "Waterproof Mascara",
      detailedDescription:
        "Our Endless Lash Mascara transforms your lashes with dramatic length, volume, and curl that lasts all day. The innovative brush separates and coats each lash from root to tip without clumping or flaking. The waterproof formula resists smudging, running, and flaking even through tears, sweat, and humidity. Infused with lash-conditioning ingredients like vitamin E and panthenol, it strengthens and nourishes lashes while you wear it. The intense black pigment creates bold definition that won't fade.",
      ingredients:
        "Aqua, Synthetic Beeswax, Paraffin, Stearic Acid, Acacia Senegal Gum, Panthenol, Tocopheryl Acetate, Phenoxyethanol, CI 77499.",
      howToUse:
        "Start at the base of lashes and wiggle the brush upward to coat each lash. Apply multiple coats for more dramatic effect, allowing each coat to dry slightly between applications.",
      price: 18.99,
      image: "assets/products/eyes/endless-lash-mascara.jpg",
      rating: 4.8,
      category: "eyes",
      stock: 30,
      is_new: false,
    },
    {
      id: 33,
      name: "Metallic Gleam Liner",
      description: "Metallic Liquid Eyeliner",
      detailedDescription:
        "Add a touch of glamour to your eye look with our Metallic Gleam Liner. This liquid eyeliner features a precision brush tip that allows for easy application, from thin, delicate lines to bold, dramatic wings. The metallic formula dries quickly to a smudge-proof, water-resistant finish that won't transfer or fade throughout the day. Available in a stunning rose gold shade that brightens eyes and complements all eye colors. Perfect for adding a special touch to both everyday and special occasion looks.",
      ingredients:
        "Aqua, Acrylates Copolymer, Mica, Synthetic Fluorphlogopite, Phenoxyethanol, May Contain: CI 77891, CI 77491.",
      howToUse:
        "Start from the inner corner of the eye and draw along the lash line to the outer corner. For a wing, extend the line upward at the outer corner. Allow to dry completely before opening eyes fully.",
      price: 16.99,
      sale_price: 14.99,
      image: "assets/products/eyes/metallic-gleam-liner.jpg",
      rating: 4.5,
      category: "eyes",
      stock: 25,
      is_new: false,
    },
    {
      id: 34,
      name: "Neutral Glow Stick",
      description: "Neutral Eyeshadow Stick",
      detailedDescription:
        "Our Neutral Glow Stick offers effortless eye color in a convenient crayon format. This creamy eyeshadow stick glides on smoothly without tugging or pulling and blends easily with fingertips. The universally flattering champagne shade adds a subtle shimmer that brightens eyes and creates dimension. The long-wearing formula sets to a crease-resistant finish that stays put for hours. Perfect for quick makeup application, touch-ups on the go, or as a base for powder eyeshadows.",
      ingredients:
        "Cyclopentasiloxane, Synthetic Wax, Mica, Synthetic Fluorphlogopite, Dimethicone, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77891, CI 77491.",
      howToUse:
        "Apply directly to eyelids and blend quickly with fingertips before it sets. Can be used all over lid as a base or targeted on inner corners and brow bone as a highlight.",
      price: 17.99,
      image: "assets/products/eyes/neutral-glow-stick.jpg",
      rating: 4.6,
      category: "eyes",
      stock: 22,
      is_new: false,
    },
    {
      id: 35,
      name: "Feather Lash Wispy",
      description: "False Lashes - Wispy Style",
      detailedDescription:
        "Enhance your natural lashes with our Feather Lash Wispy false eyelashes. These handcrafted lashes feature a wispy, crisscross pattern that creates natural-looking volume and length. Made from high-quality synthetic fibers, they're lightweight and comfortable for all-day wear. The flexible, transparent band blends seamlessly with your natural lash line for an undetectable finish. Each pair can be worn multiple times with proper care, making them both beautiful and economical.",
      ingredients: "Synthetic Fibers, Plastic Fiber Band, Adhesive (Not Included).",
      howToUse:
        "Measure against your eye and trim if needed. Apply a thin line of lash adhesive (sold separately) to the band and wait 30 seconds until tacky. Apply to lash line, pressing gently to secure.",
      price: 14.99,
      image: "assets/products/eyes/feather-lash-wispy.jpg",
      rating: 4.7,
      category: "eyes",
      stock: 20,
      is_new: true,
    },
    {
      id: 36,
      name: "Brow Sculpt Pomade",
      description: "Eyebrow Pomade",
      detailedDescription:
        "Define and sculpt perfect brows with our Brow Sculpt Pomade. This creamy, pigmented formula glides on smoothly and sets to a long-wearing, waterproof finish that won't smudge or fade. The buildable color allows you to create anything from naturally filled-in brows to bold, defined arches. The smudge-proof formula stays put through heat, humidity, and activity. Available in multiple shades to match all hair colors and complement all skin tones.",
      ingredients:
        "Isododecane, Cyclopentasiloxane, Synthetic Wax, Silica, Trimethylsiloxysilicate, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77491, CI 77492, CI 77499.",
      howToUse:
        "Use an angled brush to apply product to brows, starting at the inner corner and working outward. Use light pressure for the inner portion and more defined strokes for the arch and tail.",
      price: 19.99,
      sale_price: 16.99,
      image: "assets/products/eyes/brow-sculpt-pomade.jpg",
      rating: 4.8,
      category: "eyes",
      stock: 18,
      is_new: false,
    },
    {
      id: 37,
      name: "Starlight Topper",
      description: "Glitter Eyeshadow Topper",
      detailedDescription:
        "Add instant glamour to any eye look with our Starlight Topper. This innovative formula features ultra-fine glitter suspended in a transparent gel base that dries down without fallout or creasing. The multidimensional particles reflect light beautifully for an eye-catching sparkle effect. Use it alone for a sheer wash of glitter or layer over any eyeshadow to transform your look. The quick-drying formula stays put without transferring or migrating throughout the day.",
      ingredients:
        "Aqua, Silica, Synthetic Fluorphlogopite, Polyethylene Terephthalate, Glycerin, Phenoxyethanol, May Contain: CI 77891, CI 77491.",
      howToUse:
        "Apply with fingertip or flat synthetic brush over eyeshadow or onto bare lids. Pat gently to apply; do not rub or sweep. Allow to dry completely to prevent transfer.",
      price: 15.99,
      image: "assets/products/eyes/starlight-topper.jpg",
      rating: 4.5,
      category: "eyes",
      stock: 22,
      is_new: true,
    },
    {
      id: 38,
      name: "Lash Lift Curler",
      description: "Eyelash Curler",
      detailedDescription:
        "Achieve perfectly curled lashes with our Lash Lift Curler. This ergonomically designed tool features a wide curved pad that fits all eye shapes comfortably without pinching. The precision spring system provides just the right amount of pressure to curl lashes effectively without crimping or breaking. The cushioned silicone pad creates a gentle curve that opens up the eyes and provides the perfect base for mascara application. Includes one replacement pad for extended use.",
      ingredients: "Metal Frame, Silicone Pad.",
      howToUse:
        "Position curler at the base of upper lashes, being careful not to catch skin. Gently squeeze for 5-10 seconds. Move curler to mid-lash and repeat if desired. Apply mascara after curling.",
      price: 12.99,
      image: "assets/products/eyes/lash-lift-curler.jpg",
      rating: 4.4,
      category: "eyes",
      stock: 30,
      is_new: false,
    },
    {
      id: 39,
      name: "Gel Glide Liner",
      description: "Gel Eyeliner Pencil",
      detailedDescription:
        "Our Gel Glide Liner combines the precision of a pencil with the smooth application and intensity of a gel liner. This retractable pencil glides on effortlessly without tugging or skipping, delivering rich, saturated color in one stroke. The waterproof formula sets quickly and stays put for up to 12 hours without smudging or transferring. The built-in sharpener ensures you always have a precise point for detailed application, while the smudger tip allows for easy blending and smoky effects.",
      ingredients:
        "Cyclopentasiloxane, Synthetic Wax, Trimethylsiloxysilicate, Mica, Silica, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77499, CI 77491, CI 77492.",
      howToUse:
        "Apply along the lash line from inner to outer corner. For a smoky effect, quickly blend with the smudger tip before the formula sets. Can be used on waterline for added definition.",
      price: 14.99,
      image: "assets/products/eyes/gel-glide-liner.jpg",
      rating: 4.6,
      category: "eyes",
      stock: 25,
      is_new: false,
    },
    {
      id: 40,
      name: "Bright Beam Concealer",
      description: "Eye Brightening Concealer",
      detailedDescription:
        "Instantly refresh tired eyes with our Bright Beam Concealer. This lightweight, creamy formula effectively covers dark circles while reflecting light to brighten the under-eye area. Infused with caffeine and vitamin K to reduce puffiness and improve circulation, it treats the causes of dark circles while concealing them. The hydrating formula won't settle into fine lines or look cakey, even after hours of wear. The precision applicator makes it easy to target specific areas for touch-ups throughout the day.",
      ingredients:
        "Aqua, Dimethicone, Glycerin, Silica, Caffeine, Phytonadione (Vitamin K), Sodium Hyaluronate, Tocopheryl Acetate, Phenoxyethanol, May Contain: CI 77891, CI 77492, CI 77491.",
      howToUse:
        "Apply small dots under the eye area and blend with fingertips, brush, or damp beauty sponge. Can also be used on inner corners of eyes and brow bone to brighten and lift.",
      price: 21.99,
      sale_price: 18.99,
      image: "assets/products/eyes/bright-beam-concealer.jpg",
      rating: 4.7,
      category: "eyes",
      stock: 20,
      is_new: true,
    },

    // SKINCARE CATEGORY
    {
      id: 41,
      name: "Dew Drop Serum",
      description: "Hydrating Face Serum",
      detailedDescription:
        "Quench your skin's thirst with our Dew Drop Serum. This lightweight, fast-absorbing formula delivers intense hydration with three types of hyaluronic acid that penetrate different layers of the skin. Enriched with niacinamide and vitamin B5, it helps strengthen the skin barrier while reducing the appearance of pores and uneven texture. The oil-free formula won't clog pores and is suitable for all skin types, including sensitive and acne-prone skin. Regular use results in plumper, more radiant skin with improved texture.",
      ingredients:
        "Aqua, Glycerin, Sodium Hyaluronate, Hydrolyzed Sodium Hyaluronate, Sodium Hyaluronate Crosspolymer, Niacinamide, Panthenol, Phenoxyethanol.",
      howToUse:
        "Apply 3-4 drops to clean, damp skin morning and evening. Gently press into skin, allowing it to fully absorb before applying moisturizer.",
      price: 42.99,
      image: "assets/products/skincare/dew-drop-serum.jpg",
      rating: 4.9,
      category: "skincare",
      stock: 20,
      is_new: true,
    },
    {
      id: 42,
      name: "Charcoal Cloud Mask",
      description: "Charcoal Detox Mask",
      detailedDescription:
        "Purify and detoxify your skin with our Charcoal Cloud Mask. This creamy clay mask features activated charcoal that acts like a magnet to draw out impurities, excess oil, and environmental pollutants from deep within pores. Kaolin clay absorbs excess sebum while salicylic acid gently exfoliates to prevent breakouts. Despite its powerful cleansing abilities, the formula won't strip or dry out skin thanks to soothing aloe vera and glycerin. Skin is left clean, refined, and balanced after each use.",
      ingredients:
        "Aqua, Kaolin, Bentonite, Activated Charcoal, Glycerin, Aloe Barbadensis Leaf Juice, Salicylic Acid, Phenoxyethanol.",
      howToUse:
        "Apply an even layer to clean, dry skin, avoiding the eye and lip area. Leave on for 10-15 minutes until dry but not completely hardened. Rinse thoroughly with warm water. Use 1-2 times weekly.",
      price: 28.99,
      image: "assets/products/skincare/charcoal-cloud-mask.jpg",
      rating: 4.7,
      category: "skincare",
      stock: 25,
      is_new: false,
    },
    {
      id: 43,
      name: "Citrus Glow Cream",
      description: "Vitamin C Brightening Cream",
      detailedDescription:
        "Reveal brighter, more radiant skin with our Citrus Glow Cream. This lightweight moisturizer features stabilized vitamin C to fade dark spots and even skin tone while providing powerful antioxidant protection against environmental damage. Hyaluronic acid and squalane deliver hydration without heaviness, making it suitable for all skin types. The refreshing citrus scent energizes your senses while the formula works to improve skin texture, reduce hyperpigmentation, and boost collagen production for firmer, more youthful-looking skin.",
      ingredients:
        "Aqua, Glycerin, Ascorbic Acid, Sodium Ascorbyl Phosphate, Squalane, Sodium Hyaluronate, Citrus Aurantium Dulcis (Orange) Peel Oil, Tocopherol, Phenoxyethanol.",
      howToUse:
        "Apply to clean skin morning and evening, gently massaging in circular motions until absorbed. For daytime use, follow with sunscreen as vitamin C can increase sun sensitivity.",
      price: 36.99,
      sale_price: 29.99,
      image: "assets/products/skincare/citrus-glow-cream.jpg",
      rating: 4.8,
      category: "skincare",
      stock: 18,
      is_new: false,
    },
    {
      id: 44,
      name: "Gentle Breeze Cleanser",
      description: "Gentle Foaming Cleanser",
      detailedDescription:
        "Cleanse your skin without stripping its natural moisture with our Gentle Breeze Cleanser. This pH-balanced formula creates a soft foam that effectively removes makeup, dirt, and excess oil while respecting your skin's barrier. Enriched with chamomile and aloe vera, it soothes and calms irritation while cleansing. Free from harsh sulfates, it's gentle enough for sensitive skin yet effective enough for daily use. Skin is left feeling clean, soft, and comfortable—never tight or dry.",
      ingredients:
        "Aqua, Cocamidopropyl Betaine, Glycerin, Sodium Cocoyl Isethionate, Aloe Barbadensis Leaf Juice, Chamomilla Recutita (Matricaria) Flower Extract, Panthenol, Phenoxyethanol.",
      howToUse:
        "Massage a small amount onto damp skin, working into a gentle lather. Rinse thoroughly with lukewarm water. Use morning and evening as the first step in your skincare routine.",
      price: 24.99,
      image: "assets/products/skincare/gentle-breeze-cleanser.jpg",
      rating: 4.6,
      category: "skincare",
      stock: 30,
      is_new: false,
    },
    {
      id: 45,
      name: "Moonlight Repair Cream",
      description: "Overnight Repair Cream",
      detailedDescription:
        "Wake up to renewed skin with our Moonlight Repair Cream. This rich night treatment works while you sleep to repair and regenerate skin cells when they're most receptive to healing. Formulated with retinol to accelerate cell turnover and reduce fine lines, peptides to boost collagen production, and ceramides to strengthen the skin barrier. The nourishing texture provides deep hydration without feeling greasy or clogging pores. Regular use results in smoother, firmer skin with diminished fine lines and improved texture.",
      ingredients:
        "Aqua, Glycerin, Caprylic/Capric Triglyceride, Retinol, Ceramide NP, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate, Tocopherol, Phenoxyethanol.",
      howToUse:
        "Apply to clean face and neck in the evening, avoiding the eye area. Start using 2-3 times per week and gradually increase frequency as skin adjusts to the retinol. Always use sunscreen during daytime when using this product.",
      price: 38.99,
      image: "assets/products/skincare/moonlight-repair-cream.jpg",
      rating: 4.9,
      category: "skincare",
      stock: 15,
      is_new: true,
    },
    {
      id: 46,
      name: "Sunbeam Shield SPF",
      description: "SPF 50 Sunscreen",
      detailedDescription:
        "Protect your skin from harmful UV rays with our Sunbeam Shield SPF 50. This lightweight, non-greasy formula provides broad-spectrum protection against both UVA and UVB rays without leaving a white cast or clogging pores. Enriched with antioxidants like vitamin E and green tea extract, it not only shields skin from sun damage but also fights free radicals. The hydrating formula works beautifully under makeup and is suitable for all skin types, including sensitive skin. Water-resistant for up to 80 minutes.",
      ingredients:
        "Aqua, Homosalate, Octocrylene, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Glycerin, Camellia Sinensis (Green Tea) Leaf Extract, Tocopherol, Phenoxyethanol.",
      howToUse:
        "Apply generously to all exposed areas 15 minutes before sun exposure. Reapply every 2 hours and after swimming, sweating, or towel drying. Use as the final step in your morning skincare routine.",
      price: 26.99,
      sale_price: 22.99,
      image: "assets/products/skincare/sunbeam-shield-spf.jpg",
      rating: 4.8,
      category: "skincare",
      stock: 25,
      is_new: false,
    },
    {
      id: 47,
      name: "Glow Renew Toner",
      description: "Exfoliating Toner",
      detailedDescription:
        "Reveal smoother, brighter skin with our Glow Renew Toner. This gentle exfoliating formula contains a blend of AHAs (glycolic and lactic acids) to remove dead skin cells and unclog pores, while BHA (salicylic acid) penetrates deeper to clear congestion. Despite its effective exfoliating properties, the formula is balanced with soothing ingredients like aloe vera and panthenol to prevent irritation. Regular use improves skin texture, minimizes the appearance of pores, and enhances the absorption of subsequent skincare products.",
      ingredients:
        "Aqua, Glycolic Acid, Lactic Acid, Salicylic Acid, Aloe Barbadensis Leaf Juice, Glycerin, Panthenol, Sodium Hydroxide, Phenoxyethanol.",
      howToUse:
        "After cleansing, apply to face and neck using a cotton pad, avoiding the eye area. Start using 2-3 times per week and gradually increase frequency as skin adjusts. Always use sunscreen during daytime when using this product.",
      price: 22.99,
      image: "assets/products/skincare/glow-renew-toner.jpg",
      rating: 4.7,
      category: "skincare",
      stock: 20,
      is_new: false,
    },
    {
      id: 48,
      name: "Aloe Mist Gel",
      description: "Aloe Vera Gel",
      detailedDescription:
        "Soothe and hydrate your skin with our Aloe Mist Gel. This versatile formula contains 99% pure aloe vera to calm irritation, reduce redness, and provide lightweight hydration. Perfect for post-sun exposure, after-shaving care, or as a refreshing boost throughout the day. The cooling gel texture absorbs quickly without stickiness and can be used on both face and body. Keep it refrigerated for an extra cooling effect that's especially beneficial for sunburns, insect bites, or irritated skin.",
      ingredients:
        "Aloe Barbadensis Leaf Juice, Glycerin, Sodium Hyaluronate, Allantoin, Cucumber Extract, Phenoxyethanol.",
      howToUse:
        "Apply a thin layer to clean skin as needed. Can be used on face and body. For an extra cooling effect, store in the refrigerator. Reapply as often as needed for relief and hydration.",
      price: 18.99,
      image: "assets/products/skincare/aloe-mist-gel.jpg",
      rating: 4.5,
      category: "skincare",
      stock: 30,
      is_new: false,
    },
    {
      id: 49,
      name: "Youthful Beam Eye Cream",
      description: "Anti-Aging Eye Cream",
      detailedDescription:
        "Target signs of aging around the delicate eye area with our Youthful Beam Eye Cream. This concentrated formula combines peptides to boost collagen production, caffeine to reduce puffiness, and vitamin K to diminish dark circles. The lightweight texture absorbs quickly without feeling greasy or migrating into the eyes. With consistent use, fine lines are softened, dark circles are brightened, and the entire eye area appears more youthful and refreshed.",
      ingredients:
        "Aqua, Glycerin, Caprylic/Capric Triglyceride, Caffeine, Phytonadione (Vitamin K), Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate, Tocopherol, Phenoxyethanol.",
      howToUse:
        "Apply a small amount around the orbital bone using your ring finger. Gently pat, don't rub, until absorbed. Use morning and evening on clean skin before moisturizer.",
      price: 32.99,
      image: "assets/products/skincare/youthful-beam-eye-cream.jpg",
      rating: 4.8,
      category: "skincare",
      stock: 18,
      is_new: true,
    },
    {
      id: 50,
      name: "Clay Glow Mask",
      description: "Clay Face Mask",
      detailedDescription:
        "Purify and refine your skin with our Clay Glow Mask. Unlike traditional clay masks that can feel tight and drying, this innovative formula contains hydrating ingredients that prevent moisture loss while still effectively absorbing excess oil and impurities. The blend of kaolin and bentonite clays draws out toxins while niacinamide brightens and evens skin tone. After just 10 minutes, skin appears clearer, pores look smaller, and your complexion has a healthy, radiant glow.",
      ingredients:
        "Aqua, Kaolin, Bentonite, Glycerin, Niacinamide, Aloe Barbadensis Leaf Juice, Sodium Hyaluronate, Phenoxyethanol.",
      howToUse:
        "Apply an even layer to clean, dry skin, avoiding the eye and lip area. Leave on for 10-15 minutes until nearly dry but still slightly tacky. Rinse thoroughly with warm water. Use 1-2 times weekly.",
      price: 27.99,
      sale_price: 23.99,
      image: "assets/products/skincare/clay-glow-mask.jpg",
      rating: 4.6,
      category: "skincare",
      stock: 22,
      is_new: false,
    },

    // HAIR CATEGORY
    {
      id: 51,
      name: "Volume Bloom Shampoo",
      description: "Volumizing Shampoo",
      detailedDescription:
        "Add body and bounce to fine, limp hair with our Volume Bloom Shampoo. This gentle, sulfate-free formula effectively cleanses without stripping natural oils, removing product buildup that can weigh hair down. Infused with rice protein and biotin, it strengthens hair from the inside out while creating noticeable volume and fullness. The lightweight formula won't leave residue behind, so hair feels clean, bouncy, and full of life after every wash.",
      ingredients:
        "Aqua, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Hydrolyzed Rice Protein, Biotin, Panthenol, Citrus Aurantium Dulcis (Orange) Peel Oil, Phenoxyethanol.",
      howToUse:
        "Apply to wet hair and massage into scalp and through lengths. Rinse thoroughly. For best results, follow with Volume Bloom Conditioner. Use every other day or as needed.",
      price: 24.99,
      image: "assets/products/hair/volume-bloom-shampoo.jpg",
      rating: 4.6,
      category: "hair",
      stock: 30,
      is_new: false,
    },
    {
      id: 52,
      name: "Hydra Glow Mask",
      description: "Hydrating Hair Mask",
      detailedDescription:
        "Transform dry, damaged hair with our intensive Hydra Glow Mask. This deep conditioning treatment penetrates the hair shaft to repair damage from heat styling, chemical treatments, and environmental stressors. Formulated with argan oil, shea butter, and keratin, it restores moisture, improves elasticity, and reduces breakage. After just one use, hair feels silky smooth, looks shinier, and is noticeably more manageable. Perfect for weekly use or whenever your hair needs extra TLC.",
      ingredients:
        "Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Argania Spinosa Kernel Oil, Butyrospermum Parkii (Shea) Butter, Hydrolyzed Keratin, Panthenol, Phenoxyethanol.",
      howToUse:
        "After shampooing, apply generously from mid-lengths to ends. Leave on for 5-10 minutes, then rinse thoroughly. For deeper conditioning, cover with a shower cap and apply gentle heat for up to 20 minutes before rinsing.",
      price: 32.99,
      image: "assets/products/hair/hydra-glow-mask.jpg",
      rating: 4.8,
      category: "hair",
      stock: 20,
      is_new: true,
    },
    {
      id: 53,
      name: "Heat Shield Mist",
      description: "Heat Protectant Spray",
      detailedDescription:
        "Shield your hair from heat damage with our Heat Shield Mist. This lightweight spray creates an invisible barrier that protects strands from temperatures up to 450°F/232°C. The non-greasy formula won't weigh hair down or cause buildup, making it perfect for all hair types and styles. Infused with vitamins and plant extracts, it not only protects but also nourishes hair, reducing frizz and adding shine for a polished finish to any heat-styled look.",
      ingredients:
        "Aqua, Cyclopentasiloxane, PVP, Hydrolyzed Wheat Protein, Panthenol, Tocopheryl Acetate, Phenoxyethanol.",
      howToUse:
        "Spray evenly onto damp hair before blow-drying, or onto dry hair before using hot tools. Hold bottle 6-8 inches away and apply in sections for even coverage. Do not rinse out.",
      price: 18.99,
      sale_price: 15.99,
      image: "assets/products/hair/heat-shield-mist.jpg",
      rating: 4.7,
      category: "hair",
      stock: 25,
      is_new: false,
    },
    {
      id: 54,
      name: "Beachy Wave Spray",
      description: "Texturizing Sea Salt Spray",
      detailedDescription:
        "Create effortless, tousled waves with our Beachy Wave Spray. This texturizing formula mimics the effect of ocean water without the drying effects, adding natural-looking volume, texture, and definition to all hair types. Unlike traditional salt sprays, ours is infused with algae extract and argan oil to hydrate and nourish while creating that coveted beach-day texture. Perfect for enhancing natural waves or creating texture in straight hair for that just-back-from-the-beach look.",
      ingredients:
        "Aqua, Magnesium Sulfate, Sodium Chloride, Algin, Argania Spinosa Kernel Oil, Glycerin, Phenoxyethanol.",
      howToUse:
        "Spray onto damp or dry hair, focusing on mid-lengths to ends. Scrunch with hands to enhance waves, or twist sections for more defined texture. Air dry or diffuse for best results.",
      price: 19.99,
      image: "assets/products/hair/beachy-wave-spray.jpg",
      rating: 4.5,
      category: "hair",
      stock: 28,
      is_new: false,
    },
    {
      id: 55,
      name: "Lush Growth Serum",
      description: "Hair Growth Serum",
      detailedDescription:
        "Stimulate hair growth and reduce shedding with our Lush Growth Serum. This concentrated formula targets the hair follicles with peptides, biotin, and caffeine to extend the growth phase of the hair cycle and improve scalp circulation. The non-greasy liquid absorbs quickly without leaving residue, making it suitable for daily use without disrupting your styling routine. With consistent use, hair appears visibly thicker, fuller, and healthier, with reduced breakage and shedding.",
      ingredients: "Aqua, Glycerin, Caffeine, Biotin, Acetyl Tetrapeptide-3, Panthenol, Niacinamide, Phenoxyethanol.",
      howToUse:
        "Apply 5-7 drops directly to clean, dry scalp. Massage gently with fingertips to ensure even distribution. Do not rinse. Use daily for best results, ideally in the evening after showering.",
      price: 36.99,
      image: "assets/products/hair/lush-growth-serum.jpg",
      rating: 4.9,
      category: "hair",
      stock: 15,
      is_new: true,
    },
    {
      id: 56,
      name: "Silken Glow Oil",
      description: "Smoothing Hair Oil",
      detailedDescription:
        "Tame frizz and add luminous shine with our Silken Glow Oil. This lightweight formula combines five nourishing oils that smooth the hair cuticle without weighing hair down or creating greasiness. Perfect for all hair types, it's especially beneficial for dry, damaged, or color-treated hair. Use it on damp hair before styling to protect from heat and reduce frizz, or on dry hair as a finishing touch to add shine and control flyaways.",
      ingredients:
        "Cyclopentasiloxane, Dimethiconol, Argania Spinosa Kernel Oil, Cocos Nucifera (Coconut) Oil, Macadamia Ternifolia Seed Oil, Olea Europaea (Olive) Fruit Oil, Tocopheryl Acetate.",
      howToUse:
        "Apply 1-2 pumps (depending on hair length and thickness) to damp or dry hair, focusing on mid-lengths and ends. Avoid the roots if your hair tends to get oily quickly. Can be used before or after styling.",
      price: 28.99,
      sale_price: 24.99,
      image: "assets/products/hair/silken-glow-oil.jpg",
      rating: 4.8,
      category: "hair",
      stock: 20,
      is_new: false,
    },
    {
      id: 57,
      name: "Fresh Breeze Dry Shampoo",
      description: "Invisible Dry Shampoo",
      detailedDescription:
        "Refresh your hair between washes with our Fresh Breeze Dry Shampoo. This innovative formula absorbs excess oil at the roots without leaving any white residue, making it suitable for all hair colors. The lightweight powder adds volume and texture while eliminating odors with a clean, fresh scent. Perfect for extending the life of your style, adding volume to clean hair, or refreshing after a workout. The invisible formula won't dull hair color or build up with repeated use.",
      ingredients: "Oryza Sativa (Rice) Starch, Silica, Kaolin, Sodium Bicarbonate, Parfum, Phenoxyethanol.",
      howToUse:
        "Shake well before use. Hold can 6-8 inches from dry hair and spray onto roots in short bursts. Wait 30 seconds, then massage into scalp with fingertips. Brush through if desired.",
      price: 21.99,
      image: "assets/products/hair/fresh-breeze-dry-shampoo.jpg",
      rating: 4.6,
      category: "hair",
      stock: 25,
      is_new: false,
    },
    {
      id: 58,
      name: "Color Glow Conditioner",
      description: "Color-Protecting Conditioner",
      detailedDescription:
        "Preserve your hair color's vibrancy with our Color Glow Conditioner. This sulfate-free formula gently detangles and hydrates while creating a protective shield that prevents color molecules from washing out. UV filters protect against sun-induced fading, while antioxidants neutralize free radicals that can dull color. Hair is left soft, manageable, and with enhanced color brilliance that lasts significantly longer between salon visits.",
      ingredients:
        "Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Glycerin, Panthenol, Ethylhexyl Methoxycinnamate, Quaternium-91, Phenoxyethanol.",
      howToUse:
        "After shampooing with a color-safe shampoo, apply from mid-lengths to ends. Leave on for 1-3 minutes, then rinse thoroughly. Use after every wash for maximum color protection.",
      price: 26.99,
      image: "assets/products/hair/color-glow-conditioner.jpg",
      rating: 4.7,
      category: "hair",
      stock: 22,
      is_new: true,
    },
    {
      id: 59,
      name: "Curl Beam Cream",
      description: "Curl Defining Cream",
      detailedDescription:
        "Enhance your natural curl pattern with our Curl Beam Cream. This medium-hold formula defines and separates curls while fighting frizz and adding moisture. The lightweight cream won't weigh curls down or create crunchiness, allowing for natural movement and bounce. Infused with shea butter and argan oil, it improves curl health with each use, leading to more defined, hydrated curls over time. Suitable for all curl types from loose waves to tight coils.",
      ingredients:
        "Aqua, Glycerin, Butyrospermum Parkii (Shea) Butter, Argania Spinosa Kernel Oil, Polyquaternium-11, Panthenol, Phenoxyethanol.",
      howToUse:
        "Apply to clean, damp hair, distributing evenly from roots to ends. Scrunch upward to enhance curl pattern. Air dry or diffuse on low heat for best results. Can be used on dry hair to refresh curls between washes.",
      price: 23.99,
      sale_price: 19.99,
      image: "assets/products/hair/curl-beam-cream.jpg",
      rating: 4.8,
      category: "hair",
      stock: 18,
      is_new: false,
    },
    {
      id: 60,
      name: "Scalp Renew Scrub",
      description: "Exfoliating Scalp Scrub",
      detailedDescription:
        "Reveal a healthier scalp with our Scalp Renew Scrub. This dual-action exfoliator combines gentle physical exfoliation from sugar crystals with chemical exfoliation from salicylic acid to remove product buildup, excess oil, and flakes. The invigorating formula improves scalp circulation and clears clogged hair follicles, creating the optimal environment for healthy hair growth. Regular use leads to a balanced scalp, reduced itchiness, and improved hair quality from root to tip.",
      ingredients:
        "Aqua, Sucrose, Sodium Cocoyl Isethionate, Salicylic Acid, Menthol, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Phenoxyethanol.",
      howToUse:
        "Apply to wet hair, focusing on the scalp. Massage gently with fingertips in circular motions for 1-2 minutes. Rinse thoroughly and follow with shampoo and conditioner. Use once weekly or as needed.",
      price: 25.99,
      image: "assets/products/hair/scalp-renew-scrub.jpg",
      rating: 4.5,
      category: "hair",
      stock: 20,
      is_new: true,
    },

    // TOOLS & ACCESSORIES CATEGORY
    {
      id: 61,
      name: "Cloud Blend Sponge",
      description: "Makeup Blending Sponge",
      detailedDescription:
        "Achieve a flawless makeup application with our Cloud Blend Sponge. This ultra-soft makeup sponge expands when wet, doubling in size for optimal product application. The unique cloud shape features multiple edges: the rounded bottom for larger areas like cheeks and forehead, the pointed tip for precise application around eyes and nose, and the flat edge for contouring. Use damp for a dewy finish or dry for fuller coverage. The latex-free material is suitable for sensitive skin.",
      ingredients: "Non-latex polyurethane foam.",
      howToUse:
        "Wet the sponge and squeeze out excess water. Apply foundation, concealer, or cream products to skin or sponge. Use bouncing motions to blend product into skin. Wash after each use with mild soap and allow to air dry completely.",
      price: 12.99,
      image: "assets/products/tools/cloud-blend-sponge.jpg",
      rating: 4.9,
      category: "tools",
      stock: 40,
      is_new: false,
    },
    {
      id: 62,
      name: "Glow Sculpt Brush",
      description: "Angled Contour Brush",
      detailedDescription:
        "Define and sculpt your facial features with precision using our Glow Sculpt Brush. The angled, densely-packed synthetic bristles pick up the perfect amount of product and blend it seamlessly for a natural-looking contour. The ergonomic handle provides comfortable control for creating defined cheekbones, jawlines, and nose contours. The cruelty-free bristles work beautifully with powder or cream products, making this a versatile tool for your makeup collection.",
      ingredients: "Synthetic bristles, aluminum ferrule, wooden handle.",
      howToUse:
        "For powder products, tap off excess before applying. For cream products, apply directly from brush to skin. Use the angled edge to apply product precisely, then blend using the flat side of the brush in short, buffing motions.",
      price: 16.99,
      image: "assets/products/tools/glow-sculpt-brush.jpg",
      rating: 4.8,
      category: "tools",
      stock: 35,
      is_new: true,
    },
    {
      id: 63,
      name: "Lash Beam Applicator",
      description: "Eyelash Applicator Tool",
      detailedDescription:
        "Apply false lashes with ease using our Lash Beam Applicator. This precision tool makes applying false lashes effortless, even for beginners. The curved design perfectly matches the natural curve of your lash line for accurate placement, while the rubberized grip prevents slipping during application. The built-in separator comb helps blend your natural lashes with falsies for a seamless look. Say goodbye to frustrating lash application and hello to perfect placement every time.",
      ingredients: "Stainless steel, silicone grip.",
      howToUse:
        "Place false lash band in the curved groove of the applicator. Apply a thin line of lash adhesive to the band and wait 30 seconds until tacky. Position lash at the base of your natural lash line and press gently to secure. Use the comb end to blend natural and false lashes together.",
      price: 9.99,
      sale_price: 7.99,
      image: "assets/products/tools/lash-beam-applicator.jpg",
      rating: 4.6,
      category: "tools",
      stock: 30,
      is_new: false,
    },
    {
      id: 64,
      name: "Dream Organizer Case",
      description: "Makeup Organizer Case",
      detailedDescription:
        "Keep your beauty essentials organized and accessible with our Dream Organizer Case. This stylish acrylic organizer features multiple compartments designed to hold different types of makeup products, from lipsticks and brushes to palettes and skincare bottles. The clear construction allows you to easily see all your products at a glance, while the sturdy design ensures durability. The compact footprint maximizes storage while minimizing counter space, making it perfect for any vanity or bathroom.",
      ingredients: "Acrylic.",
      howToUse:
        "Place on a flat, stable surface. Organize products by category or frequency of use for easy access. Clean with a soft, damp cloth and mild soap as needed. Do not use abrasive cleaners that may scratch the acrylic.",
      price: 29.99,
      image: "assets/products/tools/dream-organizer-case.jpg",
      rating: 4.7,
      category: "tools",
      stock: 20,
      is_new: false,
    },
    {
      id: 65,
      name: "Smooth Clean Pad",
      description: "Silicone Makeup Brush Cleaner",
      detailedDescription:
        "Clean your makeup brushes thoroughly and efficiently with our Smooth Clean Pad. This textured silicone pad features various raised patterns designed to deep clean different brush types and sizes. The suction cups on the back secure the pad to your sink during use, preventing slipping. Regular cleaning with this pad removes product buildup, oils, and bacteria more effectively than hand-washing alone, extending the life of your brushes and ensuring hygienic makeup application.",
      ingredients: "Food-grade silicone.",
      howToUse:
        "Wet brush with warm water and apply gentle soap or brush cleanser. Swirl brush on the textured pad in circular motions, focusing on heavily soiled areas. Rinse brush thoroughly and reshape. Allow to dry completely with bristles hanging over the edge of a counter.",
      price: 8.99,
      image: "assets/products/tools/smooth-clean-pad.jpg",
      rating: 4.5,
      category: "tools",
      stock: 45,
      is_new: true,
    },
    {
      id: 66,
      name: "Glow On-The-Go Bag",
      description: "Travel Makeup Bag",
      detailedDescription:
        "Take your beauty essentials anywhere with our Glow On-The-Go Bag. This compact yet spacious travel makeup bag features a waterproof lining that contains spills and makes cleanup easy. Multiple interior pockets keep products organized and prevent damage during travel. The durable exterior protects your products, while the flat-laying design makes it easy to see all your items at once when opened. Perfect for weekends away, gym bags, or keeping in your purse for touch-ups throughout the day.",
      ingredients: "Nylon exterior, waterproof PVC lining, metal zipper.",
      howToUse:
        "Pack makeup and tools in interior pockets to prevent movement during travel. For liquid products, ensure caps are tightly secured. Clean interior with damp cloth if spills occur. Spot clean exterior as needed.",
      price: 24.99,
      sale_price: 19.99,
      image: "assets/products/tools/glow-on-the-go-bag.jpg",
      rating: 4.8,
      category: "tools",
      stock: 25,
      is_new: false,
    },
    {
      id: 67,
      name: "Lash Lift Refills",
      description: "Eyelash Curler Refill Pads",
      detailedDescription:
        "Maintain the perfect curl with our Lash Lift Refill Pads. These high-quality silicone pads are designed to fit perfectly into our Lash Lift Curler, providing the optimal amount of pressure for effective curling without crimping or breaking lashes. Each pack contains 5 replacement pads to ensure your curler always performs at its best. Regular replacement (every 3 months) ensures hygienic use and consistent curling results for beautiful, eye-opening lashes every time.",
      ingredients: "Silicone.",
      howToUse:
        "Remove old pad from eyelash curler. Ensure curler is clean and dry. Insert new pad, making sure it's properly seated in the curler. Replace when pad begins to wear down or every 3 months, whichever comes first.",
      price: 6.99,
      image: "assets/products/tools/lash-lift-refills.jpg",
      rating: 4.4,
      category: "tools",
      stock: 50,
      is_new: false,
    },
    {
      id: 68,
      name: "Radiant Brush Set",
      description: "Makeup Brush Set",
      detailedDescription:
        "Elevate your makeup application with our comprehensive Radiant Brush Set. This 12-piece collection includes everything you need for a flawless full-face application, from foundation and concealer to eyeshadow and lipstick. Each brush features ultra-soft synthetic bristles that pick up and distribute product evenly for professional results. The ergonomic handles provide comfortable grip and precise control. The included brush holder keeps everything organized and accessible while protecting bristles from damage.",
      ingredients: "Synthetic bristles, aluminum ferrules, wooden handles, canvas and PU leather brush holder.",
      howToUse:
        "Use specific brushes for their intended purposes for best results. Clean regularly with brush cleanser or mild soap. Allow brushes to dry completely with bristles hanging over the edge of a counter to maintain shape. Store in the included holder to protect bristles.",
      price: 48.99,
      sale_price: 39.99,
      image: "assets/products/tools/radiant-brush-set.jpg",
      rating: 4.9,
      category: "tools",
      stock: 15,
      is_new: true,
    },
    {
      id: 69,
      name: "Jade Glow Roller",
      description: "Jade Facial Roller",
      detailedDescription:
        "Enhance your skincare routine with our authentic Jade Glow Roller. This traditional beauty tool helps improve circulation, reduce puffiness, and increase product absorption. The dual-ended design features a larger stone for cheeks, forehead, and jawline, and a smaller stone for under-eye and precise areas. The cool jade stone naturally depuffs and soothes skin, while the rolling motion helps drain lymphatic fluid to reduce morning puffiness. Store in the refrigerator for enhanced cooling benefits.",
      ingredients: "Genuine jade stone, stainless steel frame.",
      howToUse:
        "Apply serum or moisturizer to clean skin. Starting from the center of the face, roll outward and upward with gentle pressure. Use larger end for cheeks, forehead, and jawline; smaller end for under-eye area and around nose. Clean with soft cloth after each use.",
      price: 18.99,
      image: "assets/products/tools/jade-glow-roller.jpg",
      rating: 4.7,
      category: "tools",
      stock: 22,
      is_new: false,
    },
    {
      id: 70,
      name: "Magnetic Glow Palette",
      description: "Customizable Magnetic Palette",
      detailedDescription:
        "Create your own custom makeup collection with our Magnetic Glow Palette. This sleek, slim palette features a strong magnetic base that securely holds your favorite single eyeshadows, blushes, and highlighters in one convenient place. The large mirror makes application easy, while the secure closure ensures safe travel without breakage. Perfect for creating your own curated color collection or for depotting products to save space. The minimalist design complements any vanity or makeup bag.",
      ingredients: "Aluminum case, magnetic sheet, glass mirror.",
      howToUse:
        "Remove single pans from their original packaging or depot pressed powders using heat method. Place magnetic pans directly onto palette surface. For non-magnetic pans, attach a small magnetic sticker (sold separately) to the bottom before placing in palette.",
      price: 14.99,
      sale_price: 11.99,
      image: "assets/products/tools/magnetic-glow-palette.jpg",
      rating: 4.5,
      category: "tools",
      stock: 30,
      is_new: true,
    },
  ]

  // Display featured products on homepage
  const featuredContainer = document.getElementById("featured-products")
  if (featuredContainer) {
    // Select a few products to feature (e.g., ones with high ratings or marked as new)
    const featuredProducts = productsData.filter((p) => p.is_new || p.rating >= 4.8).slice(0, 4)
    displayProducts(featuredProducts, featuredContainer)
  }

  // Display all products on products page
  const productsContainer = document.getElementById("products-container")
  if (productsContainer) {
    displayProducts(productsData, productsContainer)
  }

  // Display featured products on products page
  const featuredProductsPageContainer = document.getElementById("featured-products-container")
  if (featuredProductsPageContainer) {
    const featuredProducts = productsData.filter((p) => p.is_new || p.rating >= 4.8).slice(0, 4)
    displayProducts(featuredProducts, featuredProductsPageContainer)
  }

  // Display categories
  const categoriesContainer = document.getElementById("categories-container")
  if (categoriesContainer) {
    const categories = [
      {
        name: "All Products",
        image: "assets/categories/all-products.jpg",
        slug: "all",
      },
      {
        name: "Lips",
        image: "assets/categories/lips.jpg",
        slug: "lips",
      },
      {
        name: "Cheeks",
        image: "assets/categories/cheeks.jpg",
        slug: "cheeks",
      },
      {
        name: "Base",
        image: "assets/categories/base.jpg",
        slug: "base",
      },
      {
        name: "Eyes",
        image: "assets/categories/eyes.jpg",
        slug: "eyes",
      },
      {
        name: "Skincare",
        image: "assets/categories/skincare.jpg",
        slug: "skincare",
      },
      {
        name: "Hair",
        image: "assets/categories/hair.jpg",
        slug: "hair",
      },
      {
        name: "Tools",
        image: "assets/categories/tools.jpg",
        slug: "tools",
      },
    ]

    renderCategories(categories, categoriesContainer)
  }

  // Return the products data for other functions to use
  return productsData
}

/**
 * Display products in the container
 * @param {Array} products - Array of product objects
 * @param {HTMLElement} container - Container element to display products in
 */
function displayProducts(products, container) {
  // Clear container
  container.innerHTML = ""

  // If no products found
  if (products.length === 0) {
    container.innerHTML = '<div class="no-products">No products found.</div>'
    return
  }

  // Create product cards
  products.forEach((product) => {
    const productCard = createProductCard(product)
    container.appendChild(productCard)
  })

  // Set up event listeners for product cards (delegated)
  setupProductCardListeners(container)
}

/**
 * Create a product card element
 * @param {Object} product - Product object
 * @returns {HTMLElement} - Product card element
 */
function createProductCard(product) {
  const productCard = document.createElement("div")
  productCard.className = "product-card"
  productCard.dataset.productId = product.id

  // Calculate discount percentage if on sale
  let discountBadge = ""
  if (product.sale_price && product.sale_price < product.price) {
    const discountPercent = Math.round((1 - product.sale_price / product.price) * 100)
    discountBadge = `<span class="discount-badge">-${discountPercent}%</span>`
  }

  // New product badge
  const newBadge = product.is_new ? '<span class="new-badge">New</span>' : ""

  // Format prices
  const regularPrice = Number.parseFloat(product.price).toFixed(2)
  const salePrice = product.sale_price ? Number.parseFloat(product.sale_price).toFixed(2) : null

  // Build price HTML
  let priceHtml = ""
  if (salePrice) {
    priceHtml = `
            <span class="regular-price strikethrough">$${regularPrice}</span>
            <span class="sale-price">$${salePrice}</span>
        `
  } else {
    priceHtml = `<span class="regular-price">$${regularPrice}</span>`
  }

  // Build product card HTML
  productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${discountBadge}
            ${newBadge}
            <div class="product-actions">
                <button class="wishlist-btn" aria-label="Add to wishlist">
                    <i class="far fa-heart"></i>
                </button>
                <button class="add-to-cart-btn" aria-label="Add to cart">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Add to Cart</span>
                </button>
                <button class="quick-view-btn" aria-label="Quick view">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${priceHtml}
            </div>
            <div class="product-rating">
                ${generateRatingStars(product.rating)}
            </div>
        </div>
    `

  return productCard
}

/**
 * Generate HTML for rating stars
 * @param {number} rating - Product rating (0-5)
 * @returns {string} - HTML for rating stars
 */
function generateRatingStars(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  let starsHtml = ""

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>'
  }

  // Add half star if needed
  if (halfStar) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>'
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star"></i>'
  }

  return starsHtml
}

/**
 * Set up event listeners for product cards using event delegation
 * @param {HTMLElement} container - The container with product cards
 */
function setupProductCardListeners(container) {
  // Prevent adding multiple listeners
  if (container._hasProductListener) return
  container._hasProductListener = true

  container.addEventListener("click", (e) => {
    const target = e.target

    // Product image or name click
    if (target.matches(".product-image img") || target.matches(".product-name")) {
      const productCard = target.closest(".product-card")
      if (productCard) {
        const productId = productCard.dataset.productId
        viewProductDetails(productId)
      }
    }

    // Wishlist button click
    if (target.closest(".wishlist-btn")) {
      e.preventDefault()
      const button = target.closest(".wishlist-btn")
      const icon = button.querySelector("i")
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        showToast("Product added to wishlist!")
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        showToast("Product removed from wishlist!")
      }
    }

    // Add to cart button click
    if (target.closest(".add-to-cart-btn")) {
      e.preventDefault()
      const button = target.closest(".add-to-cart-btn")
      const productCard = button.closest(".product-card")
      const productId = productCard.dataset.productId
      const product = findProductById(productId)
      if (product) {
        if (typeof window.addToCart === "function") {
          window.addToCart(product)
        } else {
          const event = new CustomEvent("add-to-cart", { detail: { product } })
          document.dispatchEvent(event)
        }
        showToast("Product added to cart!")
      }
    }

    // Quick view button click
    if (target.closest(".quick-view-btn")) {
      e.preventDefault()
      const button = target.closest(".quick-view-btn")
      const productCard = button.closest(".product-card")
      const productId = productCard.dataset.productId
      openQuickView(productId)
    }
  })
}

/**
 * Find product by ID
 * @param {string|number} productId - Product ID
 * @returns {Object|null} - Product object or null if not found
 */
function findProductById(productId) {
  const productsData = loadProductsFromData()
  return productsData.find((p) => p.id == productId) || null
}

/**
 * Set up event listeners for product filtering
 */
function setupProductFilters() {
  // Category filter buttons
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all buttons
      document.querySelectorAll("[data-filter]").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Get category
      const category = this.dataset.filter

      // Get products container
      const productsContainer = document.getElementById("products-container")
      if (!productsContainer) return

      // Get all products
      const productsData = loadProductsFromData()

      // Filter products
      const filteredProducts = category === "all" ? productsData : productsData.filter((p) => p.category === category)

      // Display filtered products
      displayProducts(filteredProducts, productsContainer)
    })
  })

  // Sort buttons
  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all buttons
      document.querySelectorAll("[data-sort]").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Get sort option
      const sortOption = this.dataset.sort

      // Get current products
      const productsContainer = document.getElementById("products-container")
      if (!productsContainer) return

      // Get active filter category
      const activeFilter = document.querySelector("[data-filter].active")
      const category = activeFilter ? activeFilter.dataset.filter : "all"

      // Get all products
      const productsData = loadProductsFromData()

      // Filter products by active category
      const filteredProducts =
        category === "all" ? [...productsData] : productsData.filter((p) => p.category === category)

      // Sort products
      switch (sortOption) {
        case "price-low":
          filteredProducts.sort((a, b) => {
            const priceA = a.sale_price || a.price
            const priceB = b.sale_price || b.price
            return priceA - priceB
          })
          break
        case "price-high":
          filteredProducts.sort((a, b) => {
            const priceA = a.sale_price || a.price
            const priceB = b.sale_price || b.price
            return priceB - priceA
          })
          break
        case "name":
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "featured":
        default:
          // For featured, prioritize new items and high ratings
          filteredProducts.sort((a, b) => {
            if (a.is_new && !b.is_new) return -1
            if (!a.is_new && b.is_new) return 1
            return b.rating - a.rating
          })
          break
      }

      // Display sorted products
      displayProducts(filteredProducts, productsContainer)
    })
  })
}

function setupSearch() {
  const searchForm = document.querySelector(".search-form")
  const productSearch = document.getElementById("product-search")

  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const searchInput = this.querySelector('input[type="search"]') || this.querySelector('input[type="text"]')
      const searchTerm = searchInput.value.trim()

      if (searchTerm) {
        // Store search term in session storage
        sessionStorage.setItem("searchTerm", searchTerm)

        // If on products page, load filtered products
        if (window.location.pathname.includes("products.html")) {
          searchProducts(searchTerm)

          // Close search overlay if it exists
          const searchOverlay = document.getElementById("search-overlay")
          if (searchOverlay) {
            searchOverlay.classList.remove("active")
          }

          // Scroll to products section
          document.querySelector(".product-section").scrollIntoView({ behavior: "smooth" })
        } else {
          // Redirect to products page with search term
          window.location.href = "products.html?search=" + encodeURIComponent(searchTerm)
        }
      }
    })
  }

  // Product search on products page
  if (productSearch) {
    productSearch.addEventListener("input", function () {
      const searchTerm = this.value.trim()
      searchProducts(searchTerm)
    })

    // Prevent form submission on enter key
    productSearch.closest("form").addEventListener("submit", (e) => {
      e.preventDefault()
      const searchTerm = productSearch.value.trim()
      searchProducts(searchTerm)

      // Scroll to products section
      document.querySelector(".product-section").scrollIntoView({ behavior: "smooth" })
    })
  }

  // Check for search parameter in URL on products page
  if (window.location.pathname.includes("products.html")) {
    const urlParams = new URLSearchParams(window.location.search)
    const searchTerm = urlParams.get("search") || sessionStorage.getItem("searchTerm") || ""

    if (searchTerm) {
      // Update search input
      const searchInput =
        document.querySelector('.search-form input[type="search"]') || document.getElementById("product-search")
      if (searchInput) {
        searchInput.value = searchTerm
      }

      // Search products
      searchProducts(searchTerm)

      // Scroll to products section
      document.querySelector(".product-section").scrollIntoView({ behavior: "smooth" })
    }
  }
}

/**
 * Search products by term
 * @param {string} searchTerm - Search term
 */
function searchProducts(searchTerm) {
  const productsContainer = document.getElementById("products-container")
  if (!productsContainer) return

  // Get all products
  const productsData = loadProductsFromData()

  if (searchTerm === "") {
    // Show all products if search term is empty
    displayProducts(productsData, productsContainer)
  } else {
    // Filter products by search term
    const filteredProducts = productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Display filtered products
    displayProducts(filteredProducts, productsContainer)
  }
}

/**
 * View product details
 * @param {string} productId - Product ID
 */
function viewProductDetails(productId) {
  window.location.href = `product-detail.html?id=${productId}`
}

/**
 * Open quick view modal
 * @param {string} productId - Product ID
 */
function openQuickView(productId) {
  // Find product
  const product = findProductById(productId)

  if (!product) {
    showToast("Product not found", "error")
    return
  }

  // Create quick view modal
  const modal = document.createElement("div")
  modal.className = "quick-view-modal"

  modal.innerHTML = `
    <div class="quick-view-content">
      <button class="close-modal">&times;</button>
      <div class="quick-view-grid">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h2>${product.name}</h2>
          <div class="product-rating">
            ${generateRatingStars(product.rating)}
          </div>
          <div class="product-price">
            ${
              product.sale_price
                ? `<span class="regular-price strikethrough">$${Number.parseFloat(product.price).toFixed(2)}</span>
                  <span class="sale-price">$${Number.parseFloat(product.sale_price).toFixed(2)}</span>`
                : `<span class="regular-price">$${Number.parseFloat(product.price).toFixed(2)}</span>`
            }
          </div>
          <div class="product-description">
            <p>${product.detailedDescription || product.description}</p>
          </div>
          <div class="product-actions">
            <div class="quantity">
              <button class="quantity-btn minus">-</button>
              <input type="number" value="1" min="1" max="${product.stock || 10}">
              <button class="quantity-btn plus">+</button>
            </div>
            <button class="add-to-cart-btn">
              <i class="fas fa-shopping-bag"></i>
              <span>Add to Cart</span>
            </button>
            <button class="wishlist-btn">
              <i class="far fa-heart"></i>
            </button>
          </div>
          <div class="product-meta">
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Availability:</strong> ${product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
          </div>
        </div>
      </div>
    </div>
  `

  // Add modal to body
  document.body.appendChild(modal)

  // Prevent body scrolling
  document.body.style.overflow = "hidden"

  // Add event listeners
  setupQuickViewListeners(modal, product)

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add("active")
  }, 10)
}

/**
 * Set up event listeners for quick view modal
 * @param {HTMLElement} modal - Quick view modal element
 * @param {Object} product - Product object
 */
function setupQuickViewListeners(modal, product) {
  // Close button
  const closeButton = modal.querySelector(".close-modal")
  closeButton.addEventListener("click", () => {
    closeQuickView(modal)
  })

  // Close on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeQuickView(modal)
    }
  })

  // Quantity buttons
  const quantityInput = modal.querySelector(".quantity input")
  const minusButton = modal.querySelector(".quantity-btn.minus")
  const plusButton = modal.querySelector(".quantity-btn.plus")

  minusButton.addEventListener("click", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value > 1) {
      quantityInput.value = value - 1
    }
  })

  plusButton.addEventListener("click", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value < (product.stock || 10)) {
      quantityInput.value = value + 1
    }
  })

  // Add to cart button
  const addToCartButton = modal.querySelector(".add-to-cart-btn")
  addToCartButton.addEventListener("click", () => {
    const quantity = Number.parseInt(quantityInput.value)

    // Add product to cart with quantity
    const cartProduct = { ...product, quantity }

    if (typeof window.addToCart === "function") {
      window.addToCart(cartProduct)
    } else {
      // Dispatch event for cart.js to handle
      const event = new CustomEvent("add-to-cart", { detail: { product: cartProduct } })
      document.dispatchEvent(event)
    }

    showToast("Product added to cart!")
    closeQuickView(modal)
  })

  // Wishlist button
  const wishlistButton = modal.querySelector(".wishlist-btn")
  wishlistButton.addEventListener("click", () => {
    const icon = wishlistButton.querySelector("i")

    // Toggle wishlist icon
    if (icon.classList.contains("far")) {
      icon.classList.remove("far")
      icon.classList.add("fas")
      showToast("Product added to wishlist!")
    } else {
      icon.classList.remove("fas")
      icon.classList.add("far")
      showToast("Product removed from wishlist!")
    }
  })
}

/**
 * Close quick view modal
 * @param {HTMLElement} modal - Quick view modal element
 */
function closeQuickView(modal) {
  // Hide modal with animation
  modal.classList.remove("active")

  // Remove modal after animation
  setTimeout(() => {
    document.body.removeChild(modal)

    // Restore body scrolling
    document.body.style.overflow = ""
  }, 300)
}

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning)
 */
function showToast(message, type = "success") {
  // Create toast element
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = message

  // Add toast to body
  document.body.appendChild(toast)

  // Show toast with animation
  setTimeout(() => {
    toast.classList.add("active")
  }, 10)

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("active")

    // Remove toast after animation
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 3000)
}

/**
 * Render categories
 * @param {Array} categories - Array of category objects
 * @param {HTMLElement} container - Container element to display categories in
 */
function renderCategories(categories, container) {
  // Clear container
  container.innerHTML = ""

  // Create category items
  categories.forEach((category) => {
    const categoryItem = document.createElement("div")
    categoryItem.className = "category-item"
    categoryItem.dataset.category = category.slug

    categoryItem.innerHTML = `
      <div class="category-image">
        <img src="${category.image}" alt="${category.name}">
      </div>
      <h3>${category.name}</h3>
    `

    container.appendChild(categoryItem)

    // Add click event to filter products by category
    categoryItem.addEventListener("click", function () {
      const categorySlug = this.dataset.category

      // Update filter dropdown active state
      const filterLinks = document.querySelectorAll("[data-filter]")
      filterLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.dataset.filter === categorySlug) {
          link.classList.add("active")
        }
      })

      // Filter products
      const productsContainer = document.getElementById("products-container")
      if (productsContainer) {
        // Get all products
        const productsData = loadProductsFromData()

        // Filter products
        const filteredProducts =
          categorySlug === "all" ? productsData : productsData.filter((p) => p.category === categorySlug)

        // Display filtered products
        displayProducts(filteredProducts, productsContainer)
      }

      // Scroll to products section
      document.querySelector(".product-section").scrollIntoView({ behavior: "smooth" })
    })
  })
}

// Define addToCart function if it doesn't exist
if (typeof window.addToCart !== "function") {
  window.addToCart = (product) => {
    console.log("Adding to cart:", product)

    // Get cart items from localStorage or initialize empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    // Check if product already exists in cart
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id)

    if (existingItemIndex !== -1) {
      // Update quantity if product already in cart
      cartItems[existingItemIndex].quantity += product.quantity || 1
    } else {
      // Add new product to cart
      cartItems.push({
        ...product,
        quantity: product.quantity || 1,
      })
    }

    // Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    // Update cart count
    updateCartCount()

    // Show toast
    showToast(`Added ${product.name} to cart!`)
  }
}

/**
 * Update cart count in header
 */
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const cartCount = document.querySelector(".cart-count")

  if (cartCount) {
    // Calculate total quantity
    const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
    cartCount.textContent = totalQuantity
  }
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
})
