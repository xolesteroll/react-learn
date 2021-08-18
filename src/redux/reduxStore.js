import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk"
import {reducer as FormReducer} from "redux-form"
import appReducer from "./reducers/appReducer";

let reducers = combineReducers({
    appReducer: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: FormReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store

