import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Data from '../assets/storeapi'

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     // const response = await fetch("https://fakestoreapi.com/products/");
  //     const response = await fetch(product);

  //     if (componentMounted) {
  //       const products = await response.json();
  //       setData(products);
  //       setFilter(products);
  //       setLoading(false);
  //     }
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   getProducts();
  // }, []);

  // Filter products live as user types
  useEffect(() => {
    const filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilter(filteredData);
  }, [searchQuery, data]);

  useEffect(() => {
    setLoading(true);
    setData(Data); 
    setFilter(Data);
    setLoading(false);
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
            All
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>
          Burgers & Sandwiches
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
          Pizza
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>
          BBQ & Gril
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>
          Desi Dishes
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            className="product-search"
            placeholder="Search for clothes, Jewelery, etc."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          /><button>SEARCH</button>
        </div>
        {filter.map((Data) => {
          return (
            <div id={Data.id} key={Data.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100 border-4">
                <img className="card-img-top p-2" id="product-image" src={Data.image} alt="Card" height={300} />
                <div className="card-body">
                  <h5 className="card-title">{Data.title.substring(0, 12)}...</h5>
                  <p className="card-text">{Data.description.substring(0, 90)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {Data.price}</li>
                </ul>
                <div className="card-body">
                  {/* <Link to={"/product/" + Data.id} className="btn text-white m-1" style={{ backgroundColor: '#027b9a' }}>
                    Buy Now
                  </Link> */}
                  <button
                    className="btn text-white m-1"
                    style={{ backgroundColor: '#027b9a' }}
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(Data);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;


