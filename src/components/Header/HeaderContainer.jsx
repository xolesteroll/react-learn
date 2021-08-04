import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData, unAuth} from "../../redux/authReducer";

class HeaderComponent extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData({id, email, login})
                } else {
                    this.props.unAuth()
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    setUserData,
    unAuth
})(withRouter(HeaderComponent))
