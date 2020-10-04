import React from 'react';
import classes from './App.module.css';

import Splash from './components/Splash';

function App() {
  return (
    <div className={classes.App}>
        <p>Counseling App</p>
        <Splash />
    </div>
  );
}

export default App;
