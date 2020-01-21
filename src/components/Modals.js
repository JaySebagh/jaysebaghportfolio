import React, { Fragment } from 'react';
import { ModalConsumer } from './ModalContext';
import ModalRoot from './ModalRoot';
import IntroImg from '../images/intro.jpg';
import SkillsImg from '../images/skills.jpg';
import ProjectsImg from '../images/projects.jpg';
import Modal from 'react-modal';
import ProjectCard from './ProjectCard';
import projectsData from '../projectsData';

const Intro = ({ onRequestClose, ...otherProps }) => (
    <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
      <div className="mobile-padding">
        <button onClick={onRequestClose} className="modal-close">&times;</button><p className="title">INTRO</p>
        <div>
          <img src={IntroImg} alt="Intro" className="responsive-image"/>
          <p>Full-Stack Software Engineer who is passionate about creating applications using the latest technologies, learning new things, and expanding knowledge about coding.</p>
          <p>Since a young age, my father has introduced me to computers. Ever since then, working in the tech industry has been a dream.</p>
          <p>Seeking work opportunities with a knowledgeable, friendly, and collaborative team environment.</p>
        </div>
      </div>
    </Modal>
  );
  
  const Skills = ({ onRequestClose, foo, ...otherProps }) => (
    <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
      <div className="mobile-padding">
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
            <l1>Supertest</l1>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
  
  const Projects = ({ onRequestClose, foo, ...otherProps }) => (
    <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style">
      <div className="mobile-padding">
        <button onClick={onRequestClose} className="modal-close">&times;</button><p className="title">PROJECTS</p>
        <div>
          <img src={ProjectsImg} alt="Projects" className="responsive-image"/>
          {projectsData.map(data => {return <ProjectCard data={data} />})}
        </div>
      </div>
    </Modal>
  );
  
  const Contact = ({ onRequestClose, foo, ...otherProps }) => (
    <Modal style={{overlay: {backgroundColor: 'none'}}} isOpen onRequestClose={onRequestClose} {...otherProps} className="modal-style msc">
      <div className="mobile-padding">
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
      </div>
    </Modal>
  );

const Modals = () => {
    return (
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
    )
}

export default Modals