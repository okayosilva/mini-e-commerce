import { useCart } from "@/data/hooks/useCart";
import { ItemCart } from "@/data/model/itemCart";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

type CartItemProps = {
  item: ItemCart;
};

export function CartItem({ item }: CartItemProps) {
  const { handleAddItem, handleRemoveItem } = useCart();
  const { produto, quantidade } = item;
  const { id, nome, preco, imagemUrl, descricao } = produto;

  return (
    <div className="rounded-md border border-neutral-700 bg-neutral-950 px-6 py-4">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap gap-4">
          <div className="min-h-24 relative max-h-24 w-32 overflow-hidden rounded-sm">
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
        <div className="flex items-center justify-center">
          <div className="flex flex-1 flex-wrap justify-between">
            {quantidade >= 2 ? (
              <button
                className="rounded-l-sm-sm w-11 rounded-l-sm bg-neutral-700 text-neutral-200"
                onClick={() => handleRemoveItem(produto)}
              >
                <IconMinus size={20} className="m-auto" />
              </button>
            ) : (
              <button
                className="w-11 rounded-l-sm bg-neutral-700 text-neutral-200 transition-colors hover:text-red-500"
                onClick={() => handleRemoveItem(produto)}
              >
                <IconTrash size={20} className="m-auto" />
              </button>
            )}

            <span className="flex-1 bg-black px-4 text-center text-neutral-200">
              {quantidade}
            </span>
            <button
              className="w-11 rounded-r-sm bg-neutral-700 text-neutral-200"
              onClick={() => handleAddItem(produto)}
            >
              <IconPlus size={20} className="m-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
