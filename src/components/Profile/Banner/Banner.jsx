import React from 'react'
import classes from "./Banner.module.css"
import noImage from "../../../assets/images/not_found.jpg"

const Banner = (props) => {
    return (
        <div
            className={classes.banner}
            style={{
                backgroundImage:
                    `url(${props.image ? props.image : noImage})`
            }}
        >

        </div>
    )
}


export default Banner