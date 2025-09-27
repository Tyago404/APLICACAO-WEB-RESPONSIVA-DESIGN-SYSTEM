import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Logo } from "../Logo";
import clsx from "clsx";
import { Navbar } from "../Navbar";
import { Input } from "../Input";

export function Header() {
  return (
    <header
      className={clsx(
        "flex justify-between items-center shadow-xl",
      )}
    >
      <div className="flex gap-6 mx-2 md:hidden">
        <Menu className="hover:scale-105 cursor-pointer" />
        <Search className="hover:scale-105 cursor-pointer" />
      </div>

      <div className="flex">
        <Logo />
        <Navbar classname="hidden md:flex"/>
      </div>

      <div className="flex items-center gap-6">
        <Input placeholder="Pesquisar" classname="hidden md:block"/>
        <ShoppingCart className="hover:scale-105 cursor-pointer " />
        <UserRound className="hover:scale-105 cursor-pointer" />
      </div>
    </header>
  );
}
