import React from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = Polygon;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={"c338b9d3e8fe2a801bda397a790b79be"}
      activeChain="polygon"
    >
      <BrowserRouter>
      <ChakraProvider>
        <App />
        </ChakraProvider>
      </BrowserRouter>

    </ThirdwebProvider>
  </React.StrictMode>
);
