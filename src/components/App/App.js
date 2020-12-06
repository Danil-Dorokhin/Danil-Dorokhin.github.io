import React, { useState } from "react";

import MainPart from "../MainPart";

import "./App.css";

const App = () => {
    const [language, setLanguage] = useState("eng");
    const handleLanguage = (newLang) => {
        setLanguage(newLang);
    };

    return (
        <div className="app-container">
            <MainPart lang={language} handleLanguage={handleLanguage} />
            <h2>Grid with my skills</h2>
            <p class="btn btn-primary">Button</p>
            <p class="btn btn-primary">Button</p>
            <p class="btn btn-primary">Button</p>
            <p>----------------------</p>
            <p>My Projects</p>
            <p>----------------------</p>
            <p>My Experience</p>
            <p>----------------------</p>
            <p>Education</p>
            <p>----------------------</p>
            <p>Contacts</p>
        </div>
    );
};

export default App;
