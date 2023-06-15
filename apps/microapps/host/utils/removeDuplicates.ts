export function removeDuplicates<T>(
  originalArray: Array<T>,
  propertyName: string
) {
  const uniqueArray = [];
  const seenValues = new Set();

  for (let i = 0; i < originalArray.length; i++) {
    const currentItem = originalArray[i];
    const propertyValue = currentItem[propertyName];

    if (!seenValues.has(propertyValue)) {
      uniqueArray.push(currentItem);
      seenValues.add(propertyValue);
    }
  }

  return uniqueArray;
}
