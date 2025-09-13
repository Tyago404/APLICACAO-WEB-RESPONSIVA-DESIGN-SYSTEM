import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="flex justify-between items-center shadow-xl">
      <div className="flex gap-6">
        <Menu />
        <Search />
      </div>

      <Logo />

      <div className="flex gap-6">
        <ShoppingCart />
        <UserRound />
      </div>
    </header>
  );
}
