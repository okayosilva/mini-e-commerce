"use client";
import { useCart } from "@/data/hooks/useCart";
import { Product } from "@/data/model/product";
import Image from "next/image";

export type CardProductProps = {
  product: Product;
};

export function CardProduct({ product }: CardProductProps) {
  const { handleAddItem } = useCart();
  const { id, nome, preco, descricao, imagemUrl } = product;
  return (
    <div className="flex w-72 flex-col overflow-hidden rounded-md bg-neutral-800">
      <div className="relative h-52 w-72">
        <Image src={imagemUrl} fill alt={nome} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-lg font-semibold text-zinc-50">{nome}</h3>
        <p className="flex-1 text-sm text-gray-400">{descricao}</p>
        <div className="flex h-8 items-center justify-between">
          <p className="text-lg font-semibold">R$ {preco.toFixed(2)}</p>
          <button
            className="rounded-md border border-neutral-600 px-2 py-1 text-sm font-semibold text-neutral-100 transition-colors hover:bg-neutral-700"
            onClick={() => handleAddItem(product)}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
