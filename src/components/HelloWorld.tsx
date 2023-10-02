import React from "react";
import { Block, Button } from "vcc-ui";
import { useCars } from "../hooks/useCars";

export const HelloWorld: React.FC = () => {
  const { data, isLoading } = useCars();

  console.log(data);

  return (
    <Block extend={{ padding: 20 }}>
      <Button>Click me!</Button>
    </Block>
  );
};
