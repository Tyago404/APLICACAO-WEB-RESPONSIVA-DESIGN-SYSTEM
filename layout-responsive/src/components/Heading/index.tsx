import clsx from "clsx";

type HeadingProps = {
    text:string;
    as?: 'h1' | 'h2';
}

export function Heading({text, as:Tag = 'h1'}:HeadingProps){
    const headingClasses = {
        h1: 'text-center text-2xl/normal',
        h2:'text-center text-xl/normal'
    }
    const commomClasses = 'font-semibold'

    return <Tag className={clsx(headingClasses[Tag], commomClasses)}>{text}</Tag>
}