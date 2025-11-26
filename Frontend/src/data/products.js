export const INITIAL_PRODUCTS = [
  { 
    id: 1,
    name: '24 Karat Gold', 
    category: 'solid', 
    price: 1200, 
    rating: 5, 
    description: 'Pure, rich gold tone. The standard for luxury finishes. Excellent coverage and metallic brilliance.', 
    imageColor: 'linear-gradient(135deg, #FFD700, #B8860B)',
    features: ['No Rust', 'UV Resistant', 'High Gloss']
  },
  { 
    id: 2,
    name: 'Zombie Midnight', 
    category: 'special', 
    price: 1800, 
    rating: 5, 
    description: 'A deep, mysterious shift from dark navy to teal. Perfect for night driving aesthetics.', 
    imageColor: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
    features: ['Color Shift', 'Deep Depth', 'Stealth Look']
  },
  { 
    id: 3,
    name: 'Blurple', 
    category: 'solid', 
    price: 1200, 
    rating: 4, 
    description: 'The perfect blend of blue and purple. Vivid, deep, and unmistakable.', 
    imageColor: 'linear-gradient(135deg, #0000FF, #800080)',
    features: ['Vivid', 'High Pigment', 'Solid Tone']
  },
  { 
    id: 4,
    name: 'Radioactive Green', 
    category: 'interference', 
    price: 1500, 
    rating: 5, 
    description: 'Glowing green that pops aggressively under direct sunlight. Not for the faint of heart.', 
    imageColor: 'linear-gradient(135deg, #32CD32, #006400)',
    features: ['High Vis', 'Neon Effect', 'Interference']
  },
  { 
    id: 5,
    name: 'Carbon Lava', 
    category: 'carbon', 
    price: 1600, 
    rating: 5, 
    description: 'Molten red with a metallic carbon texture. Looks like liquid magma.', 
    imageColor: 'linear-gradient(135deg, #FF4500, #8B0000)',
    features: ['Metallic', 'Texture', 'Bold']
  },
  { 
    id: 6,
    name: 'Reptile Flip', 
    category: 'chroma', 
    price: 2200, 
    rating: 5, 
    description: 'Insane color shift: Green -> Gold -> Blue. A true chroma pearl that changes with every angle.', 
    imageColor: 'linear-gradient(135deg, #0ba360, #3cba92, #ffd700)',
    features: ['Multi-Chrome', '5-Color Shift', 'Extreme']
  }
];

export const CATEGORIES = [
  { id: 'solid', name: 'Solid Pearls', description: 'Single and solid color pearls.', color: 'from-yellow-500 to-yellow-700' },
  { id: 'interference', name: 'Interference', description: 'Iridescent finishes.', color: 'from-blue-500 to-indigo-700' },
  { id: 'carbon', name: 'Carbon Pearls', description: 'Highly metallic and bold.', color: 'from-gray-500 to-gray-800' },
  { id: 'oem', name: 'OEM+ Pearls', description: 'Subtle holographic effects.', color: 'from-red-500 to-red-800' },
  { id: 'special', name: 'Special Effect', description: 'Optically variable colors.', color: 'from-purple-500 to-purple-800' },
  { id: 'chroma', name: 'Chroma Pearls', description: 'Vivid multi-color shifts.', color: 'from-emerald-500 to-teal-800' },
];