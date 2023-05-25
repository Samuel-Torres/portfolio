import React from "react";
import { useNavigate } from "react-router-dom";
import "./pageNavTab.scss";

const PageNavTab = (props) => {

    const data = props.data;
    const navigate = useNavigate();

    const handleNavTabClick = (id) => {
        navigate(`/projects/${id}`);
    }

    return (
        <div onClick={() => handleNavTabClick(data.id)}>
            <p className="projectName">{data.projectName}</p>
        </div>
    )
}

export default PageNavTab;