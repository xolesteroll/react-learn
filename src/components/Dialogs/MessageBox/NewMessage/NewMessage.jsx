import React from 'react'
import classes from "./NewMessage.module.css"
import MessageForm from "./MessageForm/MessageForm";

class NewMessage extends React.Component {
    onMessageChange = (e) => {
        let text = e.target.value
        this.props.updateNewMessageText(text)
    }

    onSubmit = () => {
        this.props.sendMessage()
        this.props.clearForm("messageForm")
    }

    render() {
        return (
            <div className={classes.new}>
            <MessageForm {...this.props} onSubmit={this.onSubmit} onMessageChange={this.onMessageChange}/>
            </div>
        )
    }
}



export default NewMessage
