import {
  Box,
  Container,
  Button,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const TicketView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const [ticket, setTicket] = useState([]);
  const fetchTicketData = async () => {
    const response = await axios.get(`http://localhost:5000/tickets/${id}`);
    setTicket(response.data);
  };
  useEffect(() => {
    fetchTicketData();
  }, []);
  const { title, description, assignee, status, priorityLevel } = ticket;
  const handleTicketDeletBtn = async () => {
    axios
      .delete(`http://localhost:5000/tickets/${id}`)
      .then(() => {
        alert("delet susses");
        navigate("/tickets");
      })
      .catch(() => {
        alert("delet not susses");
      });
  };
  const handleEditTicketBtn = () => {
    navigate("/editTickets ", { state: { id: id } });
  };
  return (
    <Box
      p={{
        base: "12vh 10px",
        md: "16vh 10px",
        lg: "20vh 10px",
      }}
    >
      <Container bg="teal.300" p={10} borderRadius={10}>
        <SimpleGrid columns={6} rowGap={6} columnGap={2}>
          <GridItem colSpan={6} textAlign="center">
            <Heading fontSize={25}>{title}</Heading>
          </GridItem>
          <GridItem colSpan={6}>
            <Text fontSize={18}>
              <Text pr={2} fontWeight={600} as="span">
                Description :{description}
              </Text>
            </Text>
          </GridItem>
          <GridItem
            textAlign="center"
            colSpan={{
              base: "6",
              md: "2",
              lg: "2",
            }}
          >
            <Flex
              fontSize={{
                base: "16",
                md: "20",
                lg: "20",
              }}
              gap={2}
              justifyContent={{
                base: "left",
                md: "center",
                lg: "center",
              }}
            >
              <Text as="span" fontWeight={600}>
                Assignee
              </Text>
              <Text as="span">:</Text>
              <Text as="span">{assignee}</Text>
            </Flex>
          </GridItem>
          <GridItem
            textAlign="center"
            colSpan={{
              base: "6",
              md: "2",
              lg: "2",
            }}
          >
            <Flex
              fontSize={{
                base: "18px",
                md: "20px",
                lg: "20px",
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
          <GridItem
            textAlign="center"
            colSpan={{
              base: "6",
              md: "2",
              lg: "2",
            }}
          >
            <Flex
              fontSize={{
                base: "18px",
                md: "20px",
                lg: "20px",
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
          <GridItem colSpan={3}>
            <Button onClick={handleEditTicketBtn} w="full">
              Edite
            </Button>
          </GridItem>
          <GridItem colSpan={3}>
            <Button onClick={handleTicketDeletBtn} w="full">
              Delete
            </Button>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TicketView;
