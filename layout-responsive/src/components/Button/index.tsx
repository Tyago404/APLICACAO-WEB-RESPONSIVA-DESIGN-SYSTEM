import clsx from "clsx";

type ButtonFilterProps = {
  onclick?: () => void;
  color: string;
  text:string;
};
export function Button({ onclick,color,text}: ButtonFilterProps) {
  const classes = 
  clsx(
    color,
    'w-[120px] h-[40px]',
    'rounded-md',
    'text-white text-sm',
  );

  return (
    <button className={classes} onClick={onclick}>
      {text} 
    </button>
  );
}
