import React from 'react';
import classes from "./SidebarItem.module.css"

const SidebarItem = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.image} src={props.imageUrl} alt="friend-avatar"/>
            <div className={classes.name}>
                {props.friendName}
            </div>
        </div>
    );
};

export default SidebarItem;
