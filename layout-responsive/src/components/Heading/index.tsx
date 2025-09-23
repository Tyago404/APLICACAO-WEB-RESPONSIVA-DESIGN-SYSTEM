type HeadingProps = {
    text:string;
}

export function Heading({text}:HeadingProps){
    return <h1 className="text-center font-semibold text-2xl">{text}</h1>
}