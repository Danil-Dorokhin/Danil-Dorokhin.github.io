import React from "react";

import myData from "../../data";

import "./Card.css";

const Card = ({ lang }) => {
    /*return(
        <div className="blurred-box">
            <div className="user-login-box">
                <p>ASS</p>
            </div>
        </div>
    )*/
    return (
        <div className="blurred-box">
            <div className="about-me-content">
                <h1>{myData.myName[lang]}</h1>

                
                <p style={{ width: 500, fontSize: 18 }} className="mb-0">
                    {myData.aboutMe[lang]}
                </p>
                <div className="btn-container">
                    <a href="https://github.com/Danil-Dorokhin">
                        <i className="fa fa-github animated" />
                    </a>
                    <a href="https://vk.com/hatheg_kla">
                        <i className="fa fa-vk animated" />
                    </a>
                    <a href="https://t.me/dorokhinD">
                        <i className="fa fa-telegram animated" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
