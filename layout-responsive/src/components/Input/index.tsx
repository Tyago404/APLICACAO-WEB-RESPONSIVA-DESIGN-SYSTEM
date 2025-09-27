import clsx from "clsx";

type InputProps = {
  placeholder:string;
  classname?:string;
}


export function Input({placeholder,classname}:InputProps) {
  return(
    <input 
    className={clsx("border rounded flex p-2", classname)}
    type="text"
    placeholder={placeholder}
    />
  )
}