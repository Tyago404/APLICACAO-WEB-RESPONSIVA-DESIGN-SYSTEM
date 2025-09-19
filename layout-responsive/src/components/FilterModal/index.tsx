"use client"
import { useState } from "react";
import { Button } from "../Button";
import { DivContainer } from "../DivContainer";
import { Select } from "../Select";

export function FilterModal() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
<DivContainer styles="gap-10 mt-5">
        <Button
       text="FILTROS" 
       color={"bg-amber-600"} 
       onclick={()=>{setIsOpen(true)}} />     

       <Select />
</DivContainer>

      <dialog className="animate-fadeZoom " open={isOpen}>
      <DivContainer>
        <h1>My Modal</h1>
        <button onClick={()=>setIsOpen(false)}>Close Modal</button>
      </DivContainer>
      </dialog>
   

    
    </div>
  );
}
