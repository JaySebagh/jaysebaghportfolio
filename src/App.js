import React, { Fragment } from 'react';
import './App.css';
import Pfp from './images/pfp.jpeg';

import Modal from 'react-modal';
import { ModalProvider, ModalConsumer } from './ModalContext';
import ModalRoot from './ModalRoot';

const Intro = ({ onRequestClose, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
    <button onClick={onRequestClose} className="modal-close">&times;</button>
    <div>one</div>
  </Modal>
);

const Skills = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
    <button onClick={onRequestClose} className="modal-close">&times;</button>
    <div>two</div>
  </Modal>
);

const Projects = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
    <button onClick={onRequestClose} className="modal-close">&times;</button>
    <div>three</div>
  </Modal>
);

const Contact = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
    <button onClick={onRequestClose} className="modal-close">&times;</button>
    <div>four</div>
  </Modal>
);

const year = () => {
  return new Date().getFullYear()
}

function App() {
  return (
    <ModalProvider>
      <div className="app-container">
        <div className="app">
          <img className="pfp" alt="Profile Pic" src={Pfp}/>
          <div className="slogan">
            <h1 className="name">JEAN-FRANCOIS SEBAGH</h1>
            <p className="code">&lt;<span className="div-color">div </span><span className="class-color">class</span>="software-engineer"&gt;</p>
            <p className="code">&lt;<span className="div-color">p</span>&gt;Full-Stack Web & CS Software Engineer&lt;<span className="div-color">&frasl;p</span>&gt;</p>
            <p className="code">&lt;<span className="div-color">&frasl;div</span>&gt;</p>
          </div>
          <div className="modal-container">
            <ModalRoot />
            <ModalConsumer>
              {({ showModal }) => (
                <Fragment>
                  <ul className="info-ul">
                    <li className="info-li" onClick={() => showModal(Intro)}>Intro</li>
                    <li className="info-li" onClick={() => showModal(Skills)}>Skills</li>
                    <li className="info-li" onClick={() => showModal(Projects)}>Projects</li>
                    <li className="info-li" onClick={() => showModal(Contact)}>Contact</li>
                  </ul>
                </Fragment>
              )}
            </ModalConsumer>
          </div>
          <p className="footer">&copy;{year()} JEAN-FRANCOIS SEBAGH</p>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
