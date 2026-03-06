const db = require('./database');

// Clear existing data
db.prepare('DELETE FROM listing_images').run();
db.prepare('DELETE FROM listings').run();
db.exec(`DELETE FROM sqlite_sequence WHERE name='listings'`);
db.exec(`DELETE FROM sqlite_sequence WHERE name='listing_images'`);

const listings = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    alt_text: 'Cozy cabin exterior',
    title: 'Cozy Cabin in the Woods',
    description: 'A peaceful retreat surrounded by nature.',
    address: '142 Pine Ridge Rd, Asheville, NC 28801',
    price: 120,
    images: [
      { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', alt_text: 'Cabin exterior' },
      { image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800', alt_text: 'Forest surroundings' },
      { image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800', alt_text: 'Cozy interior' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
    alt_text: 'Beach house',
    title: 'Beachfront Paradise',
    description: 'Wake up to stunning ocean views every morning.',
    address: '7 Ocean Drive, Malibu, CA 90265',
    price: 250,
    images: [
      { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', alt_text: 'Beach shoreline' },
      { image: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800', alt_text: 'Ocean view' },
      { image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800', alt_text: 'Beach deck' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600',
    alt_text: 'City apartment',
    title: 'Modern City Apartment',
    description: 'Right in the heart of downtown, walk to everything.',
    address: '350 5th Ave, New York, NY 10118',
    price: 95,
    images: [
      { image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800', alt_text: 'Living room' },
      { image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800', alt_text: 'City view' },
      { image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800', alt_text: 'Kitchen' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600',
    alt_text: 'Luxury villa',
    title: 'Luxury Villa with Pool',
    description: 'A stunning villa with a private pool and ocean views.',
    address: '18 Sunset Blvd, Santorini, Greece 84700',
    price: 450,
    images: [
      { image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800', alt_text: 'Villa pool' },
      { image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800', alt_text: 'Villa exterior' },
      { image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800', alt_text: 'Villa interior' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
    alt_text: 'Mountain retreat',
    title: 'Mountain Retreat',
    description: 'Escape to the mountains and enjoy breathtaking scenery.',
    address: '55 Alpine Way, Breckenridge, CO 80424',
    price: 180,
    images: [
      { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', alt_text: 'Mountain peaks' },
      { image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800', alt_text: 'Mountain lake' },
      { image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800', alt_text: 'Mountain cabin' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600',
    alt_text: 'Loft apartment',
    title: 'Stylish Loft Apartment',
    description: 'Trendy open-plan loft in a vibrant neighbourhood.',
    address: '88 Brick Lane, London, E1 6RL, UK',
    price: 110,
    images: [
      { image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', alt_text: 'Loft living area' },
      { image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800', alt_text: 'Loft bedroom' },
      { image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800', alt_text: 'Loft kitchen' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600',
    alt_text: 'Beachside bungalow',
    title: 'Beachside Bungalow',
    description: 'Steps from the sand with a hammock and sea breeze.',
    address: '21 Beachcomber Lane, Byron Bay, NSW 2481, Australia',
    price: 200,
    images: [
      { image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800', alt_text: 'Bungalow exterior' },
      { image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800', alt_text: 'Aerial beach view' },
      { image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800', alt_text: 'Bungalow interior' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600',
    alt_text: 'Countryside farmhouse',
    title: 'Countryside Farmhouse',
    description: 'A charming farmhouse surrounded by rolling green fields.',
    address: '3 Meadow View Farm, Cotswolds, GL54 2JN, UK',
    price: 85,
    images: [
      { image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800', alt_text: 'Farmhouse exterior' },
      { image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800', alt_text: 'Farmhouse fields' },
      { image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800', alt_text: 'Countryside view' },
    ]
  }
];

const insertListing = db.prepare(
  'INSERT INTO listings (image, alt_text, title, description, address, price) VALUES (?, ?, ?, ?, ?, ?)'
);
const insertImage = db.prepare(
  'INSERT INTO listing_images (listing_id, image, alt_text) VALUES (?, ?, ?)'
);

listings.forEach(l => {
  const result = insertListing.run(l.image, l.alt_text, l.title, l.description, l.address, l.price);
  const listingId = result.lastInsertRowid;
  l.images.forEach(img => {
    insertImage.run(listingId, img.image, img.alt_text);
  });
});

console.log(`Seeded ${listings.length} listings with ${listings.length * 3} images!`);