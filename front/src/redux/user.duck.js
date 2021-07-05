import { Request } from '../api/request';
import { setError, hideError } from './notification.duck'

// constantes
let initialData = {
    users: [],
    selected: null,
}


// types
let SET_USERS = "SET_USERS";
let SET_SELECTED = "SET_SELECTED";

// reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload }
        case SET_SELECTED:
            return { ...state, selected: action.payload }
        default:
            return state
    }
}


// actions (thunks)
export let getUsers = () => async (dispatch, getState) => {

    return Request.get(`/users`)
        .then(response => {
            dispatch({
                type: SET_USERS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error, error.response)

            let error2 = {
                message: 'Error al recuperar la info',
                type: 'error'
            }

            dispatch(setError(error2))
            /*dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: (err.response) ? err.response.message : 'Ha ocurrido un error, por favor inténtelo de nuevo más tarde'
            })*/
        })
}

export let registerUser = data => async (dispatch, getState) => {
    return Request.post(`/users`, data)
        .then(response => {
            if(response.status === 201){
                dispatch(getUsers());
            }
        })
        .catch(error => {
            console.log(error, error.response)
        })
}

export let updateUser = (id, data) => async (dispatch, getState) => {
    return Request.put(`/users/${id}`, data)
        .then(response => {
            if(response.status === 200){
                dispatch(getUsers());
            }
        })
        .catch(error => {
            console.log(error, error.response)
        })
}

export let deleteUser = id => async (dispatch, getState) => {
    return Request.delete(`/users/${id}`)
        .then(response => {
            if(response.status === 200){
                dispatch(getUsers());
            }
        })
        .catch(error => {
            console.log(error, error.response)
        })
}

export let setSelected = id => async (dispatch, getState) => {
    dispatch({
        type: SET_SELECTED,
        payload: id
    })
}
