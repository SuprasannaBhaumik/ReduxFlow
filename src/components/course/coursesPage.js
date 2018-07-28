import React, {Component, PropTypes} from 'react';
import * as actionCreator  from '../../actions/courseAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseList from './courseList';
import { browserHistory } from 'react-router';
class CoursesPage extends Component {

	constructor(props, context){
		super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	/*onClickSave_WithoutMapDispatchWithProps(){
		this.props.dispatch(actionCreator.createCourse(this.state.course));
	}

	onClickSave_WithMapDispatchWithProps(){
		this.props.cc(this.state.course);
	}

	onClickSave(){
		this.props.actions.createCourse(this.state.course);
	}

	courseRow(course , index){
		return (
			<div key={index}>
				{course.title}
			</div>
		);
	}*/

	redirectToAddCoursePage(){
		browserHistory.push('/course');
	}

	render(){
		//const {courses} = this.props;
		return(
			<div>
				<h1>Courses</h1>
				<input 
					type="submit"
					value="Add Course"
					className="btn btn-primary"
					onClick={this.redirectToAddCoursePage} />

				<CourseList courses={this.props.courses} />
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses : PropTypes.array.isRequired,
	//cc: PropTypes.func.isRequired
	actions : PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
	return {
		courses : state.courses
	};
}

function mapDispatchToProps(dispatch){
	return {
		//cc : course => dispatch(actionCreator.createCourse(course))
		actions : bindActionCreators(actionCreator, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);