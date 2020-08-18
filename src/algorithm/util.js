export function swap(array, first_index, second_index, history) {
  const tmp = array[first_index];
  array[first_index] = array[second_index];
  array[second_index] = tmp;
  history.push({
    array: array.slice(),
    status: 'swap',
    index: [first_index, second_index]
  })
}
