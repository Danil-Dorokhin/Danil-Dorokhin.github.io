import React from "react";

import myData from "../../data";

import "./Contacts.css";

const Contacts = () => {
    return (
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
    );
};

export default Contacts;
