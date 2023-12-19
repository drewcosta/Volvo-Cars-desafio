import { ReactNode, createContext, useState } from "react";
import { CarBodyTypes } from "../types/car-body-types";

export const FilterContext = createContext({
  bodyType: CarBodyTypes.ALL,
  setBodyType: (value: CarBodyTypes) => {},
})

interface ProviderProps{
  children: ReactNode
}

export const FilterContextProvider = ({ children }: ProviderProps) =>{
  const [bodyType, setBodyType] = useState(CarBodyTypes.ALL);

  return(
    <FilterContext.Provider
      value={{
        bodyType,
        setBodyType,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
