import type { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    // Revalidate periodically to keep fresh but cache-friendly
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Productos</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
