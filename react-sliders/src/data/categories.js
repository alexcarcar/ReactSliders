// categories.js
const ITEM_COUNT = 25; // Change this number to control how many items per category

const imagePool = ['generic.jpg', 'midnight.jpg', 'comedy1.jpg', 'comedy2.jpg'];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imagePool.length);
  return `/images/${imagePool[randomIndex]}`;
}

function generateItems(prefix) {
  return Array.from({ length: ITEM_COUNT }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${prefix.replace(/^\w/, c => c.toUpperCase())} Movie ${i + 1}`,
    image: getRandomImage(),
    description: `Description for ${prefix} movie ${i + 1}`,
    genre: ['Drama', 'Comedy', 'Action', 'Sci-Fi'][i % 4],
    year: 2020 + (i % 6),
  }));
}

const categories = [
  { title: 'Trending Now', items: generateItems('trending') },
  { title: 'Top Picks for You', items: generateItems('top') },
  { title: 'New Releases', items: generateItems('new') },
  { title: 'Award Winners', items: generateItems('award') },
  { title: 'Family Favorites', items: generateItems('family') },
  { title: 'Action Packed', items: generateItems('action') },
];

export default categories;
