import PropTypes from "prop-types";

const Product = ({ pd, handleCartBtn }) => {
  const { image, title, description, price } = pd;
  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title.slice(0, 10)}</h2>
      <p>{description}</p>
      <div className="card-footer">
        <h3>Price : {price}$</h3>
        <button onClick={() => handleCartBtn(pd)} className="add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  pd: PropTypes.object,
  handleCartBtn: PropTypes.func,
};

export default Product;
