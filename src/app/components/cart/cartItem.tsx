import { useCart } from "@/data/hooks/useCart";
import { ItemCart } from "@/data/model/itemCart";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";

type CartItemProps = {
  item: ItemCart;
};

export function CartItem({ item }: CartItemProps) {
  const { handleAddItem } = useCart();
  const { produto, quantidade } = item;
  const { id, nome, preco, imagemUrl, descricao } = produto;

  return (
    <div className="rounded-md border border-neutral-700 bg-neutral-950 px-6 py-4">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="min-h-auto relative max-h-24 w-32 overflow-hidden rounded-sm">
            <Image src={imagemUrl} fill alt={nome} className="object-cover" />
          </div>
          <div className="">
            <p className="text-lg font-semibold text-neutral-200">{nome}</p>
            <span className="flex-wrap text-sm text-neutral-400">
              {descricao}
            </span>
            <div className="mt-2">
              <span className="text-lg font-semibold text-neutral-200">
                R$ {preco.toFixed(2)}
              </span>
              <span className="text-sm text-neutral-400"> x {quantidade}</span>
            </div>
          </div>
        </div>
        <div className="flex w-fit items-center justify-center">
          <div className="flex justify-between rounded-sm bg-neutral-700">
            <button
              className="px-2 text-neutral-200"
              onClick={() => handleAddItem(produto)}
            >
              <IconMinus size={20} />
            </button>
            <span className="bg-black px-4 text-neutral-200">{quantidade}</span>
            <button
              className="px-2 text-neutral-200"
              onClick={() => handleAddItem(produto)}
            >
              <IconPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
