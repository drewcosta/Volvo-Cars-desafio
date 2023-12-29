import React from 'react';
import { useRouter } from 'next/router';
import { useCar } from '../../../src/hooks/useCar';

import Image from 'next/image';
import { Spacer, Text, Flex, Button, View } from "vcc-ui";
import styles from '../../../public/css/pages/pageShop.module.css'

import { Loading } from '../../../src/components/Common/Loading';

const Shop = () => {

  const router = useRouter();
  const { carId } = router.query;
  const { data, isLoading } = useCar(carId as string);

  if (isLoading) return <Loading />

  return (
    <div className={styles.container}>

      <div className={styles.pageShop_header}>
        <Flex extend={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 24px',
          width: '100%'
        }}>
          <Text variant={"cook"} subStyle={"standard"} >Comprar o {data?.modelName}</Text>
          <Text variant={"hillary"} subStyle={"standard"} extend={{ color: "rgba(0, 0, 0, 0.64)" }}>Explore as ofertas e solicite a <br />cotação para adquirir o seu.</Text>
        </Flex>
      </div>


      <div className={styles.pageShop_content}>
        <Flex extend={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}>
          <div>
            <Image src={data?.imageUrl ?? ''} alt={data?.modelName} height={350} width={450} />
          </div>

          <div className={styles.pageShop_content_text}>
            <Text variant={"ootah"} subStyle={"emphasis"} as={"h2"}>Personalize o seu carro. Configure e compare para encontrar o seu Volvo ideal</Text>
            <Spacer />
            <Text variant={"bates"} subStyle={"standard"} as={"p"}>- Escolha os acessórios certos para você<br /> - Obtenha um preço hoje</Text>
            <Spacer size={{ default: 8 }} />
            <View maxWidth={"200"}>
              <Button variant="outline">Configure o seu</Button>
            </View>
          </div>

        </Flex>
      </div>


    </div>
  )
}

export default Shop;
