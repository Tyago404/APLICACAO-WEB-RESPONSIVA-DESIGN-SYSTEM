import clsx from "clsx";
import { GridItem } from "../GridItem";

export function GridContainer() {
  return (
    <div className="flex flex-col gap-4 items-center md:items-end">
      <div
        className={clsx(
          "grid grid-cols-[repeat(2,160px)] gap-4",
          "sm:grid-cols-3",
          "md:grid-cols-4 ",
          "lg:grid-cols-6",
        )}
      >
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
      </div>

      <div
          className={clsx(
          "hidden lg:grid",
          "grid-cols-6 gap-4 items-center md:items-end",
        )}
      >
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
      </div>
    </div>
  );
}
