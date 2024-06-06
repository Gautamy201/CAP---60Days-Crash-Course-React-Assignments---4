import {
  Button,
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const TicketEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;
  const [editTiketData, setEditTiketData] = useState([]);
  const Status = ["None", "Pending", "Progress", "Completed"];
  const PriorityLevel = ["None", 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const fetchTicketData = async () => {
    const response = await axios.get(`http://localhost:5000/tickets/${id}`);
    setEditTiketData(response.data);
  };
  useEffect(() => {
    fetchTicketData();
  }, []);
  const { title, description, status, priority, assignee } = editTiketData;

  const handleTicketEditBtn = async () => {
    const response = await axios.put(
      `http://localhost:5000/tickets/${id}`,
      editTiketData
    );
    if (response.status === 200) {
      await Swal.fire({
        title: "Your ticket has been Updated &#x2705;",
        position: "top",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `,
        },
        grow: "row",
        showConfirmButton: false,
        showCloseButton: true,
      });
      navigate("/tickets");
    }
  };
  return (
    <Container p="15vh 10px">
      <VStack bg="teal.300" p={10} borderRadius={10}>
        <Heading
          fontSize={{
            base: "20px",
            md: "25px",
            lg: "30px",
          }}
          mb={5}
          textTransform={"uppercase"}
        >
          Edit Ticket
        </Heading>
        <SimpleGrid columns={3} columnGap={3} rowGap={4}>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel
                fontSize={{
                  base: "18px",
                  md: "20px",
                  lg: "30px",
                }}
                letterSpacing={1}
              >
                Title
              </FormLabel>
              <Input
                value={title}
                onChange={(event) =>
                  setEditTiketData({
                    ...editTiketData,
                    title: event.target.value,
                  })
                }
                placeholder="Enter Title"
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel
                fontSize={{
                  base: "18px",
                  md: "20px",
                  lg: "30px",
                }}
                letterSpacing={1}
              >
                Description
              </FormLabel>
              <Input
                value={description}
                onChange={(event) =>
                  setEditTiketData({
                    ...editTiketData,
                    description: event.target.value,
                  })
                }
                placeholder="Enter Title"
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem
            colSpan={{
              base: 3,
              md: 1,
              lg: 1,
            }}
          >
            <FormControl>
              <FormLabel
                fontSize={{
                  base: "18px",
                  md: "20px",
                  lg: "25px",
                }}
                letterSpacing={1}
                textAlign="center"
              >
                Assigine
              </FormLabel>
              <Select
                value={assignee}
                onChange={(event) =>
                  setEditTiketData({
                    ...editTiketData,
                    assignee: event.target.value,
                  })
                }
              >
                <option value="none">None</option>
                <option value="name">Name</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem
            colSpan={{
              base: 3,
              md: 1,
              lg: 1,
            }}
          >
            <FormControl>
              <FormLabel
                fontSize={{
                  base: "18px",
                  md: "20px",
                  lg: "25px",
                }}
                letterSpacing={1}
                textAlign="center"
              >
                Status
              </FormLabel>
              <Select
                value={status}
                onChange={(event) =>
                  setEditTiketData({
                    ...editTiketData,
                    status: event.target.value,
                  })
                }
              >
                {Status.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem
            colSpan={{
              base: 3,
              md: 1,
              lg: 1,
            }}
          >
            <FormControl>
              <FormLabel
                fontSize={{
                  base: "18px",
                  md: "20px",
                  lg: "25px",
                }}
                letterSpacing={1}
                textAlign="center"
              >
                Priority
              </FormLabel>
              <Select
                value={priority}
                onChange={(event) =>
                  setEditTiketData({
                    ...editTiketData,
                    priority: event.target.value,
                  })
                }
              >
                {PriorityLevel.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <Button onClick={handleTicketEditBtn} w="full" size="lg" o>
              Submite
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default TicketEdit;
