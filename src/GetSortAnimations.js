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

var qsanimations = [];

export function getQuicksortAnimations(array, left, right){
  qsanimations = [];
  quickSortAnimations(array, left, right);
  return qsanimations;
}


export function quickSortAnimations(array, left, right){
  var index;
  if (array.length > 1) {
    index = partition(array, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSortAnimations(array, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSortAnimations(array, index, right);
    }
  }
  return array;
}


function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
  
}

function partition(items, left, right) {
  var compare = [];
  var pivotindex;
  var pivot = items[Math.floor((right + left) / 2)], //middle element
  i = left, //left pointer
  j = right; //right pointer
  pivotindex = items.indexOf(pivot);
  while (i <= j) {
    //if the left index is larger than the right index return the new partition and execute quicksort with the new partition
    compare = [i,j];
    //the aray containing the indexes of the two bars being compared is added to the animations twice to execute the animations similar to bubble sort
    qsanimations.push(compare);
    qsanimations.push(compare);
    qsanimations.push(pivotindex);
    while (items[i] < pivot) {
      //for items smaller than the pivot element increment the left index
      i++;
      compare = [i,j];
      qsanimations.push(compare);
      qsanimations.push(compare);
      qsanimations.push(pivotindex);
    }
    while (items[j] > pivot) {
      //for items larger than the pivot element decrement the right index
      j--;
      compare = [i,j];
      qsanimations.push(compare);
      qsanimations.push(compare);
      qsanimations.push(pivotindex);
    }
    var swaps = [];
    //if i is smaller than j and the loop is running swap the two elements
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      swaps = [i,j, 1]
      i++;
      j--;
    }
    //push to two elements to be swapped into the list quicksort animations array
    qsanimations.push(swaps);
    qsanimations.push(pivotindex);
  }
  return i;
}