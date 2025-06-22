export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">KSh {product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
