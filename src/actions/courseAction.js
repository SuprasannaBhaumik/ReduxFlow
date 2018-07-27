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

//thunk always returns a function instead of noly the action object as in vanilla redux
//action object is returned only via a dispatch call, when the call succeeds
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