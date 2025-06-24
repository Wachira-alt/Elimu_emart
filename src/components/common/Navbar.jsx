import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navLink =
    "text-sm font-medium text-[#3B3A36] hover:text-[#6F4E37] transition duration-200";

  return (
    <nav className="bg-[#F5F3EA] shadow-md border-b border-[#E7E0CE]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Brand / Home */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-[#6F4E37] hover:text-[#5A3E2B] transition"
        >
          elimu<span className="text-[#3B3A36]">emart</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">

          {/* Public Pages */}
          <NavLink to="/products" className={navLink}>Products</NavLink>
          <NavLink to="/top-deals" className={navLink}>Hot Deals</NavLink>
          <NavLink to="/track-order" className={navLink}>Track Order</NavLink>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative text-[#3B3A36] hover:text-[#6F4E37] transition"
          >
            <span className="material-icons text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#6F4E37] text-white text-[10px] rounded-full px-[6px] py-[1px] shadow-inner">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Session Logic */}
          {user ? (
            <>
              {/* Admin Button */}
              {user.role === "admin" && (
                <button
                  onClick={() => navigate("/admin")}
                  className="text-xs bg-[#3B3A36] text-white px-3 py-1 rounded shadow hover:brightness-110"
                >
                  Admin
                </button>
              )}

              {/* User Menu */}
              <NavLink to="/profile" className={navLink}>{user.username}</NavLink>
              <NavLink to="/orders" className={navLink}>My Orders</NavLink>
              <NavLink to="/checkout" className={navLink}>Checkout</NavLink>

              <button
                onClick={logout}
                className="text-xs text-[#6F4E37] hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLink}>Login</NavLink>
              <NavLink to="/register" className={navLink}>Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
