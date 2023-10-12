import React from "react";
import { FilterTypes } from "../types/car-filter-types";
import { useFilter } from "../hooks/useFilter";
import { TabNav, TabNavItem } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { Car } from "../types/car";

export const FilterByType = () => {
  const { type, setType } = useFilter();
  const { data } = useCars();
  
  const handleChangeType = (value: FilterTypes) => {
    setType(value);
  };

  const getCountForType = (type: string) => {
    return data?.filter((car) => car.bodyType === type).length;
  }

  return (
    <TabNav enableLineTransition>
      <TabNavItem
        isActive={type === FilterTypes.ALL}
        onClick={() => {
          handleChangeType(FilterTypes.ALL);
        }}
      >
        Todos ({getCountForType(FilterTypes.ALL)}) 
      </TabNavItem>
      <TabNavItem
        isActive={type === FilterTypes.SUV}
        onClick={() => {
          handleChangeType(FilterTypes.SUV);
        }}
      >
        SUV
      </TabNavItem>
      <TabNavItem
        isActive={type === FilterTypes.SEDAN}
        onClick={() => {
          handleChangeType(FilterTypes.SEDAN);
        }}
      >
        Sedan
      </TabNavItem>
      <TabNavItem
        isActive={type === FilterTypes.STATE}
        onClick={() => {
          handleChangeType(FilterTypes.STATE);
        }}
      >
        State
      </TabNavItem>
    </TabNav>
  );
};
