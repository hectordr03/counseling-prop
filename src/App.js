import React from 'react';
import classes from './App.module.css';

import Splash from './components/Splash';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className={classes.App}>
        <p>Counseling App</p>
        <Nav />
        <Splash />
    </div>
  );
}

export default App;
