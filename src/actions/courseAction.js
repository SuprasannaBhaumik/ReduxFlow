import courseApi from '../api/mockCourseApi';


//vanilla redux here returning an action object with the type and payload
export function createCourse(course) {
	return { 
		type:'CREATE_COURSE', 
		course : course
	};
}

function loadCoursesSuccess(courses) {
	return {
		type : 'LOAD_COURSES_SUCCESS',
		courses
	};
}

//thunk always returns a function instead of the action object as in vanilla redux.
//Action object is returned only via a dispatch call, when the preceding async call completes.
//so in thunk we only dispatch when we get the data
export function loadCourses(){
	return function (dispatch){ 
		//body of the thunk begins
		return courseApi.getAllCourses().then( courses => {
			dispatch({type : 'LOAD_COURSES_SUCCESS',courses});
		}).catch( error => {
			throw(error);
		});
	};
}

export function saveCourse(course){
	return (dispatch, getState) => {
		return courseApi.saveCourse(course).then( savedCourse => {
			//in case this is a new course it won't have the id
			course.id ? dispatch({type:'UPDATE_COURSE_SUCCESS', savedCourse}): dispatch(createCourse(savedCourse));
		}).catch(error => {
			throw(error);
		});
	};
}