import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";

interface Props {
  width: string;
  height: string;
  display?: string;
  image?: StaticImageData;
}

const GameCard: NextPage<Props> = ({ width, height, image }) => {
  return (
    <Box
      className="gameCard"
      mr="2"
      mt="3"
      // bg="yellow.200"
      h={height}
      flex="1"
      flexBasis={width}
      pl="2"
      position="relative"
      pointerEvents="all"
    >
      <Image
        src={image}
        className="imageCard"
        layout="fill"
        // objectFit="contain"
        // height={height}
        // width={450}
      />
      <Box
        bg="black"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        borderRadius="1.25rem"
        h="100%"
        opacity="0"
        // pointerEvents="none"
        cursor="pointer"
        _hover={{
          opacity: "0.3",
        }}
      ></Box>
    </Box>
  );
};

export default GameCard;
