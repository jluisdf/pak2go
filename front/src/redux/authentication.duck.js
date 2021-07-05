import { Request } from '../api/request';
import { setError, hideError } from './notification.duck'

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

let isToken = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
const initialStateLoggedIn = isToken ? true : false;

export default function reducer(state = initialStateLoggedIn, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return true;
        case LOGOUT_SUCCESS:
            return false;
        default:
            return state
    }
}

export let login = data => async (dispatch, getState) => {
    return Request.post(`/auth/login`, data)
        .then(response => {
            localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, response.data.access_token);
            dispatch({ type: LOGIN_SUCCESS })
        })
        .catch(error => {
            console.log(error, error.response)
        })
}

export let logout = () => async (dispatch, getState) => {
    dispatch({ type: LOGOUT_SUCCESS })
    localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
}
