import {swap} from './util.js'

export function heapSort(array) {
  const arr = array.slice();
  let history = [];

  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i, history);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i, history);
    heapify(arr, i, 0, history);
  }

  history.push({array: arr.slice(), status: 'none', index: null});
  return history;
}

function heapify(array, size, root, history) {
  let largest = root;
  let l = 2 * root + 1;
  let r = 2 * root + 2;

  if (l < size && array[l] > array[largest]) {
    history.push({array: array.slice(), status: 'compare', index: [l, largest]});
    largest = l;
  }

  if (r < size && array[r] > array[largest]) {
    history.push({array: array.slice(), status: 'compare', index: [r, largest]});
    largest = r;
  }

  if (largest != root) {
    swap(array, root, largest, history);
    heapify(array, size, largest, history);
  }
}
