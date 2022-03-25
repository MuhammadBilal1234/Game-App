import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import SideBar from "./Sidebar";
import TopBar from "./TopBar";
import { FcMenu } from "react-icons/fc";
import { useState, useEffect } from "react";
import useWindowSize from "./Hooks/useWindowSize";

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(false);
  const size = useWindowSize();

  return (
    <Box h="100%" minH="100vh" bg="gray.100">
      <TopBar isOpen={isOpen && size.width > 1250 ? true : false} />
      <Flex>
        <SideBar
          isOpen={isOpen && size.width > 1250 ? true : false}
          setOpen={setOpen}
        />
        <Box
          bg="#24262b"
          mt="75px"
          pl={`${isOpen && size.width > 1250 ? "260px" : "70px"}`}
          transition="padding 300ms ease-in"
          w="100%"
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
