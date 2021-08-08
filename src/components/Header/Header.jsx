import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <header className={classes.header}>
                <NavLink to="/">
                    <img
                        className={classes.logo}
                        src="https://www.freepnglogos.com/uploads/book-png/big-open-book-outline-transparent-34.png"
                        alt="logo"
                    />
                </NavLink>
                <div className={classes.loginBlock}>
                    {this.props.isAuth ? <NavLink className={classes.profile} to={`/profile/${this.props.userId}`}>{this.props.login}</NavLink> :
                        <NavLink className={classes.loginBtn} to="/login">Login</NavLink>}
                </div>
            </header>
        )
    }
}


export default Header;
