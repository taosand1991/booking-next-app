import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/header/Navbar";
import ProgressBar from "../utils/ProgressBar";
import Context from "../authentication/context";
import DrawerComponent from "../components/modal/DrawerComponent";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
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
