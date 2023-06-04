import React from "react";
import { useNavigate } from "react-router-dom";
import "./pageNavTab.scss";

const PageNavTab = (props) => {

    const data = props.data;
    const navigate = useNavigate();

    const handleNavTabClick = (data) => {
        if(data.type === "project") return navigate(`/projects/${data.id}`);
        if(data.type === "work-history") return  navigate(`/work-history/${data.id}`);
    }

    return (
        <>
            <div onClick={() => handleNavTabClick(data)}>
                <p className="name">{data.name}</p>
            </div>
        </>
    )
}

export default PageNavTab;