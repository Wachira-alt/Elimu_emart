const ProductCard = ({ product }) => (
  <div className="border rounded-xl p-4 bg-white shadow-sm">
    <img src={product.image_url} alt={product.title} className="w-full h-40 object-cover mb-2 rounded" />
    <h3 className="font-bold text-lg">{product.title}</h3>
    <p className="text-sm text-gray-600">{product.description}</p>
    <p className="text-blue-600 font-semibold mt-2">Ksh {product.price}</p>
    <p className="text-sm text-gray-500">Stock: {product.stock}</p>
  </div>
);

export default ProductCard;
