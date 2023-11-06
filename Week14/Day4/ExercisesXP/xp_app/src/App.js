import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import posts from './data.json'

function App() {
  return (
    <BrowserRouter>
      <>
        <p>Exercise 1</p>
        <Navbar id="navBar" bg="primary" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/shop">Shop</NavLink>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/shop" element={<ShopScreen />} />
            </Routes>
          </ErrorBoundary>
        </Container>
        <hr />
        <p>Exercise 2</p>
        <PostList posts={posts} />
      </>
    </BrowserRouter>
  );
}

export default App;
