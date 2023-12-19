/* eslint-disable jsx-a11y/alt-text */
import React, { ReactNode, useEffect, useRef, useState } from "react";

import Image from "next/image";
import ArrowRight from "../../docs/chevron-circled.svg";
import ArrowLeft from "../../docs/chevron-circled copy.svg";
import styles from "../../public/css/components/Carousel.module.css";

import { useCars } from "../../hooks/useCars";

interface CarouselProps {
  children: ReactNode;
}

export const CardCarousel = ({ children }: CarouselProps) => {
  const { data } = useCars();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Number>(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      let cardList = document.getElementById("card-list");
      let card = cardList?.firstElementChild;
      let cardWidth = card?.clientWidth ?? 0;
      setCardWidth(cardWidth);
    }
  })

  const scrollCarousel = (direction: String) => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;

      const scrollTo =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const navigateCarousel = (index: number) => {
    if (carouselRef.current) {
      const scrollTo = index * cardWidth;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
    setSelected(index);
  };

  return (
    <>
      <div className={styles.cardsWrapper} id="card-list" ref={carouselRef}>
        {children}
      </div>

      <div className={styles.carouselControls}>
        <Image src={ArrowLeft} onClick={() => scrollCarousel("left")} />
        <Image src={ArrowRight} onClick={() => scrollCarousel("right")} />
      </div>
      
      <div className={styles.btnWrapper}>
        {data !== undefined && (
          Array.from({ length: data.length }).map((element, i) => (
            <button
              className={i === selected ? styles.btnSelected : styles.btn}
              key={i}
              onClick={() => navigateCarousel(i)}
            ></button>
          ))
        )}
      </div>
    </>
  );
};