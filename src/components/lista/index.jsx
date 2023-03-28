import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { ContainerLista } from "./style.js";
import ListaFilmes from "../../components/listafilmes";

function Lista() {
  const [quantidadeDeslizante, setQuantidadeDeslizante] = useState(0);
  const [deslizou, setDeslizou] = useState(false);

  const listRef = useRef();

  const handleClick = (direcao) => {
    setDeslizou(true)
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
      <span className="lista-titulo">Só na Netflix</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="seta-slider-esquerda"
          onClick={() => handleClick("esquerda")}
          style={{display: !deslizou && "none"}}
        />
        <div className="container-filmes" ref={listRef}>
          <ListaFilmes index={0}/>
          <ListaFilmes index={1}/>
          <ListaFilmes index={2}/>
          <ListaFilmes index={3}/>
          <ListaFilmes index={4}/>
          <ListaFilmes index={5}/>
          <ListaFilmes index={6}/>
          <ListaFilmes index={7}/>
          <ListaFilmes index={8}/>
          <ListaFilmes index={9}/>
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
