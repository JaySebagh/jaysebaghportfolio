import React from 'react';
import './App.css';
import Pfp from './images/pfp.jpeg';

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <img className="pfp" src={Pfp}/>
        <div className="slogan">
          <h1 className="name">JEAN-FRANCOIS SEBAGH</h1>
          <p className="code">&lt;<span className="div-color">div </span><span className="class-color">class</span>="software-engineer"&gt;</p>
          <p className="code">&lt;<span className="div-color">p</span>&gt;Full-Stack Web & CS Software Engineer&lt;<span className="div-color">&frasl;p</span>&gt;</p>
          <p className="code">&lt;<span className="div-color">&frasl;div</span>&gt;</p>
        </div>
        <div className="info-container">
          <ul className="info-ul">
            <li className="info-li">Intro</li>
            <li className="info-li">Skills</li>
            <li className="info-li">Projects</li>
            <li className="info-li">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
