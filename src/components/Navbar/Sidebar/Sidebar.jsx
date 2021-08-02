import React from 'react';
import classes from "./Sidebar.module.css"
import SidebarItem from "./SidebarItem/SidebarItem";

class Sidebar extends React.Component {

    render() {
        return (
            <div className={classes.sidebar}>
                <h3 className={classes.title}>
                    Friends Online
                </h3>
                <div className={classes.sidebarInner}>
                    {this.props.friends.map(el => <SidebarItem key={el.id} imageUrl={el.imageUrl} friendName={el.name}/>)}
                </div>
            </div>
        );
    }
}

export default Sidebar;
