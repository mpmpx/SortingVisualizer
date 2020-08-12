import React from 'react';

class Board extends React.Component {
	render() {
		const array = this.props.array;
		const status = this.props.history.status;
		const indexList = this.props.history.index;

		return (
			<div className='board'>
				{
					array.map ( (value, index) => {
						const height = value / this.props.maxNum * 100;
						const width = Math.floor(window.innerWidth * 0.5 / array.length);
						const style = {
							height: height + "%",
							top: 100 - height + "%",
							width: width + "px",
						}
						const className = (() => {
							if (indexList == null) {
								return "bar";
							}
							if (indexList.includes(index)) {
								if (status === "swap") {
									return "bar-swap";
								}
								else if (status === "compare") {
									return "bar-compare";
								}
							}
							return "bar";
						})();
						return (
							<div className={className} style={style}></div>
						)
					})
				}
			</div>
		);
	}
}

export default Board;
