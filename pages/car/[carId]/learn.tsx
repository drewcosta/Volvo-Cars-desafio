import { useRouter } from 'next/router';
import { useCar } from '../../../src/hooks/useCar';

const Learn = () => {

  const router = useRouter();
  const { carId } = router.query;
  const { data, isLoading } = useCar(carId as string);

  return (
    <div style={{ color: "black" }}>
      {data?.modelName}{'|'}
      {data?.imageUrl}
    </div>
  )
}

export default Learn;