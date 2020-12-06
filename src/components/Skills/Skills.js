import React from "react";

import myData from "../../data";

import "./Skills.css";

const Skills = () => {
    return (
        <div className="skills-container">
            {myData.skills.map((skill) => {
                return <div className="skill">{skill}</div>;
            })}
        </div>
    );
};

export default Skills;
