export function shuffle(oldArray) {
  const newArray = [];
  while (oldArray.length > 0) {
    const index = Math.floor(Math.random() * oldArray.length);
    newArray.push(oldArray[index]);
    oldArray.splice(index, 1);
  }
  return newArray;
}
