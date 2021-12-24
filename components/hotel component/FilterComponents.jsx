import {
  Box,
  Text,
  Center,
  Select,
  Button,
  Divider,
  Checkbox,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { BiSort } from "react-icons/bi";
import { useContext } from "react";
import authContext from "../../authentication/authContext";

function FilterComponents({ hostels, hotels, breakFast }) {
  const { handleSort, handleSortChange, handleCheck } = useContext(authContext);
  return (
    <Box bg="white" borderRadius="md" borderWidth="1px" w="100%" h="100%">
      <Box w="100%" bg="teal.300" p="5">
        <Center color="white">Filter Options</Center>
      </Box>
      <Box p="5">
        <Text mb="2">Order by :</Text>
        <Box display="flex">
          <Select onChange={handleSort}>
            <option value="">select option</option>
            <option value="review_score">review score</option>
            <option value="price">price</option>
          </Select>
          <Button ml="2" borderRadius="md" bg="teal.300">
            <BiSort onClick={handleSortChange} />
          </Button>
        </Box>
      </Box>
      <Divider />
      <Stack p="4" direction="column">
        <Box display="flex">
          <Checkbox onChange={handleCheck} name="hotel" colorScheme="teal">
            Hotels
          </Checkbox>
          <Spacer />
          <Box as="span">{hotels.length}</Box>
        </Box>
        <Box display="flex">
          <Checkbox name="hostel" onChange={handleCheck} colorScheme="teal">
            Hostels
          </Checkbox>
          <Spacer />
          <Box as="span">{hostels.length}</Box>
        </Box>
        <Box display="flex">
          <Checkbox
            onChange={handleCheck}
            name="breakFastInc"
            colorScheme="teal"
          >
            Breakfast Included
          </Checkbox>
          <Spacer />
          <Box as="span">{breakFast.length}</Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default FilterComponents;
