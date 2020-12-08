import React from "react";

import myData from "../../data";

import "./Projects.css";

const ProjectCard = ({ lang, project }) => {
    console.log(lang)
    return (
        <div className="project-card">
            <div className="project-name">
                <h4>{project.name}</h4>
            </div>
            <div className="project-card-body">
                <div className="project-card-screenshot">
                    <img src={project.image} width="200" height="350" />
                </div>
                <div className="project-card-description">
                    <p>{project.description[lang]}</p>
                </div>
            </div>
        </div>
    );
};

const Projects = ({ lang }) => {
    return (
        <div>
            <ProjectCard project={myData.projects[0]} lang={lang} />
        </div>
    );
};

export default Projects;
