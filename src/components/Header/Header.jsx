import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
    className={classes.logo}
    src="https://www.freepnglogos.com/uploads/book-png/big-open-book-outline-transparent-34.png"
    alt="logo"
    />
    </header>
  );
};

export default Header;
