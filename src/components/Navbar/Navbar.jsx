import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";

class Navbar extends React.Component {
    render() {
        return (
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <NavLink className={classes.link} to="/profile" activeClassName={classes.active}>Profile</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink className={classes.link} to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink className={classes.link} to="/news" activeClassName={classes.active}>News</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink className={classes.link} to="/music" activeClassName={classes.active}>Music</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink className={classes.link} to="/users" activeClassName={classes.active}>Find People</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink className={classes.link} to="/settings" activeClassName={classes.active}>Settings</NavLink>
                    </li>
                </ul>
                <SidebarContainer />
            </nav>
        )
    }
}


export default Navbar;
