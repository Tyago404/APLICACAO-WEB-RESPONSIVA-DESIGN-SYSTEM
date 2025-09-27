import clsx from "clsx";

type NavbarProps = {
  classname?:string;
}

export function Navbar({classname}:NavbarProps) {
  return (
    <nav className={classname}>
      <ul className={clsx("flex flex-col md:flex-row  gap-2 items-center m-2")}>
        <li className="border border-transparent border-b-white rounded p-0.5 cursor-pointer hover:scale-105">VIOLÕES</li>
        <li className="border border-transparent border-b-white rounded p-0.5 cursor-pointer hover:scale-105">GUITARRAS</li>
        <li className="border border-transparent border-b-white rounded p-0.5 cursor-pointer hover:scale-105">C.BAIXOS</li>
        <li className="border border-transparent border-b-white rounded p-0.5 cursor-pointer hover:scale-105">VIOLINOS</li>
        <li className="text-blue-200 md:hidden">mostrar mais...</li>
      </ul>
    </nav>
  );
}
