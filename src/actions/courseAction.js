/*const actions = () => {
	
	const createCourse = (course) => {
		return {
			type:'CREATE_COURSE',
			course
		};
	};

	const onTitleChange = (courseName) => {
		return {
			type:'ONCHANGE_COURSE_NAME',
			courseName
		};
	};

};

export default actions;*/

export function createCourse(course) {
	return { 
		type:'CREATE_COURSE', 
		course : course
	};
}