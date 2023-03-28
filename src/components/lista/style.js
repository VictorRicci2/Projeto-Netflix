import styled from "styled-components";

export const ContainerLista = styled.div`
  width: 100%;
  margin-top: 20px;

  .lista-titulo {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    margin-left: 20px;
  }

  .wrapper {
    position: relative;
    .container-filmes {
      margin-left: 50px;
      margin-top: 20px;
      display: flex;
      width: max-content;
      transform: translateX(0px);
      transition: all 1s ease;

    }

    .seta-slider-esquerda {
      width: 50px;
      height: 100%;
      background-color: rgb(22, 22, 22, 0.6);
      color: #ffffff;
      position: absolute;
      left: 0;
      z-index: 99;
      top: 0;
      bottom: 0;
      margin: 0;
      cursor: pointer;
    }
    .seta-slider-direita {
      width: 50px;
      height: 100%;
      background-color: rgb(22, 22, 22, 0.6);
      color: #ffffff;
      position: absolute;
      right: 0;
      z-index: 99;
      top: 0;
      bottom: 0;
      margin: 0;
      cursor: pointer;
    }
  }
`;
