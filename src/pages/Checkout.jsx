import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Footer, Navbar } from "../components";
import ShowCheckout from "./ShowCheckout";
import EmptyCart from "./EmptyCart";
import toast from "react-hot-toast";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AuthContext } from "./context/AuthContext";
import { firestore } from "../firebase/firebase";

const initialState = {
  firstName: '', lastName: '', email: '', address: '',
  country: '', state: '', zip: '', ccName: '', ccNumber: '', ccExpiration: '', ccCvv: ''
};

const Checkout = () => {
  const cartState = useSelector((state) => state.handleCart);
  const [formData, setFormData] = useState(initialState);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault()

    let { firstName, lastName, email, address,
      country, state, zip, ccName, ccNumber, ccExpiration, ccCvv } = formData

    if (firstName.length < 3) {
      toast.error('Please enter your name')
      return
    }
    if (!email) {
      toast.error('Please enter your email')
      return
    } if (!address) {
      toast.error('Please enter your home address')
      return
    } if (!country) {
      toast.error('Please select your country')
      return
    } if (!state) {
      toast.error('Please select your state')
      return
    } if (!zip) {
      toast.error('Please enter your zip code')
      return
    } if (ccName.length < 6) {
      toast.error('Please enter your card name')
      return
    } if (ccNumber.length < 3) {
      toast.error('Please enter your credit card number')
      return
    } if (ccExpiration.length < 7) {
      toast.error('Please enter card expiration')
      return
    }
    if (ccCvv.length < 7) {
      toast.error('Please enter card CVV')
      return
    }
    let orderData = {firstName, lastName, email, address, country,
      state, zip, ccName, ccNumber, ccExpiration, ccCvv
    }
    orderData.dateCreated = serverTimestamp()
    orderData.id = Math.random().toString(36).slice(2)
    orderData.status = 'active'
    createADocument(orderData)
  }

  const createADocument = async(orderData) => {

    try{
      await setDoc(doc(firestore, "orders", orderData.id), orderData); 
      
      toast.success("Your order has been confirmed successfull", "success")

    }catch(err){
      console.error(err)
      toast.error("Something went wrong, the order was not processed", "error");
    }
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {cartState.length ? (
          <ShowCheckout state={cartState} state1={formData} handleChange={handleChange} handleCheckout={handleCheckout} />
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
