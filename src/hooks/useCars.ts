import axios from "axios";
import { useQuery } from "react-query";
import { Car } from "../types/car";
import { useFilter } from "./useFilter";

const fetcher = async () => {
  const response = await axios.get('/api/cars');
  return response.data;
};


export function useCars(){
  const { bodyType } = useFilter();
  const { data, isLoading } = useQuery<Car[]>(['cars', bodyType], fetcher);

  return{
    data,
    isLoading,
  }
}