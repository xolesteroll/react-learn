import ReactDOM from "react-dom";
import React from "react";
import App from "../App";

export let rerenderEntireTree = (state, addPost, sendMessage) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} sendMessage={sendMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
