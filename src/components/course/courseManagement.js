import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './courseForm';

class ManageCoursePage extends Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			course : Object.assign({}, this.props.course),
			errors : {}
		};
		this.updateCourseState = this.updateCourseState.bind(this);
	}

	updateCourseState(event){
		const field = event.target.name;
		let course = Object.assign({}, this.state.course);
		course[field]=event.target.value;
		return this.setState({course});
	}

	render() {

		return(
			<div>
				<h1>Manage Course</h1>
				<CourseForm 
					onChange = {this.updateCourseState}
					allAuthors = {this.props.authors}
					course={this.state.course}
					errors={this.state.errors}/>
			</div>	
		);
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){

	let course = {
		id:'',
		watchHref:'',
		title:'',
		authorId:'',
		length:'',
		category:''
	};

	const authorDataFormatted = state.authors.map(author=>{
		return {
			value:author.id,
			text:author.firstName + ' ' + author.lastName
		};
	});

	return {
		course : course,
		authors : authorDataFormatted
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions : bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);