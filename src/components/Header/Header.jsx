import classes from "./Header.module.css";

const Header = () => {

  console.log(classes);
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://www.freepnglogos.com/uploads/book-png/big-open-book-outline-transparent-34.png"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
