import ReactDOM from "react-dom"
import React from "react"
import reportWebVitals from "./reportWebVitals"
import App from "./App"
import './index.css'
import store from "./redux/state"

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)


reportWebVitals()
