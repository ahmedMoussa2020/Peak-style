import { useContext } from "react";
import ProductCard from "../components/productCard";
import { ProductsContext } from "../contexts/Products_context";
import '../styles/Shop.styles.scss'
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
