import React from "react";
import './aboutMe.scss';

export const AboutMe = (props) => {
    const data = props.data

    return (
        <div className="aboutMe-Container">
            <div className="bioContainer">
            <h1 className="aboutMe">ABOUT ME</h1>
                {!data ? <p>Loading...</p> :
                    <p>{data.bio}</p>
                }
            </div>
        </div>
    )
}

export default AboutMe;