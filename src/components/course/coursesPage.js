import React, {Component, PropTypes} from 'react';
import * as actionCreator  from '../../actions/courseAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CoursesPage extends Component {

	constructor(props, context){
		super(props, context);
		this.state = {
			course: {
				title:''
			}
		};
		this.onClickSave = this.onClickSave.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
	}

	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({
			course : course
		});
	}

	onClickSave_WithoutMapDispatchWithProps(){
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
	}

	render(){
		return(
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}

				<h2>Add Course</h2>
				<input 
					type="text"
					onChange={this.onTitleChange}
					value={this.props.courseTitle}
				/>
				<input 
					type="submit"
					onClick={this.onClickSave}
					value="Save"
				/>	

				Course page here
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