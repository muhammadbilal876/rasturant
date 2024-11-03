import React from 'react'

const addproducts = () => {
  return (
    <section class=" gradient-custom">
  <div class="container p-0">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow border-0 card-registration" style={{borderRadius: "15px"}}>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-2 pb-2 pb-md-0 mb-md-5 fw-bold" style={{color: '#004658'}}>Add Product</h3>
            <form>
              <div class="row">
                <div class="col-12 mb-4">
                  <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="firstName">Product name</label>
                    <input type="text" id="firstName" class="form-control" />
                  </div>
                </div>
                <div class="col-12 mb-4">
                  <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="price">Product Price</label>
                    <input type="number" id="price" class="form-control" />
                  </div>
                </div>
                <div class="col-12 mb-4">
                  <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="lastName">Product description</label>
                    <textarea type="text" id="lastName" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 mb-4">
                  <h6 class="mb-2 pb-1">Product category: </h6>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked />
                    <label class="form-check-label" for="femaleGender">Men</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Women</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">jewelery</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Electronics</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <label class="form-label select-label">Upload Image</label>
                  <input type="file" id="fileUpload" name="fileUpload"/>
                </div>
              </div>

              <div class="mt-4 pt-2">
                <input data-mdb-ripple-init class="btn w-100 text-white" type="submit" value="Submit" style={{backgroundColor: '#004658'}}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default addproducts

