import React from 'react'
import classes from "./LoginForm.module.css"
import commonStyles from "./../../common/Forms/Forms.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/Forms/Forms";
import {maxLength, required} from "../../../utils/formUtils";


const maxLength25 = maxLength(25)

const LoginForm = (props) => {
    return <form className={classes.loginForm} onSubmit={props.handleSubmit}>
        <div className={classes.loginFieldWrapper}>
            <label htmlFor="login">Login</label>
            <Field type="text" name="login" component={Input}
            validate={[required, maxLength25]}/>
        </div>
        <div className={classes.passFieldWrapper}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" component={Input}
            validate={[required, maxLength25]}/>
        </div>
        <div className={classes.checkboxFieldWrapper}>
            <label htmlFor="checkbox">Remember me</label>
            <Field type="checkbox" name="checkbox" component={Input}/>
        </div>
        <div className={classes.buttonFieldWrapper}>
            <button>Login</button>
        </div>
        {props.error && <span className={commonStyles.formWarning + " " + commonStyles.totalFormWarning}>{props.error}</span>}
    </form>
}


export default reduxForm({
    form: 'loginForm'
})(LoginForm)