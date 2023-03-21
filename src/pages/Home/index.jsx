import React from "react";
import NavBar from "../../components/navbar";
import { Container } from "./style.js";

function Home() {
  return (
    <Container>
      <NavBar />
      <img
        width="100%"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
    </Container>
  );
}

export default Home;
