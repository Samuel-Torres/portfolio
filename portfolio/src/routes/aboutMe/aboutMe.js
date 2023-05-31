import React from "react";
import './aboutMe.scss';

export const aboutMe = (props) => {
    const data = props.data
    console.log("BIO: ", data)
    return (
        <div className="aboutMe-Container">
            <h1>ABOUT ME</h1>
            <div className="bioContainer">
                {!data ? <p>Loading...</p> :
                    <p>{data.bio}</p>
                }
            </div>
        </div>
    )
}

export default aboutMe;