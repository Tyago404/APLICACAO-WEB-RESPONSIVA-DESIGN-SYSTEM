import clsx from "clsx";
import { DivContainer } from "../DivContainer";
import { GridItem } from "../GridItem";

export function GridContainer() {
  return (
    <DivContainer classname="flex-col gap-4">
      <div className={
        clsx(
        "grid grid-cols-2 gap-4",
        "sm:grid-cols-3",
        "md:grid-cols-4 md:grid-rows-1 ",
        "lg:grid-cols-6"
        )}>
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
      </div>

       <div className={
        clsx(
        "hidden lg:flex",
        "grid lg:grid-cols-6 gap-4",
        )}>
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
        <GridItem src="/images/RifflyLogo.png" alt="logo" />
      </div>

        
    </DivContainer>
  );
}
