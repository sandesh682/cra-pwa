import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route Component={About} path="/about"></Route>
          <Route Component={Users} path="/users"></Route>
          <Route Component={Home} path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
