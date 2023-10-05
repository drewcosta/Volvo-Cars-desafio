/* eslint-disable jsx-a11y/alt-text */
import React, { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import ArrowRight from "../../docs/chevron-circled.svg";
import ArrowLeft from "../../docs/chevron-circled copy.svg";
import styles from "../../public/css/components/Carousel.module.css";

interface CarouselProps {
  children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: String) => {
    setIsMoved(true);
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;

      const scrollTo =
        direction === "left" ? scrollLeft - 330 : scrollLeft + 330;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.cardsWrapper} ref={carouselRef}>
        {children}
      </div>
      <div className={styles.carouselControls}>
        <Image src={ArrowLeft} onClick={() => handleClick("left")} />
        <Image src={ArrowRight} onClick={() => handleClick("right")} />
      </div>
    </>
  );
};
