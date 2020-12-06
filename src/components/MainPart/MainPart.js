import React from "react";

import LanguageButtons from "../LanguageButtons";
import Card from "../Card";

import "./MainPart.css";

const MainPart = ({ lang, handleLanguage }) => {
    return (
        <div className="main-part-container">
            <LanguageButtons lang={lang} handleLanguage={handleLanguage} />
            <Card lang={lang} />
            <div className="pointer">
                <i className="fa fa-angle-double-down" />
            </div>
        </div>
    );
};

export default MainPart;
