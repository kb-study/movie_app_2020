import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Detail from './components/Detail';


function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;