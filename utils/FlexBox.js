import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function FlexBox({ children }) {
  return (
    <Flex wrap="wrap" gap={6} justifyContent="center" alignItems="center">
      {children}
    </Flex>
  );
}
