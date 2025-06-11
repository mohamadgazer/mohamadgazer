export interface Product {
  id: string;
  name: string;
  category: 'laptops' | 'accessories';
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  brand: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'لابتوب Dell XPS 13 - الجيل الجديد',
    category: 'laptops',
    subcategory: 'ultrabooks',
    price: 45000,
    originalPrice: 50000,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'لابتوب عالي الأداء مثالي للعمل والدراسة، مع شاشة عالية الدقة وتصميم أنيق وخفيف الوزن.',
    specifications: {
      'المعالج': 'Intel Core i7-1165G7',
      'الذاكرة العشوائية': '16 جيجابايت DDR4',
      'التخزين': '512 جيجابايت SSD',
      'الشاشة': '13.3 بوصة FHD',
      'كارت الرسوميات': 'Intel Iris Xe',
      'نظام التشغيل': 'Windows 11'
    },
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 127,
    brand: 'Dell'
  },
  {
    id: '2',
    name: 'لابتوب HP Pavilion Gaming',
    category: 'laptops',
    subcategory: 'gaming',
    price: 35000,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'لابتوب قيمينغ قوي مع كارت رسوميات متقدم، مثالي للألعاب والتصميم والبرمجة.',
    specifications: {
      'المعالج': 'AMD Ryzen 5 5600H',
      'الذاكرة العشوائية': '8 جيجابايت DDR4',
      'التخزين': '256 جيجابايت SSD + 1 تيرابايت HDD',
      'الشاشة': '15.6 بوصة FHD 144Hz',
      'كارت الرسوميات': 'NVIDIA GTX 1650',
      'نظام التشغيل': 'Windows 11'
    },
    inStock: true,
    featured: true,
    rating: 4.5,
    reviews: 89,
    brand: 'HP'
  },
  {
    id: '3',
    name: 'ماوس لوجيتك MX Master 3',
    category: 'accessories',
    subcategory: 'mice',
    price: 2500,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'ماوس لاسلكي عالي الدقة مع بطارية تدوم طويلاً وتصميم مريح للاستخدام المكتبي والإبداعي.',
    specifications: {
      'النوع': 'لاسلكي',
      'الدقة': '4000 DPI',
      'البطارية': 'تدوم حتى 70 يوم',
      'التوصيل': 'USB-C + Bluetooth',
      'التوافق': 'Windows, Mac, Linux'
    },
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 203,
    brand: 'Logitech'
  },
  {
    id: '4',
    name: 'شاحن لابتوب عام 90 واط',
    category: 'accessories',
    subcategory: 'chargers',
    price: 800,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'شاحن عام عالي الجودة متوافق مع معظم أجهزة اللابتوب، مع حماية من الجهد الزائد.',
    specifications: {
      'القوة': '90 واط',
      'الجهد الداخل': '100-240V AC',
      'الجهد الخارج': '19V DC',
      'أطراف التوصيل': '8 أطراف مختلفة',
      'طول الكابل': '1.5 متر'
    },
    inStock: true,
    featured: false,
    rating: 4.2,
    reviews: 45,
    brand: 'Universal'
  },
  {
    id: '5',
    name: 'شنطة لابتوب أنيقة - 15.6 بوصة',
    category: 'accessories',
    subcategory: 'bags',
    price: 450,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'شنطة أنيقة ومتينة لحماية لابتوبك، مع جيوب إضافية للإكسسوارات وتصميم مقاوم للماء.',
    specifications: {
      'الحجم': 'تدعم لابتوبات حتى 15.6 بوصة',
      'المادة': 'نايلون مقاوم للماء',
      'الجيوب': '3 جيوب رئيسية + جيوب جانبية',
      'الحمالة': 'حمالة كتف قابلة للتعديل',
      'الألوان': 'أسود، رمادي، كحلي'
    },
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 67,
    brand: 'Generic'
  },
  {
    id: '6',
    name: 'كيبورد ميكانيكي RGB',
    category: 'accessories',
    subcategory: 'keyboards',
    price: 1200,
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'كيبورد ميكانيكي احترافي مع إضاءة RGB قابلة للتخصيص، مثالي للقيمينغ والكتابة المكثفة.',
    specifications: {
      'النوع': 'ميكانيكي',
      'السويتشات': 'Blue Switches',
      'الإضاءة': 'RGB متعددة الألوان',
      'التوصيل': 'USB سلكي',
      'التخطيط': 'عربي/إنجليزي'
    },
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 134,
    brand: 'Redragon'
  }
];

export const categories = [
  { id: 'laptops', name: 'أجهزة لابتوب', icon: 'laptop' },
  { id: 'accessories', name: 'الإكسوارات', icon: 'mouse' }
];

export const subcategories = [
  { id: 'ultrabooks', name: 'ألترابوك', parent: 'laptops' },
  { id: 'gaming', name: 'قيمينغ', parent: 'laptops' },
  { id: 'business', name: 'الأعمال', parent: 'laptops' },
  { id: 'mice', name: 'ماوس', parent: 'accessories' },
  { id: 'keyboards', name: 'كيبورد', parent: 'accessories' },
  { id: 'chargers', name: 'شواحن', parent: 'accessories' },
  { id: 'bags', name: 'شنط وحقائب', parent: 'accessories' }
];