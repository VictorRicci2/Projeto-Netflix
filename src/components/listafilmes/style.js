import styled from "styled-components";

export const ContainerListaFilmes = styled.div`
  width: 225px;
  height: 120px;
  background-color: #0b0b0b;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  :hover {
    width: 325px;
    height: 300px;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    border-radius: 5px;

    img {
      height: 140px;
    }
  }

  .item-icones {
    display: flex;
    flex-direction: column;
    padding: 5px;

    .icones {
      display: flex;
      margin-bottom: 10px;

      .icon {
        border: 2px solid white;
        margin-right: 10px;
        padding: 5px;
        border-radius: 50%;
        font-size: 17px;
      }
    }

    .item-info {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 600;
      color: gray;

      .faixa-etaria {
        border: 1px solid gray;
        padding: 1px 3px;
        margin: 0 10px;
      }
    }

    .descricao {
      font-size: 13px;
      margin-bottom: 10px;
    }

    .item-genero {
      font-size: 14px;
      color: lightgray;
    }
  }
`;
