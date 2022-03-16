import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import GameCardTag from "../../public/assets/GameCardTag.png";
import GameCardIcon from "../../public/assets/GameCardIcon.png";

const IndexPage: NextPage = () => {
  return (
    <Flex
      h="220"
      w="96%"
      minW="515"
      m="auto"
      borderRadius="1.5rem"
      p="2"
      bg="#383535"
    >
      <Box w={{ base: "50%", sm: "50%", md: "33%", lg: "26%" }}>
        <GameCard />
      </Box>
      <Box w={{ base: "50%", sm: "50%", md: "33%", lg: "26%" }}>
        <GameCard />
      </Box>
      <Box
        w={{ sm: "none", md: "33%", lg: "26%" }}
        display={{ base: "none", sm: "none", md: "block", lg: "block" }}
      >
        <GameCard />
      </Box>
      <Box
        w={{ base: "0", md: "26%" }}
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <GameCard />
      </Box>
    </Flex>
  );
};

export default IndexPage;

const GameCard = () => {
  return (
    <Box mt="2.5" ml="2">
      <Flex>
        <Box w="42px" h="42px">
          <Image src={GameCardTag} alt="image" />
        </Box>
        <Text pt="2" color="white">
          <span style={{ color: "#e70b6c" }}>Much</span> Wow Win
        </Text>
      </Flex>
      <Box ml="10" mt="3">
        <Flex mb="3">
          <Box
            w="52px"
            h="52px"
            borderRadius="2rem"
            className="game-card"
            mr="2"
          >
            <Image src={GameCardIcon} alt="image" />
          </Box>
          <Flex flexDirection="column" mt="-5px">
            <Text fontSize="14" fontWeight="bold" color="white" display="block">
              Hidden
            </Text>
            <Text fontSize="14" color="white">
              Won: <span style={{ color: "#5ddb1c" }}>$8604.00</span>
            </Text>
            <Text fontSize="14" color="white">
              In BlackJack
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Box w="52px" h="52px" className="game-card" mr="2">
            <Image src={GameCardIcon} alt="image" />
          </Box>
          <Flex flexDirection="column" mt="-5px">
            <Text fontSize="14" fontWeight="bold" color="white" display="block">
              Hidden
            </Text>
            <Text fontSize="14" color="white">
              Won: <span style={{ color: "#5ddb1c" }}>$8604.00</span>
            </Text>
            <Text fontSize="14" color="white">
              In BlackJack
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
