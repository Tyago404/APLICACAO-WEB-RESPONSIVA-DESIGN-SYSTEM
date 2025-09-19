import clsx from "clsx";

type DivContainerProps = {
    children: React.ReactNode;
    styles?:string;
}

export function DivContainer({children, styles}:DivContainerProps) {
    return(
        <div className={ 
        clsx(
        'flex',
        'justify-center',
        'items-center',
        styles)}>{children}</div>
    )
}