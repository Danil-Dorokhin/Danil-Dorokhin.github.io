import React from "react";

import myData from "../../data";

import "./Projects.css";

const ProjectCard = ({ lang, project }) => {
    if (!project) {
        return null;
    }
    return (
        <div className="project-card">
            <div className="project-name">
                <h4>{project.name}</h4>
            </div>
            <div className="project-card-body">
                <div className="project-card-screenshot">
                    <img src={project.image} width="100%" height="100%" />
                </div>
                <div className="project-card-description">
                    <p>{project.description[lang]}</p>
                    <div className="project-icons">
                        {project.url ? (
                            <a href={project.url}>
                                <i className="fa fa-external-link" />
                            </a>
                        ) : null}
                        {project.git ? (
                            <a href={project.git}>
                                <i className="fa fa-github" />
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = ({ lang }) => {
    return (
        <div className="project-part">
            <div className="project-row">
                {myData.projects.map((project)=><ProjectCard project={project} lang={lang} key={project.name}/>)}
            </div>
        </div>
    );
};

export default Projects;
