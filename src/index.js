import 'babel-polyfill';

import React from 'react';

import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { loadCourses } from './actions/courseAction';
import { loadAuthors } from './actions/authorActions';

const store = configureStore();//no initial state passed. as reducers are already doing that
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>	, 
	document.getElementById('app')
);

