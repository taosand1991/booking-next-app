import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../components/css/component.module.css";
import MotionFrame from "../utils/motionFrame";
import HotelComponents from "../components/hotel component/HotelComponents";
import SubHeaderComponent from "../components/header/SubHeaderComponent";

export default function Home({ slicedData }) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
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

// export async function getServerSideProps(context) {
//   // const slicedData = await fetchData(26);
//   return {
//     props: {
//       // slicedData,
//     },
//   };
// }
