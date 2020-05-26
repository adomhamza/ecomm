import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product-image"></img>
        </div>
        <div className="details-info"></div>
      </div>
    </div>
  );
}
export default ProductScreen;
