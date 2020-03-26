import React from 'react';
import {Route} from 'react-router-dom';
import Main from './components/Main/Main';
import "./App.css"
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Main}/>
    </div>
  );
}

export default App;
