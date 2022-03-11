import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageCrouselCard from "./common/ImageCarouselCard";
import CardImage from "../../public/assets/imageCard.png";

const ImageCrousel: NextPage = () => {
  return (
    <Box m="1.5em">
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={true}
        removeArrowOnDeviceType={["mobile"]}
        slidesToSlide={2}
        autoPlay
        autoPlaySpeed={5000}
      >
        <ImageCrouselCard image={CardImage} width={90} height={160} />
        <ImageCrouselCard image={CardImage} width={90} height={33} />
        <ImageCrouselCard image={CardImage} width={90} height={90} />
        <ImageCrouselCard image={CardImage} width={90} height={90} />
        <ImageCrouselCard image={CardImage} width={90} height={90} />
        <ImageCrouselCard image={CardImage} width={90} height={90} />
        <ImageCrouselCard image={CardImage} width={90} height={90} />
        <ImageCrouselCard image={CardImage} width={90} height={90} />
        <ImageCrouselCard image={CardImage} width={90} height={90} />
      </Carousel>
    </Box>
  );
};

export default ImageCrousel;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 715, min: 0 },
    items: 1,
    // partialVisibilityGutter: 35,
  },
};
