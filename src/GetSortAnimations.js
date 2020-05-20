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
export function getQuicksortAnimations(array, left, right) {
  //make sure the qs animations array is empty before calling the quicksortanimations function
  qsanimations = [];
  quickSortAnimations(array, left, right);
  return qsanimations;
}
export function quickSortAnimations(array, left, right) {
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
    compare = [i, j];
    //the aray containing the indexes of the two bars being compared is added to the animations twice to execute the animations similar to bubble sort
    qsanimations.push(compare);
    qsanimations.push(compare);
    qsanimations.push(pivotindex);
    while (items[i] < pivot) {
      //for items smaller than the pivot element increment the left index
      i++;
      compare = [i, j];
      qsanimations.push(compare);
      qsanimations.push(compare);
      qsanimations.push(pivotindex);
    }
    while (items[j] > pivot) {
      //for items larger than the pivot element decrement the right index
      j--;
      compare = [i, j];
      qsanimations.push(compare);
      qsanimations.push(compare);
      qsanimations.push(pivotindex);
    }
    var swaps = [];
    //if i is smaller than j and the loop is running swap the two elements
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      swaps = [i, j, 1];
      i++;
      j--;
    }
    //push to two elements to be swapped into the list quicksort animations array
    qsanimations.push(swaps);
    qsanimations.push(pivotindex);
  }
  return i;
}

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}


// Sort array arr [low..high] using auxiliary array aux
function mergeSort(array, low, high, aux, animations) {
  // Base case
  if (low === high) {
    return;
  }
  const middle = Math.floor((low+high)/2);
  //call mergesort then merge each half of the array
  mergeSort(aux, low, middle, array, animations);
  mergeSort(aux, middle+1, high, array, animations);
  merge(array, low, middle, high, aux, animations);
}

// Merge two sorted sub-arrays arr[low .. mid] and arr[mid + 1 .. high]
function merge(array, low, mid, high, aux, animations) {
  //initialize three monitor variables to keep track of where you are in auxiliary array and main array
  let k = low;
  let i = low; 
  let j = mid+1;
  while(i <= mid && j <= high){
    //push indexes to animate twice to achieve same effect as in other algorithms 
    animations.push([i,j]);
    animations.push([i,j]);
    //if the lower index is less than the higher index put the element at the lower index into the original array from the auxiliary array first
    if(aux[i] <= aux[j]){
      animations.push([k,aux[i],1])
      array[k++] = aux[i++];
    }else{
      //otherwise put the element at the higher index in first
      animations.push([k,aux[j],1])
      array[k++] = aux[j++];
    }
  }
  while(i <= mid){
    //copy in the remaining elements from the aux array into the remining array (first half)
    animations.push([i,i]);
    animations.push([i,i]);
    animations.push([k, aux[i],1]);
    array[k++] = aux[i++];
  }
   //copy in the remaining elements from the aux array into the remining array (second half)
  while(j <= high){
    animations.push([j,j]);
    animations.push([j,j]);
    animations.push([k, aux[j],1]);
    array[k++] = aux[j++];
  }
}

