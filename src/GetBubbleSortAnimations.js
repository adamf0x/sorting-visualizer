export function bubbleSortAnimations(array) {
  const animations = [];
  var {compare, swap} = [];

  for (let i = 1; i <= array.length; i++) {
    for (let j = 0; j < i; j++) {
      compare = [i,j]
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        swap = [i, j];
        animations.push(swap);
      }
    }
  }
  return animations;
}
