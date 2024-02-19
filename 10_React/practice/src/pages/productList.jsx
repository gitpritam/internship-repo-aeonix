import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import CustomEditModal from "../components/CustomEditModal";

function ProductList() {
  const [editFormDetails, setEditFormDetails] = useState({
    _id: "",
    name: "",
    price: "",
  });
  const [data, setData] = useState([]);
  const [addingStatus, setAddingStatus] = useState(false);
  // const [targetData, setTargetData] = useState({});

  //get all product data
  useEffect(() => {
    api
      .get("/product")
      .then((res) => {
        const { result } = res.data;
        setData(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  //get the clicked row value
  const targetProduct = (event) => {
    const row = event.target.closest("tr");
    const index = row.dataset.index;
    const { _id, name, price } = data[index];

    setEditFormDetails({ _id, name, price });
  };

  //handle field onchange event
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    // functional update - with the help of previous value in the state we are updating
    setEditFormDetails((prev) => ({ ...prev, [name]: value }));
    console.log(editFormDetails);
  };

  //handle edit form submission
  const handleEditProductForm = async (event) => {
    event.preventDefault();
    try {
      console.log(editFormDetails);
      const response = await api.patch(
        `/product/${editFormDetails._id}`,
        editFormDetails
      );
      if (response) {
        if (response.status === 200) {
          const updatedList = data.map((item) =>
            item._id === editFormDetails._id ? editFormDetails : item
          );
          setAddingStatus(true);
          setData(updatedList);
          //reset filed value
          setEditFormDetails({ ...editFormDetails, name: "", price: "" });
        } else {
          alert("Something went wrong");
        }
      }
    } catch (error) {
      alert("Something went wrong", error.message);
    }
  };
  //handle delete form submission
  const handleDeleteProduct = async (event) => {
    event.preventDefault();
    try {
      const response = await api.delete(`/product/${editFormDetails._id}`);
      if (response.status === 204) {
        const updatedList = data.filter((item) => {
          return item._id !== editFormDetails._id;
        });
        alert("Product Deleted Successfully");
        setData(updatedList);
      } else alert("Something went wrong");
    } catch (error) {
      alert("Something went wrong", error.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1>All Product List</h1>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead className="table-dark .sticky-top">
                  <tr>
                    <th scope="col">Link</th>
                    <th scope="col" className="text-start">
                      Product Name
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col" colSpan={2}>
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item, index) => {
                      return (
                        <tr
                          key={item._id}
                          data-index={index}
                          className="align-middle"
                        >
                          <td>
                            <Link to={`/product/${item._id}`}>
                              <i className="bi bi-box-arrow-up-right"></i>
                            </Link>
                          </td>
                          <td className="text-start">{item.name}</td>
                          <td className="text-end">{item.price} </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-secondary mx-1"
                              data-bs-toggle="modal"
                              data-bs-target="#editProductModal"
                              onClick={targetProduct}
                            >
                              <i className="bi bi-pencil-square"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger mx-1"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteProductModal"
                              onClick={targetProduct}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* modal for editing */}
      <CustomEditModal
        formDetails={editFormDetails}
        handleEditProductForm={handleEditProductForm}
        handleFieldChange={handleFieldChange}
        addingStatus={addingStatus}
        setAddingStatus={setAddingStatus}
      />

      {/* modal for deleting */}
      <div
        className="modal fade"
        id="deleteProductModal"
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
                Delete Product?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to delete?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleDeleteProduct}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
