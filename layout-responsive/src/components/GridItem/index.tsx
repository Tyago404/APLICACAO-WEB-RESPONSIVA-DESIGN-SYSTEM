import Image from "next/image";
import { Heading } from "../Heading";
import clsx from "clsx";

type GridItemProps = {
  src: string;
  alt: string;
};
export function GridItem({ src, alt }: GridItemProps) {
  return (
    <div
      className={clsx(
        "bg-amber-400",
        "flex flex-col items-center justify-center rounded",
        "hover:scale-102 cursor-pointer "
      )}
    >
      <Image src={src} alt={alt} width={100} height={100} />
      <Heading as="h2" text="Product" />
      <p className="text-center mx-2">Lorem ipsum dolor sit amet.</p>
    </div>
  );
}
