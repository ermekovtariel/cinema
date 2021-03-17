import React from 'react'
import { Degree, Header } from './components';
import { Esterday as Yesterday, Main, Tomorrow } from './pages';
import './styles/main.scss'

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Degree />
      <div className="content">
        <Route path='/a' component={Main} exact />
        <Route path='/Esterday' component={Yesterday} exact />
        <Route path='/Tomorrow' component={Tomorrow} exact />
      </div>
      <div className='categories'>
      </div>
    </div>
  );
}

export default App;