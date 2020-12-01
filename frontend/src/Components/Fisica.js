import React from 'react';
import fisica from '../imagenes/fisica.jpg'
import "../Style/Materias.css"
import cuaderno from '../imagenes/cuaderno.png'
import responder from '../imagenes/responder.png'
import { Link } from "react-router-dom"

function Fisica(){
    return (
        <div>
            <Link to="/clases">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link>
            <div id="nom_mat" width="1000" height="120">
                <p id="Area">Física 11 - Julián Medina</p>
                <img id="fondo"src={fisica} alt="" width="1000" height="120"></img>
            </div>

            <Link to="/Ondas">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img>Guía de Ondas</h3></div>
            </div>
            </Link>
             
            <Link to="/Circuitos">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img>Guía de Circuitos</h3></div>
            </div>
            </Link>
            
            <Link to="/Hidraulica">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img>Guía Hidráulica</h3></div>
            </div>
            </Link>



        </div>
    )
}

export default Fisica;