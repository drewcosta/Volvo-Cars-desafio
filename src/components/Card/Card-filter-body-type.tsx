import React from "react";
import { TabNav, TabNavItem } from "vcc-ui";
import styles from '../../public/css/components/Filter-by-type.module.css'

import { useCars } from "../../hooks/useCars";
import { useFilter } from "../../hooks/useFilter";

import { CarBodyTypes } from "../../types/car-body-types";

export const CardFilterBodyType = () => {
  const { type, setType } = useFilter();
  const { data } = useCars();

  const getCountForBodyType = (type: string) => {
    return data?.filter((car) => car.bodyType === type).length;
  }

  return (
    <div className={styles.tab}>
      <TabNav enableLineTransition={false}>
        <TabNavItem
          isActive={type === CarBodyTypes.ALL}
          onClick={() => {
            setType(CarBodyTypes.ALL);
          }}
        >
          Todos {"(" + data?.length + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={type === CarBodyTypes.SUV}
          onClick={() => {
            setType(CarBodyTypes.SUV);
          }}
        >
          SUV {"(" + getCountForBodyType("suv") + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={type === CarBodyTypes.SEDAN}
          onClick={() => {
            setType(CarBodyTypes.SEDAN);
          }}
        >
          Sedan {"(" + getCountForBodyType("sedan") + ")"}
        </TabNavItem>
        <TabNavItem
          isActive={type === CarBodyTypes.STATE}
          onClick={() => {
            setType(CarBodyTypes.STATE);
          }}
        >
          Estate {"(" + getCountForBodyType("estate") + ")"}
        </TabNavItem>
      </TabNav>
    </div>
  );
};
