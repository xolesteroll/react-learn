import React from 'react'
import classes from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div className={classes.formWrapper}>
        <h1 className={classes.loginPageTitle}>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login