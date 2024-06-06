// src/pages/LoginPage.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user", {
        email,
        password,
      });
      login(email, response.data.token);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Box
      maxW="sm"
      mx="auto"
      pt="11Vh"
      p={{
        base: "11vh 20px",
      }}
    >
      <Heading mb={6}>Login</Heading>
      <FormControl mb={3}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      {error && (
        <Box color="red.500" mb={3}>
          {error}
        </Box>
      )}
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
