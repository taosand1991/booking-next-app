import React from "react";
import { Flex } from "@chakra-ui/react";
import HotelCard from "./HotelCard";

function HotelList({ results }) {
  return (
    <Flex
      flexBasis="50%"
      flexWrap="wrap"
      justifyContent="center"
      flexDirection="row"
    >
      {results.map((result) => {
        return <HotelCard key={result.id} result={result} />;
      })}
    </Flex>
  );
}

export default HotelList;
