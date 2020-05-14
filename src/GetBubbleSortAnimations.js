export function bubbleSortAnimations(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      const animation = {compare: [], swap: false };
      animation.compare = [i, j];
      animation.swap = false;
      if (array[i] < array[j]) {
        animation.swap = true;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      animations.push(animation);
    }
  }
  return animations;
}


// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] < array[j]) {
//       console.log(i + " " + j + " swapped")
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//       swap = [i, j];
//       animations.push(swap);
//     }
//     else
//     console.log(i + " " + j + " compared but not swapped")
//   }
// }
// return animations;
// }
