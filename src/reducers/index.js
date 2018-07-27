import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
//short hand property name
const rootReducer = combineReducers({
	courses, authors}); //short hand 

export default rootReducer;