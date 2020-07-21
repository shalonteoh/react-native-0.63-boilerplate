import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as AuthReducer } from './Auth/Reducers'

export default () => {
    const rootReducer = combineReducers({
        /**
         * Register your reducers here.
         * @see https://redux.js.org/api-reference/combinereducers
         */
        auth: AuthReducer,
    })

    return configureStore(rootReducer, rootSaga)
}