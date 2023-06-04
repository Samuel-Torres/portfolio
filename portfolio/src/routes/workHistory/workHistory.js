import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./workHistory.scss";

// component: 
import PageNav from "../../components/PageNav/PageNav";

export const WorkHistory = (props) => {
    const data = props.data;
    const params = useParams();
    const [ currViewedJob, setCurrViewedJob ] = useState();

    useEffect(() => {
        setCurrViewedJob(data[params.id])
    }, [params, data]);

    return (
        <>
            {!
                currViewedJob ? <h1>LOADING...</h1> :
                
                <div className="workHistoryPageContainer">
                    <div className="workHistoryContainer">

                        <div className="logoContainer">
                            <img className={currViewedJob.name === "Lambda School" ? "lambda" : "upsie"} src={currViewedJob.img} alt="company logo" />
                        </div>

                        <h1>{currViewedJob.name}</h1>
                        <h2>{currViewedJob.jobTitle}</h2>
                        <p>{currViewedJob.dateRange}</p>
                        <p>{currViewedJob.location}</p>

                        <div className="bulletContainer">
                            {currViewedJob.bulletPoints.map(bullet => {
                                return <p key={bullet.id} className="bulletPoint">• {bullet.point}</p>
                            })}
                        </div>
                    </div>
                    <div className="pageNavContainer">
                        <h2>WORK HISTORY</h2>
                        <PageNav data={data} />
                    </div>
                </div>
            }
        </>
    )
}

export default WorkHistory;