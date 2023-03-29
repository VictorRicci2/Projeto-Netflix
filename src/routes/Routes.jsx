import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Entrar from "../pages/Entrar";
import Assistir from "../pages/Assistir";
import Registrar from "../pages/Registrar";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Assistir" element={<Assistir />} />
        <Route exact path="/" element={<Entrar />} />
        <Route exact path="/Registrar" element={<Registrar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
