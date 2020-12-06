import React from "react";

import myData from "../../data";
import Skills from "../Skills";

import "./SecondaryPart.css";

const SecondaryPart = ({ lang }) => {
    return (
        <div className="secondary-part-container">
            <div className="secondary-part-items">
                <h1>{myData.skillsTitle[lang]}</h1>
                <Skills />
            </div>
        </div>
    );
};

export default SecondaryPart;
