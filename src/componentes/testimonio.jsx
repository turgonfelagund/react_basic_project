import React from "react";
import "../hojas_de_estilo/testimonio.css"

export function Testimonio(props) {
    return(
        <div className="contenedor_testimonio">
            <img 
            className="imagen_testimonio" 
            src={require(`../images/${props.imagen}`)} 
            alt={`foto de ${props.nombre}`}/>
            <div className="contenedor_texto_testimonio">
                <p className="nombre_testimonio">
                   <strong>{props.nombre}</strong> en {props.pais}
                    </p>
                <p className="cargo_testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto_testimonio">{props.testimonio}</p>
            </div>
        </div>
    )
}