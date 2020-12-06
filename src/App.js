//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import about from "./components/about.component";
import Home from "./components/home.component"
import login from "./components/login.component";
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from "./components/navbar.component";
import CreateArticles from "./components/createArticle.component"
import CreateAcc from "./components/CreateAcc";

function App() {
  return (
    <Router>
      <div className="bg-warning">
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={about} />
      <Route path="/create-account" component={CreateAcc}/>
      
      <Route path="/create-article" component={CreateArticles}/>
      <Route path="/login" component={login}/>

      </div>
    </Router>
  );
}

export default App;
