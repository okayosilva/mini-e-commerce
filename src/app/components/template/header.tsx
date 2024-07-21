import { Cart } from "@/app/components/template/cart";
import { Logo } from "@/app/components/template/logo";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between bg-zinc-800 px-10">
      <Logo />
      <Cart />
    </header>
  );
}
