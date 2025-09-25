import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="flex justify-between items-center shadow-xl">
      <div className="flex gap-6 mx-2">
        <Menu className="hover:scale-105 cursor-pointer"/>
        <Search className="hover:scale-105 cursor-pointer" />
      </div>

      <Logo  />

      <div className="flex gap-6">
        <ShoppingCart className="hover:scale-105 cursor-pointer" />
        <UserRound className="hover:scale-105 cursor-pointer" />
      </div>
    </header>
  );
}
