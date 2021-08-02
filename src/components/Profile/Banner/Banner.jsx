import React from 'react'
import classes from "./Banner.module.css"

class Banner extends React.Component {
    render() {
        return (
            <div
                className={classes.banner}
                style={{
                    backgroundImage:
                        `url(./maxresdefault.jpg)`,
                }}
            > </div>
        )
    }
}


export default Banner