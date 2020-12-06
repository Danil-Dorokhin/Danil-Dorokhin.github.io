import React from "react";

import myData from "../../data";
import LanguageButtons from "../LanguageButtons";

import "./MainPart.css";

const MainPart = ({ lang, handleLanguage }) => {
    return (
        <div className="main-part-container">
            <div className="main-items-container">
                <LanguageButtons lang={lang} handleLanguage={handleLanguage} />
                    <h1>{myData.myName[lang]}</h1>
                <a href='https://github.com/Danil-Dorokhin'><i class="fa fa-github "></i></a>
                <a href='https://vk.com/hatheg_kla'><i class="fa fa-vk "></i></a>
                <h3>{myData.aboutMeTitle[lang]}</h3>
                <p style={{width: 500, fontSize:18}} className='mb-0'>{myData.aboutMe[lang]}</p>
            </div>
        </div>
    );
};

export default MainPart;

/*
Отвественный и стрессоустойчивый разработчик, обладающий экстремальным упорством,
высокой обучаемостью и сильной мотивацией к профессиональному росту.
*/
/*
'Responsible and stress-resistant developer with with extreme perseverance,\b
high ability to learn and strong motivation to grow as a professional.'
*/
