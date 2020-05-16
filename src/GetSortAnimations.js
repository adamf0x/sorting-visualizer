export function bubbleSortAnimations(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      var compare = [i, j];
      var swap = [];
      if (array[i] < array[j]) {
        swap = [i, j];
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      //push one comparison to signify the change from one colour to another and another to signify the change back to the original colour
      animations.push(compare);
      animations.push(compare);
      //push the elemnts to swap if they exist
      animations.push(swap);
    }
  }
  return animations;
}


export function quickSortAnimations(array, lo, hi) {
  var index;
  if (array.length > 1) {
    index = partition(array, lo, hi); //index returned from partition
    console.log("index: " + index);
    console.log("lower: " + lo)
    console.log("higher: " + hi)
    if (lo < index - 1) {
      //more elements on the left side of the pivot
      quickSortAnimations(array, lo, index - 1);
    }
    if (index < hi) {
      //more elements on the right side of the pivot
      quickSortAnimations(array, index, hi);
    }
  }
  console.log(array);
  return array;
}

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
  i = left, //left pointer
  j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}