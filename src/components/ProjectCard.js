import React from 'react';
import './ProjectCard.css'

const ProjectCard = (props) => {
    return (
        <div>
            <div className="project-title">
                <h1 className="project-name">{props.data.name}: </h1>
                <div className="responsive-spacing">
                    <a rel="noopener noreferrer" href={props.data.repo} className="project-link" target="_blank">Repo</a>
                    <div className="project-name">-</div>
                    <a rel="noopener noreferrer" href={props.data.demo} className="project-link" target="_blank">Demo</a>
                </div>
            </div>
            <p>{props.data.intro}</p>
            <ul>
                {props.data.bullets.map(bullet => {return <li>{bullet}</li>})}
            </ul>
            <p>Tech: {props.data.stack}</p>
            <a rel="noopener noreferrer" href={props.data.demo} target="_blank">
                <img className="project-preview" alt="Project Preview" src={require("../images/" + props.data.preview + ".png")} />
            </a>
        </div>
    )
}

export default ProjectCard;