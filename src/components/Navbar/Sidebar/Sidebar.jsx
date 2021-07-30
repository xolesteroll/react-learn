import React from 'react';
import classes from "./Sidebar.module.css"
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
    let sideBarFriends = props.friends.map(el => <SidebarItem key={el.id} imageUrl={el.imageUrl} friendName={el.name}/>
    )

    return (
            <div className={classes.sidebar}>
                <h3 className={classes.title}>
                    Friends Online
                </h3>
                <div className={classes.sidebarInner}>
                    {sideBarFriends}
                </div>
            </div>
    );
};

export default Sidebar;
