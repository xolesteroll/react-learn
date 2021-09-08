import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import {reducer as FormReducer} from "redux-form"


export default {
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: FormReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    appReducer
}