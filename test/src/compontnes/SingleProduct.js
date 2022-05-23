import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { ProductId } = useParams()
  console.log(ProductId);
  return (
    <section className="section product">
      <h1>{ProductId}</h1>
      <Link to="/products">back to Products</Link>
    </section>
  );
};

export default SingleProduct;
