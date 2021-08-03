import React from 'react'
import classes from "./NewMessage.module.css"

class NewMessage extends React.Component {
    onMessageChange = (e) => {
        let text = e.target.value
        this.props.updateNewMessageText(text)
    }

    render() {
        return (
            <div className={classes.new}>
            <textarea value={this.props.newMessageText} className={classes.text}
                      onChange={this.onMessageChange}
                      placeholder="Type your message here"/>
                <button
                    className={classes.button}
                    onClick={this.props.sendMessage}
                >Send Message</button>
            </div>
        )
    }
}



export default NewMessage
