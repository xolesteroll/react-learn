import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import { onUnAuth} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

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
    onUnAuth
})(withRouter(HeaderContainer))
