import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketCreate = () => {
  const Navigate = useNavigate();
  const user = "user";
  const Status = ["None", "Pending", "Progress", "Completed"];
  const PriorityLevel = ["None", 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [createTicketData, SetCreateTicketData] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "",
    priorityLevel: "",
  });
  const submiteAlert = useToast();

  const { title, description, assignee, status, priorityLevel } =
    createTicketData;

  const handleCreateTicket = async () => {
    if (title.length === 0 && description.length === 0) {
      await Swal.fire({
        title: "Fill Form Properly",
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
    } else {
      try {
        const response = await axios.post("http://localhost:5000/tickets", {
          title,
          description,
          assignee,
          status,
          priorityLevel,
        });
        SetCreateTicketData({
          title: "",
          description: "",
          assignee: "",
          status: "",
          priorityLevel: "",
        });
        await Swal.fire({
          title: "Your ticket has been Created &#x2705;",
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
      } catch (error) {
        submiteAlert({
          title: "Your ticket Not Created",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      Navigate("/tickets");
    }
  };

  return (
    <Container p="15vh 20px">
      <VStack bg="teal.300" p={10} borderRadius={10}>
        <Heading
          textTransform={"uppercase"}
          fontSize={{
            base: "18px",
            md: "20px",
            lg: "25px",
          }}
        >
          Create Ticket
        </Heading>
        <SimpleGrid columns={3} columnGap={3} rowGap={4}>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel
                fontSize={{
                  base: "18px",
                  md: "20px",
                  lg: "20px",
                }}
                letterSpacing={1}
              >
                Title
              </FormLabel>
              <Input
                value={title}
                onChange={(event) =>
                  SetCreateTicketData({
                    ...createTicketData,
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
                  lg: "20px",
                }}
                letterSpacing={1}
              >
                Description
              </FormLabel>
              <Input
                value={description}
                onChange={(event) =>
                  SetCreateTicketData({
                    ...createTicketData,
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
                  base: "16px",
                  md: "20px",
                  lg: "20px",
                }}
                letterSpacing={1}
                textAlign="center"
              >
                Assigine
              </FormLabel>
              <Select
                value={assignee}
                onChange={(event) =>
                  SetCreateTicketData({
                    ...createTicketData,
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
                  base: "16px",
                  md: "20px",
                  lg: "20px",
                }}
                letterSpacing={1}
                textAlign="center"
              >
                Status
              </FormLabel>
              <Select
                value={status}
                onChange={(event) =>
                  SetCreateTicketData({
                    ...createTicketData,
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
                  base: "16px",
                  md: "20px",
                  lg: "20px",
                }}
                letterSpacing={1}
                textAlign="center"
              >
                Priority
              </FormLabel>
              <Select
                value={priorityLevel}
                onChange={(event) =>
                  SetCreateTicketData({
                    ...createTicketData,
                    priorityLevel: event.target.value,
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
            <Button w="full" size="lg" onClick={handleCreateTicket}>
              Create Ticket
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default TicketCreate;
