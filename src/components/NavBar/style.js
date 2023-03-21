import styled from "styled-components";

export const NavigationBar = styled.div`
  width: 100%;
  color: #ffffff;
  background-color: #0b0b0b;
  font-size: 15px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgb(0,0,0,0.7));

  .container {
    padding: 20px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;

      span {
        cursor: pointer;
        margin-right: 40px;
      }
    }

    .menu {
      display: flex;
      align-items: center;

      .icones {
        margin: 0px 10px;
        cursor: pointer;
      }

      .perfil {
        .opcoes-perfil {
          display: none;
          background-color: #212121;
          border-radius: 5px;
        }
        &:hover {
          .opcoes-perfil {
            display: flex;
            flex-direction: column;
            position: absolute;
          }

          span {
            padding: 10px;
            cursor: pointer;
          }
        }
      }
    }

    .img-logo {
      width: 100px;
      margin-right: 30px;
    }
    .img-perfil {
      width: 30px;
      height: 30px;
      border-radius: 3px;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;
