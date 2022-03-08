import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import OpenSideBar from "./Sidebar/OpenSidebar";
import TopBar from "./TopBar";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(true);
  return (
    <Box minH="100vh" bg="gray.100">
      <TopBar isOpen={isOpen} />
      <Flex>
        <OpenSideBar isOpen={isOpen} setOpen={setOpen} />
        <Box
          bg="#24262b"
          mt="75px"
          pl={`${isOpen ? "260px" : "70px"}`}
          transition="padding 300ms ease-in"
          w="100%"
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
