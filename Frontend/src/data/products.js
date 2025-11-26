export const CATEGORIES = [
  { 
    id: 'solid', 
    name: 'Solid Pearls', 
    description: 'Single and solid color pearls.', 
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2070&auto=format&fit=crop',
    color: 'from-yellow-600 to-yellow-800' 
  },
  { 
    id: 'interference', 
    name: 'Interference', 
    description: 'Effect colors offering a variety of iridescent colors and finishes.', 
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop',
    color: 'from-blue-500 to-purple-600' 
  },
  { 
    id: 'carbon', 
    name: 'Carbon Pearls', 
    description: 'Highly metallic and bold solid pearl colors.', 
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    color: 'from-gray-700 to-black' 
  },
  { 
    id: 'oem', 
    name: 'OEM+ Pearls', 
    description: 'Solid colors with a subtle holographic effect.', 
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop',
    color: 'from-red-600 to-red-900' 
  },
  { 
    id: 'special', 
    name: 'Special Effect', 
    description: 'Optically variable (color changing) special effect colors.', 
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    color: 'from-indigo-500 to-pink-600' 
  },
  { 
    id: 'chroma', 
    name: 'Chroma Pearls', 
    description: 'The most vivid and hardest shifting pearls (5-6 colors).', 
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop',
    color: 'from-emerald-400 to-cyan-600' 
  },
];

export const INITIAL_PRODUCTS = [
  // Solid
  { 
    id: 1,
    name: '24 Karat Gold', 
    category: 'solid', 
    price: 1200, 
    rating: 5, 
    description: 'Pure, rich gold tone. The standard for luxury finishes. Excellent coverage and metallic brilliance.', 
    imageColor: 'linear-gradient(135deg, #FFD700, #B8860B)',
  },
  { 
    id: 2,
    name: 'Blurple', 
    category: 'solid', 
    price: 1200, 
    rating: 4, 
    description: 'The perfect blend of blue and purple. Vivid, deep, and unmistakable.', 
    imageColor: 'linear-gradient(135deg, #0000FF, #800080)',
  },
  // Special Effect
  { 
    id: 3,
    name: 'Zombie Midnight', 
    category: 'special', 
    price: 1800, 
    rating: 5, 
    description: 'A deep, mysterious shift from dark navy to teal. Perfect for night driving aesthetics.', 
    imageColor: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
  },
  { 
    id: 4,
    name: 'Worm Hole', 
    category: 'special', 
    price: 1850, 
    rating: 5, 
    description: 'Deep space violet shifting to black. A cosmic effect for custom projects.', 
    imageColor: 'linear-gradient(135deg, #240b36, #c31432)',
  },
  // Interference
  { 
    id: 5,
    name: 'Radioactive Green', 
    category: 'interference', 
    price: 1500, 
    rating: 5, 
    description: 'Glowing green that pops aggressively under direct sunlight. Not for the faint of heart.', 
    imageColor: 'linear-gradient(135deg, #32CD32, #006400)',
  },
  // Carbon
  { 
    id: 6,
    name: 'Carbon Lava', 
    category: 'carbon', 
    price: 1600, 
    rating: 5, 
    description: 'Molten red with a metallic carbon texture. Looks like liquid magma.', 
    imageColor: 'linear-gradient(135deg, #FF4500, #8B0000)',
  },
  // Chroma
  { 
    id: 7,
    name: 'Reptile Flip', 
    category: 'chroma', 
    price: 2200, 
    rating: 5, 
    description: 'Insane color shift: Green -> Gold -> Blue. A true chroma pearl that changes with every angle.', 
    imageColor: 'linear-gradient(135deg, #0ba360, #3cba92, #ffd700)',
  },
  { 
    id: 8,
    name: 'XTA Chroma', 
    category: 'chroma', 
    price: 2400, 
    rating: 5, 
    description: 'High-end chroma shift moving through cyan, blue, and purple spectrums.', 
    imageColor: 'linear-gradient(135deg, #00c6ff, #0072ff)',
  },
  // OEM
  { 
    id: 9,
    name: 'Obsidian Black', 
    category: 'oem', 
    price: 1100, 
    rating: 4, 
    description: 'Deepest black with a subtle holographic sparkle. OEM+ quality.', 
    imageColor: 'linear-gradient(135deg, #000000, #434343)',
  },
];