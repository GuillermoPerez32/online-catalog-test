"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm">
      <Link href={`/products/${product.id}`} className="block p-4">
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
        <h3 className="mt-3 line-clamp-2 text-sm font-medium">
          {product.title}
        </h3>
        <p className="mt-1 text-base font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </Link>
      <div className="p-4 pt-0">
        <Button className="w-full" onClick={() => addItem(product)}>
          Añadir al Carrito
        </Button>
      </div>
    </div>
  );
}
