import {swap} from './util.js'

export function quickSort(array) {
  const arr = array.slice();
  let history = [];
  quickSortHelper(arr, 0, arr.length - 1, history);
  history.push({array: arr.slice(), status: 'none', index: null});
  return history;
}

function quickSortHelper(array, l, r, history) {
  if (l < r) {
    let pivot = partition(array, l, r, history);
    quickSortHelper(array, l, pivot - 1, history);
    quickSortHelper(array, pivot + 1, r, history);
  }
}

function partition(array, l, r, history) {
  let pivot = array[r];
  let i = l;
  for (let j = l; j < r; j++) {
    history.push({array: array.slice(), status: 'compare', index: [j, r]});
    if (array[j] < pivot) {
      swap(array, i, j, history);
      i++;
    }
  }
  swap(array, i, r, history);
  return i;
}
