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

interface Props {
  isOpen: Boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const OpenSideBar: NextPage<Props> = ({ isOpen, setOpen }: Props) => {
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
        <Box>
          <Box
            pt="3"
            pl="7"
            opacity={`${isOpen ? "1" : "0"}`}
            transition="opacity 1050ms ease-in 1000ms"
            boxShadow="dark-lg"
            w="100%"
            h="75px"
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

          <Box w="100%" h="100vh" pt="5">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <Flex w="100%" h="50" mb="5">
                  <Flex
                    bgGradient="linear-gradient(to right,rgba(105,179,1,.4),rgba(85,89,102,.4) 33%,rgba(85,89,102,.4))"
                    width="auto"
                    pl="4"
                    pr="5"
                    borderTopRightRadius="20"
                    borderBottomRightRadius="20"
                  >
                    <Image
                      src={MenuIcon}
                      layout="fixed"
                      height={50}
                      width={50}
                    />
                    <Text fontWeight="bold" color="white" pl=".15em" pt=".7em">
                      {" "}
                      Menu Icon{" "}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
          </Box>
        </Box>
      )}
      {!isOpen && <ClosedSideBar />}
    </Box>
  );
};

export default OpenSideBar;
