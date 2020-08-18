import {swap} from './util.js';

export function selectionSort(array) {
  const arr = array.slice();
  let history = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let j_min = i;
    for (let j = i + 1; j < arr.length; j++) {
      history.push({array: arr.slice(), status: 'compare', index: [j, j_min]});
      if (arr[j] < arr[j_min]) {
        j_min = j;
      }
    }
    if (j_min != i) {
      swap(arr, i, j_min, history);
    }
  }

  history.push({array: arr.slice(), status: 'none', index: null});
  return history;
}
