// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRouter";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";
import Tickets from "./pages/Tickets";
import TicketCreate from "./pages/TicketCreate";
import TicketView from "./pages/TicketView";
import TicketEdit from "./pages/TicketEdit";
function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tickets" element={<Tickets />} />

              <Route path="/createTickets" element={<TicketCreate />} />
              <Route path="/viewTickets" element={<TicketView />} />
              <Route path="/editTickets" element={<TicketEdit />} />
            </Route>
            <Route path="*" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
