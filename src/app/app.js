import React from 'react';
import ControlPane from './control-pane';
import Board from './board';
import {insertionSort}  from '../algorithm/insertion-sort.js'
import {selectionSort} from '../algorithm/selection-sort.js'
import {bubbleSort} from '../algorithm/bubble-sort.js'
import {mergeSort} from '../algorithm/merge-sort.js'
import {quickSort} from '../algorithm/quick-sort.js'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.maxNum = 200;
		this.sizeRange = {
			min: 10,
			max: 200,
		};
		this.speedRange ={
			min: 1,
			max: 10,
		};

		const array = Array.from({length: 10}, () => Math.floor(Math.random() * this.maxNum));
		this.state = {
			count: 0,
			history: [{array: array, status: 'none', index: []}],
			algorithm: '',
			isVisualizationOn: false,
			arraySize: 10,
			speed: 5,
			array: array,
		};
    this.handleReset = this.handleReset.bind(this);
		this.handleRestore = this.handleRestore.bind(this);
		this.handleAlgorithmChange = this.handleAlgorithmChange.bind(this);
		this.handleVisiualization = this.handleVisiualization.bind(this);
		this.handleRandomArray = this.handleRandomArray.bind(this);
		this.handleSizeChange = this.handleSizeChange.bind(this);
		this.handleSpeedChange = this.handleSpeedChange.bind(this);
	}

  handleReset() {
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * this.maxNum));
    this.setState({
      count: 0,
			history: [{array: array, status: 'none', index: null}],
			algorithm: '',
			isVisualizationOn: false,
			arraySize: 10,
			speed: 5,
			array: array,
    })
  }

	handleRestore() {
		this.setState({
			count: 0,
			history: [this.state.history[0]],
			array: this.state.history[0].array,
			isVisualizationOn: false,
		})
	}

	handleAlgorithmChange(algorithm) {
		this.setState({
      count: 0,
      history: [{array: this.state.array, status: 'none', index: null}],
			algorithm: algorithm,
		})
	}

	handleVisiualization() {
		if (this.state.algorithm === '') {
			return;
		}
		const array = this.state.array.slice();
    const new_history = (() => {
      switch (this.state.algorithm) {
				case "insertion sort":
					return insertionSort(array);
				case "selection sort":
					return selectionSort(array);
				case "bubble sort":
					return bubbleSort(array);
        case "merge sort":
          return mergeSort(array);
        case "quick sort":
          return quickSort(array);
        default:
          throw new Error("Algorithm not found: " + this.state.algorithm);
      }
    })();
    const history = this.state.history.concat(new_history);


		const id = setInterval(() => {
			const count = this.state.count;
      document.getElementsByTagName('html')[0].style['pointer-events'] = 'none';
			if (count >= history.length - 2) {
				clearInterval(id);
        document.getElementsByTagName('html')[0].style['pointer-events'] = 'auto';
			}
			this.setState({
				count: count + 1,
				history: history,
				isVisualizationOn: true,
				array: history[count].array,
			});
		}, 10 / this.state.speed * 10);
	}

	handleRandomArray() {
		const array = Array.from({length: this.state.arraySize}, () => Math.floor(Math.random() * this.maxNum) + 1);
		this.setState({
			count: 0,
			array: array,
			history: [{array: array, status: 'none', index: []}],
		});
	}

	handleSizeChange(event) {
		const size = event.target.value;
		const array = Array.from({length: size}, () => Math.floor(Math.random() * this.maxNum) + 1);
		this.setState({
      count: 0,
			history: [{array: array, status: 'none', index: []}],
			array: array,
			arraySize: size,
		});
	}

	handleSpeedChange(event) {
		this.setState({
			speed: event.target.value,
		})
	}

	render() {
		return (
			<div>
				<ControlPane
          onReset={this.handleReset}
					onAlgorithmChange={this.handleAlgorithmChange}
					onVisiualizationStart={this.handleVisiualization}
					onArrayChange={this.handleRandomArray}
					onSizeChange={this.handleSizeChange}
					onSpeedChange={this.handleSpeedChange}
					algorithm={this.state.algorithm}
					sizeValue={this.state.arraySize}
					sizeRange={this.sizeRange}
					speedValue={this.state.speed}
					speedRange={this.speedRange}
				/>

				<Board
					history={this.state.history[this.state.count]}
					maxNum={this.maxNum}
					onRestore={this.handleRestore}
				/>
			</div>
		);
	}
}

export default App;
