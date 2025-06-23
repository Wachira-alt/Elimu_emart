const BASE_URL = "http://localhost:5000/api";

// 🔐 REGISTER NEW USER
export const registerUser = async (username, email, password) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();
  return { ok: res.ok, data };
};

// 🔐 LOGIN USER
export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return { ok: res.ok, data };
};

// 🔐 GET PROFILE (Requires JWT)
export const fetchProfile = async (token) => {
  const res = await fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return { ok: res.ok, data };
};
