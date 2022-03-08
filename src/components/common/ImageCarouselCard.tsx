import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";

import Image from "next/image";
// import Image from "../common/Image";

interface Props {
  height: number;
  width: number;
  image: string;
}

const ImageCrouselCard: NextPage<Props> = ({
  width = 0,
  height = 0,
  image,
}: Props) => {
  return (
    <Box
      w={`${width}%`}
      h={210}
      bg="red"
      borderRadius="1.5rem"
      m=".25em"
      position="relative"
      //   zIndex="-10"
    >
      <Box h="100%" w="100%" borderRadius="1.5rem">
        <Image className="imageCard" src={image} quality={100} layout="fill" />
      </Box>
    </Box>
  );
};

export default ImageCrouselCard;
