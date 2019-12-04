import React from 'react';
import Pfp from '../images/pfp.jpeg';
import '../App.css';

const Slogan = () => {
    return (
        <div className="slogan-align">
            <a rel="noopener noreferrer" className="link-contact" href="https://linkedin.com/in/jean-francois-sebagh/" target="_blank"><img className="pfp" alt="Profile Pic" src={Pfp}/></a>
            <div className="slogan">
                <a rel="noopener noreferrer" className="link-contact" href={"https://drive.google.com/file/d/1mQVWU_eqmBXeopVZ8EUZGYwOMFyT4K2Y/view"} target="_blank"><h1 className="name">JEAN-FRANCOIS SEBAGH</h1></a>
                <p className="code">&lt;<span className="div-color">div </span><span className="class-color">class</span>="software-engineer"&gt;</p>
                <p className="code">&lt;<span className="div-color">p</span>&gt;Full-Stack Web & CS Software Engineer&lt;<span className="div-color">&frasl;p</span>&gt;</p>
                <p className="code">&lt;<span className="div-color">&frasl;div</span>&gt;</p>
            </div>
        </div>
    )
}

export default Slogan