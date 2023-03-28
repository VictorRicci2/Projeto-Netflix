import styled from "styled-components";

export const ContainerApresentacao = styled.div`
  height: 95vh;
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
    width: 30%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: #ffffff;
    display: flex;
    flex-direction: column;

    img {
      width: 500px;
      margin-bottom: -180px
    }

    .descricao {
      margin: 20px 0;
    }

    .botoes {
      display: flex;
      .assistir {
        background-color: #ffffff;
        font-size: 20px;
        color: #0b0b0b;
      }

      .more {
        background-color: grey;
        font-size: 20px;
        color: #ffffff;
      }

      span {
        margin-left: 5px;
      }
    }

    button {
      padding: 5px 15px;
      border: none;
      border-radius: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 18px;
      margin-right: 15px;
      cursor: pointer;
      font-weight: 500;
    }
  }
`;
