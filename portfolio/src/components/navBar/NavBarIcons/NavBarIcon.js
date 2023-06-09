import React from "react";
import { Link } from "react-router-dom";
import './NavBarIcon.scss';

export const NavBarIcon = (props) => {
    const tabData = props.tab

    return (
        <div className="navIconContainer">
            {tabData.tabType === "pageUrl" ? 
                <Link to={tabData.path === '/projects' || tabData.path === '/work-history' ? `${tabData.path}/0` : `${tabData.path}`}>
                    <img className="tabImg" src={tabData.imgIcon} alt={tabData.alt} />
                    <p>{tabData.tabText}</p>
                </Link>
            : null}

            {tabData.tabType === "externalLink" ? 
                <a className="tabAClass" href={tabData.destination} rel="noreferrer noopener" target="_blank">
                    <div className="iconItem">
                        <img className="tabImg" src={tabData.imgIcon} alt="github icon" />
                        {tabData.tabText}
                    </div> 
                </a>
            : null}
        </div>
    )
}

export default NavBarIcon;