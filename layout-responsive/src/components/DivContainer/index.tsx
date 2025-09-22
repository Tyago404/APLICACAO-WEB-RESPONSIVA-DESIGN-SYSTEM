import clsx from "clsx";

type DivContainerProps = {
    children: React.ReactNode;
    classname?:string;
}

export function DivContainer({children, classname}:DivContainerProps) {
    return(
        <div className={ 
        clsx(
        'flex',
        'justify-center',
        'items-center',
        classname)}>{children}</div>
    )
}