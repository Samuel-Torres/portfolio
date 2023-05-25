import React from "react";
import './pageNav.scss'

import PageNavList from "./PageNavList";

const PageNav = (props) => {

    const data = props.data;

    return (
        <div>
            <PageNavList data={data} />
        </div>
    )
}

export default PageNav;