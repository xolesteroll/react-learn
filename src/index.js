import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from './redux/state';



ReactDOM.render(
    <React.StrictMode>
        <App appState={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
