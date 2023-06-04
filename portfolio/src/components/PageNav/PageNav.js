import React from "react";
import { useLocation } from "react-router-dom";
import './pageNav.scss'

import PageNavList from "./PageNavList";

const PageNav = (props) => {

    const data = props.data;
    const location = useLocation();

    return (
        <div>
            <PageNavList data={data} />
            <div className="downloadBtnContainer">
                {location.pathname.includes("/work-history") ? 
                    <a className="downloadBtn" href={require("../../assets/SamuelTorres-Resume.pdf")} download="SamuelTorres-Resume">
                        <button className="resume-btn">
                            Download Resume
                        </button>
                    </a>
                : null}
            </div>
        </div>
    )
}

export default PageNav;