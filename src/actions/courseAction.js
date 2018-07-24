import courseApi from '../api/mockCourseApi';

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

//thunk always returns a function that receives a dispatch
export function loadCourses(){
	return function (dispatch){ 
		//body of the thunk begins
		return courseApi.getAllCourses().then( courses => {
			dispatch(loadCoursesSuccess(courses));
		}).catch( error => {
			throw(error);
		});
	};
}