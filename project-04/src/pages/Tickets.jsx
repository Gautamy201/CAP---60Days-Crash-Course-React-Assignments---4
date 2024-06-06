import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  Grid,
  SimpleGrid,
  GridItem,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "@chakra-ui/react";
import TicketTemplate from "../components/TicketTemplate";
const Tickets = () => {
  const Navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const fetchTicketsData = async () => {
    const response = await axios.get("http://localhost:5000/tickets");
    setTickets(response.data);
  };
  useEffect(() => {
    fetchTicketsData();
  }, []);

  return (
    <Box
      padding={{
        base: "11vh 5px",
        md: "11vh 20px",
        lg: "11vh 50px",
      }}
    >
      <Box textAlign={"right"} mb={10}>
        <Button
          bg={"teal.100"}
          colorScheme="teal"
          variant="outline"
          onClick={() => Navigate("/createTickets")}
        >
          Create Ticktes
        </Button>
      </Box>
      <Box>
        <SimpleGrid columns={6} rowGap={6} columnGap={3}>
          {tickets.length === 0 ? (
            <GridItem colSpan={6}>
              <Text textAlign="center" fontSize={35}>
                Tickets not found first create ticket.{" "}
              </Text>
            </GridItem>
          ) : (
            tickets.map((ticket) => {
              return (
                <GridItem
                  key={ticket.id}
                  colSpan={{
                    base: "6",
                    md: "3",
                    lg: "2",
                  }}
                >
                  <TicketTemplate ticket={ticket} />
                </GridItem>
              );
            })
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Tickets;
