import React, { useState, useRef, useEffect } from "react";
import './aboutMe.scss';

export const AboutMe = (props) => {
    const [position, setPosition] = useState(100);
    const data = props.data
    
    // Fade-In Effect
    const positionRef = useRef();
    positionRef.current = position;
    useEffect(() => {
        const transition = setInterval(() => {
          positionRef.current >= 0 
            ? setPosition((positionRef.current = 0))
            : clearInterval(transition);
        }, 0);
    }, []);

    return (
        <div className="aboutMe-Container" style={{ transform: `translateX(${position}%)`, opacity: 1 }}>
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