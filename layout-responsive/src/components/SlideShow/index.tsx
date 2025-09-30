"use client"

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import clsx from 'clsx';

type SlideShowProps = {
  height?:number;
  classname?:string;
}


export function SlideShow({height,classname}:SlideShowProps) {
  return (
    <div className={clsx(classname)}>
      <Splide
  options={ {
    height:height,
  } }
>
        <SplideSlide>
          <img  src="images/Carousel1.jpg" alt="a" />
        </SplideSlide>
        <SplideSlide >
          <img src="images/Carousel2.jpg" alt="a" />
        </SplideSlide>
        <SplideSlide >
          <img src="images/Carousel3.jpg" alt="a" />
        </SplideSlide>
      </Splide>
    </div>
  );
}
