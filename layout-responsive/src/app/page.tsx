"use client";
import { FilterModal } from "@/components/FilterModal";
import { GridContainer } from "@/components/GridContainer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { MainContainer } from "@/components/MainContainer";
import { SlideShow } from "@/components/SlideShow";

export default function Home() {
  return (
    <>
      <MainContainer>
        <Header />
        <SlideShow />
        <FilterModal />
        <Heading as="h2" text="PRODUTOS"/> 
        <GridContainer />
      </MainContainer>
    </>
  );
}
