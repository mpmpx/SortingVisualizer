import React from 'react';

class ControlPane extends React.Component {
	render() {
		const algorithm = this.props.algorithm;
		const visualizeInfo = algorithm === '' ?
			"Select a sorting algorithm!" :
			"Visualize " + algorithm + "!";

		return (
			<nav className='nav-main'>
        <div className='nav-header' onClick={this.props.onReset}>
          SortingVisualizer
        </div>
				<div className='nav-item'>
					<button className='nav-button' onClick={this.props.onArrayChange}>
						Random array
					</button>
				</div>
				<div className='dropdown nav-item'>
				  <button className='dropdown-button nav-button'>Algorithm</button>
				  <div className='dropdown-menu'>
						<a href="#" className='dropdown-item' onMouseDown={this.props.onAlgorithmChange.bind(this, "bubble sort")}>Bubble sort</a>
				    <a href="#" className='dropdown-item' onMouseDown={this.props.onAlgorithmChange.bind(this, "merge sort")}>Merge sort</a>
				    <a href="#" style={{display: 'none'}} className='dropdown-item' onMouseDown={this.props.onAlgorithmChange.bind(this, "quick sort")}>Quick sort</a>
				  </div>
				</div>
				<div className="nav-item">
					<button className="nav-button visualize-button" onClick={this.props.onVisiualizationStart}>{visualizeInfo}</button>
				</div>
				<div className='dropdown nav-item'>
					<button className='dropdown-button nav-button'>Array size</button>
					<div className='slidercontainer'>
						<input
							className='slider-item'
							type="range"
							max={this.props.sizeRange.max}
							min={this.props.sizeRange.min}
							value={this.props.sizeValue}
							onChange={this.props.onSizeChange}
						/>
						<div className='slider-item'>{this.props.sizeValue}</div>
					</div>
				</div>
				<div className='dropdown nav-item'>
					<button className='dropdown-button nav-button'>Speed</button>
					<div className='slidercontainer'>
						<input
							className='slider-item'
							type="range"
							max={this.props.speedRange.max}
							min={this.props.speedRange.min}
							value={this.props.speedValue}
							onChange={this.props.onSpeedChange}
						/>
						<div className='slider-item'>{this.props.speedValue}</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default ControlPane;
