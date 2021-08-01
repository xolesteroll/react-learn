import ReactDOM from "react-dom"
import React from "react"
import reportWebVitals from "./reportWebVitals"
import App from "./App"
import './index.css'
import store from "./redux/reduxStore"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


reportWebVitals()
