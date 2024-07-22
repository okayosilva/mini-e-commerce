"use client";
import { CartItem } from "@/app/components/cart/cartItem";
import { TemplatePage } from "@/app/components/template/templatePage";
import { useCart } from "@/data/hooks/useCart";
import { formatNumber } from "@/data/utils/formatNumber";
import {
  IconShoppingBag,
  IconShoppingCart,
  IconTrash,
  IconTrashFilled,
} from "@tabler/icons-react";

export default function PageCart() {
  const { itens, handleClearCart } = useCart();
  return (
    <TemplatePage>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between rounded-md border border-neutral-700 bg-neutral-950 px-6 py-4">
          <span className="text-lg font-semibold">Lista de compras</span>
          {itens.length !== 0 && (
            <button className="group rounded-sm border border-neutral-700 px-2 py-2 transition-all hover:bg-neutral-700">
              <IconTrash
                size={20}
                className="text-neutral-200 transition-all group-hover:text-red-500"
                onClick={() => handleClearCart()}
              />
            </button>
          )}
        </div>
        {itens.map((item) => (
          <CartItem key={item.produto.id} item={item} />
        ))}

        {itens.length === 0 && (
          <div className="flex h-96 flex-col items-center justify-center gap-3 rounded-md border border-neutral-700 bg-neutral-950 px-6 py-6">
            <IconShoppingCart size={60} className="text-neutral-400" />
            <span className="text-lg font-semibold text-neutral-400">
              Carrinho vazio
            </span>
          </div>
        )}

        {itens.length !== 0 && (
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
        )}
      </div>
    </TemplatePage>
  );
}
