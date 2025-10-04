"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import clsx from "clsx";
import Image from "next/image";

type SlideShowProps = {
  height?: number;
  classname?: string;
};

export function SlideShow({ height, classname }: SlideShowProps) {
  return (
    <div className={clsx(classname)}>
      <Splide
        options={{
          height: height,
        }}
      >
        <SplideSlide>
          <Image
            alt="slideOne"
            src="/images/Carousel1.jpg"
            width={1536}
            height={864}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            alt="slideTwo"
            src="/images/Carousel2.jpg"
            width={1536}
            height={864}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            alt="slideThree"
            src="/images/Carousel3.jpg"
            width={1536}
            height={864}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
