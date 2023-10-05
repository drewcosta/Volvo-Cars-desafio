import axios from "axios";
import { useQuery } from "react-query";
import { Car } from "../types/car";
import { useFilter } from "./useFilter";
import { FilterTypes } from "../types/car-filter-types";

const fetcher = async () => {
  const response = await axios.get('http://localhost:3001/api/cars');
  return response.data;
};


export function useCars(){
  const { data, isLoading } = useQuery<Car[]>(['cars'], fetcher)

  return{
    data,
    isLoading,
  }
}