import React from 'react';
import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a className={`${classes.link} ${classes.active}`} href="/profile">Profile</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/dialogs">Messages</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/news">News</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="region">Music</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
