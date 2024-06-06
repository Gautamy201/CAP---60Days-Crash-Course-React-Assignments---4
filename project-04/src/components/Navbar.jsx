// src/components/Navbar.js
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Flex, Button, SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import style from "./NavBar.module.css";

const Navbar = () => {
  const { authState, logout } = useContext(AuthContext);

  const [activeClassName, setActiveClassName] = useState({
    home: "style.active",
    about: "",
    contact: "",
    ticktes: "",
  });

  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [postionRight, setPostionRight] = useState("-1000");
  const handleNavOpenButton = () => {
    if (authState.isAuthenticated) {
      setPostionRight("0");
      setNavMenuOpen(true);
    }
  };
  const handleNavCloseButton = () => {
    setPostionRight("-1000");
    setNavMenuOpen(false);
  };

  const handleLogoutBtn = () => {
    logout();
    setNavMenuOpen(false);
  };

  const handleNavMenuLinkBtn = (path) => {
    setPostionRight("-1000");
    setNavMenuOpen(false);
    for (let i in activeClassName) {
      if (i === path) {
        console.log(i);
      } else {
        console.log(i);
      }
    }
  };
  return (
    <SimpleGrid
      columns={{
        lg: 4,
        md: 5,
        sm: 5,
        base: 5,
      }}
      height="10vh"
      bg="teal.500"
      color="black"
      alignItems="center"
      padding="0 50px"
      position={"fixed"}
      zIndex={1}
      width={"100%"}
    >
      {authState.isAuthenticated ? (
        <>
          <GridItem
            colSpan={{
              lg: 1,
              md: 2,
              sm: 2,
              base: 2,
            }}
          >
            {authState.email}
          </GridItem>
          <GridItem
            colSpan={{
              lg: 3,
              md: 2,
              sm: 2,
              base: 2,
            }}
          >
            <Flex
              pb={{
                lg: "0",
                md: "20px",
                sm: "20px",
                base: "20px",
              }}
              justifyContent="end"
              bg={"teal.500"}
              position={{
                lg: "static",
                md: "fixed",
                sm: "fixed",
                base: "fixed",
              }}
              top={"10vh"}
              right={postionRight}
              alignItems={{
                lg: "",
                md: "center",
                sm: "center",
                base: "center",
              }}
              transition="0.5s ease-in-out"
              gap={5}
              direction={{
                lg: "row",
                md: "column",
                sm: "column",
                base: "column",
              }}
              w={{
                lg: "",
                md: "100%",
                sm: "100%",
                base: "100%",
              }}
            >
              <NavLink style={{ width: navMenuOpen && "100%" }} to="/home">
                <Button
                  className="active"
                  onClick={() => handleNavMenuLinkBtn("home")}
                  w={{
                    lg: "fit-content",
                    md: "100%",
                    sm: "100%",
                    base: "100%",
                  }}
                  border="none"
                  bg="transparent"
                  fontSize={20}
                >
                  Home
                </Button>
              </NavLink>
              <NavLink style={{ width: navMenuOpen && "100%" }} to="/about">
                <Button
                  onClick={() => handleNavMenuLinkBtn("about")}
                  w={{
                    lg: "fit-content",
                    md: "100%",
                    sm: "100%",
                    base: "100%",
                  }}
                  border="none"
                  bg="transparent"
                  fontSize={20}
                >
                  About
                </Button>
              </NavLink>
              <NavLink style={{ width: navMenuOpen && "100%" }} to="/contact">
                <Button
                  onClick={() => handleNavMenuLinkBtn("contact")}
                  w={{
                    lg: "fit-content",
                    md: "100%",
                    sm: "100%",
                    base: "100%",
                  }}
                  border="none"
                  bg="transparent"
                  fontSize={20}
                >
                  Contact
                </Button>
              </NavLink>
              <NavLink style={{ width: navMenuOpen && "100%" }} to="/tickets">
                <Button
                  onClick={() => handleNavMenuLinkBtn("tickets")}
                  w={{
                    lg: "fit-content",
                    md: "100%",
                    sm: "100%",
                    base: "100%",
                  }}
                  border="none"
                  bg="transparent"
                  fontSize={20}
                >
                  Tickets
                </Button>
              </NavLink>
              <Button
                bg="green.300"
                w={{
                  lg: "100px",
                  md: "100%",
                  sm: "100%",
                  base: "100%",
                }}
                onClick={handleLogoutBtn}
              >
                Logout
              </Button>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={1}
            display={{
              lg: "none",
              md: "block",
              sm: "block",
              base: "block",
            }}
            textAlign={"right"}
          >
            {navMenuOpen === false ? (
              <Button onClick={handleNavOpenButton}>
                <i className="ri-menu-line"></i>
              </Button>
            ) : (
              <Button onClick={handleNavCloseButton}>
                <i className="ri-close-large-line"></i>
              </Button>
            )}
          </GridItem>
        </>
      ) : (
        <GridItem
          colSpan={{
            lg: 4,
            md: 5,
            sm: 5,
            base: 5,
          }}
        >
          <Text textAlign="center" fontSize={22} fontWeight={600}>
            Login Page
          </Text>
        </GridItem>
      )}
    </SimpleGrid>
  );
};

export default Navbar;
