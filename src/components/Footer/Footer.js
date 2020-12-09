import React from "react";

import myData from "../../data";

import "./Footer.css";

const Footer = ({ lang }) => {
    const topFunction = () => {
        //check if browser is Safari
        if (
            navigator.userAgent.indexOf("Safari") != -1 &&
            navigator.userAgent.indexOf("Version") != -1 &&
            parseFloat(
                navigator.userAgent
                    .substring(navigator.userAgent.indexOf("Version") + 8)
                    .split(" ")[0]
            ) >= 5
        ) {
            document.body.scrollTop = 0;
        } else {
            document.documentElement.scrollTop = 0;
        }
    };
    return (
        <div className="footer-container">
            <button onClick={() => topFunction()} className="up-button">
                <i className="fa fa-arrow-up" />
            </button>
            <div className="footer-header">
                <h3>{myData.myContactsTitle[lang]}</h3>
            </div>
            <div className="line-separator" />
            <div className="contacts">
                <div className="contact">
                    <i className="fa fa-envelope" />
                    <p>{myData.myContacts.gmail}</p>
                </div>
                <div className="contact">
                    <i className="fa fa-github" />
                    <p>{myData.myContacts.github}</p>
                </div>
                <div className="contact">
                    <i className="fa fa-telegram" />
                    <p>{myData.myContacts.telegram}</p>
                </div>
                <div className="contact">
                    <i className="fa fa-phone" />
                    <p>{myData.myContacts.phone}</p>
                </div>
            </div>
            <div className="line-separator" />
            <div className="designed-by">
                <p>Designed by Danil Dorokhin</p>
            </div>
        </div>
    );
};

export default Footer;
