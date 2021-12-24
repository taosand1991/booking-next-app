import { Box, Badge, Image, Spacer, Button } from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useContext } from "react";
import authContext from "../../authentication/authContext";

function HotelCard({ result }) {
  const {
    bookingProps: { checkInDate, checkOutDate },
    exchangeRate,
    currency,
  } = useContext(authContext);

  const date = new Date(checkOutDate) - new Date(checkInDate);
  const difference = date / 86400000;

  const formatPrice = (price) => {
    return Math.floor(price * exchangeRate).toLocaleString();
  };

  const openLink = (link) => {
    window.open(link);
  };

  return (
    <Box m="3">
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src={result?.max_1440_photo_url}
          alt={result?.max_1440_photo_url}
        />

        <Box p="2">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {result?.accommodation_type_name}
            </Badge>
            <Badge borderRadius="full" px="2" ml="2" colorScheme="teal">
              {result?.ribbon_text}
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {result.hotel_name}
          </Box>
          <Box mt="3px" fontStyle="italic">
            <Link href="#">
              <a>
                {result.district}, {result.city} - {result?.distances[0].text}
              </a>
            </Link>
          </Box>
          <Box display="flex">
            {currency.value}{" "}
            {formatPrice(
              result?.composite_price_breakdown["gross_amount_per_night"].value
            )}
            <Box as="span" color="gray.600" fontSize="sm">
              / night
            </Box>
            <Spacer />
            <Box fontWeight="bold">
              {currency.value}{" "}
              {formatPrice(
                result?.composite_price_breakdown["all_inclusive_amount"].value
              )}
              <Box fontWeight="thin" ml="2" as="span">
                {difference} {difference > 1 ? "nights" : "night"}
              </Box>
            </Box>
          </Box>
          <Box
            dangerouslySetInnerHTML={{
              __html: result?.unit_configuration_label,
            }}
          />
          <Box display="flex" mt="2" alignItems="center">
            {Array(10)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={
                    i < Math.floor(result?.review_score)
                      ? "teal.500"
                      : "gray.300"
                  }
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {result?.review_nr} reviews
            </Box>
            <Box ml="1" fontWeight="bold" as="h2">
              ({result?.review_score_word})
            </Box>
          </Box>
          <Box mt="6px" as="span" color="red">
            {result?.urgency_message}
          </Box>
          <Box p="3" float="right">
            <Button
              onClick={() => openLink(result.url)}
              color="white"
              rightIcon={<ChevronRightIcon />}
              bg="teal"
              borderRadius="md"
              p="4"
            >
              see availability
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HotelCard;
