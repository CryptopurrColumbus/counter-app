import React, { Component } from 'react';
class Counter extends Component {
	state = {
        count: 0,
        // the url gets a 200*200 photo randomly
        imgUrl: "https://picsum.photos/200",
        altText: "Randomly selected picture"
	};

	render() {
		return (
			<React.Fragment>
                <img src={this.state.imgUrl} alt={this.state.altText} />
				<span>{this.formatCount()}</span>
				<button>Increment</button>
			</React.Fragment>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;
