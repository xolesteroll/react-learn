import React from 'react'
import classes from "./LoginForm.module.css"
import commonStyles from "./../../common/Forms/Forms.module.css"
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/Forms/Forms";
import {maxLength, required} from "../../../utils/formUtils";


const maxLength25 = maxLength(25)

const LoginForm = (props) => {
    return <form className={classes.loginForm} onSubmit={props.handleSubmit}>
        {createField("text", "login", Input, [required, maxLength25], null,  classes.loginFieldWrapper, "Login", null)}
        {createField("password", "password", Input, [required, maxLength25], null,  classes.passFieldWrapper, "Password", null)}
        {createField("checkbox", "checkbox", Input, null, null, classes.checkboxFieldWrapper, null,  "Remember me", null)}
        <div className={classes.buttonFieldWrapper}>
            <button>Login</button>
        </div>
        {props.error &&
        <span className={commonStyles.formWarning + " " + commonStyles.totalFormWarning}>{props.error}</span>}
    </form>
}


export default reduxForm({
    form: 'loginForm'
})(LoginForm)