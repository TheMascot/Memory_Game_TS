export function checkForSameCards(input: string[], searchMode: number) {
  if (searchMode === 2) {
    return input[0] === input[1];
  }
  if (searchMode === 3) {
    return input[0] === input[1] && input[1] === input[2];
  }
}
