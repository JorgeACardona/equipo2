import React from 'react';
import esp from '../imagenes/esp.jpg'
import "../Style/Materias.css"
import cuaderno from '../imagenes/cuaderno.png'
import responder from '../imagenes/responder.png'
import { Link } from "react-router-dom"

function Español(){
    return (
        <div>
            <Link to="/clases">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link>
            <div id="nom_mat" width="1000" height="120">
                <p id="Area">Español 11 - Jimena Vergara</p>
                <img id="fondo"src={esp} alt="" width="1000" height="120"></img>
            </div>
            
            <Link to="/Literatura">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img>Guía de Literatura del Siglo XX</h3></div>
            </div>
            </Link>

            <Link to="/Estereotipos">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img>Guía de Estereotipos</h3></div>
            </div>
            </Link>

            <Link to="/Tribus">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img> Guía de Tribus Urbanas</h3></div>
            </div>
            </Link>



        </div>
    )
}

export default Español;