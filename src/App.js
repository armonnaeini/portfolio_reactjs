import React, { useEffect } from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHome from './Components/MainHome';
import Body from './Components/Body';
import Numbers from './Components/Numbers';
import Fuego from './Components/Fuego';
import Media from './Components/Media';
import Meow from './Components/Meow';
import Giide from './Components/Giide';
import Filters from './Components/Filters';
import Sher from './Components/Sher';
import Pfa from './Components/Pfa';
import Mosh from './Components/Mosh';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
 

  return (
    <Router>
       <div className="App" >
        <Switch>
          <Route exact path="/" component={ MainHome }/>

          <Route path= "/body" component = { Body } key = "asdf"/>
          <Route path= "/numbers" component = { Numbers } key = "asdf"/>
          <Route path= "/fuego" component = { Fuego } key = "asdf"/>
          <Route path= "/media" component = { Media } key = "asdf"/>
          <Route path= "/meow" component = { Meow } key = "asdf"/>
          <Route path= "/giide" component = { Giide } key = "asdf"/>
          <Route path= "/filters" component = { Filters } key = "asdf"/>
          <Route path= "/sher" component = { Sher } key = "asdf"/>
          <Route path= "/pfa" component = { Pfa } key = "asdf"/>
          <Route path= "/mosh" component = { Mosh } key = "asdf"/>



        </Switch>
      </div>
    </Router>
   
  
  );
}



export default App;
