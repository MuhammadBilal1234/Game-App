import { Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Spacer,
  useMediaQuery,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import Image from "next/image";
import MenuIcon from "../../../public/assets/menuIcon.png";
import ClosedSideBar from "./ClosedSidebar";
import OpenSideBar from "./OpenSidebar";

interface Props {
  isOpen: Boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Index: NextPage<Props> = ({ isOpen, setOpen }: Props) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w={`${isOpen ? "260px" : "70px"}`}
      h="100vh"
      bg="#24262b"
      zIndex="15"
      //   opacity={`${isOpen ? "1" : "0"}`}
      transition="width 300ms ease-in"
    >
      <Box
        position="absolute"
        top="7"
        // left="248"
        left={`${isOpen ? "248" : "57"}`}
        transition="left 300ms ease-in"
      >
        <FcMenu
          className="menu-icon"
          color="white"
          onClick={() => setOpen(!isOpen)}
        />
      </Box>
      {isOpen && <OpenSideBar isOpen={isOpen} setOpen={setOpen} />}
      {!isOpen && <ClosedSideBar />}
    </Box>
  );
};

export default Index;
