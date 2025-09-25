type InputProps = {
  placeholder:string;
}


export function Input({placeholder}:InputProps) {
  return(
    <input 
    className="border rounded flex"
    type="text"
    placeholder={placeholder}
    />
  )
}