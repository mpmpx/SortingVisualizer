export function quickSort(array) {
  const arr = array.slice();
  console.log(arr.slice().join(', ') + " before");
  let history = [];
  quickSortHelper(arr, 0, arr.length - 1, history);
  history.push({array: arr.slice(), status: 'none', index: null});
  console.log(arr.slice().join(', '));
  return history;
}

function quickSortHelper(array, l, r, history) {
  //console.log(array.slice().join(', '));
  if (array.length > 1) {
    const pivot = partition(array, l, r, history);
    if (left < pivot - 1) {
      quickSortHelper(array, l, pivot - 1, history);
    }
    if (pivot < right) {
      quickSortHelper(array, pivot, r, history);
    }
  }
}

function partition(array, left, right, history) {
  const pivot = Math.floor((right + left) / 2);
  let i = left;
  let j = right - 1;
  while (i <= j) {
    while (array[i] < array[pivot]) {
      history.push({array: array.slice(), status: 'compare', index: [i , pivot]});
      i++;
    }
    while (array[j] > array[pivot]) {
      history.push({array: array.slice(), status: 'compare', index: [j , pivot]});
      j--;
    }

    if (i <= j) {
      swap(array, i, j, history);
      i++;
      j--
    }
  }

  swap(array, j, pivot, history);
  return i;
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
