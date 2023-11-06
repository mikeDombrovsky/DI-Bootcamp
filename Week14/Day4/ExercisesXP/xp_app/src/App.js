import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import posts from "./data.json";
import ex3data from "./ex3.json";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  const fetchData = async () => {
    const resp = await fetch(
      "https://webhook.site/51fe954f-f86b-499a-8976-f7c45e4dd361",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27,
        }),
      }
    );
    //have here strange error 'Unexpected end of input SyntaxError'
    const data = await resp.json();
    console.log(data);
  };

  return (
    <BrowserRouter>
      <>
        <p className="ex">Exercise 1</p>
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
        <p className="ex">Exercise 2</p>
        <PostList posts={posts} />
        <hr />
        <p className="ex">Exercise 3</p>
        <Example1 socialMedias={ex3data.SocialMedias} />
        <Example2 skills={ex3data.Skills} />
        <Example3 experiences={ex3data.Experiences} />
        <p className="ex">Exercise 4</p>
        <Button className="m-5 px-5" variant="primary" onClick={fetchData}>
          fetch data
        </Button>
      </>
    </BrowserRouter>
  );
}

export default App;
