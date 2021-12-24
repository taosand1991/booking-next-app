import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import styles from "../css/component.module.css";
import HotelDate from "./HotelDate";
import HotelSvg from "./HotelSvg";

function HotelComponents() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      h={isMobile ? "100%" : "100vh"}
      w="100%"
      p="3"
      display={isMobile ? "flex" : "flex"}
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Flex
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems="center"
      >
        <HotelDate />
        {!isMobile && <HotelSvg />}
      </Flex>
    </Box>
  );
}

export default HotelComponents;
