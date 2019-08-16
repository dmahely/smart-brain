import React from 'react';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Logo />
     {/*<ImageLinkForm />
     <FaceRecognition /> */}
    </div>
  );
}

export default App;
