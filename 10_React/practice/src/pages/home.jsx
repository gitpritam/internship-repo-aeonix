import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productImage from "../images/product.png";
import api from "../services/api";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/product")
      .then((res) => {
        const { result } = res.data;
        setData(result);
        console.log(res.data.result);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <h2 className="text-center">Product List</h2>
          <hr />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 d-flex justify-content-center flex-wrap">
          {data &&
            data.map((item) => {
              return (
                <div
                  className="card mx-3 my-3"
                  style={{ width: "10rem" }}
                  key={item._id}
                >
                  <img
                    src={productImage}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <hr />
                  <Link to={`/product/${item._id}`}>
                    <div className="card-body">
                      <h5 className="card-title mb-3">{item.name}</h5>
                      <h6 className="card-subtitle mb-3">
                        Price: {item.price} ₹
                      </h6>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
