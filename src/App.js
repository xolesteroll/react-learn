import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer />}/>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    );
};

export default App;
