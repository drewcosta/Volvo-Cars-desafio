import React from "react";
import { CardCar } from "./Card-car";
import { Car } from "../../types/car";

interface CarListProps{
  cars: Car[];
}

export const CardList = ({ cars }: CarListProps) => {
  return (
    <>
      {cars.map((car: Car) => (
        <CardCar car={car} key={car.id} />
      ))}
    </>
  );
};
