import { errorConstants } from '../constants';

export const menoresActions = {
    setError,
    hideError,
}

export function setError(error){
    return {
        type: errorConstants.SET_ERROR,
        error: error
    }
}

export function hideError(){
    return {
        type: errorConstants.HIDE_ERROR
    }
}
