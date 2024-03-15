import PropTypes from "prop-types";

const Product = ({ product, handleCartBtn }) => {
  const { image, title, description, price } = product;
  return (
    <div className="card">
      <div>
        <img src={image} alt="" />
        <h2>{title.slice(0, 10)}</h2>
        <p>{description.slice(0, 160)}</p>
      </div>
      <div className="card-footer">
        <h3>Price : {price} $</h3>
        <button onClick={() => handleCartBtn(product)} className="add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  handleCartBtn: PropTypes.func,
};

export default Product;
