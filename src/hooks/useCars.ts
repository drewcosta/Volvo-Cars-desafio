import axios from "axios";
import { useQuery } from "react-query";
import { Car } from "../types/car";

const fetcher = async () => {
  const response = await axios.get('/api/cars');
  return response.data;
};


export function useCars(){
  const { data, isLoading } = useQuery<Car[]>(['cars'], fetcher)

  console.log(data)

  return{
    data,
    isLoading,
  }
}