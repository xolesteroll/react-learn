import React from 'react'
import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../redux/authReducer";
import {compose} from "redux";
import {onAuthRedirect} from "../../hoc/onAuthRedirect";

const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        const {login, password, checkbox} = formData
        props.login({
            email: login,
            password,
            rememberMe: checkbox,
            captcha: false
        })
    }

    return <Login onSubmit={onSubmit}/>
}

const mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {
        login,
    }),
    onAuthRedirect
)(LoginContainer)
