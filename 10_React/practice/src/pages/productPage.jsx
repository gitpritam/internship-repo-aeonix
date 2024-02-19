import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductPage() {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    api.get(`/product/${id}`).then((response) => {
      const { data, status } = response;

      if (status !== 200) return;
      if (status === 200) {
        const { result } = data;
        setData(result);
      }
    });
  }, [id]);

  return (
    <div>
      {data.name} {data.price}
    </div>
  );
}

export default ProductPage;
