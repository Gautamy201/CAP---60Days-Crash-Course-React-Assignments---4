import React from "react";
import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const About = () => {
  const productImages = [
    "/About/productsImg/Depth 6, Frame 0 (6).png",
    "/About/productsImg/Depth 6, Frame 0 (7).png",
    "/About/productsImg/Depth 6, Frame 0 (8).png",
    "/About/productsImg/Depth 6, Frame 0 (9).png",
    "/About/productsImg/Depth 6, Frame 0 (10).png",
    "/About/productsImg/Depth 6, Frame 0 (11).png",
    "/About/productsImg/Depth 6, Frame 0 (12).png",
    "/About/productsImg/Depth 6, Frame 0 (13).png",
    "/About/productsImg/Depth 6, Frame 0 (14).png",
    "/About/productsImg/Depth 6, Frame 0 (15).png",
    "/About/productsImg/Depth 6, Frame 0 (16).png",
    "/About/productsImg/Depth 6, Frame 0 (17).png",
    "/About/productsImg/Depth 6, Frame 0 (18).png",
    "/About/productsImg/Depth 6, Frame 0 (19).png",
    "/About/productsImg/Depth 6, Frame 0 (20).png",
    "/About/productsImg/Depth 6, Frame 0 (21).png",
  ];
  return (
    <Box pt="10Vh ">
      <Box
        padding={{
          base: "10px",
          md: "",
          lg: "20px 100px",
        }}
      >
        <Box position="relative">
          <Image src="/About/AboutHeroImage.png" w="full"></Image>
          <VStack
            textAlign="center"
            position="absolute"
            top="50%"
            color="white"
            width="90%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Heading
              fontSize={{
                base: "26px",
                md: "30px",
                lg: "60px",
              }}
            >
              Welcome to European Grains
            </Heading>
            <Text
              fontSize={{
                base: "16px",
                md: "20px",
                lg: "25px",
              }}
            >
              We are a leading grain and oilseed trading company operating in
              the European Union
            </Text>
          </VStack>
        </Box>
        <Box>
          <Heading
            p={{
              base: "5px 0",
              md: "10px 0",
              lg: "10px 0",
            }}
          >
            About
          </Heading>
          <Text
            textAlign="justify"
            fontSize={{
              base: "14px",
              md: "16px",
              lg: "20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            officia quo ipsam quasi molestiae accusantium, illum consequuntur
            eveniet vero non aliquid! Eos sed quidem amet perferendis vitae
            provident adipisci libero.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus officia quo ipsam quasi molestiae
            accusantium, illum consequuntur eveniet vero non aliquid! Eos sed
            quidem amet perferendis vitae provident adipisci libero.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Accusamus officia quo
            ipsam quasi molestiae accusantium, illum consequuntur eveniet vero
            non aliquid! Eos sed quidem amet perferendis vitae provident
            adipisci libero.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusamus officia quo ipsam quasi molestiae accusantium, illum
            consequuntur eveniet vero non aliquid! Eos sed quidem amet
            perferendis vitae provident adipisci libero.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusamus officia quo ipsam quasi
            molestiae accusantium, illum consequuntur eveniet vero non aliquid!
            Eos sed quidem amet perferendis vitae provident adipisci
            libero.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus officia quo ipsam quasi molestiae accusantium, illum
            consequuntur eveniet vero non aliquid! Eos sed quidem amet
            perferendis vitae provident adipisci libero.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusamus officia quo ipsam quasi
            molestiae accusantium, illum consequuntur eveniet vero non aliquid!
            Eos sed quidem amet perferendis vitae provident adipisci libero.
          </Text>
        </Box>
        <Box>
          <Heading
            p={{
              base: "5px 0",
              md: "10px 0",
              lg: "10px 0",
            }}
          >
            Products
          </Heading>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 5,
            }}
            columnGap={5}
            rowGap={10}
            justifyContent="center"
          >
            {productImages.map((image, index) => (
              <GridItem
                colSpan={{
                  base: 1,
                  md: 1,
                  lg: 1,
                }}
                key={index}
              >
                <Image src={image} w="full"></Image>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
