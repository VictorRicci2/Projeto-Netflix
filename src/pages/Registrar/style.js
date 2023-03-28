import styled from "styled-components";

export const ContainerRegistrar = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.7)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/58b828c7-f28e-4ac2-a1f5-1ef78e44c5e0/BR-pt-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
  position: relative;

  .topo {
    .wrapper {
      padding: 30px 0px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .logo {
        height: 40px;
      }

      .botao-login {
        background-color: red;
        border: none;
        color: white;
        border-radius: 4px;
        padding: 6px 15px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  .container-texto {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    h1 {
      font-size: 50px;
    }

    h2 {
      margin: 20px;
    }

    p {
      font-size: 20px;
    }

    .input {
      width: 30%;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      height: 50px;
      border-radius: 15px;

      input {
        flex: 9;
        height: 100%;
        border: none;
        padding: 0 10px;
      }

      .botao-registrar {
        flex: 3;
        height: 100%;
        background-color: red;
        border: none;
        color: white;
        font-size: 22px;
        cursor: pointer;
      }
    }
  }
`;
