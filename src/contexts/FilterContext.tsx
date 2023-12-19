import { ReactNode, createContext, useState } from "react";
import { CarBodyTypes } from "../types/car-body-types";

export const FilterContext = createContext({
  type: CarBodyTypes.ALL,
  setType: (value: CarBodyTypes) => {},
})

interface ProviderProps{
  children: ReactNode
}

export const FilterContextProvider = ({ children }: ProviderProps) =>{
  const [type, setType] = useState(CarBodyTypes.ALL);

  return(
    <FilterContext.Provider
      value={{
        type,
        setType,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
