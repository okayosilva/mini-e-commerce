"use client";
import { createContext, useState } from "react";
import { ItemCart } from "../model/itemCart";
import { Product } from "../model/product";

type ContextCartProps = {
  itens: ItemCart[];
  quantityItems: number;
  handleAddItem: (item: Product) => void;
  handleRemoveItem: (item: Product) => void;
  handleDeleteItem: (item: Product) => void;
  handleClearCart: () => void;
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

  function handleRemoveItem(product: Product) {
    const indice = itens.findIndex((i) => i.produto.id === product.id);

    const newItens = [...itens];
    if (newItens[indice].quantidade > 1) {
      newItens[indice].quantidade -= 1;
      setItens(newItens);
    }
  }

  function handleDeleteItem(product: Product) {
    const newList = itens.filter((item) => item.produto.id !== product.id);
    setItens(newList);
  }

  function handleClearCart() {
    setItens([]);
  }

  return (
    <ContextCart.Provider
      value={{
        itens,
        handleAddItem,
        handleRemoveItem,
        handleDeleteItem,
        handleClearCart,
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
