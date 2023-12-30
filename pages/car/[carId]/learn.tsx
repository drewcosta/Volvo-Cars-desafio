import React from 'react';
import { useRouter } from 'next/router';
import { useCar } from '../../../src/hooks/useCar';

import Image from 'next/image';
import { Spacer, Text, Flex, Button, View } from "vcc-ui";
import styles from '../../../public/css/pages/page.module.css'

import { Loading } from '../../../src/components/Common/Loading';

const Learn = () => {

  const router = useRouter();
  const { carId } = router.query;
  const { data, isLoading } = useCar(carId as string);

  if (isLoading) return <Loading />

  return (
    <div className={styles.container}>

      <div className={styles.page_header}>
        <Flex extend={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 24px',
          width: '100%'
        }}>
          <Text variant={"cook"} subStyle={"standard"}>Sobre o {data?.modelName}</Text>
          <Text variant={"hillary"} subStyle={"standard"} extend={{ color: "rgba(0, 0, 0, 0.64)" }}>Explore as ofertas e solicite a <br />cotação para adquirir o seu.</Text>
        </Flex>
      </div>


      <div className={styles.page_content}>
        <Flex extend={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}>
          <div>
            <Image src={data?.imageUrl ?? ''} alt={data?.modelName} height={350} width={450} />
          </div>

          <div className={styles.page_content_text}>
            <Text variant={"ootah"} subStyle={"emphasis"} as={"h2"}>Características</Text>
            <Spacer />
            <Text variant={"hillary"} subStyle={"emphasis"} as={"p"}>Carroceria: {data?.bodyType}</Text>
            <Spacer />
            <Text variant={"hillary"} subStyle={"emphasis"} as={"p"}>Modelo: {data?.modelType}</Text>
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

export default Learn;
