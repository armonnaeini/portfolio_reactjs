import React, { useEffect } from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import MainHome from './Components/MainHome';
import Body from './Components/Body';
import Numbers from './Components/Numbers';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  // const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     lerp: .2,
  //     multiplier: .1
  //   });
  // });



  return (
    <Router>
       <div className="App" >
        <NavBar / >
        <Switch>
          <Route exact path="/" component={ MainHome }/>
          <Route path= "/body" component = { Body } key = "asdf"/>
          <Route path= "/numbers" component = { Numbers } key = "asdf"/>

        </Switch>
      </div>
    </Router>
   
  
  );
}



export default App;
