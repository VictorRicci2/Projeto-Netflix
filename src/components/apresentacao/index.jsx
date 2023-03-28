import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import { ContainerApresentacao } from "./style.js";
import Logo from "../../assets/logo-thewitcher2.png"

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
        src="https://cdn.medcom.id/images/content/2020/02/14/1111896/gE2D3JkYCM.jpg"
        alt=""
      />
      <div className="info">
        <img
        src={Logo}
          alt=""
        />
        <span className="descricao">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          corporis. Quia, dolorum vero fugiat blanditiis ipsa ducimus debitis
          nesciunt consequatur nihil, distinctio aspernatur, tempora possimus
          aliquam sed quod itaque esse!
        </span>
        <div className="botoes">
          <button className="assistir">
            <PlayArrow style={{fontSize: "45px"}}/>
            <span>Assistir</span>
          </button>
          <button className="more">
            <InfoOutlined style={{fontSize: "40px"}}/>
            <span>Mais Informações</span>
          </button>
        </div>
      </div>
    </ContainerApresentacao>
  );
}

export default Apresentacao;
