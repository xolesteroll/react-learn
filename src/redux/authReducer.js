import {authAPI} from "../dal/api";

const SET_USER_DATA = 'SET_USER_DATA'
const UNAUTHORIZE = 'UNAUTHORIZE'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case UNAUTHORIZE :
            return {
                ...state,
                isAuth: false
            }
        default:
            return state
    }
}

export const setUserData = ({id, email, login}) => ({type: SET_USER_DATA, data: {id, email, login}})
export const unAuth = () => ({type: UNAUTHORIZE})

export const auth = () => (dispatch) => {
    authAPI.me()
        .then((response) => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setUserData({id, email, login}))
            } else {
                dispatch(unAuth())
            }
        })
}


export default authReducer