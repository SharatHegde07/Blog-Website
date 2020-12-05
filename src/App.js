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
import Reset from "./components/reset.component";
import CreateAcc from "./components/CreateAcc";
function App() {
  return (
    <Router>
      <div className="bg-warning">
      <Navbar />
      <Route path="/about" component={about} />
      <Route path="/login" component={login} />
      <Route path="/create" component={CreateArticles}/>
      <Route path="/Reset" component={Reset}/>
      <Route exact path="/" component={Home}/>
      <Route path="/CreateAcc" component={CreateAcc}/>

      </div>
    </Router>
  );
}

export default App;
