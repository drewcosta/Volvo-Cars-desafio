/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { Spacer, Text, Flex } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CardCar } from "./Card-car";
import { Car } from "../types/car";
import styles from "../../public/css/home.module.css";
import Image from "next/image";
import ArrowRight from "../../docs/chevron-circled.svg";
import ArrowLeft from "../../docs/chevron-circled copy.svg";
import { FilterByType } from "./Filter-by-type";
import { getCategoryByType } from "../utils/filters";
import { useFilter } from "../hooks/useFilter";

export const HelloWorld: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const { type } = useFilter();

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

  const filterCarsByType = (type: string) => {
    if (!data) return [];
    if (type === "") return data;
    return data.filter((car) => car.bodyType === type);
  };

  const filteredCars = filterCarsByType(getCategoryByType(type));

  return (
    <>
      <div className={styles.homeWrapper}>
        <Text variant={"cook"}>Todos os modelos Recharge</Text>
        <Spacer />
        <FilterByType />
        <Spacer />
        <Flex
          extend={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className={styles.cardsWrapper} ref={carouselRef}>
            {filteredCars.map((car: Car) => (
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
