import React, { useState } from "react";

import MainPart from "../MainPart";
import Projects from "../Projects";
import SecondaryPart from "../SecondaryPart";
import Footer from "../Footer";


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
            <Projects lang={language}/>
            <Footer lang={language}/>
        </div>
    );
};

export default App;
