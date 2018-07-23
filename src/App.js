import React, {PropTypes, Component } from 'react';
import Header from './components/common/header';

class App extends Component {
	render(){
		return(
			<div className="container-fluid">
				<Header />
				{this.props.children}
			</div>	
		);
	}
}

App.propTypes = {
	children : PropTypes.object.isRequired
};

export default App;