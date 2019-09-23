import React from 'react';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import {HashRouter} from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
