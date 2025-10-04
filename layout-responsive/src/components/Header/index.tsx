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
        "dark:text-gray-50 text-gray-800",
        "dark:bg-gray-800 bg-gray-50"
      )}
    >
      <div className="flex gap-6 mx-2 md:hidden">
        <div title="Menu de filtros">
          <Menu
            className="hover:scale-105 cursor-pointer"
            size={25}
            aria-label="Menu de filtros"
          />
        </div>
        <div title="Pesquisar produto">
          <Search
            className="hover:scale-105 cursor-pointer"
            size={25}
            aria-label="Pesquisar produto"
          />
        </div>
      </div>

      <div className="flex">
        <Logo />
        <Navbar classname="hidden md:flex" ulClassName="flex-row" />
      </div>

      <div className="flex items-center gap-6">
        <Input placeholder="Pesquisar" classname="hidden md:block w-45" />
        <div title="Carrinho">
          <ShoppingCart
            className="hover:scale-105 cursor-pointer"
            size={25}
            aria-label="Carrinho"
          />
        </div>
        <div title="Perfil">
          <UserRound className="hover:scale-103 cursor-pointer " size={25} />
        </div>
      </div>
    </header>
  );
}
