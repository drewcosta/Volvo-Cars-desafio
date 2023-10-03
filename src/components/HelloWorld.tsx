import React from "react";
import { Spacer, Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CardCar } from "./Card";
import { Car } from "../types/car";
import styles from '../../public/css/home.module.css'

export const HelloWorld: React.FC = () => {
  const { data } = useCars();

  console.log(data);

  return (
    <>
      <div className={styles.homeWrapper}>
        <Text variant={"cook"}>Todos os modelos Recharge</Text>
        <Spacer />
        <div className={styles.cardsWrapper}>
          {data?.map((car: Car) => (
            <CardCar car={car} key={car.id} />
          ))}
        </div>
      </div>
    </>
  );
};
