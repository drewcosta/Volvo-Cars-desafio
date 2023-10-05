import { CardContent, Spacer, Text, Card, Flex, Link } from "vcc-ui";
import { Car } from "../types/car";
import Image from "next/image";
import styles from '../../public/css/components/Card-car.module.css'

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
          <Link href="" arrow="right">
            Conheça
          </Link>
          <Link href="" arrow="right">
            Comprar
          </Link>
        </Flex>
      </CardContent>
    </div>
  );
};
