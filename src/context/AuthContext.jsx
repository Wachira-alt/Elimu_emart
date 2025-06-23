import { createContext, useState, useEffect } from "react";
import { registerUser, loginUser, fetchProfile } from "../api/auth";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);           // User info
  const [token, setToken] = useState(null);         // JWT token

  // Fetch user info from token
  const fetchUser = async (jwtToken) => {
    const { ok, data } = await fetchProfile(jwtToken);
    if (ok) {
      setUser(data);
      setToken(jwtToken);
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      logout(); // Token expired or invalid
    }
  };

  // Register new user and auto-login
  const register = async (username, email, password) => {
    const { ok, data } = await registerUser(username, email, password);
    if (ok) {
      fetchUser(data.access_token);
      return { success: true };
    } else {
      return { success: false, error: data.error };
    }
  };

  // Login user
  const login = async (email, password) => {
    const { ok, data } = await loginUser(email, password);
    if (ok) {
      fetchUser(data.access_token);
      return { success: true };
    } else {
      return { success: false, error: data.error };
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  // On load, check if token exists and fetch user
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      fetchUser(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      register,
      logout,
      isAdmin: user?.role === "admin"
    }}>
      {children}
    </AuthContext.Provider>
  );
};
