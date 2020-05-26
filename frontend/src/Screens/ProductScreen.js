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
      <div className="details"></div>
    </div>
  );
}
export default ProductScreen;
