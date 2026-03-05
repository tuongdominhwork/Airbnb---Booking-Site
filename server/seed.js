const db = require('./database');

const listings = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    alt_text: 'Cozy cabin',
    title: 'Cozy Cabin in the Woods',
    description: 'A peaceful retreat surrounded by nature.',
    price: 120
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    alt_text: 'Beach house',
    title: 'Beachfront Paradise',
    description: 'Wake up to stunning ocean views every morning.',
    price: 250
  },
  {
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400',
    alt_text: 'City apartment',
    title: 'Modern City Apartment',
    description: 'Right in the heart of downtown, walk to everything.',
    price: 95
  },
  {
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
    alt_text: 'Luxury villa',
    title: 'Luxury Villa with Pool',
    description: 'A stunning villa with a private pool and ocean views.',
    price: 450
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
    alt_text: 'Mountain retreat',
    title: 'Mountain Retreat',
    description: 'Escape to the mountains and enjoy breathtaking scenery.',
    price: 180
  },
  {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
    alt_text: 'Loft apartment',
    title: 'Stylish Loft Apartment',
    description: 'Trendy open-plan loft in a vibrant neighbourhood.',
    price: 110
  },
  {
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400',
    alt_text: 'Beachside bungalow',
    title: 'Beachside Bungalow',
    description: 'Steps from the sand with a hammock and sea breeze.',
    price: 200
  },
  {
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400',
    alt_text: 'Countryside farmhouse',
    title: 'Countryside Farmhouse',
    description: 'A charming farmhouse surrounded by rolling green fields.',
    price: 85
  }
];

const insert = db.prepare(
  'INSERT INTO listings (image, alt_text, title, description, price) VALUES (?, ?, ?, ?, ?)'
);

listings.forEach(l => {
  insert.run(l.image, l.alt_text, l.title, l.description, l.price);
});

console.log(`Seeded ${listings.length} listings!`);