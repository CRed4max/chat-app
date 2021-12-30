import React, { useRef, useState } from 'react';

import { Home } from './components/Home';

import Chatroom from './components/Chatroom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Join } from './components/Join';


function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        rekkrejkl
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>  
      <Route exact path="/about/:groupId">
        <Chatroom></Chatroom>
      </Route>  
      <Route exact path="/join">
        <Join></Join>
      </Route> 
    </Switch>
    </BrowserRouter>
    )
}


export default App;