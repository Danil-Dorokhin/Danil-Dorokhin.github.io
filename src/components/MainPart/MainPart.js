import React from "react";

import myData from "../../data";
import LanguageButtons from '../LanguageButtons';

import "./MainPart.css";

const MainPart = ({ lang, handleLanguage }) => {
    return (
        <div>
            <LanguageButtons lang={lang} handleLanguage={handleLanguage} />
            <h1>{myData.myName[lang]}</h1>
            <h2>[GitHub] [VK]</h2>
            <h3>Text about me</h3>
        </div>
    );
};

export default MainPart;
