import React from 'react';

import Profile from './components/profile'
import Body from  './components/body'

import './css/App.css';

function App() {
  return (
    <div className="App">
       <Body />
       <Profile />
       {/* <Profile /> */}
    </div>
  );
}

export default App;

