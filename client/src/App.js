import React from "react";
import { Route } from "react-router-dom";

import Landing from "./componentes/Landing/Landing.jsx";
import NavBar from './componentes/NavBar/NavBar.jsx';
import Home from "./componentes/Home/Home.jsx"
import About from "./componentes/About/About.jsx"
import Create from "./componentes/Create/Create.jsx"
import MyList from "./componentes/MyList/MyList.jsx";
import CountriesDetail from "./componentes/CountriesDetail/CountriesDetail.jsx"


import "./app.css";



function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Landing} />


      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} /> 

      <Route path="/create" component={NavBar} />
      <Route path="/create" component={Create} /> 

      <Route path="/about" component={NavBar} />
      <Route path="/about" component={About} />

      <Route path="/mylist" component={NavBar} />
      <Route path="/mylist" component={MyList}/>


      <Route exact path="/detail/:id" component={NavBar} />
      <Route path="/detail/:id" component={CountriesDetail} />



    </React.Fragment>
  );
}

export default App;
