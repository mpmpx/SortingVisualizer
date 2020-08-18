import {swap} from './util.js'

export function bubbleSort(array) {
  const arr = array.slice();
  let history = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      history.push({array: arr.slice(), status: 'compare', index: [j , j + 1]});
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1, history);
      }
    }
  }
  history.push({array: arr.slice(), status: 'none', index: null});
  return history;
}
