"use client";
import { Button } from "@/components/Button";
import { DivContainer } from "@/components/DivContainer";
import { FilterModal } from "@/components/FilterModal";
import { GridContainer } from "@/components/GridContainer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { MainContainer } from "@/components/MainContainer";
import { SlideShow } from "@/components/SlideShow";
import { Facebook, Instagram, Linkedin, Phone, Twitter, X } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <SlideShow classname="block md:hidden"/>
      <SlideShow classname="hidden md:flex" height={350} />
    
      <MainContainer>
        <FilterModal />

        <Heading as="h2" text="PRODUTOS" />

        <GridContainer />

        <Heading as="h2" text="COMPRE POR COLEÇÃO" />

        <div className="max-w-[500px] mx-auto">
          <SlideShow />
        </div>
        <section>
          <DivContainer classname="mx-4 rounded flex flex-col gap-2">
            <Heading
              as="h1"
              text="Receba novidades e
          ofertas exclusivas!"
            />
            <Input placeholder="Nome:" />
            <Input placeholder="Email:" />
            <Button color="bg-green-900" text="Enviar" />
          </DivContainer>
        </section>
      </MainContainer>
      <footer>
        <DivContainer classname="bg-gray-950 flex-col rounded">
          <Heading as="h2" text="NOSSAS REDES" />
          <nav>
            <ul className="flex gap-2">
              <li className="hover:scale-105 cursor-pointer">
                <Instagram size={30} />{" "}
              </li>
              <li className="hover:scale-105 cursor-pointer">
                <Twitter size={30} />
              </li>
              <li className="hover:scale-105 cursor-pointer">
                <Facebook size={30} />
              </li>
              <li className="hover:scale-105 cursor-pointer">
                <Phone size={30} />
              </li>
            </ul>
          </nav>
          <DivContainer classname="flex-col my-8 hover:scale-105">
            <p className="text-center">By Tiago Santos</p>
            <Link
              target="blank"
              href="https://www.linkedin.com/in/tiago-santos-53761b179/"
            >
              Meu linkedin
            </Link>
            <Link
              target="blank"
              href="https://www.linkedin.com/in/tiago-santos-53761b179/"
            >
              <Linkedin />
            </Link>
          </DivContainer>
        </DivContainer>
      </footer>
    </>
  );
}
