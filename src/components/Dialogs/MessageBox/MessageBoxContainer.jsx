import {connect} from "react-redux";
import MessageBox from "./MessageBox";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages

    }
}

const MessageBoxContainer = connect(mapStateToProps)(MessageBox)

export default MessageBoxContainer;
