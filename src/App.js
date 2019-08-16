import React from 'react';

import Profile from './components/Profile'
import Body from  './components/Body'

import './css/App.css';

function App({match}) {
  return (
    <div className="App">
      <Body />
       <Profile />
       {/* <Profile /> */}
    </div>
  );
}

export default App;

