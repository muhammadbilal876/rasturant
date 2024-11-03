// BillingForm.js
import React from "react";
import toast from "react-hot-toast";

const BillingForm = ({ state1, handleChange, handleCheckout }) => {

 
    return (
        <div className="card mb-4 border-0 shadow">
            <div className="card-header py-3 mb-4 text-white" style={{ backgroundColor: '#004658' }}>
                <h4 className="mb-0">Billing address</h4>
            </div>
            <div className="card-body">
                <form className="needs-validation" onSubmit={handleCheckout}>
                    <div className="row g-3">
                        <div className="col-sm-6 my-1">
                            <label for="firstName">
                                First name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                placeholder="muhammad"
                                onChange={handleChange}
                                value={state1.firstName}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6 my-1">
                            <label for="lastName">
                                Last name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                placeholder="ahmad"
                                onChange={handleChange}
                                value={state1.lastName}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-12 my-1">
                            <label for="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="you@example.com"
                                onChange={handleChange}
                                value={state1.email}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping
                                updates.
                            </div>
                        </div>

                        <div className="col-12 my-1">
                            <label for="address">
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                placeholder="1234 Main St"
                                onChange={handleChange}
                                value={state1.address}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="col-12">
                            <label for="address2">
                                Address 2{" "}
                                <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="address2"
                                placeholder="Apartment or suite"
                            />
                        </div>

                        <div className="col-md-5 my-1">
                            <label for="country">
                                Country
                            </label>
                            <br />
                            <select className="form-select" name="country"
                                onChange={handleChange}
                                value={state1.country}
                            // autoFocus
                            >
                                <option value="">Choose...</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Australia</option>
                                <option>UK</option>
                                <option>Brazil</option>
                                <option>Switzerland</option>
                                <option>Spain</option>
                                <option>Ukraine</option>
                                <option>Slovenia</option>
                                <option>Russia</option>
                                <option>Netherlands</option>
                                <option>Poland</option>
                                <option>Portugal</option>
                                <option>Romania</option>

                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>

                        <div className="col-md-4 my-1">
                            <label for="state">
                                State
                            </label>
                            <br />
                            <select className="form-select" name="state" onChange={handleChange}
                                value={state1.state}
                            //  autoFocus
                            >
                                <option value="">Choose...</option>
                                <option>Vienna</option>
                                <option>Copenhagen</option>
                                <option>Helsinki</option>
                                <option>Paris</option>
                                <option>Berlin</option>
                                <option>Dublin</option>
                                <option>Rome</option>
                                <option>Monaco</option>
                                <option>Oslo</option>
                                <option>Lisbon</option>
                                <option>Moscow</option>
                                <option>Bratislava</option>
                                <option>Stockholm</option>
                                <option>Bern</option>

                            </select>
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>

                        <div className="col-md-3 my-1">
                            <label for="zip">
                                Zip
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="zip"
                                placeholder=""
                                onChange={handleChange}
                                value={state1.zip}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label for="cc-name">
                                Name on card
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="ccName"
                                placeholder=""
                                onChange={handleChange}
                                value={state1.ccName}
                            // autoFocus
                            />
                            <small className="text-muted">
                                Full name as displayed on card
                            </small>
                            <div className="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label for="cc-number">
                                Credit card number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="ccNumber"
                                placeholder=""
                                onChange={handleChange}
                                value={state1.ccNumber}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="cc-expiration">
                                Expiration
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="ccExpiration"
                                placeholder=""
                                onChange={handleChange}
                                value={state1.ccExpiration}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="cc-cvv">
                                CVV
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="ccCvv"
                                placeholder=""
                                onChange={handleChange}
                                value={state1.ccCvv}
                            // autoFocus
                            />
                            <div className="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <button
                        className="w-100 btn text-white" style={{ backgroundColor: '#004658', }}
                        type="submit">
                        Continue to checkout
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BillingForm;
