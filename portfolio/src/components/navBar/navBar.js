import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './navbar.scss';

import NavBarIconList from './NavBarIcons/NavBarIconsList';

export const Navbar = (props) => {
    const data = props.navDataProps;
    const navigate = useNavigate();

    const handleNavigate = () => {
        console.log("RAN")
        navigate("/about-me")
    }

    return (
        <div className="container">
            <div className="logoContainer">
                <img 
                    className="logoImg" 
                    onClick={() => handleNavigate()}
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