import React from "react";
import './aboutMe.scss';

export const AboutMe = (props) => {
    const data = props.data
    return (
        <div className="aboutMe-Container">
            <div className="bioContainer">
                <h1 className="aboutMe">ABOUT ME</h1>
                    {!data ? <p>Loading...</p> :                  
                            <p className="aboutMeText">{data.bio}</p>
                    }
            </div>
            {!data ? <p>Loading...</p> :                  
                <div className="skills-Container">
                    <h1 className="aboutMe">SKILLS</h1>
                    <div className="img-Conatainer">
                        {data.techStackImgs.map(img => {
                            return <img key={img.id} className="skillsImg" src={img.imgUrl} alt="iushiueqr" /> 
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default AboutMe;