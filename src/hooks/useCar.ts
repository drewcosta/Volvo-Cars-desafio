import axios from 'axios';
import { useQuery } from 'react-query';
import { Car } from '../types/car';

const fetcher = async (carId: string) => {
  const response = await axios.get(`/api/cars/`);
  const car = response.data.find((car: Car) => car.id === carId);
  return car;
};

export function useCar(id: string) {
  const { data, isLoading } = useQuery<Car>({
    queryFn: () => fetcher(id),
    queryKey: ['car', id],
    enabled: !!id,
  });

  return {
    data,
    isLoading,
  };
}
