import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import { ContainerApresentacao } from "./style.js";

function Apresentacao(tipo) {
  return (
    <ContainerApresentacao>
      {tipo && (
        <div className="categorias">
          <span>{tipo === "filmes" ? "Filmes" : "Series"}</span>
          <select name="genero" id="genero">
            <option>Gênero</option>
            <option value="aventura">Aventura</option>
            <option value="comedia">Comédia</option>
            <option value="crime">Crime</option>
            <option value="fantasia">Fantasia</option>
            <option value="historica">Histórica</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="acao">Ação</option>
            <option value="western">Western</option>
            <option value="animacao">Animação</option>
            <option value="drama">Drama</option>
            <option value="documentario">Documentário</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="descricao">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          corporis. Quia, dolorum vero fugiat blanditiis ipsa ducimus debitis
          nesciunt consequatur nihil, distinctio aspernatur, tempora possimus
          aliquam sed quod itaque esse!
        </span>
        <div className="botoes">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </ContainerApresentacao>
  );
}

export default Apresentacao;
