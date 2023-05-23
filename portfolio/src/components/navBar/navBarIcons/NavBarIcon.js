import React from "react";
import { useNavigate } from "react-router-dom";
import './NavBarIcon.scss';

export const NavBarIcon = (props) => {
    const tabData = props.tab
    console.log("TAB: ", tabData ) 
    const navigate = useNavigate();

    const handleTabClick = (location, e) => {
        const newLocation = location.toLowerCase();
        navigate(newLocation);
    }

    return (
        <div className="navBarIconContainer">
            {tabData.tabType === "pageUrl" ? 
                <div onClick={() => handleTabClick(tabData.path)}>
                    <img className="tabImg" src={tabData.imgIcon} alt={tabData.alt} />
                    <p>{tabData.tabText}</p>
                </div> 
            : null}

            {tabData.tabType === "externalLink" ? 
                <div>
                    <a className="tabAClass" href={tabData.destination} rel="noreferrer noopener" target="_blank">
                        <img className="tabImg" src={tabData.imgIcon} alt="github icon" />
                        {tabData.tabText}
                    </a>
                </div> 
            : null}
        </div>
    )
}

export default NavBarIcon;