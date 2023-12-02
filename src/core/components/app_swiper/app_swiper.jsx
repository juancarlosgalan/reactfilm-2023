import { useRef, useEffect } from 'react';

export const AppSwiper = ({ children }) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container 
      ref={swiperElRef}
      loop: true
      slides-per-view="5"
      navigation="true"
      autoplay: delay
    >

        {children}
            
    </swiper-container>
  );
};


