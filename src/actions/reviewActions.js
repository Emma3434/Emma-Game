import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function postingComment(comment){
    return {
        type: actionTypes.POST_COMMENT,
        comment: comment
    }
}

export function submitComment(comment){
    const env = runtimeEnv();

    // Chop the body up to pieces for saving
	var formBody = [];
	for(var property in comment)
	{
		var encodedKey = encodeURIComponent(property);
		var encodedValue = encodeURIComponent(comment[property]);
		formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");

	// Post the content in the body from comment post method
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/comment`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': localStorage.getItem('token')
            },
			body: formBody,
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(postingComment(res));
            })
            .catch( (e) => console.log(e) );
    }
}