import React from "react";
import { Spacer, Text, Flex } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import styles from "../../public/css/home.module.css";

import { FilterByType } from "./Filter-by-type";
import { getCategoryByType } from "../utils/filters";
import { useFilter } from "../hooks/useFilter";
import { CardList } from "./Card-list";
import { Carousel } from "./Carousel";

export const HelloWorld: React.FC = () => {
  const { type } = useFilter();
  const { data } = useCars();

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
          <Carousel>
            <CardList cars={filteredCars} />
          </Carousel>
        </Flex>
      </div>
    </>
  );
};
