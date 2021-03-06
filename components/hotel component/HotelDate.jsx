import styles from "../css/component.module.css";
import {
  Box,
  Input,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { GoLocation, GoSearch } from "react-icons/go";
import Autocomplete from "react-google-autocomplete";
import authContext from "../../authentication/authContext";
import React from "react";

function HotelDate() {
  const {
    handleLocation,
    handleBooking,
    bookingProps,
    handleAdult,
    handleKid,
    room,
    kid,
    adult,
    handleRoom,
    checkDate,
    errors,
    checkInDate,
    submitBooking,
    loading,
    isMobile,
  } = React.useContext(authContext);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <Box
      flexBasis={{ base: "55%", md: "40%", lg: "40%" }}
      w={{ sm: "600px", md: "1200px", lg: "400px" }}
      h={isMobile ? "100%" : "100%"}
      p={isMobile ? "4" : "8"}
      borderRadius="md"
      bg="gray.800"
    >
      <Box
        display="flex"
        bg="white"
        alignItems="center"
        w="100%"
        h="40px"
        p="3"
        borderRadius="full"
      >
        <Autocomplete
          className={styles.autocomplete}
          placeholder="Enter your city"
          id="location"
          debounce={4000}
          libraries={["places", "geolocation"]}
          apiKey={process.env.NEXT_PUBLIC_API_KEY}
          onPlaceSelected={handleLocation}
        />
        <GoLocation color="black" />
      </Box>
      {errors.input && (
        <Text data-testid="input-error" color="red" mt="3px" mb="5px">
          {errors.input}
        </Text>
      )}
      <Box mt="10px">
        <FormControl id="form-control">
          <FormLabel htmlFor="check-in">Check-in date</FormLabel>
          <Input
            isInvalid={errors.checkIn}
            onBlur={checkInDate}
            value={bookingProps.checkInDate}
            onChange={handleBooking}
            name="checkInDate"
            mb="10px"
            color="black"
            backgroundColor="white"
            id="check-in"
            type="date"
            min={today}
            placeholder="DD-MM-YY"
          />
          {errors.checkIn && (
            <Text data-testid="checkin-error" color="red" mt="3px" mb="5px">
              {errors.checkIn}
            </Text>
          )}
          {errors.checkin_date && (
            <Text data-testid="date-error" color="red" mt="3px" mb="5px">
              {errors.checkin_date}
            </Text>
          )}
          <FormLabel htmlFor="check-out">Check-out date</FormLabel>
          <Input
            onBlur={checkDate}
            isInvalid={errors.date}
            value={bookingProps.checkOutDate}
            onChange={handleBooking}
            name="checkOutDate"
            mb="10px"
            color="black"
            backgroundColor="white"
            id="check-out"
            type="date"
            min={today}
            placeholder="DD-MM-YY"
          />
          {errors.date && (
            <Text data-testid="checkout-error" color="red" mt="3px" mb="5px">
              {errors.date}
            </Text>
          )}
          {errors.checkout_date && (
            <Text data-testid="checkout-error" color="red" mt="3px" mb="5px">
              {errors.checkout_date}
            </Text>
          )}
          <Box display="flex" justifyContent="space-between">
            <Box flexBasis="30%">
              <FormLabel htmlFor="adult">Adults</FormLabel>
              <NumberInput
                value={adult}
                onChange={handleAdult}
                name="adult"
                id="adult"
                defaultValue={1}
                min={1}
                backgroundColor="white"
                color="black"
                focusBorderColor="none"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box flexBasis="30%">
              <FormLabel htmlFor="kid">Kids</FormLabel>
              <NumberInput
                value={kid}
                onChange={handleKid}
                name="kid"
                defaultValue={0}
                min={1}
                id="kid"
                backgroundColor="white"
                color="black"
                focusBorderColor="none"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box flexBasis="30%">
              <FormLabel htmlFor="room">Room</FormLabel>
              <NumberInput
                value={room}
                onChange={handleRoom}
                defaultValue={0}
                min={1}
                id="room"
                backgroundColor="white"
                color="black"
                focusBorderColor="none"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </Box>
          <Button
            data-testid="search"
            onClick={submitBooking}
            isLoading={loading}
            type="submit"
            loadingText="Searching"
            as="button"
            mt="20px"
            bg="gray.100"
            w="100%"
            h="10"
            rightIcon={<GoSearch />}
            px={4}
            textAlign="center"
            color="black"
            borderRadius="md"
          >
            Search
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default HotelDate;
