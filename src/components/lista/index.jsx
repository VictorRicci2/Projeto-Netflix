import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { ContainerLista } from "./style.js";
import ListaFilmes from "../../components/listafilmes";

function Lista() {
  const [quantidadeDeslizante, setQuantidadeDeslizante] = useState(0);

  const listRef = useRef();

  const handleClick = (direcao) => {
    let distancia = listRef.current.getBoundingClientRect().x - 50;

    if (direcao === "esquerda" && quantidadeDeslizante > 0) {
      setQuantidadeDeslizante(quantidadeDeslizante - 1);
      listRef.current.style.transform = `translateX(${230 + distancia}px)`;
    }

    if (direcao === "direita" && quantidadeDeslizante < 5) {
      setQuantidadeDeslizante(quantidadeDeslizante + 1);
      listRef.current.style.transform = `translateX(${-230 + distancia}px)`;
    }
  };

  return (
    <ContainerLista>
      <span className="lista-titulo">Continue à assistir</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="seta-slider-esquerda"
          onClick={() => handleClick("esquerda")}
        />
        <div className="container-filmes" ref={listRef}>
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
          <ListaFilmes />
        </div>
        <ArrowForwardIosOutlined
          className="seta-slider-direita"
          onClick={() => handleClick("direita")}
        />
      </div>
    </ContainerLista>
  );
}

export default Lista;
