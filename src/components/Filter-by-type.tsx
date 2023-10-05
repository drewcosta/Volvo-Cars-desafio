import React from "react";
import { FilterTypes } from "../types/car-filter-types";
import { useFilter } from "../hooks/useFilter";
import { TabNav, TabNavItem } from "vcc-ui";

export const FilterByType = () => {
  const { type, setType } = useFilter();
  
  const handleChangeType = (value: FilterTypes) => {
    setType(value);
  };

  return (
    <TabNav enableLineTransition>
      <TabNavItem
        isActive={type === FilterTypes.ALL}
        onClick={() => {
          handleChangeType(FilterTypes.ALL);
        }}
      >
        Todos
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
