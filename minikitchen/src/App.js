import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./component/home";
import Blog from "./component/blog";
import AddDish from "./component/addpro"
import Filter from './component/nav';
import Fade from "react-reveal"
import 'bootstrap/dist/css/bootstrap.css';
import Vid from './component/vid';
import Ima from './component/ima';
import Dish from './component/dish';



function App() {
  return (<div>
    <header id="home">
      
      <nav id="nav-wrap" className='navbar justify-content-center'>

        <ul id="nav" class="nav nav-tabs">

          <Link to="/"><li className="nav-item">
            <a className="smoothscroll nav-link active" href="#home">
              Home
            </a>
          </li></Link>

          <Link to="/dishes"><li className="nav-item">
            <a className="smoothscroll nav-link" href="#dishes">
              Dishes
            </a>
          </li></Link>

          <Link to="/add-dish"><li className="nav-item">
            <a className="smoothscroll nav-link" href="#add-dishes">
              Add dish
            </a>
          </li></Link>

          <Link to="/filter"><li className="nav-item">
            <a className="smoothscroll nav-link" href="#filter">
              Filter
            </a>
          </li></Link>
        </ul>
      </nav>
    </header>
    <Fade top>
      <Routes>
        <Route path="/" element={<div className='hi'><Vid /><Home /></div>} />
        <Route path="/dishes" element={<div className='hi'><Ima /><Blog /></div>} />
        <Route path="/add-dish" element={<div className='hi'><Ima /><AddDish /></div>} />
        <Route path="/filter" element={<div className='hi'><Ima /><Filter /></div>} />
      </Routes>
    </Fade>
  </div>
  );
}

export default App;
