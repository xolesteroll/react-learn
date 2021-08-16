import React from 'react'
import classes from "./NewMessage.module.css"
import MessageForm from "./MessageForm/MessageForm";

class NewMessage extends React.Component {

    onSubmit = (formData) => {
        this.props.sendMessage(formData.newMessage)
        this.props.clearForm("messageForm")
    }

    render() {
        return (
            <div className={classes.new}>
            <MessageForm {...this.props} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}



export default NewMessage
