import { errorConstants } from './../constants/error.constants'

const initState = {
    error: null,
    goHide: null,
    isOpen: false
};

export function error(state = initState, action){
    switch (action.type) {
        case errorConstants.SET_ERROR:
            return { ...state, isOpen: true, error: action.payload.message, goHide: action.payload.goHide }
        case errorConstants.HIDE_ERROR:
            return { ...state, isOpen: false, error: null, goHide: null }
        default:
            return state;
    }
}
