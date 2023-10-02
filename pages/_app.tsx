import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { QueryClientProvider, QueryClient } from "react-query";

function HomePage() {

  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <StyleProvider>
          <ThemePicker variant="light">
            <HelloWorld />
          </ThemePicker>
        </StyleProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default HomePage;
