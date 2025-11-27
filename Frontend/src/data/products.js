// Frontend/src/data/products.js
export const CATEGORIES = [
  { id: 'solid', name: 'Solid Pearls', description: 'Single and solid color pearls.', icon: 'bg-yellow-500' },
  { id: 'interference', name: 'Interference', description: 'Iridescent colors and finishes.', icon: 'bg-blue-500' },
  { id: 'carbon', name: 'Carbon Pearls', description: 'Highly metallic and bold.', icon: 'bg-gray-700' },
  { id: 'oem', name: 'OEM+ Pearls', description: 'Subtle holographic effects.', icon: 'bg-red-600' },
  { id: 'special', name: 'Special Effect', description: 'Optically variable color changing.', icon: 'bg-indigo-600' },
  { id: 'chroma', name: 'Chroma Pearls', description: 'Vivid multi-color shift.', icon: 'bg-emerald-500' },
];

export const PRODUCTS = [
  // Solid Pearls
  { 
    id: 1, 
    name: '24 Karat Gold', 
    category: 'solid', 
    price: 1200, 
    rating: 5, 
    code: 'SLD-001',
    description: 'Pure, rich gold tone. The standard for luxury finishes. Excellent coverage and metallic brilliance.', 
    features: ['Automotive Grade', 'UV Resistant', 'High Opacity'],
    imageColor: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)' 
  },
  { 
    id: 2, 
    name: 'Carbon Red', 
    category: 'carbon', 
    price: 1450, 
    rating: 4.8, 
    code: 'CBN-004',
    description: 'Highly metallic and bold solid red pearl. Creates a deep, blood-red finish with carbon-like shimmer.', 
    features: ['Metallic', 'Deep Depth', '200°C Temp Rating'],
    imageColor: 'linear-gradient(135deg, #ef4444 0%, #7f1d1d 100%)' 
  },
  // Interference
  { 
    id: 3, 
    name: 'Interference Blue', 
    category: 'interference', 
    price: 1300, 
    rating: 4.5, 
    code: 'INT-022',
    description: 'Ghost pearl that appears white/clear but reflects vivid blue under direct light. Perfect for top coats.', 
    features: ['Ghost Effect', 'Mix with Clear', 'Subtle Shift'],
    imageColor: 'linear-gradient(135deg, #e0f2fe 0%, #3b82f6 100%)' 
  },
  // Special Effect
  { 
    id: 4, 
    name: 'Zombie Midnight', 
    category: 'special', 
    price: 1800, 
    rating: 5, 
    code: 'SPC-089',
    description: 'A deep, mysterious shift from dark navy to teal. Perfect for night driving aesthetics.', 
    features: ['Color Shift', 'Dark Base Req', 'Premium Pigment'],
    imageColor: 'linear-gradient(135deg, #0f172a 0%, #0d9488 100%)' 
  },
  // Chroma
  { 
    id: 5, 
    name: 'Reptile Flip', 
    category: 'chroma', 
    price: 2800, 
    rating: 5, 
    code: 'CHR-007',
    description: 'Insane color shift: Green -> Gold -> Blue. A true chroma pearl that changes with every angle.', 
    features: ['Multi-Chrome', 'Extreme Shift', 'Show Car Quality'],
    imageColor: 'linear-gradient(135deg, #22c55e 0%, #eab308 50%, #3b82f6 100%)' 
  },
  // OEM+
  { 
    id: 6, 
    name: 'Obsidian Black', 
    category: 'oem', 
    price: 1100, 
    rating: 4.7, 
    code: 'OEM-012',
    description: 'Deepest black with a subtle holographic sparkle. OEM+ quality for factory-match repairs with a twist.', 
    features: ['Factory Match', 'Holographic', 'Deep Black'],
    imageColor: 'linear-gradient(135deg, #000000 0%, #333333 100%)' 
  },
  { 
    id: 7, name: 'Blurple', category: 'solid', price: 1250, rating: 4.6, code: 'SLD-005',
    description: 'The perfect blend of blue and purple.', imageColor: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)', features: ['Vivid', 'Solid']
  },
  { 
    id: 8, name: 'Radioactive Green', category: 'interference', price: 1500, rating: 4.9, code: 'INT-033',
    description: 'Glowing green that pops aggressively.', imageColor: 'linear-gradient(135deg, #bef264 0%, #22c55e 100%)', features: ['Neon', 'Bright']
  }
];