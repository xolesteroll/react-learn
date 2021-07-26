import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./redux/render";
import state, {addPost, sendMessage} from "./redux/state";


rerenderEntireTree(state, addPost, sendMessage);


reportWebVitals();
