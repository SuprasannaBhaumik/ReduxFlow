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
		this.saveCourseState = this.saveCourseState.bind(this);
	}

	updateCourseState(event){
		const field = event.target.name;
		let course = Object.assign({}, this.state.course);
		course[field]=event.target.value;
		return this.setState({course});
	}

	saveCourseState(event){
		event.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/courses');
	}

	//react runs it everytime it thinks the props have changed
	//but it also runs as a safety procedure because react may not know when the props have changed
	componentWillReceiveProps(nextProps){
		if(this.props.course.id != nextProps.course.id){
			this.setState({course: Object.assign({}, nextProps.course)});
		}
	}

	render() {

		return(
			<div>
				<h1>Manage Course</h1>
				<CourseForm 
					onSave = {this.saveCourseState}
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
	authors : PropTypes.array.isRequired,
	actions : PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
	router : PropTypes.object
}

function mapStateToProps(state, ownProps){

	let course = {
		id:'',
		watchHref:'',
		title:'',
		authorId:'',
		length:'',
		category:''
	};

	const courseId = ownProps.params.id;

	if(courseId && state.courses.length>0){
		course = getCourseById(state.courses, courseId);
	}

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

function getCourseById(courses, id) {
	const arrayWithMyCourse = courses.filter( course => course.id == id);
	if(arrayWithMyCourse.length>0){
		return arrayWithMyCourse[0];
	}
	return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
