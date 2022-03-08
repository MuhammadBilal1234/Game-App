import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageCrousel from "../components/ImageCarousel";

const IndexPage: NextPage = () => {
  return (
    <Box h="1000">
      <ImageCrousel />
      {/* <Box w="100" h="100vh" bg="red"></Box> */}
    </Box>
  );
};

export default IndexPage;
