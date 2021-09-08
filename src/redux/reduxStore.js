import {applyMiddleware, combineReducers, createStore} from "redux";
import reducersObj from './reducers/reducers'
import thunk from "redux-thunk"

let reducers = combineReducers(reducersObj)

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store

