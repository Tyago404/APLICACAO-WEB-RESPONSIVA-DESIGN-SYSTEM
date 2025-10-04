import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image
        className="md:w-20 md:h-20 m-2 hover:scale-105 cursor-pointer"
        src="/images/RifflyLogo.png"
        alt="Logo"
        width={50}
        height={50}
        title="Logo"
        priority
      />
    </>
  );
}
