import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useContext } from "react";
import styles from "../components/css/component.module.css";
import MotionFrame from "../utils/motionFrame";
import HotelComponents from "../components/hotel component/HotelComponents";
import SubHeaderComponent from "../components/header/SubHeaderComponent";
import authContext from "./../authentication/authContext";
import Head from "../utils/layout";
// const MotionFrame = dynamic(() => import("../utils/motionFrame"));
// const HotelComponents = dynamic(
//   () => import("../components/hotel component/HotelComponents"),
//   { ssr: false }
// );
// const SubHeaderComponent = dynamic(
//   () => import("../components/header/SubHeaderComponent"),
//   { ssr: false }
// );
// // const authContext = dynamic(() => import("./../authentication/authContext"));
// const Head = dynamic(() => import("../utils/layout"), { ssr: false });

export default function Home() {
  const { isMobile } = useContext(authContext);
  return (
    <>
      <Head title="Hotel homepage" />
      <MotionFrame>
        <Box
          className={styles.background_style}
          data-testid="home-element"
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
    </>
  );
}
