import "./App.css";
import { useEffect, useState } from "react";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCartBtn = (product) => {
    const isExist = cart.find((pd) => pd.id == product.id);
    if (!isExist) {
      setCart([...cart, product]);
    } else {
      alert("Already exist");
    }
  };

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <div className="main-container">
      <div className="all-card">
        <div className="card-container">
          {products.map((product) => (
            <Product
              handleCartBtn={handleCartBtn}
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h2>This is Cart</h2>
        <div className="card-title">
          <h3>Name</h3>
          <h3>Price</h3>
        </div>
        <div className="cart-info">
          {cart.map((item, index) => (
            <div key={item.id} className="card-title">
              <p>{index + 1}</p>
              <h3>{item.title.slice(0, 10)}</h3>
              <h3>$ {item.price}</h3>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
