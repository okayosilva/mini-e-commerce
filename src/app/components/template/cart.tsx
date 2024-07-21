"use client";
import { useCart } from "@/data/hooks/useCart";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export function Cart() {
  const { quantityItems } = useCart();
  return (
    <Link href="/cart">
      <div className="relative">
        <IconShoppingCart size={32} stroke={1} />
        {quantityItems > 0 && (
          <span className="absolute -left-2 -top-2 flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 p-2 text-xs">
              {quantityItems}
            </span>
          </span>
        )}
      </div>
    </Link>
  );
}
