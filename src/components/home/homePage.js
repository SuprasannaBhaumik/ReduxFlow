import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {


	render() {
		return(
			<div className="">
				<h1>About ES6 and Redux</h1>
				<Link to="about">Learn More</Link>
			</div>
		);
	}
}

export default HomePage;
