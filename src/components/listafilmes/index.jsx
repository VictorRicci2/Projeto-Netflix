import React, { useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import { ContainerListaFilmes } from "./style.js";

function ListaFilmes({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <>
      <ContainerListaFilmes
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="https://s2.glbimg.com/c81Y_6rJsenqSOxjKwWn4WOegrA=/0x0:1920x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/F/P/tTnO5wTbCGEI8X9Y38xA/witcher-saga.jpg" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="item-icones">
              <div className="icones">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="item-info">
                <span>1 hora 55 minutos</span>
                <span className="faixa-etaria">+16</span>
                <span>2020</span>
              </div>
              <div className="descricao">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur optio ipsam neque doloribus alias aspernatur facilis
                nemo assumenda tenetur non vero sequi saepe modi tempora, quas
              </div>
              <div className="item-genero">Ação</div>
            </div>
          </>
        )}
      </ContainerListaFilmes>
    </>
  );
}

export default ListaFilmes;
