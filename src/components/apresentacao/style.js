import styled from "styled-components";

export const ContainerApresentacao = styled.div`
  height: 90vh;
  position: relative;

  .categorias {
    position: absolute;
    top: 80px;
    left: 60px;
    font-size: 30px;
    font-weight: 500;
    display: flex;
    align-items: center;

    select {
      cursor: pointer;
      background-color: #0b0b0b;
      border: 1px #ffffff;
      color: #ffffff;
      margin-left: 20px;
      padding: 5px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: #ffffff;
    display: flex;
    flex-direction: column;

    img {
      width: 400px;
    }

    .descricao {
      margin: 20px 0;
    }

    .botoes {
      display: flex;

      .play {
        background-color: #ffffff;
        color: #0b0b0b;
      }

      .more {
        background-color: grey;
        color: #ffffff;
      }

      span {
        margin-left: 5px;
      }
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      margin-right: 10px;
      cursor: pointer;
      font-weight: 500;
    }
  }
`;
