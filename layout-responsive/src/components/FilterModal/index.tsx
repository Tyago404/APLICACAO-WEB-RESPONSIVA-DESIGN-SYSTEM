"use client";
import { useState } from "react";
import { Button } from "../Button";
import { DivContainer } from "../DivContainer";
import { Select } from "../Select";
import { Heading } from "../Heading";
import { Navbar } from "../Navbar";

export function FilterModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DivContainer classname="gap-[10px] m-5">
        <Button
          text="FILTROS"
          color={"bg-amber-500"}
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
            <Heading as="h2" text="PRODUTOS" />
            <Navbar />
            <hr className="w-[180px]" />
          </DivContainer>

          <DivContainer classname="flex-col gap-3">
            <Heading  as="h2" text="PREÇO" />
            <input type="range" />
            <p>R$300,00 - R$5.000,00</p>
          </DivContainer>

          <hr className="w-[180px]" />

          <DivContainer classname="flex-col gap-3">
            <Heading as="h2" text="COR" />
            <div className="flex m-3 gap-3">
              <div className="bg-blue-500 rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
              <div className="bg-red-500 rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
              <div className="bg-orange-500 rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
              <div className="bg-black rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
              <div className="bg-white rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
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
