import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a className={`${classes.link} ${classes.active}`} href="region">Profile</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="region">Messages</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="region">News</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="region">Music</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
