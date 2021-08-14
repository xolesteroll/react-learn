import {reset} from "redux-form";

export const clearForm = (formName) => (dispatch) => {
    dispatch(reset(formName))
}
