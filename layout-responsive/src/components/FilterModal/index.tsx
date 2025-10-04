"use client";
import { useState } from "react";
import { Button } from "../Button";
import { DivContainer } from "../DivContainer";
import { Select } from "../Select";
import { FilterContent } from "../FilterContent";

export function FilterModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
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
        <DivContainer>
          <FilterContent>
            <Button
              color="bg-red-500"
              text="FECHAR"
              onclick={() => {
                setIsOpen(false);
              }}
            />
          </FilterContent>
        </DivContainer>
      </dialog>
    </div>
  );
}
