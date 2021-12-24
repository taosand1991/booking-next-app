import React, { Fragment } from "react";
import {
  Box,
  Text,
  Flex,
  Divider,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import FilterComponents from "../../components/hotel component/FilterComponents";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import Image from "next/image";
import HotelList from "../../components/hotel component/HotelList";
import authContext from "./../../authentication/authContext";
import MotionFrame from "./../../utils/motionFrame";

export default function Hotels(props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { results, city, hotelOption, limit, loadMore, loading } =
    React.useContext(authContext);

  const { hostel, hotel, breakFastInc } = hotelOption;

  const featuredHotels = results.filter((hotel) => hotel.review_score >= 8);
  const hotels = results.filter(
    (hotel) => hotel.accommodation_type_name === "Hotel"
  );
  const hostels = results.filter(
    (hotel) =>
      hotel.accommodation_type_name === "Hostel" ||
      hotel.accommodation_type_name === "Apartment"
  );
  const breakFast = results.filter((hotel) => hotel?.ribbon_text);

  const filteredHotels = () => {
    if (hotel) return hotels;
    if (hostel) return hostels;
    if (breakFastInc) return breakFast;
    else return results;
  };

  const paginatedList = filteredHotels().slice(0, limit);

  const view = () => {
    if (isMobile) {
      return (
        <Flex p="5" flexDirection="column">
          <Box>
            <FilterComponents
              hotels={hotels}
              hostels={hostels}
              breakFast={breakFast}
            />
          </Box>
          <Box>
            <HotelList results={paginatedList} />
          </Box>
        </Flex>
      );
    } else {
      return (
        <Flex p="5">
          <Box flexBasis="20%">
            <FilterComponents
              hotels={hotels}
              hostels={hostels}
              breakFast={breakFast}
            />
          </Box>
          <Box flexBasis="70%">
            <HotelList results={paginatedList} />
          </Box>
        </Flex>
      );
    }
  };

  return (
    <MotionFrame>
      <Box w="100%" display="block">
        <Box
          position="relative"
          mt="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={isMobile ? "100%" : "50%"}
          m="auto"
          p={isMobile ? "4" : ""}
          flexDirection="column"
          h="100%"
        >
          <Text mb="5px" fontSize={isMobile ? "sm" : "2xl"}>
            Featured Hotels in {city}
          </Text>
          <CarouselComponent isMobile={isMobile}>
            {featuredHotels.map((hotel) => {
              return (
                <Fragment key={hotel.max_1440_photo_url}>
                  <Box position="relative">
                    <Image
                      src={hotel.max_1440_photo_url}
                      alt="hotel"
                      width="800px"
                      height="500px"
                    />
                    <Box
                      color="white"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      position="absolute"
                      top={"40%"}
                      w={isMobile ? "200px" : "300px"}
                      h={isMobile ? "50px" : "100px"}
                      left={isMobile ? "20%" : "30%"}
                      bg="blackAlpha.700"
                    >
                      <Text>{hotel.hotel_name}</Text>
                    </Box>
                  </Box>
                </Fragment>
              );
            })}
          </CarouselComponent>
        </Box>
        <Divider />
        <Box mt="4px" p="4" textAlign="center">
          <Box fontWeight="bold" as="h3" fontSize={isMobile ? "sm" : "2xl"}>
            {city}: {filteredHotels().length} properties found
          </Box>
        </Box>
        {view()}
        <Box py="4" display="flex" justifyContent="center" alignItems="center">
          <Button
            onClick={loadMore}
            isLoading={loading}
            color="white"
            bg="teal.400"
            borderRadius="md"
            px={4}
          >
            load more
          </Button>
        </Box>
      </Box>
    </MotionFrame>
  );
}
