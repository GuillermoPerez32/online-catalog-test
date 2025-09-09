"use client";

import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function CartSidebar({
  openMobile,
  onOpenChange,
}: {
  openMobile: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { items, increase, decrease, removeItem, total, clear } =
    useCartStore();

  // Avoid hydration mismatch by rendering neutral values until mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const viewItems = mounted ? items : [];
  const viewTotal = mounted ? total() : 0;

  const content = (
    <div className="flex h-full flex-col p-2">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Tu Carrito</h2>
        <div className="flex items-center gap-2">
          {viewItems.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clear} title="Vaciar">
              Vaciar
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="md:hidden"
            title="Cerrar"
          >
            <X className="size-5" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {viewItems.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No hay productos en el carrito.
          </p>
        ) : (
          viewItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-center border rounded-md p-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain rounded bg-secondary"
              />
              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  <span>${item.price.toFixed(2)}</span>
                  <span className="font-semibold">
                    {" -> "}${(item.quantity * item.price).toFixed(2)}
                  </span>
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => decrease(item.id)}
                  >
                    <Minus className="size-4" />
                  </Button>
                  <span className="min-w-6 text-center text-sm">
                    {item.quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => increase(item.id)}
                  >
                    <Plus className="size-4" />
                  </Button>
                  <Button
                    className="ml-auto text-destructive"
                    size="icon"
                    variant="link"
                    onClick={() => removeItem(item.id)}
                    title="Eliminar"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="border-t p-4">
        <div className="flex items-center justify-between text-sm mb-3">
          <span>Total</span>
          <span className="font-semibold">${viewTotal.toFixed(2)}</span>
        </div>
        <Button className="w-full" disabled={viewItems.length === 0}>
          Pagar
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden md:block border-l h-screen sticky top-0 bg-background">
        <div className="w-[360px] h-full">{content}</div>
      </aside>

      {openMobile && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => onOpenChange(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[90%] max-w-sm bg-background border-l shadow-xl animate-in slide-in-from-right">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
