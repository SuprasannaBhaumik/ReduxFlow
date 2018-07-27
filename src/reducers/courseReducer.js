//courseReducer will take the initial state and return new state.
//Initial state is set to empty array.
//On subsequent calls to the same reducer, the state will be populated will previous values.
//This is the new ES6 syntax for that : state = [] .
//Used spread operator so that old state is copied into the new state.
import React from 'react';
import InitialState from './initialState';

export default function courseReducer(state = InitialState.courses, action){
	switch(action.type){
		case 'CREATE_COURSE':
			//state =  [...state, course: action.course];
			return [...state,
				Object.assign({}, action.course)
			];
		case 'LOAD_COURSES_SUCCESS':
			return action.courses;
		default:
			return state;
	}
	
}

 