"use client";

import React from "react";
import { useState } from "react";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { Header } from "@/components/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_360px]">
      <div className="flex min-h-screen flex-col">
        <Header onOpenCart={() => setMobileCartOpen(true)} />
        <main className="container mx-auto w-full max-w-6xl p-4 md:p-6">
          {children}
        </main>
      </div>
      <CartSidebar
        openMobile={mobileCartOpen}
        onOpenChange={setMobileCartOpen}
      />
    </div>
  );
}
