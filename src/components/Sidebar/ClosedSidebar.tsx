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

const ClosedSideBar: NextPage = () => {
  return (
    <Box overflow="auto" h="99%" w="100%" pr="15px">
      <Box
        w="1"
        h="10"
        ml="2"
        mt="2"
        cursor="pointer"
        _hover={{ padding: "0.3px 0px" }}
      >
        <Image
          src={MenuIcon}
          layout="fixed"
          height={55}
          width={55}
          className="closed-icon"
        />
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
      <Box w="10" h="10" ml="2" mt="4" cursor="pointer">
        <Image src={MenuIcon} layout="fixed" height={55} width={55} />
      </Box>
    </Box>
  );
};

export default ClosedSideBar;
