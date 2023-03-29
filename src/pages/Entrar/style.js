import styled from "styled-components";

export const ContainerEntrar = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.7)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/58b828c7-f28e-4ac2-a1f5-1ef78e44c5e0/BR-pt-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
  position: relative;

  a {
    text-decoration: none;
  }

  .topo {
    .wrapper {
      padding: 30px 0px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .logo {
        height: 40px;
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

    form {
      width: 300px;
      height: 300px;
      padding: 30px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border: none;

      input {
        height: 40px;
        border-radius: 5px;
        background-color: #ffffff;
        padding-left: 10px;
        border: none;

        &::placeholder {
          color: black;
        }
      }

      button {
        height: 40px;
        border-radius: 5px;
        background-color: red;
        color: white;
        border: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
