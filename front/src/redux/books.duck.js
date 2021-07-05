import { Request } from '../api/request';
import { setError, hideError } from './notification.duck'

// constantes
let initialData = {
    books: [],
}


// types
let SET_BOOKS = "SET_BOOKS";

// reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.payload }
        default:
            return state
    }
}


// actions (thunks)
export let getBooks = () => async (dispatch, getState) => {
    // dispatch({ type: GET_CHARACTERS })


    return Request.get(`/books`)
        .then(response => {
            dispatch({
                type: SET_BOOKS,
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

export let registerBook = data => async (dispatch, getState) => {
    // dispatch({ type: GET_CHARACTERS })
    return Request.post(`/books`, data)
        .then(response => {
            if(response.status === 201){
                dispatch(getBooks());
            }
        })
        .catch(error => {
            console.log(error, error.response)
            /*dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: (err.response) ? err.response.message : 'Ha ocurrido un error, por favor inténtelo de nuevo más tarde'
            })*/
        })
}
