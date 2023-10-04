import { ReactNode, createContext, useState } from "react";
import { FilterTypes } from "../types/car-filter-types";

export const FilterContext = createContext({
  type: FilterTypes.ALL,
  setType: (value: FilterTypes) => {},
})

interface ProviderProps{
  children: ReactNode
}

export const FilterContextProvider = ({ children }: ProviderProps) =>{
  const [type, setType] = useState(FilterTypes.ALL);

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
