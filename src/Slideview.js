
import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider';

import SlideContent from './SlideContent.js'
import afga from './backgrounds/af-flag.jpg';
import ind from './backgrounds/ind-flag.jpg';
import usa from './backgrounds/usa-flag.jpg';


export default function Slideview() {
  
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '90vmin',
      }}
    >
      <OverlayContainer
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.33)',
          textAlign: 'center',
        }}
      >

      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: afga,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
        >
              

          <SlideContent/>
          <h1>SLIDE2</h1>




      </Slide>
      <Slide
        background={{
          backgroundImage: ind,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      >
           <SlideContent />
           <h1>SLIDE2</h1>

      </Slide>
      <Slide
        background={{
          backgroundImage: usa,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      >
 <SlideContent />
          <h1>SLIDE3</h1>
        </Slide>
      <Nav />
    </HeroSlider>
  );
}