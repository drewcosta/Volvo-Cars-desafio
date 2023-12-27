import React from "react";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { QueryClientProvider, QueryClient } from "react-query";
import { FilterContextProvider } from "../src/contexts/FilterContext";
import type { AppProps } from 'next/app'

function HomePage({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <FilterContextProvider>
          <StyleProvider>
            <ThemePicker variant="light">
              <Component {...pageProps} />
            </ThemePicker>
          </StyleProvider>
        </FilterContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default HomePage;
