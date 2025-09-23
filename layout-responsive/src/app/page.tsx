"use client";
import { FilterModal } from "@/components/FilterModal";
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
        <Heading text="PRODUTOS"/> 
      </MainContainer>
    </>
  );
}
