import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../header/header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce Page</title>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
