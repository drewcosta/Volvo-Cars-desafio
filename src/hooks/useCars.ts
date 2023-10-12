import axios from "axios";
import { useQuery } from "react-query";
import { Car } from "../types/car";

const fetcher = async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/cars');
  return response.data;
};


export function useCars(){
  const { data, isLoading } = useQuery<Car[]>(['cars'], fetcher)

  return{
    data,
    isLoading,
  }
}