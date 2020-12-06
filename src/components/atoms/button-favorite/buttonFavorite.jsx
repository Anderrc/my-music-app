import React, { useEffect, useState } from "react";
import "./buttonFavorite.scss";
import Favorite from "../../../image/favorite.svg";
import FavoriteActivo from "../../../image/favoriteActivo.svg";

const ButtonFavorite = (props) => {

  const [status, setStatus] = useState(true)


  return (
    <div className="button-favorite">
        <button className="button-favorite ">
          {
            status?  <img src={Favorite} className="button-favorite__img" /> : <img src={FavoriteActivo} className="button-favorite__img" />
          }
           
        </button>
    </div>

  );
};

export default ButtonFavorite;
