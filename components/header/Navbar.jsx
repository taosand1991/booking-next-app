import { useContext } from "react";
import {
  Box,
  useMediaQuery,
  Text,
  Spacer,
  Flex,
  HStack,
} from "@chakra-ui/react";
import ModalComponent from "../modal/ModalComponent";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import Link from "next/link";
import authContext from "../../authentication/authContext";
import HeaderComponent from "./HeaderComponent";

function Navbar() {
  const { currency, handleCurrency, open, isClose, isOpen, openDrawer } =
    useContext(authContext);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <ModalComponent
        open={open}
        isClose={isClose}
        mainCurrency={currency}
        handleChange={handleCurrency}
      />
      <HStack
        spacing={isMobile ? "60px" : "30px"}
        alignItems="center"
        // justifyContent="center"
        h="60px"
        w={isMobile ? "100%" : "100%"}
        p="5"
        bg="black"
        color="white"
      >
        <Box>
          <Link href="/">
            <a>
              <Text fontSize="2xl">Hotelinus</Text>
            </a>
          </Link>
        </Box>
        {!isMobile && <Spacer />}
        <Spacer />
        <Box
          onClick={isOpen}
          cursor="pointer"
          alignItems="center"
          display="flex"
          // flexBasis="25%"
        >
          <Box
            width="30px"
            h="30px"
            as="span"
            mr="5px"
            className={`flag-icon flag-icon-${currency.flag}`}
          />
          <Text mr="3px">{currency.value}</Text>
          <RiArrowDownSFill />
        </Box>
        <Spacer />
        <Box display={isMobile ? "block" : "none"}>
          <CgMenuGridR onClick={openDrawer} size="25px" />
        </Box>

        {!isMobile && <HeaderComponent />}
      </HStack>
    </>
  );
}

export default Navbar;
