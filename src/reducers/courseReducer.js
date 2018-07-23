//courseReducer will take the initial state and return new state.
//Initial state is set to empty array.
//On subsequent calls to the same reducer, the state will be populated will previous values.
//This is the new ES6 syntax for that : state = [] .
//Used spread operator so that old state is copied into the new state.
import React from 'react';


export default function courseReducer(state = [], action){
	switch(action.type){
		case 'CREATE_COURSE':
			//state =  [...state, course: action.course];
			return [...state,
				Object.assign({}, action.course)
			];
		/*case 'ONCHANGE_COURSE_NAME':
			state =  { ...state,  title:action.courseName};
			break;	*/
		default:
			return state;
	}
	
}

 