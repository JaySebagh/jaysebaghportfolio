import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App">
        <div className="Slogan">
          <h1 className="Name">JAY SEBAGH</h1>
          <p className="Code">&lt;<span className="Div-color">div </span><span className="Class-color">Class</span>="software-engineer"&gt;</p>
          <p className="Code">&lt;<span className="Div-color">p</span>&gt;Full-Stack Web & Computer Science Software Engineer&lt;<span className="Div-color">&frasl;p</span>&gt;</p>
          <p className="Code">&lt;<span className="Div-color">&frasl;div</span>&gt;</p>
        </div>
        <div className="Info-container">
          <ul className="Info-ul">
            <li className="Info-li">Intro</li>
            <li className="Info-li">Skills</li>
            <li className="Info-li">Projects</li>
            <li className="Info-li">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
