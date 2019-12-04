import React from 'react';
import './App.css';
import Slogan from './components/Slogan'
import { ModalProvider } from './components/ModalContext';
import Modals from './components/Modals';
import Footer from './components/Footer';

function App() {
  return (
    <ModalProvider>
      <div className="app-container">
        <div className="app">
          {/* THIS IS A TEST */}
          <Slogan />
          <Modals />
          <Footer />
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
