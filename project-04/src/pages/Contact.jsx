import React from "react";
import {
  Flex,
  Button,
  SimpleGrid,
  GridItem,
  Text,
  Box,
  VStack,
  Heading,
  Link,
} from "@chakra-ui/react";
const Contact = () => {
  return (
    <Box
      pt="12vh"
      padding={{
        base: "12vh 5vw",
        md: "12vh 10vw",
        lg: "12vh 10vw",
      }}
    >
      <VStack>
        <Heading
          mt={10}
          fontSize={{
            base: "30px",
            md: "40px",
            lg: "50px",
            xl: "60px",
          }}
        >
          Contact Us
        </Heading>
        <Text
          m="30px 0"
          fontSize={{
            base: "20px",
            md: "25px",
            lg: "27px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus
          quaerat nulla. Dolorem, nam provident ea deserunt vitae reprehenderit
          laborum omnis obcaecati temporibus quam, esse reiciendis incidunt
          aspernatur, sed officiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. At ducimus quaerat nulla. Dolorem, nam provident ea
          deserunt vitae reprehenderit laborum omnis obcaecati temporibus quam,
          esse reiciendis incidunt aspernatur, sed officiis.
        </Text>
        <Box fontSize={30}>
          <i className="ri-mail-line"></i>
        </Box>
        <Heading mt={10} fontSize={"20px"}>
          Write to us at
        </Heading>

        <Link textDecoration="underline" color="blue">
          admissions@masaischool.com
        </Link>
      </VStack>
    </Box>
  );
};

export default Contact;
