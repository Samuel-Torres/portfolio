import React from "react";
import { Link } from "react-router-dom";
import "./pageNavTab.scss";

const PageNavTab = (props) => {

    const data = props.data;

    return (
        <>
            {data.type === "project" ?
                <Link to={`/${data.type}s/${data.id}`}>
                    <p className="name">{data.name}</p>
                </Link>
                : null
            }
            {data.type === "work-history" ?
                <Link to={`/${data.type}/${data.id}`}>
                    <p className="name">{data.name}</p>
                </Link>
                : null
            }
           
        </>
    )
}

export default PageNavTab;