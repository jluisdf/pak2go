
let initialData = {
    message: null,
    type: null,
    isOpen: false
}

// types
const SET_ERROR = "SET_ERROR";
const HIDE_ERROR = "HIDE_ERROR";
const RESET_ERROR = "RESET_ERROR";


export default function reducer(state = initialData, action) {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, isOpen: true, type: action.payload.type, message: action.payload.message }
        case HIDE_ERROR:
            return { ...state, isOpen: false, message: null, type: null }
        default:
            return state
    }
}


// actions
export let setError = data => async (dispatch, getState) => {
    dispatch({
        type: SET_ERROR,
        payload: data
    })
}


export let hideError = () => async (dispatch, getState) => {
    dispatch({
        type: HIDE_ERROR
    })
}
