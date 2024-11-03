import React from "react";
// import img from '../assets/'
import img from '../assets/hero.jpg'

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={img}
            alt="Card"
            height={200}
            // style={{height:'450px',backgroundSize:'cover'}}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container hero-text">
              {/* <h1 id="text">Your Online Shop</h1>
              <p className="card-text fs-5 d-none d-sm-block ">
              24/7 Shop and Deliver anytime!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
