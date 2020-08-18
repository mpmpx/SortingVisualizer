import {swap} from './util.js';

export function insertionSort(array) {
  const arr = array.slice();
  let history = [];
  let i = 1;
  while (i < arr.length) {
    let j = i;
    history.push({array: arr.slice(), status: 'compare', index: [j, j - 1]});
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1, history);
      j--;
    }
    i++
  }
  history.push({array: arr.slice(), status: 'none', index: null});
  return history;
}
