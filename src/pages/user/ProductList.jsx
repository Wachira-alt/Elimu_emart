import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../api/products";
import ProductCard from "../../components/product/ProductCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchAllProducts()
      .then(setProducts)
      .catch(err => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={p => addToCart(p, 1)}
          />
        ))}
      </div>
    </div>
  );
}
