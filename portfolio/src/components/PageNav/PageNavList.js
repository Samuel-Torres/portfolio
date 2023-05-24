import React from "react";

import PageNavTab from "./PageNavTab";

const PageNavList = (props) => {

    const data = props.data;

    return (
        <>
            {data.map(item  => {
                return <PageNavTab key={item.id} data={item} />
            })}
        </>
    )
}

export default PageNavList;