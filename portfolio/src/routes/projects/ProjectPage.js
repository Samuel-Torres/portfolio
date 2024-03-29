import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './projectPage.scss';
import PageNav from "../../components/PageNav/PageNav";

// components:
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
                        <div className="projectCardParentContainer">
                            <ProjectCard data={currentProject} />
                        </div>
                        <h1 className="projectNameHeader">{currentProject.name}</h1>
                    </div>
                    <div className="pageNavContainer">
                        <div className="pageNavWrapper">
                            <h2>Projects</h2>
                            <PageNav data={data} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectPage;