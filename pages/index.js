import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useContext } from "react";
import styles from "../components/css/component.module.css";
import MotionFrame from "../utils/motionFrame";
import HotelComponents from "../components/hotel component/HotelComponents";
import SubHeaderComponent from "../components/header/SubHeaderComponent";
import authContext from "./../authentication/authContext";

export default function Home({ slicedData }) {
  const { isMobile } = useContext(authContext);
  return (
    <MotionFrame>
      <Box
        className={styles.background_style}
        height="100vh"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {!isMobile && <SubHeaderComponent />}
        <HotelComponents />
      </Box>
    </MotionFrame>
  );
}
