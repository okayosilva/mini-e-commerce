"use client";
import { createContext, useState } from "react";
import { ItemCart } from "../model/itemCart";
import { Product } from "../model/product";

type ContextCartProps = {
  itens: ItemCart[];
  quantityItems: number;
  handleAddItem: (item: Product) => void;
};

const ContextCart = createContext<ContextCartProps>({} as any);

export function ProviderCart({ children }: any) {
  const [itens, setItens] = useState<ItemCart[]>([]);

  function handleAddItem(product: Product) {
    const indice = itens.findIndex((i) => i.produto.id === product.id);
    
    if (indice === -1) {
      setItens([...itens, { produto: product, quantidade: 1 }]);
    } else {
      const newItens = [...itens];
      newItens[indice].quantidade += 1;
      setItens(newItens);
    }
  }

  return (
    <ContextCart.Provider
      value={{
        itens,
        handleAddItem,
        get quantityItems() {
          return itens.reduce((acc, item) => acc + item.quantidade, 0);
        },
      }}
    >
      {children}
    </ContextCart.Provider>
  );
}

export default ContextCart;
