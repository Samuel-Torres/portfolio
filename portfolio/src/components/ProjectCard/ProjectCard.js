import React from "react";
import './projectCard.scss';

const ProjectCard = (props) => {

    const data = props.data
    console.log("PROJECT DATA: ", data)
    return (
        <>
            {!data ? null : 
                <div className="projectCardContainer">
                    <img 
                        className='projectImg' 
                        src={data.projectImgUrl} 
                        alt={data.imgAlt} 
                    />
                    <div className="projectCardDescContainer">
                        <p>{data.projectDescription}</p>
                    </div>
                    <div className="projectBtnContainer">
                        <button className="githubBtn" type="button">Github</button>
                        <button className="liveAppBtn" type="button">View App</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectCard;