import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function discussionsFetched(discussions){
    return {
        type: actionTypes.FETCH_DISSCUSSIONS,
        discussions: discussions
    }
}

function discussionFetched(discussion){
    return {
        type: actionTypes.FETCH_DICUSSION,
        selectedDiscussion: discussion
    }
}

function discussionSet(discussion){
    return {
        type: actionTypes.SET_DISCUSSION,
        selectedDiscussion: discussion
    }
}

export function setDiscussion(discussion) {
    return dispatch => {
        dispatch(discussionSet(discussion));
    }
}

export function fetchDiscussion(){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/discussions`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(discussionFetched(res));
            })
            .catch( (e) => console.log(e) );
    }
}

export function fetchDiscussion(DiscussionId){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/discussions/${DiscussionId}?reviews=true`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(discussionFetched(res));
            })
            .catch( (e) => console.log(e) );
    }
}