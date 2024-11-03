import React from 'react'
import { Footer, Navbar } from "../components";
import img from '../assets/pexels-norma-mortenson-4393668.jpg'
import burger from '../assets/burger.jpg'
import desi from '../assets/tandori.jpeg'
import BBQ from '../assets/images (1).jpeg'
import pizza from '../assets/images.jpeg'
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container1 my-3 py-3 mx-5">
        <section class="about-us">
      <div class="about">
        <div className="left">
        <img src={img} style={{height:'450px',marginRight: "50px",width:'450px'}} class="pic" />
        </div>
        <div className="right">
        <div class="text">
          <h2>About Us</h2>
          <h5>Your Online <span>Shop</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
          <div class="data">
            <a class="hire text-white">Contact Us</a>
          </div>
        </div>
        </div>
      </div>
    </section>
        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={burger} alt="" height={160} style={{height:'200px'}}/>
              <div className="card-body">
                <h5 className="card-title text-center">Burgers & Sandwiches</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={pizza} alt="" height={160} style={{height:'200px'}}/>
              <div className="card-body">
                <h5 className="card-title text-center">Pizza</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={BBQ} alt="" height={200}style={{height:'200px'}}/>
              <div className="card-body">
                <h5 className="card-title text-center">BBQ & Gril</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={desi} alt="" height={160} style={{height:'200px'}}/>
              <div className="card-body">
                <h5 className="card-title text-center">Desi Dishes</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage