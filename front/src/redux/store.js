import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import booksReducer from './books.duck'
import notificationReducer from './notification.duck'
import authenticationReducer from './authentication.duck'
import userReducer from './user.duck'

let rootReducer = combineReducers({
    books: booksReducer,
    notification: notificationReducer,
    isLoggedIn: authenticationReducer,
    users: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}
