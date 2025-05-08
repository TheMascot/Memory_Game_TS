export function scoring(
  cardsNum: number,
  searchMode: number,
  foundCardNum: number,
  isItPositive: boolean
) {
  return isItPositive ? (cardsNum - foundCardNum) * searchMode : (foundCardNum * 2 || 1) * -1;
}
