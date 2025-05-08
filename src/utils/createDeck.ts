import { imageDataGenerator } from './imageDataGenerator';
import { imageNames, imageSourceArray } from './mockDatabase';
import { ImageData } from './imageDataGenerator';
import { shuffleArray } from './shuffleArray';

export function createDeck(searchFor: number, cardsNum: number) {
  const images = imageDataGenerator(imageNames, imageSourceArray);
  const shuffledImages = [];
  for (let i = 0; i < cardsNum; i++) {
    const random = Math.floor(Math.random() * images.length);
    shuffledImages.push(images[random]);
    images.splice(random, 1);
  }
  let createMoreImages: ImageData = [];

  //Creating deck for pairs

  const maxNumOfImages = imageNames.length;

  if (searchFor === 2) {
    createMoreImages = shuffledImages.flatMap((img) => {
      return [{ ...img }, { ...img, id: img.id + maxNumOfImages, key: img.key + maxNumOfImages }];
    });
  }

  //Creating deck for trios

  if (searchFor === 3) {
    createMoreImages = shuffledImages.flatMap((img) => {
      return [
        { ...img },
        { ...img, id: img.id + maxNumOfImages, key: img.key + maxNumOfImages },
        { ...img, id: img.id + maxNumOfImages * 2, key: img.key + maxNumOfImages * 2 },
      ];
    });
  }

  const finalImages = shuffleArray(createMoreImages);

  // Need to randomize images before returning TODO

  return finalImages;
}
