"use client";
import { CartItem } from "@/app/components/cart/cartItem";
import { TemplatePage } from "@/app/components/template/templatePage";
import { useCart } from "@/data/hooks/useCart";

export default function PageCart() {
  const { itens } = useCart();
  return (
    <TemplatePage>
      <div className="flex flex-col gap-4">
        {itens.map((item) => (
          <CartItem key={item.produto.id} item={item} />
        ))}
      </div>
    </TemplatePage>
  );
}
