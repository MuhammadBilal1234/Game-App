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

export const menuItems = [
  {
    name: "babylonia",
    img: BabyloniaIcon,
    href: "https://docs.babylonia.app/babylonia.app/",
  },
  {
    name: "Betting",
    img: BettingIcon,
    href: "https://docs.babylonia.app/babylonia.app/betting",
  },
  {
    name: "Pool",
    img: DividendIcon,
    href: "https://pool.babylonia.app/",
  },
  {
    name: "Games",
    img: GameIcon,
    href: "https://docs.babylonia.app/babylonia.app/games",
  },
  {
    name: "Logs",
    img: LogsIcon,
    href: "https://docs.babylonia.app/babylonia.app/logs",
  },
  {
    name: "NFT",
    img: NFTIcon,
    href: "https://nft.babylonia.app/",
    // href: "https://docs.babylonia.app/babylonia.app/nfts",
    //
  },
  {
    name: "Media",
    img: MEDIAIcon,
    href: "https://media.babylonia.app/",
    // href: "https://docs.babylonia.app/babylonia.app/nfts",
    //
  },
  {
    name: "Contact",
    img: ContactIcon,
    href: "https://docs.babylonia.app/babylonia.app/contact",
  },
  {
    name: "Roadmap",
    img: RoadmapIcon,
    href: "https://docs.babylonia.app/babylonia.app/roadmap",

    width: "1400px",
    height: "1600px",
  },
  {
    name: "Tokenomics",
    img: TokenomicIcon,
    href: "https://docs.babylonia.app/babylonia.app/tokenomics",
  },
];

interface Props {
  isOpen: Boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const OpenSideBar: NextPage<Props> = ({ isOpen, setOpen }: Props) => {
  return (
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

      <Box overflowY="auto" h="100vh">
        <Box
          // overflowY="auto"
          w="100%"
          h="10vh"
          // h="100%"
          pt="5"
          display="flex"
          flexDirection="column"
        >
          {menuItems.map((Icon) => {
            return (
              <Flex w="100%" h="60" mb="5">
                <Flex
                  bgGradient="linear-gradient(to right,rgba(105,179,1,.4),rgba(85,89,102,.4) 33%,rgba(85,89,102,.4))"
                  width="auto"
                  pl="4"
                  pr="5"
                  borderTopRightRadius="20"
                  borderBottomRightRadius="20"
                  pt="2px"
                  cursor="pointer"
                  pb="2px"
                >
                  <Icon.img
                    viewBox="0 0 512 512"
                    width={"50px"}
                    height={"50px"}
                  />
                  {/* <Image src={MenuIcon} layout="fixed" height={50} width={50} /> */}
                  <Text fontWeight="bold" color="white" pl=".45em" pt="0.9em">
                    {" "}
                    {Icon.name}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default OpenSideBar;
