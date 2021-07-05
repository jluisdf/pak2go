import { loadingConstants } from '../constants';

export const loadingActions = { setLoading }

export function setLoading(loading){
    return {
        type: loadingConstants.SET_LOADING,
        isLoading: loading
    }
}
