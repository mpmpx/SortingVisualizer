export function bubbleSort(array) {
  const arr = array.slice();
  let history = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      history.push({array: array.slice(), status: 'compare', index: [j , j + 1]});
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1, history);
      }
    }
  }
  history.push({array: arr.slice(), status: 'none', index: null});
  return history;
}

function swap(array, first_index, second_index, history) {
  const tmp = array[first_index];
  array[first_index] = array[second_index];
  array[second_index] = tmp;
  history.push({
    array: array.slice(),
    status: 'swap',
    index: [first_index, second_index]
  })
}
