import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { ChakraProvider } from "@chakra-ui/react";
// Custom Chakra theme
import theme from "theme/theme.js";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position='relative'>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
