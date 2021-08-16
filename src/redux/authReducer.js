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
                ...action.payload,
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

export const setUserData = ({id, email, login}) => ({type: SET_USER_DATA, payload: {id, email, login}})
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


export const login = (data) => (dispatch) => {
    authAPI.login(data).then(response => {
        if(response.resultCode === 0) {
            const id = response.data.userId
            const email = data.emailpayload
            const login = data.email
            dispatch(setUserData({id, email, login}))
        } else {
            alert("Вы ввели неправильные данные")
        }

    })
}

export const onUnAuth = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(unAuth())
            }
        })
}


export default authReducer