import React from "react";

import myData from "../../data";
import Skills from "../Skills";
import Experience from "../Experience";

import "./SecondaryPart.css";

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
