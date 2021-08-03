import classes from "./Preloader.module.css";
import loaderImg from "../../../assets/images/loader.svg";
import React from "react";

let Preloader = () => {
    return <div className={classes.loaderLayout}>
        <img className={classes.loaderImg} src={loaderImg} alt="loading"/>
    </div>
}

export default Preloader