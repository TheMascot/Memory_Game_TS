export type ImageData = {
  key: number;
  id: number;
  src: string;
  name: string;
  found: boolean;
  clicked: boolean;
}[];

export function imageDataGenerator(names: string[], source: string[]) {
  const generatedData: ImageData = [];
  for (let i = 0; i < names.length; i++) {
    generatedData.push({
      key: Number(i + Math.random()),
      id: i + 1,
      src: source[i],
      name: names[i],
      found: false,
      clicked: false,
    });
  }
  return generatedData;
}
