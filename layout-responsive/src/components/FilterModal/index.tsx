"use client";
import { useState } from "react";
import { Button } from "../Button";
import { DivContainer } from "../DivContainer";
import { Select } from "../Select";
import { Heading } from "../Heading";

export function FilterModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DivContainer classname="gap-[10px] m-5">
        <Button
          text="FILTROS"
          color={"bg-amber-700"}
          onclick={() => {
            setIsOpen(true);
          }}
        />

        <Select />
      </DivContainer>

      <dialog
        className="animate-fadeZoom w-screen h-screen fixed inset-0 z-[9999]"
        open={isOpen}
      >
        <div className="w-screen h-screen bg-gray-800 flex flex-col gap-6 text-white items-center  ">
          <DivContainer classname="flex-col mt-10">
            <Heading text="PRODUTOS" />
            <ul className="flex flex-col gap-2 items-center m-2">
              <li>VIOLÕES</li>
              <li>GUITARRAS</li>
              <li>C.BAIXOS</li>
              <li>VIOLINOS</li>
              <li>mostrar mais...</li>
            </ul>
            <hr className="w-[180px]" />
          </DivContainer>

          <DivContainer classname="flex-col gap-3">
            <Heading text="PREÇO" />
            <input type="range" />
            <p>R$300,00 - R$5.000,00</p>
          </DivContainer>

          <hr className="w-[180px]" />

          <DivContainer classname="flex-col gap-3">
            <Heading text="COR" />
            <div className="flex m-3 gap-3">
              <div className="bg-blue-500 rounded-full w-10 h-10 border border-black"></div>
              <div className="bg-red-500 rounded-full w-10 h-10 border border-black"></div>
              <div className="bg-orange-500 rounded-full w-10 h-10 border border-black"></div>
              <div className="bg-black rounded-full w-10 h-10 border border-black"></div>
              <div className="bg-white rounded-full w-10 h-10 border border-black"></div>
            </div>
            <Button
              color="bg-red-500"
              text="FECHAR"
              onclick={() => {
                setIsOpen(false);
              }}
            />
          </DivContainer>
        </div>
      </dialog>
    </div>
  );
}
