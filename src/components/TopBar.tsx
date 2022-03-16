import type { NextPage } from "next";
import Link from "next/link";
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
import { FaSearch } from "react-icons/fa";

import Image from "next/image";
import Logo from "../../public/assets/logo.b7a2c469.png";
import { isModifier } from "typescript";

interface Props {
  isOpen: Boolean;
}

const TopBar: NextPage<Props> = ({ isOpen }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box position="fixed" top="0" left="0" right="0" zIndex="12">
      <Box
        bg="#31373d"
        w="100vw"
        height="75px"
        position="sticky"
        pl={`${isOpen ? "10vw" : "0vw"}`}
        overflow="hidden"
        transition="padding 300ms linear"
      >
        <Flex h="100%">
          <Box
            w={60}
            h={80}
            sx={{
              "@media screen and (max-width : 545px)": {
                marginLeft: 5,
              },
            }}
            ml="130px"
            mt={3}
          >
            <Link href="https://game.babylonia.app" passHref={true}>
              <a target="_blank" rel="noreferrer">
                <Box h="190px" width="150px" ml="4">
                  <Image src={Logo} />
                </Box>
              </a>
            </Link>
          </Box>
          <InputGroup
            color="white"
            h="45"
            mt="15"
            ml="2"
            pb={1.5}
            pl={3}
            w={450}
            bg="#24262b"
            sx={{
              "@media screen and (max-width : 817px)": {
                display: "none",
              },
              fontWeight: "bold",
            }}
            borderRadius="1.4rem"
          >
            <InputLeftElement
              pl={2}
              pt={1.5}
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              placeholder="Game Name | Provider | Category Tag"
              borderRadius="1.4rem"
              h="45"
              pb={1}
              border="none"
              focusBorderColor="none"
            />
          </InputGroup>
          <Spacer
            sx={{
              "@media screen and (max-width : 650px)": {
                display: "none",
              },
            }}
          />
          <Box pt="4" minW="350px" h="100%">
            <Button
              _hover={{}}
              mr={5}
              color="#43b309"
              variant="outline"
              border="none"
              _focus={{}}
              _active={{}}
            >
              Sign In
            </Button>
            <Button
              _active={{}}
              _focus={{}}
              w="6.5rem"
              h="2.5rem"
              color="white"
              p="2.5"
              _hover={{}}
              borderRadius="6.25rem"
              bgGradient="conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28))"
            >
              Sign Up
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TopBar;
