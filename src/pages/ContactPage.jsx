import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container my-4">
        <h1 className="contact-title">Contact Us</h1>
        <hr className="contact-divider" />
        <div className="contact-form-container">
          <div className="form-wrapper">
            <form>
              <div className="form-group">
                <label htmlFor="Name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Message" className="form-label">Message</label>
                <textarea
                  rows={3}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="submit-btn"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
