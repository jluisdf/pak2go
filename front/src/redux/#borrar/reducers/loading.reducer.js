import { loadingConstants } from './../constants/loading.constants'

export function isLoading(state = false, action){
    switch (action.type) {
        case loadingConstants.SET_LOADING:
            return action.payload;
        default:
            return state;
    }
}
