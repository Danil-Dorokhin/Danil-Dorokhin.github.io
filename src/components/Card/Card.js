import React from "react";

import myData from "../../data";

import "./Card.css";

const Card = ({ lang }) => {
    return (
        <div className="card-container">
            <h1>{myData.myName[lang]}</h1>

            <h3>{myData.aboutMeTitle[lang]}</h3>
            <p style={{ width: 500, fontSize: 18 }} className="mb-0">
                {myData.aboutMe[lang]}
            </p>
            <a href="https://github.com/Danil-Dorokhin">
                <i className="fa fa-github "></i>
            </a>
            <a href="https://vk.com/hatheg_kla">
                <i className="fa fa-vk "></i>
            </a>
        </div>
    );
};

export default Card;
