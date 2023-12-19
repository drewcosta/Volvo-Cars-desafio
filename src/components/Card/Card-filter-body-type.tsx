import React from "react";
import { TabNav, TabNavItem } from "vcc-ui";
import styles from '../../../public/css/components/Car-filter-body-type.module.css'

import { useCars } from "../../hooks/useCars";
import { useFilter } from "../../hooks/useFilter";

import { CarBodyTypes } from "../../types/car-body-types";

export const CardFilterBodyType = () => {
  const { bodyType, setBodyType } = useFilter();
  const { data } = useCars();

  const getCountForBodyType = (bodyType: string) => {
    return data?.filter((car) => car.bodyType === bodyType).length;
  }

  return (
    <div className={styles.tab}>
      <TabNav enableLineTransition={false}>
        <TabNavItem
          isActive={bodyType === CarBodyTypes.ALL}
          onClick={() => {
            setBodyType(CarBodyTypes.ALL);
          }}
        >
          Todos {"(" + data?.length + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={bodyType === CarBodyTypes.SUV}
          onClick={() => {
            setBodyType(CarBodyTypes.SUV);
          }}
        >
          SUV {"(" + getCountForBodyType("suv") + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={bodyType === CarBodyTypes.SEDAN}
          onClick={() => {
            setBodyType(CarBodyTypes.SEDAN);
          }}
        >
          Sedan {"(" + getCountForBodyType("sedan") + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={bodyType === CarBodyTypes.STATE}
          onClick={() => {
            setBodyType(CarBodyTypes.STATE);
          }}
        >
          Estate {"(" + getCountForBodyType("estate") + ")"}
        </TabNavItem>
      </TabNav>
    </div>
  );
};
