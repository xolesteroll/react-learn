import {reset} from "redux-form";


export const required = (value) => {
    if (value) return undefined

    return "This field is required"
}

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`

    return undefined
}


export const clearForm = (formName) => (dispatch) => {
    dispatch(reset(formName))
}
