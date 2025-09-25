import { DivContainer } from "../DivContainer";
import { GridItem } from "../GridItem";

export function GridContainer() {
  return (
    <DivContainer>
      <div className="grid grid-cols-2 gap-5">
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
