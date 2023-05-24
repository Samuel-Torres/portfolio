import React from "react";

import PageNav from "../../components/PageNav/PageNav";

export const projects = (props) => {

    const data = props.data;

    return (
        <div>
            <h1>PROJECTS</h1>
            <PageNav data={data} />
        </div>
    )
}

export default projects;