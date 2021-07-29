import React from 'react'
import classes from "./NewMessage.module.css"
import {
    sendMessageCreator, updateNewMessageTextCreator
} from "../../../../redux/dialogsReducer";


const NewMessage = (props) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <div className={classes.new}>
            <textarea value={state.dialogsPage.newMessageText} className={classes.text}
                      onChange={onMessageChange}
                      placeholder="Type your message here"/>
            <button
                className={classes.button}
                onClick={addMessage}
            >{props.buttonText}</button>
        </div>
    )
}

export default NewMessage
