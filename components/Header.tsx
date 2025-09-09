"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const items = useCartStore((s) => s.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="font-semibold text-lg">
          Online Catalog
        </Link>
        <div className="flex items-center gap-2">
          <Button onClick={onOpenCart} variant="outline" className="md:hidden">
            <ShoppingCart className="mr-2 size-4" />
            <span>({count})</span>
          </Button>
          <div className="hidden md:flex text-sm text-muted-foreground">
            Artículos:{" "}
            <span className="ml-1 font-medium text-foreground">{count}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
