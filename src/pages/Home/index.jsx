import React from "react";
import Apresentacao from "../../components/apresentacao";
import Lista from "../../components/lista";
import NavBar from "../../components/navbar";
import { ContainerHome } from "./style.js";

function Home() {
  return (
    <ContainerHome>
      <NavBar />
      <Apresentacao />
      <Lista/>
      <Lista/>
      <Lista/>
      <Lista/>
    </ContainerHome>
  );
}

export default Home;
