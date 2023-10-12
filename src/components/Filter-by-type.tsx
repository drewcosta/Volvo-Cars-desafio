import React from "react";
import { FilterTypes } from "../types/car-filter-types";
import { useFilter } from "../hooks/useFilter";
import { TabNav, TabNavItem } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import styles from '../../public/css/components/Filter-by-type.module.css'

export const FilterByType = () => {
  const { type, setType } = useFilter();
  const { data } = useCars();

  const getCountForType = (type: string) => {
    return data?.filter((car) => car.bodyType === type).length;
  }

  return (
    <div className={styles.tab}>
      <TabNav enableLineTransition={false}>
        <TabNavItem
          isActive={type === FilterTypes.ALL}
          onClick={() => {
            setType(FilterTypes.ALL);
          }}
        >
          Todos {"(" + data?.length + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={type === FilterTypes.SUV}
          onClick={() => {
            setType(FilterTypes.SUV);
          }}
        >
          SUV {"(" + getCountForType("suv") + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={type === FilterTypes.SEDAN}
          onClick={() => {
            setType(FilterTypes.SEDAN);
          }}
        >
          Sedan {"(" + getCountForType("sedan") + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={type === FilterTypes.STATE}
          onClick={() => {
            setType(FilterTypes.STATE);
          }}
        >
          Estate {"(" + getCountForType("estate") + ")"}
        </TabNavItem>
      </TabNav>
    </div>
  );
};
