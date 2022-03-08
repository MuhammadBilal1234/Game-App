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
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import Image from "next/image";
import MenuIcon from "../../../public/assets/menuIcon.png";

const OpenSideBar: NextPage = ({ isOpen, setOpen }) => {
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
      {isOpen && (
        <Box
          mt="3"
          ml="7"
          opacity={`${isOpen ? "1" : "0"}`}
          transition="opacity 1050ms ease-in 1000ms"
        >
          <Button
            mr="3"
            borderRadius="105"
            p="6"
            bg="#31343c"
            color="white"
            _hover={{}}
            _active={{}}
            _focus={{}}
          >
            Casino
          </Button>
          <Button
            disabled
            borderRadius="105"
            p="6"
            bg="#31343c"
            color="white"
            _hover={{}}
            _active={{}}
            _focus={{}}
            position="absolute"
          >
            Sports
          </Button>
        </Box>
      )}
      {!isOpen && (
        <Box overflow="auto" h="99%" w="100%" pr="15px">
          <Box w="1" h="10" ml="2" mt="2">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
          <Box w="10" h="10" ml="2" mt="4">
            <Image src={MenuIcon} layout="fixed" height={55} width={55} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OpenSideBar;
