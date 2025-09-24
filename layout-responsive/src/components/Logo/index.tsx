import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image src="/images/RifflyLogo.png" alt="Logo" width={50} height={50} priority/>
    </>
  );
}
