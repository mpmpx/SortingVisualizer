export function mergeSort(array) {
	const arr = array.slice();
	let history = [];
	mergeSortHelper(arr, 0, arr.length - 1, history);
	history.push({array: arr.slice(), status: 'none', index: null});
	return history;
}

function mergeSortHelper(array, l, r, history) {
	if (l < r) {
		const mid = Math.floor((l + r) / 2);
		mergeSortHelper(array, l, mid, history);
		mergeSortHelper(array, mid + 1, r, history);
		merge(array, l, mid, r, history);
	}
}

function merge(array, l, m, r, history) {
	const left = array.slice(l, m + 1);
	const right = array.slice(m + 1, r + 1);
	let i = 0;
	let j = 0;
	let k = 0;
	while (i < left.length && j < right.length) {
		history.push({array: array.slice(), status: 'compare', index: [l + i , m + 1 + j]});
		if (left[i] < right[j]) {
			array[l + k] = left[i];
			history.push({array: array.slice(), status: 'swap', index: [l + k]});
			i++
		}
		else {
			array[l + k] = right[j];
			history.push({array: array.slice(), status: 'swap', index: [l + k]});
			j++;
		}
		k++
	}

	while (i < left.length) {
		array[l + k] = left[i];
		history.push({array: array.slice(), status: 'swap', index: [l + k]});
		k++;
		i++;
	}

	while (j < right.length) {
		array[l + k] = right[j];
		history.push({array: array.slice(), status: 'swap', index: [l + k]});
		j++;
		k++
	}
}
