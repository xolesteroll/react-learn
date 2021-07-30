import React from 'react'
import classes from "./NewMessage.module.css"


const NewMessage = (props) => {

    let newMessageText = props.newMessageText


    let onMessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
    }

    return (
        <div className={classes.new}>
            <textarea value={newMessageText} className={classes.text}
                      onChange={onMessageChange}
                      placeholder="Type your message here"/>
            <button
                className={classes.button}
                onClick={props.sendMessage}
            >Send Message</button>
        </div>
    )
}

export default NewMessage
