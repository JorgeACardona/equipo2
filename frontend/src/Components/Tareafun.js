import React from 'react';
import cuaderno from '../imagenes/cuaderno.png'
import "../Style/Tareas.css"
import responder from '../imagenes/responder.png'
import { Link } from "react-router-dom"
import word from '../imagenes/word.png'
import carpeta from '../imagenes/carpeta.png'


function Tareafun(){
    return(
        <div> 
            <Link to="/matematicas">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link>

        <div id="cont_tarea"><h3>
            <img id="cuaderno"src={cuaderno} alt="" width="80" height="80"></img>Guía de Funciones</h3>
        </div> 

        <div id="conjunto">
            <p id="indi"> Leer con atención la guía y resuelva las actividades propuestas.</p> 
            <h3 id="indi"><img src={word} width="80" height="80"></img> Guía de Funciones</h3>
        </div>
        <div id="subir">
            <h2>Tu trabajo</h2>
        <input type="file" id="file"></input>
        <label id="doc" for="file"><img id="sub_img"src={carpeta} width="20" height="20"></img>
            Subir Archivo
        </label>
        <br/>
        <input  id= "file" type="submit"></input>
        <label id="doc" for="submit">
            Entregar Tarea
        </label>
        </div>
        </div>

    )

}
export default Tareafun;