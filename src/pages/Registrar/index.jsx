import React from "react";
import { ContainerRegistrar } from "./style.js";

function Registar() {
  return (
    <ContainerRegistrar>
      <div className="topo">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="botao-login">Entrar</button>
        </div>
        <div className="container-texto">
          <h1>Filmes, séries, e muito mais. Sem limites.</h1>
          <h2>Assita onde quiser. Cancele quando quiser.</h2>
          <p>
            Quer assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
          <div className="input">
            <input type="email" placeholder="Digite seu e-mail" />
            <button className="botao-registrar">Vamos lá</button>
          </div>
        </div>
      </div>
    </ContainerRegistrar>
  );
}

export default Registar;
