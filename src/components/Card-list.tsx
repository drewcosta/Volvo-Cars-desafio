import React from "react";
import { Car } from "../types/car";
import { CardCar } from "./Card-car";

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
