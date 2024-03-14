import "./App.css";
import { useEffect, useState } from "react";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../public/fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCartBtn = (pd) => {
    console.log(pd);
  };

  return (
    <>
      <div className="main-container">
        <div className="all-card">
          <div className="card-container">
            {products.map((pd) => (
              <Product handleCartBtn={handleCartBtn} pd={pd} key={pd.id} />
            ))}
          </div>
        </div>
        <div className="cart-container">
          <h2>This is Cart</h2>
        </div>
      </div>
    </>
  );
}

export default App;
