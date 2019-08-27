import React from 'react';
import projectReducer from '../../store/reducers/projectReducer';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Russ</p>
                <p className="grey-text">26th August, 6pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary;