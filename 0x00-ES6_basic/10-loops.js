export default function appendToEachArrayValue(array, appendString) {
  const UpdatedArray = [];
  for (const value of array) {
    UpdatedArray.push(appendString + value);
  }
  return UpdatedArray;
}
