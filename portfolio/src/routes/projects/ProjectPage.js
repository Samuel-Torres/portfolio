import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './projectPage.scss'
import PageNav from "../../components/PageNav/PageNav";

export const ProjectPage = (props) => {
    const [ currentProject, setCurrentProject ] = useState();
    const data = props.data;
    const params = useParams();
    
    useEffect(() => {
        setCurrentProject(data[params.id])
    }, [params, data]);

    return (
        <>
            {
                !currentProject ? <h1>Loading...</h1> : 
                
                <div className="projectPageContainer">
                    <div className="projectContainer">
                        <h1>{currentProject.projectName}</h1>
                    </div>
                    <div className="pageNavContainer">
                        <h2>Projects</h2>
                        <PageNav data={data} />
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectPage;