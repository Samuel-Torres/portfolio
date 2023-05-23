import React from "react";
import "./NavBarIconList.scss";

import NavBarIcon from "./NavBarIcon";

const navBarIconsList = (props) => {
    // console.log("TABS: ", props.navTabs )
    const tabs = props.navTabs;
    return (
        <div className="navBarIconContainer">
            {tabs.map(item => {
                // console.log("ITEM: ", item)
                return <NavBarIcon key={item.id} tab={item} />
            })}
        </div>
    )
}

export default navBarIconsList;