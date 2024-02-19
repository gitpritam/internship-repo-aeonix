import React, { useEffect } from "react";

const CustomModal = ({
  formDetails,
  handleFieldChange,
  handleEditProductForm,
  addingStatus,
  setAddingStatus,
}) => {
  useEffect(() => {
    if (addingStatus === true)
      setTimeout(() => {
        setAddingStatus(false);
      }, 1500);
  }, [addingStatus, setAddingStatus]);

  return (
    <div
      className="modal fade"
      id="editProductModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Edit Product Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleEditProductForm}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  id="productName"
                  autoFocus
                  required
                  type="text"
                  className="form-control"
                  aria-describedby="productNameHelp"
                  name="name"
                  value={formDetails.name}
                  onChange={handleFieldChange}
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
                  type="number"
                  className="form-control"
                  aria-describedby="productPriceHelp"
                  name="price"
                  value={formDetails.price}
                  onChange={handleFieldChange}
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
              <div className="alert alert-success my-3" role="alert">
                Product Added Successfully!
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
