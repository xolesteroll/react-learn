import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, onUnAuth} from "../../redux/authReducer";

class HeaderComponent extends React.Component {

    componentDidMount() {
        this.props.auth()
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
    auth,
    onUnAuth
})(withRouter(HeaderComponent))
