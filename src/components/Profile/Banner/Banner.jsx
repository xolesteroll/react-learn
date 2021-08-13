import React from 'react'
import classes from "./Banner.module.css"

const Banner = (props) => {
    return (
        <div
            className={classes.banner}
            style={{
                backgroundImage:
                    `url(${props.image})`
            }}
        >

        </div>
    )
}


export default Banner