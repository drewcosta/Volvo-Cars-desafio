import React from "react";
import { Text } from "vcc-ui";
import { Loading } from "./Common/Loading";
import styles from "../../public/css/home.module.css";

import { getCarBodyType } from "../utils/filters";
import { useCars } from "../hooks/useCars";
import { useFilter } from "../hooks/useFilter";

import { CardFilterBodyType } from "./Card"
import { CardList } from "./Card";
import { CardCarousel } from "./Card";


export const Home: React.FC = () => {
  const { data, isLoading } = useCars();
  const { bodyType } = useFilter();

  const filterCarsByBodyType = (bodyType: string) => {
    if (!data) return [];
    if (bodyType === "") return data;
    return data.filter((car) => car.bodyType === bodyType);
  };

  const filteredCars = filterCarsByBodyType(getCarBodyType(bodyType));

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className={styles.homeWrapper}>

        <Text variant={"cook"} extend={{ textAlign: "center" }}>Todos os modelos Recharge</Text>

        <CardFilterBodyType />

        <CardCarousel totalCars={filteredCars.length}>
          <CardList cars={filteredCars} />
        </CardCarousel>

      </div >
    </>
  );
};
