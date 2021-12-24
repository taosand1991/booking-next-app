import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Box,
  Flex,
  ModalCloseButton,
} from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";

import currencies from "../../utils/currency";

function ModalComponent({ open, isClose, mainCurrency, handleChange }) {
  return (
    <Modal isOpen={open} onClose={isClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex wrap="wrap" p={5}>
            {currencies.map((currency) => {
              return (
                <Box
                  onClick={() => handleChange(currency)}
                  cursor="pointer"
                  bg={
                    mainCurrency.value === currency.value ? "teal.50" : "white"
                  }
                  color="black"
                  borderRadius="base"
                  p={3}
                  mr="10px"
                  mb="10px"
                  flexBasis="45%"
                  key={currency.flag}
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      as="span"
                      mr="5px"
                      className={`flag-icon flag-icon-${currency.flag}`}
                    />
                    <Text>{currency.value}</Text>
                  </Box>
                  <Box>
                    <Text>{currency.currencyName}</Text>
                  </Box>
                  <Box float="right">
                    {mainCurrency.value === currency.value && (
                      <IoMdCheckmark color="black" />
                    )}
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
