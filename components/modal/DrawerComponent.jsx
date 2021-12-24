import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Box,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import HeaderComponent from "../header/HeaderComponent";
import SubHeaderComponent from "../header/SubHeaderComponent";
import authContext from "./../../authentication/authContext";

function DrawerComponent() {
  const { drawer, openDrawer, closeDrawer } = useContext(authContext);
  return (
    <Drawer
      colorScheme="gray"
      placement="right"
      isOpen={drawer}
      onClose={closeDrawer}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Box>
          <SubHeaderComponent />
          <Box
            p="4"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <HeaderComponent />
          </Box>
        </Box>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;
