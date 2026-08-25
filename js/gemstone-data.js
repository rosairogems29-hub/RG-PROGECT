/*
  ROSAIRO GEMS — EASY COLLECTION UPDATE FILE
  --------------------------------------------
  To add a real gemstone, copy one object and change the values.
  Put photos inside: assets/gems/
  Example image: assets/gems/blue-sapphire-01.jpg

  Optional gallery: add more image paths to the images array.
  Optional video: add a local MP4 path to video, e.g. assets/gems/stone-01.mp4
*/
const GEMSTONES = [
  {
    id:'royal-blue-ceylon-sapphire',
    name:'Royal Blue Ceylon Sapphire', category:'ceylon-sapphire', subcategory:'Blue Sapphire',
    carat:'2.15 ct', origin:'Ratnapura, Sri Lanka', variety:'Natural Corundum', weight:'2.15 ct',
    dimensions:'Add dimensions', shape:'Cushion', cut:'Mixed Cut', colour:'Vivid Blue (Cornflower)',
    clarity:'Eye Clean (VVS)', treatment:'Unheated / Untreated', certification:'GIA Report', price:'Contact for Price',
    image:'assets/hero-gem.svg',
    images:['assets/hero-gem.svg'],
    video:'',
    description:'Demo catalogue entry. Replace the image, gallery and specifications with the details of your actual stone.'
  },
  {
    id:'unheated-padparadscha', name:'Unheated Padparadscha', category:'ceylon-sapphire', subcategory:'Padparadscha',
    carat:'2.85 ct', origin:'Sri Lanka', variety:'Natural Corundum', weight:'2.85 ct', dimensions:'Add dimensions',
    shape:'Oval', cut:'Mixed Cut', colour:'Pinkish Orange', clarity:'Add clarity', treatment:'Unheated / Untreated',
    certification:'Add certificate', price:'Contact for Price', image:'assets/hero-gem.svg', images:['assets/hero-gem.svg'], video:'',
    description:'Add the actual stone photography and laboratory details when this gemstone is available.'
  },
  {
    id:'cornflower-blue-cushion', name:'Cornflower Blue Cushion', category:'ceylon-sapphire', subcategory:'Blue Sapphire',
    carat:'3.40 ct', origin:'Ratnapura, Sri Lanka', variety:'Natural Corundum', weight:'3.40 ct', dimensions:'Add dimensions',
    shape:'Cushion', cut:'Mixed Cut', colour:'Cornflower Blue', clarity:'Add clarity', treatment:'Add treatment',
    certification:'Add certificate', price:'Contact for Price', image:'assets/hero-gem.svg', images:['assets/hero-gem.svg'], video:'',
    description:'A placeholder entry ready for your own gemstone photos and specifications.'
  },
  {
    id:'yellow-sapphire-demo', name:'Ceylon Yellow Sapphire', category:'ceylon-sapphire', subcategory:'Yellow Sapphire',
    carat:'Add carat', origin:'Sri Lanka', variety:'Natural Corundum', weight:'Add weight', dimensions:'Add dimensions',
    shape:'Cushion', cut:'Mixed Cut', colour:'Yellow', clarity:'Add clarity', treatment:'Add treatment', certification:'Add certificate',
    price:'Contact for Price', image:'assets/hero-gem.svg', images:['assets/hero-gem.svg'], video:'', description:'Placeholder for a real yellow sapphire.'
  },
  {
    id:'ruby-demo', name:'Natural Ruby', category:'other-gemstones', subcategory:'Ruby', carat:'Add carat', origin:'Add origin',
    variety:'Natural Ruby', weight:'Add weight', dimensions:'Add dimensions', shape:'Oval', cut:'Mixed Cut', colour:'Red',
    clarity:'Add clarity', treatment:'Add treatment', certification:'Add certificate', price:'Contact for Price', image:'assets/hero-gem.svg',
    images:['assets/hero-gem.svg'], video:'', description:'Placeholder for a real ruby.'
  },
  {
    id:'spinel-demo', name:'Natural Spinel', category:'other-gemstones', subcategory:'Spinel', carat:'Add carat', origin:'Add origin',
    variety:'Natural Spinel', weight:'Add weight', dimensions:'Add dimensions', shape:'Oval', cut:'Mixed Cut', colour:'Add colour',
    clarity:'Add clarity', treatment:'Add treatment', certification:'Add certificate', price:'Contact for Price', image:'assets/hero-gem.svg',
    images:['assets/hero-gem.svg'], video:'', description:'Placeholder for a real spinel.'
  }
];

const CATEGORIES = [
 {id:'ceylon-sapphire', name:'Ceylon Sapphire', intro:'Natural Sri Lankan sapphires, individually presented with their own specifications.', subs:['Blue Sapphire','Padparadscha','Yellow Sapphire','Pink Sapphire','Star Sapphire','Fancy Sapphire','White Sapphire','Other Ceylon Sapphires']},
 {id:'other-gemstones', name:'Other Gemstones', intro:'Selected precious and semi-precious gemstones from Sri Lanka and beyond.', subs:['Ruby','Spinel','Garnet','Chrysoberyl','Cat’s Eye','Amethyst','Tourmaline','Emerald','Other Gemstones']},
 {id:'calibrated-sapphires', name:'Calibrated Sapphires', intro:'Precisely cut sapphires in standardized sizes and shapes for jewellery makers and trade clients.', subs:['Round','Oval','Cushion','Pear','Emerald Cut','Princess','Other Shapes']},
 {id:'jewellery', name:'Jewellery', intro:'Selected gemstone jewellery and future custom pieces.', subs:['Rings','Pendants','Earrings','Bracelets','Custom Jewellery']}
];
