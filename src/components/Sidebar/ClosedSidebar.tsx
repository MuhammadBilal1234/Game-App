import type { NextPage } from "next";
import { useState, useEffect } from "react";
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
import styles from "./index.module.css";

import BabyloniaIcon from "../../../public/assets/general/svg/icon_home_03.svg";
import BettingIcon from "../../../public/assets/general/svg/Icon_betting_02.svg";
import ContactIcon from "../../../public/assets/general/svg/Icon_partners_03.svg";
import DividendIcon from "../../../public/assets/general/svg/icon_pool_02.svg";
import GameIcon from "../../../public/assets/general/svg/Icon_game_02.svg";
import LogsIcon from "../../../public/assets/general/svg/Icon_log_01.svg";
import MEDIAIcon from "../../../public/assets/general/svg/icon_media_01.svg";
import NFTIcon from "../../../public/assets/general/svg/icon_NFT_03.svg";
import RoadmapIcon from "../../../public/assets/general/svg/Icon_roadmap_01.svg";
import TokenomicIcon from "../../../public/assets/general/svg/Icon_tockenomics_02.svg";

const IconList = [
  BabyloniaIcon,
  BettingIcon,
  ContactIcon,
  DividendIcon,
  GameIcon,
  LogsIcon,
  MEDIAIcon,
  NFTIcon,
  RoadmapIcon,
  TokenomicIcon,
];

const ClosedSideBar: NextPage = () => {
  return (
    <Box
      overflow="auto"
      h="99%"
      w="100%"
      pr="15px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      transform="translateY(-20px)"
      id="list"
    >
      {IconList.map((Icon, idx) => {
        return (
          <Box
            w="10"
            h="10"
            ml="2"
            mt="4"
            mb="8px"
            cursor="pointer"
            _hover={{ padding: "0.3px 0px" }}
          >
            <Icon viewBox="0 0 512 512" width={"50px"} height={"50px"} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ClosedSideBar;
