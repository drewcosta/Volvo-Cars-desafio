import React from "react";
import { Text } from "vcc-ui";
import styles from "../../public/css/home.module.css";

import { getCarBodyType } from "../utils/filters";
import { useCars } from "../hooks/useCars";
import { useFilter } from "../hooks/useFilter";

import { CardFilterBodyType } from "./Card"
import { CardList } from "./Card";
import { CardCarousel } from "./Card";

export const Home: React.FC = () => {
  const { bodyType } = useFilter();
  const { data } = useCars();

  const filterCarsByBodyType = (bodyType: string) => {
    if (!data) return [];
    if (bodyType === "") return data;
    return data.filter((car) => car.bodyType === bodyType);
  };

  const filteredCars = filterCarsByBodyType(getCarBodyType(bodyType));

  return (
    <>
      <div className={styles.homeWrapper}>

        <Text variant={"cook"} extend={{ textAlign: "center" }}>Todos os modelos Recharge</Text>

        <CardFilterBodyType />

        <CardCarousel>
          <CardList cars={filteredCars} />
        </CardCarousel>

      </div>
    </>
  );
};
