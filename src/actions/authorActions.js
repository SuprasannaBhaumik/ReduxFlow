

import AuthorApi from '../api/mockAuthorApi.js';


export function loadAuthors(){
	return dispatch => {
		return AuthorApi.getAllAuthors().then(authors => {
			dispatch({type:'LOAD_AUTHORS_SUCCESS', authors});
		}).catch(error=>{
			throw(error);
		});
	};
}
