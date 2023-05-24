import React from "react";
import './navbar.scss';

import NavBarIconList from './NavBarIcons/NavBarIconsList';

export const Navbar = (props) => {
    const data = props.navDataProps;

    return (
        <div className="container">
            <div className="logoContainer">
                <img 
                    className="logoImg" 
                    src={data.logoSourceUrl} 
                    alt={props.alt} 
                />
            </div>
            <div className="iconContainer">
                <NavBarIconList navTabs={data.navigationTabs} />
            </div>
        </div>
    )
}

export default Navbar;