import React from "react";
import { DivContainer } from "../DivContainer";
import { Heading } from "../Heading";
import { Navbar } from "../Navbar";
import clsx from "clsx";

type FilterContentProps = {
  children?: React.ReactNode;
};

export function FilterContent({ children }: FilterContentProps) {
  return (
    <div
      className={clsx(
        "w-screen",
        "h-screen",
        "md:h-full",
        "bg-gray-50 text-gray-800",
        "dark:text-gray-50 dark:bg-gray-800",
        "flex",
        "flex-col",
        "gap-6",
        "items-center",
        "md:w-50"
      )}
    >
      <DivContainer classname="flex-col mt-10">
        <Heading as="h2" text="PRODUTOS" />
        <Navbar ulClassName="md:flex-col" />
        <hr className="w-[180px]" />
      </DivContainer>

      <DivContainer classname="flex-col gap-3">
        <Heading as="h2" text="PREÇO" />
        <input type="range" />
        <p>R$300,00 - R$5.000,00</p>
      </DivContainer>

      <hr className="w-[180px]" />

      <DivContainer classname="flex-col gap-3">
        <Heading as="h2" text="COR" />
        <div className="flex md:flex-col m-3 gap-3">
          <div className="bg-blue-500 rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
          <div className="bg-red-500 rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
          <div className="bg-orange-500 rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
          <div className="bg-black rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
          <div className="bg-white rounded-full w-10 h-10 border cursor-pointer hover:scale-105 transition duration-100"></div>
        </div>
      </DivContainer>
      {children}
    </div>
  );
}
