import React from "react";
import estilos from "./RecipeCard.module.css";
import img from "./img/img2.jpg";

export const RecipeCard = (props) => {
  let image;
  props.image ? (image = props.image) : (image = img);
  return (
    <div>
      <div key={props.id} className={estilos.cuerpoTarjeta}>
        <img className={estilos.imagen} src={image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.dishType}</p>
        <p>{props.diets}</p>
        <div className={estilos.contenedorVerMas}>
          <p className={estilos.verMas}>Click para ver más</p>
        </div>
      </div>
    </div>
  );
};
