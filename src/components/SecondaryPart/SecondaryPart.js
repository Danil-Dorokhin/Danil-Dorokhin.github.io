import React from "react";

import myData from "../../data";
import Skills from "../Skills";

import "./SecondaryPart.css";

const ExperienceItem = ({ lang, exp }) => {
    return (
        <div className="experience-item-container">
            <div className='line-separator' />
            <h3>{exp[lang].companyName}</h3>

            <div className="role-and-time">
                <p>{exp[lang].myRole}</p>
                <div className="time">
                    <p>{exp[lang].time[0]}</p>
                    <p>{exp[lang].time[1]}</p>
                </div>
            </div>
            <p className="job-description">
                {exp[lang].jobDescription}
            </p>
            <ul>{exp[lang].achieved.map((achieve)=>{return(<li>{achieve}</li>)})}</ul>
        </div>
    );
};

const Experience = ({lang}) => {
    return(
        <div className="experience">
            {myData.myExperience.map((exp)=> <ExperienceItem lang={lang} exp={exp}/>)}
        </div>
    )
}

const SecondaryPart = ({ lang }) => {
    return (
        <div className="secondary-part-container">
            <div className="secondary-part-items">
                <h1>{myData.skillsTitle[lang]}</h1>
                <Skills />
                <h1>{myData.myExperienceTitle[lang]}</h1>
                <Experience lang={lang} />
            </div>
        </div>
    );
};

export default SecondaryPart;
