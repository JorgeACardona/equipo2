import React from 'react';
import info from "../imagenes/info.PNG"
import "../Style/Info.css"


function Objetivo(){
    return (
        <div id="cont_info">
           <img id="ft_info" src={info} alt="" width="340" height="340"></img>

        <div><p id="text_info">C-Educational le ayudará a toda la comunidad educativa a facilitar
            la entrega, asignación y calificación de trabajos académicos.</p></div>
        </div>
    )
}

export default Objetivo;