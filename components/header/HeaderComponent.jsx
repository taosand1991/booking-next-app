import { Box, Text, useMediaQuery } from "@chakra-ui/react";

function HeaderComponent() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const webView = () => {
    return (
      <Box flex="1" display="flex">
        <Box mr="4">
          <Text fontSize="1xl">admin.site@hotelnius.com</Text>
        </Box>
        <Box mr="4">
          <Text fontSize="1xl">370-675-4357</Text>
        </Box>
        <Box
          as="button"
          borderRadius="sm"
          bg="teal.500"
          color="white"
          px={4}
          h={8}
        >
          book now
        </Box>
      </Box>
    );
  };
  const mobileView = () => {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box mb="3">
          <Text fontSize="1xl">admin.site@hotelnius.com</Text>
        </Box>
        <Box textAlign="center" mb="3">
          <Text fontSize="1xl">370-675-4357</Text>
        </Box>
        <Box
          as="button"
          borderRadius="sm"
          bg="teal.500"
          color="white"
          px={4}
          h={8}
        >
          book now
        </Box>
      </Box>
    );
  };
  return isMobile ? mobileView() : webView();
}

export default HeaderComponent;
