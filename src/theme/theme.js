import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { linkStyles } from "./components/link";
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles, // General Styles
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
  linkStyles // Link styles
);
