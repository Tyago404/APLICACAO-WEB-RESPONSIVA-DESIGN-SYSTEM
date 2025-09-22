"use client"

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css'


export function SlideShow() {
  return (
    <div className='shadow-xl w-screen'>
      <Splide>
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
