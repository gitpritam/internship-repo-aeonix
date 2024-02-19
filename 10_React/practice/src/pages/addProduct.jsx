import React, { useEffect, useState } from "react";
import api from "../services/api";

function AddProduct() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    price: "",
  });
  const [addingStatus, setAddingStatus] = useState(false);

  const handleInputFieldChange = (event) => {
    const { name, value } = event.target;
    // functional update - with the help of previous value in the state we are updating
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, price } = formDetails;
      const productDetailsPayload = {
        name,
        price,
      };
      const response = await api.post("/product", productDetailsPayload);
      if (response) {
        const { status } = response;
        if (status === 201) setAddingStatus(true);
        else alert("Opps something went wrong");
        setFormDetails({});
      }
    } catch (error) {
      alert("Opps something went wrong", error.message);
    }
  };

  useEffect(() => {
    if (addingStatus)
      setTimeout(() => {
        setAddingStatus(false);
      }, 1000);
  }, [addingStatus]);

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h1>Add Product Details</h1>
          <hr />
        </div>
      </div>
      <div className="row ">
        <div className="col">
          <form onSubmit={handleFormSubmit} className="my-4">
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                name="name"
                autoFocus
                required
                type="text"
                className="form-control"
                aria-describedby="productNameHelp"
                value={formDetails.name}
                onChange={handleInputFieldChange}
              />
              <div className="form-text" id="productNameHelp">
                Product Name is mandetory.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Price
              </label>
              <input
                required
                name="price"
                type="text"
                className="form-control"
                aria-describedby="productPriceHelp"
                value={formDetails.price}
                onChange={handleInputFieldChange}
              />
              <div className="form-text" id="productPriceHelp">
                Product Name is mandetory.
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {addingStatus && (
            <div className="alert alert-success" role="alert">
              Product Added Successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
