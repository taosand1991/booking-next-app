import { Box, HStack, VStack, Divider, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import authContext from "./../../authentication/authContext";

function SubHeaderComponent() {
  const { isMobile } = useContext(authContext);
  const webView = () => {
    return (
      <HStack
        spacing={isMobile ? "10px" : "50px"}
        display="flex"
        p="5"
        w={isMobile ? "100%" : "100%"}
        justifyContent="center"
        divider={<Divider orientation="vertical" />}
        bg="gray.50"
        h={isMobile ? "20px" : "100px"}
      >
        <Box cursor="pointer" fontSize="1xl">
          Home
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          Our Rooms
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          NearBy Attractions
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          About
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          Contact
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          Blog
        </Box>
      </HStack>
    );
  };

  const mobileView = () => {
    return (
      <VStack
        spacing={isMobile ? "10px" : "50px"}
        display="flex"
        p="5"
        w={isMobile ? "100%" : "100%"}
        justifyContent="center"
        divider={<Divider orientation="horizontal" />}
        h={isMobile ? "100%" : "100px"}
      >
        <Box cursor="pointer" fontSize="1xl">
          Home
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          Our Rooms
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          NearBy Attractions
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          About
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          Contact
        </Box>
        <Box cursor="pointer" fontSize="1xl">
          Blog
        </Box>
      </VStack>
    );
  };
  return isMobile ? mobileView() : webView();
}

export default SubHeaderComponent;
