"use client";
import { Button } from "@/components/Button";
import { DivContainer } from "@/components/DivContainer";
import { FilterContent } from "@/components/FilterContent";
import { FilterModal } from "@/components/FilterModal";
import { GridContainer } from "@/components/GridContainer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { MainContainer } from "@/components/MainContainer";
import { SlideShow } from "@/components/SlideShow";
import { Facebook, Instagram, Linkedin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <SlideShow classname="block md:hidden" />
        <SlideShow classname="hidden md:flex" height={350} />
      </header>

      <MainContainer>
        <FilterModal />
        <div className="flex gap-8  ">
          <div className="p-2 bg-gray-700  hidden md:flex m-auto ">
            <FilterContent />
          </div>

          <main>
            <Heading as="h2" text="PRODUTOS" />
            <GridContainer />

            <DivContainer classname="flex flex-col mb-4">
              <Heading as="h2" text="COMPRE POR COLEÇÃO" />
              <div className="max-w-[900px] mx-auto">
                <SlideShow />
              </div>
            </DivContainer>
          </main>
        </div>
      </MainContainer>

      <footer>
        <DivContainer classname={"bg-gray-950 flex-col rounded text-gray-50"}>
          <Heading
            as="h1"
            text="Receba novidades e
          ofertas exclusivas!"
          />
          <form
            action="submit"
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <Input placeholder="Nome:" />
            <Input placeholder="Email:" />
            <Button color="bg-green-900" text="Enviar" />
          </form>
          <Heading as="h2" text="NOSSAS REDES" />
          <nav>
            <ul className="flex gap-2">
              <li
                className="hover:scale-105 cursor-pointer"
                title="Acessar Instagram"
                aria-label="Acessar Instagram"
              >
                <Instagram size={30} />{" "}
              </li>
              <li
                className="hover:scale-105 cursor-pointer"
                title="Acessar Twitter"
                aria-label="Acessar Twitter"
              >
                <Twitter size={30} />
              </li>
              <li
                className="hover:scale-105 cursor-pointer"
                title="Acessar Facebook"
                aria-label="Acessar Facebook"
              >
                <Facebook size={30} />
              </li>
              <li
                className="hover:scale-105 cursor-pointer"
                title="Nosso telefone"
                aria-label="Nosso telefone "
              >
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
