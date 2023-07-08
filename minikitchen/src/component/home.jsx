import React from "react";
import Fade from "react-reveal"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



const Home = () => {
  return (<div className="cont">
    <div className="row banner">
      <div className="banner-text">
        <Fade left>
          <h1 className="gg container responsive-headline">Delicious and Easy-to-Make Home-Cooked Meals</h1>
        </Fade>
        <br />
        <Fade left>
          <div className="container font-weight-light">Cooking at home can be a fun and rewarding activity, whether you're an experienced chef or just starting out in the kitchen. It's a great way to save money, eat healthier, and try out new recipes. Plus, there's something special about sharing a home-cooked meal with your loved ones.</div>
        </Fade>
        <br />
        <hr />
        <Fade left>
          <div className="lol justify-content-center">
            <Link to="/dishes"><div className="btn btn-outline-primary" data-bs-toggle="button">
              Dishes
            </div></Link>
            <Link to="/add-dish"><div className="btn btn-outline-primary " data-bs-toggle="button">
              Add dish
            </div></Link>
          </div>
        </Fade>
      </div>
    </div>
  </div>);
}

export default Home