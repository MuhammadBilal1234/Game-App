import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";

const TopBar: NextPage = () => {
  return (
    <Box bg="grey" w="100%" height="70px">
      <Flex>Chakra UI Setup</Flex>
    </Box>
  );
};

export default TopBar;
