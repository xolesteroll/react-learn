import React from 'react'
import classes from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
    return <div className={classes.formWrapper}>
        <h1 className={classes.loginPageTitle}>Login</h1>
        <LoginForm onSubmit={props.onSubmit}/>
    </div>
}

export default Login