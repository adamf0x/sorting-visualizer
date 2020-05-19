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

//qsanimations has to be initilized globally as to allow the partition function to add animations to it 
var qsanimations = [];
export function getQuicksortAnimations(array, left, right){
  //make sure the qs animations array is empty before calling the quicksortanimations function
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
  var pivot = items[Math.floor((right + left) / 2)], //the partition is the middle element of the array
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

var mergeanimations = [];
export function getMergesortAnimations(array){
  mergeanimations = [];
  mergeSort(array,array.slice(), 0, array.length-1);
  console.log(mergeanimations)
  return mergeanimations;
}

// Sort array arr [low..high] using auxiliary array aux
function mergeSort(arr, aux, low, high)
{
  // Base case
  if (high === low) {	// if run size == 1
    return arr;
  }

  // find mid point
  var mid = Math.floor(low+(high-low)/2);

  // recursively split runs into two halves until run size == 1,
  // then merge them and return back up the call chain

  mergeSort(arr, aux, low, mid);	  // split / merge left  half
  mergeSort(arr, aux, mid + 1, high); // split / merge right half
  merge(arr, aux, low, mid, high);	// merge the two half runs
}

// Merge two sorted sub-arrays arr[low .. mid] and arr[mid + 1 .. high]
function merge(arr, aux, low, mid, high)
{
  var loop = [];
  var k = low, i = low, j = mid + 1;
  // While there are elements in the left and right runs
  while (i <= mid && j <= high)
  {
    if (arr[i] <= arr[j]) {
      loop = [i, j];
      mergeanimations.push(loop);
      mergeanimations.push(loop);
      aux[k++] = arr[i++];
      mergeanimations.push([i, aux[k], 1])
    }
    else {
      loop = [i, j];
      mergeanimations.push(loop);
      mergeanimations.push(loop);
      mergeanimations.push([j, aux[k], 1])
      aux[k++] = arr[j++];
    }
  }

  // Copy remaining elements
  while (i <= mid) {
    aux[k++] = arr[i++];
  }
  // No need to copy the second half

  // copy back to the original array to reflect sorted order
  for (i = low; i <= high; i++) {
    arr[i] = aux[i];
  }
}
