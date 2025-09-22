"use client";
import { useState } from "react";
import { Button } from "../Button";
import { DivContainer } from "../DivContainer";
import { Select } from "../Select";

export function FilterModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DivContainer classname="gap-10 mt-5">
        <Button
          text="FILTROS"
          color={"bg-amber-600"}
          onclick={() => {
            setIsOpen(true);
          }}
        />

        <Select />
      </DivContainer>

      <dialog className="animate-fadeZoom w-screen h-screen fixed inset-0 z-[9999]" open={isOpen}>
        <DivContainer classname="w-screen h-screen bg-gray-800 flex-col ">
          <Button
            color="bg-red-500"
            text="FECHAR"
            onclick={() => {
              setIsOpen(false);
            }}
          />
        </DivContainer>
      </dialog>
    </div>
  );
}
