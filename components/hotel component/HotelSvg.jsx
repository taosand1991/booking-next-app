import { Box } from "@chakra-ui/react";
import Image from "next/image";

function HotelSvg() {
  return (
    <Box flexBasis="45%" w="600px" h="300px" bg="blackAlpha.300">
      <Image
        src="/images/travel.svg"
        alt="i love it"
        width="600px"
        height="600px"
      />
    </Box>
  );
}

export default HotelSvg;
