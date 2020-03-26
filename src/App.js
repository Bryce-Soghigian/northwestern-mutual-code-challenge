import React from 'react';
import {Route} from 'react-router-dom';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main}/>
      <Route exact path="/Earth"/>
    </div>
  );
}

export default App;
