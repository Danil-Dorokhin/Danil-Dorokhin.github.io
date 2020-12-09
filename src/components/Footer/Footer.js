import React from 'react'

import './Footer.css';

const Footer = ({lang}) => {
    const topFunction = () => {
        //check if browser is Safari
        if((navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Version') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Version') + 8).split(' ')[0]) >= 5)){
            document.body.scrollTop = 0;
        }else{
            document.documentElement.scrollTop = 0;
        }   
        
    }
    return (
        <div className="footer-container">
                 <button onClick={()=>topFunction()} className="up-button"><i className="fa fa-arrow-up"></i></button> 
        </div>
    )
}

export default Footer
