import React from "react";
import "../public/css/styles.css";
import { Home } from "../src/components/Home";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { QueryClientProvider, QueryClient } from "react-query";
import { FilterContextProvider } from "../src/contexts/FilterContext";

function HomePage() {
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <FilterContextProvider>
          <StyleProvider>
            <ThemePicker variant="light">
              <Home />
            </ThemePicker>
          </StyleProvider>
        </FilterContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default HomePage;
