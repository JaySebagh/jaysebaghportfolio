import React, { Fragment } from 'react';
import './App.css';
import Pfp from './images/pfp.jpeg';
import IntroImg from './images/intro.jpg';
import SkillsImg from './images/skills.jpg';
import ProjectsImg from './images/projects.jpg';
import Modal from 'react-modal';
import { ModalProvider, ModalConsumer } from './ModalContext';
import ModalRoot from './ModalRoot';
import ProjectCard from './components/ProjectCard';
import projectsData from './projectsData';

const Intro = ({ onRequestClose, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
    <button onClick={onRequestClose} className="modal-close">&times;</button><p className="title">INTRO</p>
    <div>
      <img src={IntroImg} alt="Intro" className="responsive-image"/>
      <p>Full-Stack Software Engineer who is passionate about creating applications using the latest technologies, learning new things, and expanding knowledge about coding.</p>

      <p>Seeking work opportunities with a knowledgeable, friendly, and collaborative team environment.</p>
    </div>
  </Modal>
);

const Skills = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
    <button onClick={onRequestClose} className="modal-close">&times;</button><p className="title">SKILLS</p>
    <div>
      <img src={SkillsImg} alt="Skills" className="responsive-image"/>
      <p>Languages:</p>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Django</li>
      </ul>

      <p>Frameworks/Other:</p>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Hooks</li>
        <li>Sass</li>
        <li>Node.js</li>
        <li>Jest</li>
        <li>Heroku</li>
        <li>Netlify</li>
        <li>Next.js</li>
      </ul>
    </div>
  </Modal>
);

const Projects = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
    <button onClick={onRequestClose} className="modal-close">&times;</button><p className="title">PROJECTS</p>
    <div>
      <img src={ProjectsImg} alt="Projects" className="responsive-image"/>
      {projectsData.map(data => {return <ProjectCard data={data} />})}
    </div>
  </Modal>
);

const Contact = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style msc">
    <button onClick={onRequestClose} className="modal-close">&times;</button>
    <div className="responsive-center">
      <p className="title center-contact contact-margin">CONTACT</p>
      <div className="center-contact">
        <ul className="contact li-no-indent">
          <li><a rel="noopener noreferrer" href="https://github.com/jaysebagh/" target="_blank" className="contact-info"><i class="fab fa-github"></i> GITHUB</a></li>
          <li><a rel="noopener noreferrer" href="https://linkedin.com/in/jean-francois-sebagh/" target="_blank" className="contact-info"><i class="fab fa-linkedin"></i> LINKEDIN</a></li>
          <li><a rel="noopener noreferrer" href="https://drive.google.com/file/d/1mQVWU_eqmBXeopVZ8EUZGYwOMFyT4K2Y/view" target="_blank" className="contact-info"><i class="far fa-file"></i> RESUME</a></li>
          <li><span className="contact-info"><i class="far fa-envelope"></i> EMAIL: </span>jaysebagh@gmail.com</li>
        </ul>
      </div>
    </div>
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
          <a rel="noopener noreferrer" className="link-contact" href="https://linkedin.com/in/jean-francois-sebagh/" target="_blank"><img className="pfp" alt="Profile Pic" src={Pfp}/></a>
          <div className="slogan">
            <a rel="noopener noreferrer" className="link-contact" href={"https://drive.google.com/file/d/1mQVWU_eqmBXeopVZ8EUZGYwOMFyT4K2Y/view"} target="_blank"><h1 className="name">JEAN-FRANCOIS SEBAGH</h1></a>
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
