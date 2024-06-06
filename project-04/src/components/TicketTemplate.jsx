import {
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TicketTemplate = ({ ticket }) => {
  const navigate = useNavigate();
  const { title, status, priorityLevel, id } = ticket;
  return (
    <Container bg="teal.300" p={6}>
      <SimpleGrid columns={2} rowGap={6} columnGap={2}>
        <GridItem colSpan={2} textAlign="center">
          <Heading fontSize={25}>{title}</Heading>
        </GridItem>
        <GridItem
          textAlign="center"
          colSpan={{
            base: "2",
            md: "1",
            lg: "1",
          }}
        >
          <Flex
            fontSize={{
              base: "20px",
              md: "16px",
              lg: "16px",
            }}
            gap={2}
            justifyContent={{
              base: "left",
              md: "center",
              lg: "center",
            }}
          >
            <Text as="span" fontWeight={600}>
              Status
            </Text>
            <Text as="span">:</Text>
            <Text as="span">{status}</Text>
          </Flex>
        </GridItem>
        <GridItem
          textAlign="center"
          colSpan={{
            base: "2",
            md: "1",
            lg: "1",
          }}
        >
          <Flex
            fontSize={{
              base: "20px",
              md: "16px",
              lg: "16px",
            }}
            gap={2}
            justifyContent={{
              base: "left",
              md: "center",
              lg: "center",
            }}
          >
            <Text as="span" fontWeight={600}>
              Priority
            </Text>
            <Text as="span">:</Text>
            <Text as="span">{priorityLevel}</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            onClick={() => navigate("/viewTickets", { state: { id: id } })}
            w="full"
          >
            View
          </Button>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default TicketTemplate;
