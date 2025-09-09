import { API_BASE_URL, API_REVALIDATE } from "./constants";

const getProduct = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    next: { revalidate: API_REVALIDATE },
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

const getProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: API_REVALIDATE },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  ("");
  return res.json();
};

export { getProduct, getProducts };
