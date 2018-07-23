import { combineReducers } from 'redux';
import courses from './courseReducer';
//short hand property name
const rootReducer = combineReducers({
	courses}); //short hand 

export default rootReducer;