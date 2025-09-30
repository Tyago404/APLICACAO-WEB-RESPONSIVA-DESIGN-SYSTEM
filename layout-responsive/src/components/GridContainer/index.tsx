import clsx from "clsx";
import { GridItem } from "../GridItem";

export function GridContainer() {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={clsx(
          "grid grid-cols-[repeat(2,160px)] justify-center gap-2",
          "sm:grid-cols-3",
          "md:grid-cols-4",
          "lg:grid-cols-6 ",
          "mx-auto "
        )}
      >
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
      </div>

      <div className={clsx("hidden lg:flex", "grid lg:grid-cols-6 gap-2")}>
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
      </div>
    </div>
    // </DivContainer>
  );
}
