import clsx from "clsx";

export function Select() {
  return (
    <select
     name="position"
     id="position"
     className={clsx("bg-amber-500 text-white text-sm", "w-[120px] h-[40px]", "px-2", "rounded-md", "cursor-pointer" )}
    >
      <option hidden value="A-Z">POSIÇÃO</option>
      <option value="A-Z">A-Z</option>
      <option value="A-Z">Menor Preço</option>
      <option value="A-Z">Maior Preço</option>
      <option value="A-Z">Mais Pedido</option>
    </select>
  );
}
