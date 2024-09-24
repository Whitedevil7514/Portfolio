import React from "react";
import './App.css'
import background from '../src/asserts/background.svg'
const Mainpage=()=>{


    return(

        <>
        <div className="content-header">
            <div className="background">
         <img src={background} alt="heroimage"></img>
            </div>
            <div className="content-top">
                <p className="name">Vengatraman is a </p>
                <p className="desp">
                Certified EC-Council Instructor ,Digital Forensic Analyst
                </p>
            </div>
        
        </div>
        </>
    )
}

export default Mainpage

