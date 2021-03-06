import { useContext } from "react";
import { Box, Text, Spacer, Flex, HStack } from "@chakra-ui/react";
import ModalComponent from "../modal/ModalComponent";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import Link from "next/link";
import authContext from "../../authentication/authContext";
import HeaderComponent from "./HeaderComponent";

function Navbar() {
  const {
    currency,
    handleCurrency,
    open,
    isClose,
    isOpen,
    openDrawer,
    isMobile,
  } = useContext(authContext);
  return (
    <>
      <ModalComponent
        open={open}
        isClose={isClose}
        mainCurrency={currency}
        handleChange={handleCurrency}
      />
      <HStack
        spacing={{
          sm: "60px",
          md: "200px",
          lg: "180px",
          xl: "350px",
        }}
        alignItems="center"
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
        <Box
          onClick={isOpen}
          cursor="pointer"
          alignItems="center"
          display="flex"
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
        {isMobile && (
          <Box>
            <CgMenuGridR onClick={openDrawer} size="25px" />
          </Box>
        )}

        {!isMobile && <HeaderComponent />}
      </HStack>
    </>
  );
}

export default Navbar;
