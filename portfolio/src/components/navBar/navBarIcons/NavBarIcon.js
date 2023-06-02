import React from "react";
import { useNavigate } from "react-router-dom";
import './NavBarIcon.scss';

export const NavBarIcon = (props) => {
    const tabData = props.tab
    const navigate = useNavigate();

    const handleTabClick = (path) => {
        const newPath = path.toLowerCase();
        if (newPath === "/about-me" || newPath === "/contact") return navigate(newPath);
        else navigate(`${newPath}/0`);
    }

    return (
        <div className="navBarIconContainer">
            {tabData.tabType === "pageUrl" ? 
                <div className="iconItem" onClick={() => handleTabClick(tabData.path)}>
                    <img className="tabImg" src={tabData.imgIcon} alt={tabData.alt} />
                    <p>{tabData.tabText}</p>
                </div> 
            : null}

            {tabData.tabType === "externalLink" ? 
                <a className="tabAClass" href={tabData.destination} rel="noreferrer noopener" target="_blank">
                    <div className="iconItem">
                    <img className="tabImg" src={tabData.imgIcon} alt="github icon" />
                    {tabData.tabText}
                    </div> 
                </a>
            : null}

            {tabData.type === "resume" ? 
                <a href={require("../../../assets/SamuelTorres-Resume.pdf")} download="SamuelTorres-Resume">
                <button className="resume-btn">
                    Download Resume
                </button>
            </a>
            : null}
        </div>
    )
}

export default NavBarIcon;