import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../../components/checkout/CheckoutForm";

export default function CheckoutPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleCheckout = (values) => {
    console.log("Order Placed", {
      customer: values,
      items: cartItems,
    });

    alert("Order placed successfully!");

    // Clear cart
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <CheckoutForm onSubmit={handleCheckout} />
    </div>
  );
}
