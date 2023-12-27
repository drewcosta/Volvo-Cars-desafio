import { CardContent, Spacer, Text, Flex, Link } from "vcc-ui";
import Image from "next/image";
import styles from '../../../public/css/components/Card-car.module.css'

import { Car } from "../../types/car";

interface CardPops {
  car: Car;
}

export const CardCar = ({ car }: CardPops) => {
  return (
    <div className={styles.cardWrapper}>
      <CardContent>
        <Text variant={"bates"} subStyle="emphasis">{car.bodyType}</Text>
        <Flex
          extend={{
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            margin: 0,
            gap: 10,
          }}
        >
          <Text variant={"amundsen"}>{car.modelName}</Text>
          <Text variant={"bates"} subStyle="inline-link">{car.modelType}</Text>
        </Flex>
        <Spacer />
        <Image src={car.imageUrl} alt={car.modelName} height={250} width={350} />
        <Spacer />
        <Flex extend={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 15,
        }}>
          <Link href={`/car/${car.id}/learn`} arrow="right">
            Conheça
          </Link>
          <Link href={`/car/${car.id}/shop`} arrow="right">
            Comprar
          </Link>
        </Flex>
      </CardContent>
    </div>
  );
};
