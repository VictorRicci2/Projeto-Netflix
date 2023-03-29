import React, { useState, useRef } from "react";
import { ContainerEntrar } from "./style.js";

function Entrar() {
  return (
    <ContainerEntrar>
      <div className="topo">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <div className="container-texto">
          <form>
            <h1>Entrar</h1>
            <input type="email" placeholder="Email ou Telefone" />
            <input type="password" placeholder="Senha" />
            <button className="botao-entrar">
              <a href="/Home">

              Entrar
              </a>
            </button>
            <span>
              Novo na Netflix? <b>Registre-se agora.</b>
            </span>
          </form>
        </div>
      </div>
    </ContainerEntrar>
  );
}

export default Entrar;
