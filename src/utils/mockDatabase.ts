const images = import.meta.glob('/src/assets/Pictures/*.jpg');
export const cardBackImage = '/src/assets/Pictures/card_back_400.avif';
export const imageSourceArray: string[] = Array.from(Object.keys(images));
export const imageNames: string[] = [
  'hot_ballons',
  'smile!',
  'pumpkins',
  'river_and_hill',
  'dandelion',
  'tower',
  'window',
  'street',
  'buddha',
  'boat',
  'flower',
  'mushroom',
  'butterfly',
  'peanuts',
  'snail',
  'zen_rocks',
  'escalator',
  'wooden_heart',
];
