import {
  Box,
  Flex,
  useDisclosure,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Image from "next/image";
import type { NextPage } from "next";
import Logo from "../../public/assets/logo.b7a2c469.png";
import Hero from "../../public/assets/SignInHero.png";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const IndexPage: NextPage<Props> = ({ isOpen, onOpen, onClose }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal
        isCentered={true}
        colorScheme="green"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box
              w={150}
              h={50}
              borderRadius="1.5rem"
              m=".25em"
              position="relative"
            >
              <Box h="100%" w="100%" borderRadius="1.5rem">
                <Image
                  className="imageCard"
                  src={Logo}
                  quality={100}
                  layout="fill"
                />
              </Box>
              <Box
                w={350}
                h={250}
                borderRadius="1.5rem"
                m=".25em"
                position="relative"
                top="-65"
                left="155"
                zIndex={-100}
              >
                <Box h="100%" w="100%" borderRadius="1.5rem">
                  <Image
                    className="imageCard"
                    src={Hero}
                    quality={100}
                    layout="fill"
                  />
                </Box>
              </Box>
            </Box>
          </ModalHeader>
          <ModalCloseButton mt="3.5" color="white" />
          <ModalBody pb={6}>
            <Box
              w="100%"
              h="100px"
              fontSize="1.5rem"
              ml="2"
              color="#F5F6F7"
              fontWeight="700"
              width="14.375rem"
              lineHeight="1.2"
              marginTop="1.25rem"
            >
              BUILD THE BEST CRYPTO CASINO TOGETHER
            </Box>
            {/* <Box bg="red"></Box> */}
          </ModalBody>
          <Box
            h="463"
            w="100%"
            bg="#1e2024"
            mt="10"
            borderTopLeftRadius="25"
            borderTopRightRadius="25"
            borderRadius="22"
            overflow="auto"
          >
            <Box mt="10">
              <FormControl>
                <FormLabel
                  htmlFor="email"
                  ml="37px"
                  mb="3"
                  color="rgba(153,164,176,.6)"
                >
                  Email address
                </FormLabel>

                <Input
                  w="90%"
                  ml="25"
                  _placeholder={{ color: "rgba(153,164,176,.6)" }}
                  borderRadius="1.25rem"
                  bg="rgba(45,48,53,.5)"
                  borderColor="rgba(45,48,53,.5)"
                  h="62px"
                  pl="5"
                  color="white"
                  fontWeight="bold"
                  id="email"
                  type="email"
                  _hover={{}}
                  _focus={{ borderColor: "#43b309" }}
                  placeholder="Email"
                />
              </FormControl>
            </Box>
            <Box mt="5">
              <FormControl>
                <Flex justifyContent="space-between">
                  <FormLabel
                    htmlFor="email"
                    ml="37px"
                    mb="3"
                    color="rgba(153,164,176,.6)"
                  >
                    Login Password
                  </FormLabel>
                  <FormLabel
                    htmlFor="email"
                    // ml="37px"
                    // mb="3"
                    mr="50px"
                    color="rgba(153,164,176,.8)"
                  >
                    Forgot Password ?
                  </FormLabel>
                </Flex>
                <InputGroup>
                  <Input
                    w="90%"
                    ml="25"
                    _hover={{}}
                    borderColor="rgba(45,48,53,.5)"
                    _placeholder={{ color: "rgba(153,164,176,.6)" }}
                    borderRadius="1.25rem"
                    bg="rgba(45,48,53,.5)"
                    h="62px"
                    pl="5"
                    color="white"
                    fontWeight="bold"
                    _focus={{ borderColor: "#43b309" }}
                    id="password"
                    type="password"
                    placeholder="Login Password"
                  />
                </InputGroup>
              </FormControl>
            </Box>

            <Divider colorScheme="green" mt="35px" />
            <Box pt="6" pb="5" m="auto" pl="65px">
              <Button
                _active={{}}
                _focus={{}}
                w="17.5rem"
                h="4.5rem"
                color="white"
                p="2.5"
                pb="15px"
                mr="2"
                fontSize="18px"
                _hover={{}}
                borderRadius="6.25rem"
                bgGradient="conic-gradient(from 1turn,#581ac4,#773cfd)"
              >
                Sign In
              </Button>
              <Button
                _active={{}}
                _focus={{}}
                w="10.5rem"
                h="4.5rem"
                color="white"
                p="2.5"
                pb="15px"
                _hover={{}}
                fontSize="18px"
                bg="#31343c"
                borderRadius="6.25rem"
                // bgGradient="conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28))"
              >
                Sign Up
              </Button>
            </Box>

            <Box h="130" bg="#17181b" w="100%" pt="2">
              <Flex
                // justifyContent="center"
                flexDirection="column"
                alignContent="center"
                alignItems="center"
              >
                <Box mb="2" color="whiteAlpha.700" fontSize="19">
                  Log in directly with
                </Box>
                <Flex
                  bg="rgba(49,52,60,.5)"
                  h="60px"
                  pt="4"
                  // pb="3"
                  pl="3"
                  // pr="3"
                  borderRadius="1.25rem"
                >
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <Box pr="4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="green"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        {/* {item == 3 && <Divider orientation="vertical" />} */}
                      </Box>
                    );
                  })}
                </Flex>
              </Flex>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IndexPage;
