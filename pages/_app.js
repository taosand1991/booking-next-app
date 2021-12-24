import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/header/Navbar";
import ProgressBar from "../utils/ProgressBar";
import Context from "../authentication/context";
import DrawerComponent from "../components/modal/DrawerComponent";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProgressBar />
      <AnimatePresence>
        <Context>
          <Navbar />
          <DrawerComponent />
          <Component {...pageProps} />
        </Context>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
