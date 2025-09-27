import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image className="md:w-20 md:h-20 m-2" src="/images/RifflyLogo.png" alt="Logo" width={50} height={50} priority/>
    </>
  );
}
