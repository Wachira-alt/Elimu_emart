//for putting the fetch logic
const BASE_URL = "http://localhost:5000"; 

export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}