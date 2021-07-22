import React from 'react';
import classes from "./Banner.module.css";

const Banner = () => {
    return (
      <div
        className={classes.banner}
        style={{
          backgroundImage:
            `url(./maxresdefault.jpg)`,
        }}
      > </div>
    );
}

export default Banner;