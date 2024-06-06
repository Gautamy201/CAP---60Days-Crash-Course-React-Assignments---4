import React from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  const FirstImagesList = [
    "/Home/firstlist/Depth 4, Frame 0 (1).png",
    "/Home/firstlist/Depth 8, Frame 0 (1).png",
    "/Home/firstlist/Depth 8, Frame 0 (2).png",
    "/Home/firstlist/Depth 8, Frame 0 (3).png",
  ];
  const SecondImagesList = [
    "/Home/secondList/Depth 6, Frame 0.png",
    "/Home/secondList/Depth 6, Frame 0 (2).png",
    "/Home/secondList/Depth 6, Frame 0 (3).png",
    "/Home/secondList/Depth 6, Frame 0 (4).png",
    "/Home/secondList/Depth 6, Frame 0 (5).png",
  ];

  return (
    <Box padding="10vh 0">
      <Box
        padding={{
          base: "10px",
          md: "",
          lg: "20px 100px",
        }}
      >
        <Box position="relative" width="full">
          <Image src="/Home/HomeHeroImage.png" w="full" />
          <Box
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
                base: "20px",
                md: "30px",
                lg: "60px",
              }}
            >
              We help cannabis clubs find real estate
            </Heading>
            <Text
              fontSize={{
                base: "14px",
                md: "30px",
                lg: "60px",
              }}
            >
              Founded by a former city planner and a cannabis industry pioneer,
            </Text>
            <Box
              mt={{
                base: "10px",
                md: "20px",
                lg: "50px",
              }}
            >
              <Flex
                gap={10}
                justifyContent={{
                  base: "center",
                  md: "center",
                  lg: "left",
                }}
              >
                <Button
                  bg="green.400"
                  width={{
                    base: "90px",
                    md: "150px",
                    lg: "150px",
                  }}
                  fontSize={{
                    base: "14px",
                    md: "20px",
                    lg: "20px",
                  }}
                >
                  Learn More
                </Button>
                <Button
                  bg="red.400"
                  width={{
                    base: "",
                    md: "",
                    lg: "150px",
                  }}
                >
                  SignUp
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Heading
          p={{
            base: "8px 0",
            md: "10px 0",
            lg: "10px 0",
          }}
        >
          How We Help
        </Heading>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 4,
          }}
          rowGap={5}
          columnGap={5}
        >
          {FirstImagesList.map((imges, index) => (
            <GridItem
              key={index}
              colSpan={1}
              backgroundColor="teal.100"
              borderRadius={10}
              padding="10px"
            >
              <Image src={imges} w="full" />
              <Heading fontSize="16px" margin="10px 0" textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Heading>
              <Text textAlign="justify" fontSize="14px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ipsa delectus tempore perspiciatis tenetur, dolorum laborum
                soluta incidunt ipsam tempora sapiente nisi. Voluptatibus
                facilis officiis recusandae ratione voluptate doloremque neque!
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
        <Heading
          textAlign="center"
          margin={{
            base: "15px 0",
            md: "20px 0",
            lg: "35px 0",
          }}
        >
          Trusted by top cannabis brands
        </Heading>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 5,
          }}
          rowGap={5}
          columnGap={5}
        >
          {SecondImagesList.map((imges, index) => (
            <GridItem key={index} colSpan={1}>
              <Image src={imges} w="full" />
            </GridItem>
          ))}
        </SimpleGrid>
        <Box
          mt={{
            base: "10px",
            md: "20px",
            lg: "35px",
          }}
          textAlign="center"
        >
          <Heading>Ready to take the next step?</Heading>
          <Text
            padding={{
              base: "20px 0",
              md: "30px 0",
              lg: " 30px 20%",
            }}
            textAlign={{
              base: "justify",
              md: "center",
              lg: "center",
            }}
          >
            We'll help you find the perfect location for your cannabis club,
            navigate the complex web of regulations and permits, and provide
            guidance on everything from branding to compliance.
          </Text>
          <Box m={10}>
            <Button bg="green.300">Schedule a free consultation</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
