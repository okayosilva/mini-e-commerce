"use client";
import { CartItem } from "@/app/components/cart/cartItem";
import { TemplatePage } from "@/app/components/template/templatePage";
import { useCart } from "@/data/hooks/useCart";
import { formatNumber } from "@/data/utils/formatNumber";

export default function PageCart() {
  const { itens } = useCart();
  return (
    <TemplatePage>
      <div className="flex flex-col gap-4">
        {itens.map((item) => (
          <CartItem key={item.produto.id} item={item} />
        ))}

        <div className="flex flex-col">
          <div className="flex items-center justify-between rounded-md border border-neutral-700 bg-neutral-950 px-6 py-4">
            <div className="">
              Valor total:{" "}
              <span className="font-semibold text-amber-400">
                {formatNumber(
                  itens.reduce(
                    (acc, item) => acc + item.produto.preco * item.quantidade,
                    0,
                  ),
                )}
              </span>
            </div>
            <button className="rounded-md border border-neutral-600 px-2 py-1 text-sm font-semibold text-neutral-100 transition-colors hover:bg-neutral-700">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </TemplatePage>
  );
}
