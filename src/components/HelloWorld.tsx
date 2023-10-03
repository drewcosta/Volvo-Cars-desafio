/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { Spacer, Text, Flex } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CardCar } from "./Card";
import { Car } from "../types/car";
import styles from "../../public/css/home.module.css";
import Image from "next/image";
import ArrowRight from "../../docs/chevron-circled.svg";
import ArrowLeft from "../../docs/chevron-circled copy.svg";

export const HelloWorld: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const { data } = useCars();

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
      <div className={styles.homeWrapper}>
        <Text>Todos os modelos Recharge</Text>
        <Spacer />
        <Flex
          extend={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className={styles.cardsWrapper} ref={carouselRef}>
            {data?.map((car: Car) => (
              <CardCar car={car} key={car.id} />
            ))}
          </div>
          <div className={styles.carouselControls}>
            <Image src={ArrowLeft} onClick={() => handleClick("left")} />
            <Image src={ArrowRight} onClick={() => handleClick("right")} />
          </div>
        </Flex>
      </div>
    </>
  );
};
