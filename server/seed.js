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
    full_description: `Nestled deep in the Blue Ridge Mountains, this handcrafted log cabin offers the ultimate escape from city life. Enjoy evenings by the wood-burning fireplace, mornings on the wraparound porch with a cup of coffee, and stargazing nights unlike anything you've experienced. The cabin sleeps up to 6 guests and features a fully equipped kitchen, two cozy bedrooms, and a loft. Hiking trails, waterfalls, and the vibrant downtown Asheville arts scene are all within easy reach.`,
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
    full_description: 'This stunning Malibu beachfront home sits right on the sand with direct Pacific Ocean access. Floor-to-ceiling windows frame breathtaking sunrise and sunset views from every room. The open-plan living area flows onto a spacious deck perfect for dining al fresco, and the gourmet kitchen is stocked for the most discerning chef. With three bedrooms, two and a half bathrooms, and a private outdoor shower, this is Malibu living at its finest. Surf, paddleboard, or simply unwind to the sound of waves.',
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
    full_description: `Experience the energy of New York City from this sleek, modern apartment steps away from the Empire State Building. The thoughtfully designed space features high ceilings, polished concrete floors, and designer furnishings. A fully equipped kitchen, high-speed Wi-Fi, and a smart TV make it ideal for both work and leisure. You'll be within walking distance of iconic landmarks, world-class restaurants, Broadway shows, and the best shopping in the world. Subway access is right around the corner for easy exploration of all five boroughs.`,
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
    full_description: `Perched on the iconic caldera cliffs of Santorini, this whitewashed luxury villa is the definition of Aegean elegance. The infinity pool merges seamlessly with the deep blue of the sea below, creating a view that must be seen to be believed. Inside, you'll find four beautifully appointed bedrooms, a fully equipped kitchen, and an expansive living area adorned with local art and handcrafted furniture. Private butler service, a dedicated chef available upon request, and a rooftop terrace for watching the legendary Santorini sunsets make this an unforgettable escape.`,
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
    full_description: `This alpine retreat sits at 9,600 feet in the heart of the Colorado Rockies, offering unrivaled access to world-class skiing at Breckenridge Ski Resort just minutes away. In summer, the same slopes transform into a hiker's paradise with wildflower meadows and crystal-clear mountain lakes. The chalet-style home features a hot tub on the back deck, a vaulted great room with panoramic mountain views, and a cozy fireplace for après-ski evenings. Sleeps up to 8 guests with 4 bedrooms and a game room — perfect for family trips or group getaways.`,
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
    full_description: `Set in a converted Victorian warehouse on iconic Brick Lane, this architect-designed loft is a masterclass in industrial chic. Exposed brick walls, steel beams, and oversized factory windows flood the space with natural light and character. The open-plan layout features a bespoke kitchen, a dining area perfect for entertaining, and a mezzanine bedroom with a luxurious king bed. Step outside and you're surrounded by London's best street food, vintage markets, art galleries, and bars. Shoreditch, Spitalfields, and the City are all a short walk away.`,
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
    full_description: `This laid-back beachside bungalow captures the quintessential Byron Bay spirit — barefoot, breezy, and blissfully beautiful. Literally steps from the sand, you'll fall asleep to the sound of waves and wake to golden morning light streaming through louvered windows. The bungalow features two bedrooms, an outdoor kitchen built for long lazy lunches, a hammock strung between two palms, and an outdoor shower to rinse off after a surf. Dolphins and whales are regular visitors to this stretch of coastline, and the famous Byron Bay lighthouse is a short coastal walk away.`,
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
    full_description: `This picture-perfect Cotswolds farmhouse dates back to the 17th century and has been lovingly restored to blend original stone features with modern comforts. Set amidst rolling honey-coloured hills and wildflower meadows, it's the ideal retreat for those seeking true peace and quiet. The home features three bedrooms, a farmhouse kitchen with an Aga, a cosy sitting room with inglenook fireplace, and a walled cottage garden. Explore charming nearby villages like Bourton-on-the-Water and Chipping Campden, or simply sit back and watch the sheep graze across the valley.`,
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
  'INSERT INTO listings (image, alt_text, title, description, full_description, address, price) VALUES (?, ?, ?, ?, ?, ?, ?)'
);
const insertImage = db.prepare(
  'INSERT INTO listing_images (listing_id, image, alt_text) VALUES (?, ?, ?)'
);

listings.forEach(l => {
  const result = insertListing.run(l.image, l.alt_text, l.title, l.description, l.full_description, l.address, l.price);
  const listingId = result.lastInsertRowid;
  l.images.forEach(img => {
    insertImage.run(listingId, img.image, img.alt_text);
  });
});

console.log(`Seeded ${listings.length} listings with ${listings.length * 3} images!`);