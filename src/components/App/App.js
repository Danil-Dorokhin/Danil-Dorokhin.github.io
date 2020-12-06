import React, { useState } from "react";

import MainPart from "../MainPart";
import SecondaryPart from "../SecondaryPart";

import "./App.css";

const App = () => {
    const [language, setLanguage] = useState("eng");
    const handleLanguage = (newLang) => {
        setLanguage(newLang);
    };

    return (
        <div className="app-container">
            <MainPart lang={language} handleLanguage={handleLanguage} />
            <SecondaryPart lang={language} />
            <p>My Projects</p>
            <p>----------------------</p>
            <p>----------------------</p>
            <p>Contacts</p>
        </div>
    );
};

export default App;
