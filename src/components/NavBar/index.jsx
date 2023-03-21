import React from "react";
import { NavigationBar } from "./style.js";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

function NavBar() {
  return (
    <NavigationBar>
      <div className="container">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo"
            className="img-logo"
          />
          <span>Início</span>
          <span>Séries</span>
          <span>Filmes</span>
          <span>Novo e Popular</span>
          <span>Minha Lista</span>
        </div>
        <div className="menu">
          <SearchIcon className="icones" />
          <NotificationsIcon className="icones" />
          <img
            className="img-perfil"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="foto-perfil"
          />
          <div className="perfil">
            <ArrowDropDownIcon className="icones" />
            <div className="opcoes-perfil">
              <span>
                Configurações
              </span>
              <span>
                Sair
              </span>
            </div>
          </div>
        </div>
      </div>
    </NavigationBar>
  );
}

export default NavBar;
