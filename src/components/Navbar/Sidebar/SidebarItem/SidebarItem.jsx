import React from 'react'
import classes from "./SidebarItem.module.css"

class SidebarItem extends React.Component {
    render() {
        return (
            <div className={classes.item}>
                <img className={classes.image} src={this.props.imageUrl} alt="friend-avatar"/>
                <div className={classes.name}>
                    {this.props.friendName}
                </div>
            </div>
        )
    }
}

export default SidebarItem;
