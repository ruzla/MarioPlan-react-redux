import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore, earum vitae numquam eaque assumenda nam minima delectus tempora officia eum eos dolore laudantium, nulla sunt? Cumque enim magnam nesciunt.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Russ</div>
                    <div>26th August, 6pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
