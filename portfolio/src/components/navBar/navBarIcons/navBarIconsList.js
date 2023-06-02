import React from "react";
import "./NavBarIconList.scss";

import NavBarIcon from "./NavBarIcon";

const navBarIconsList = (props) => {
    const tabs = props.navTabs;
    return (
        <div className="navBarIconContainer">
            {tabs.map(item => {
                return <NavBarIcon key={item.id} tab={item} />
            })}
        </div>
    )
}

export default navBarIconsList;