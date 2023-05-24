import React from "react";
import { useNavigate } from "react-router-dom";

const PageNavTab = (props) => {

    const data = props.data;
    const navigate = useNavigate();

    const handleNavTabClick = (id) => {
        navigate(`/projects/${id}`);
    }

    return (
        <div onClick={() => handleNavTabClick(data.id)}>
            <p>{data.projectName}</p>
        </div>
    )
}

export default PageNavTab;