import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {

    render() {

        return (
            <Dialogs />
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {

    }),
    withAuthRedirect
)(DialogsContainer)
