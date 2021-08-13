import React from 'react'
import classes from "./LoginForm.module.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <form className={classes.loginForm} onSubmit={props.handleSubmit}>
        <div className={classes.loginFieldWrapper}>
            <label htmlFor="login">Login</label>
            <Field type="text" name="login" component={"input"}/>
        </div>
        <div className={classes.passFieldWrapper}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" component={"input"}/>
        </div>
        <div className={classes.checkboxFieldWrapper}>
            <label htmlFor="checkbox">Remember me</label>
            <Field type="checkbox" name="checkbox" component={"input"}/>
        </div>
        <div className={classes.buttonFieldWrapper}>
            <button>Login</button>
        </div>
    </form>
}


export default reduxForm({
    form: 'loginForm'
})(LoginForm)