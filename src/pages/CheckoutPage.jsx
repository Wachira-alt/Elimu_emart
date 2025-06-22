import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = (values) => {
    // You will replace this mock with a real POST to /orders endpoint
    console.log("✅ Order placed:", {
      customer: values,
      items: cartItems,
      total,
    });

    alert("Order placed successfully! (Mocked)");

    // Clear cart
    setCartItems([]);
    localStorage.removeItem("cart");

    // Redirect to homepage or profile
    navigate("/profile");
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">🛒 Your cart is empty</h2>
        <p className="text-gray-600 mt-2">Add items before proceeding to checkout.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Order Summary */}
      <div className="border p-4 mb-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <ul className="divide-y">
          {cartItems.map(item => (
            <li key={item.id} className="py-2 flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span className="font-medium">KSh {(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right font-bold text-lg">
          Total: KSh {total.toFixed(2)}
        </div>
      </div>

      {/* Checkout Form */}
      <CheckoutForm onSubmit={handleCheckout} />
    </div>
  );
}
