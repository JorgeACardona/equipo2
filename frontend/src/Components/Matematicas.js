import React from 'react';
import mate from '../imagenes/mate.jpg'
import "../Style/Materias.css"
import cuaderno from '../imagenes/cuaderno.png'
import responder from '../imagenes/responder.png'
import { Link } from "react-router-dom"

function Matematicas(){
    return (
        <div>
            <Link to="/clases">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link>
            <div id="nom_mat" >
                <p id="Area">Matemáticas 11 - Jhon Jairo Sanclemente</p>
                <img id="fondo"src={mate} alt="" width="1000" height="120"></img>
            </div>

           <Link to="/Limites"> <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img>Guía de Límites - Leyes y Propiedades</h3></div>
            </div>
            </Link>

           <Link to="/Funcion">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img>Guía de Funciones - Fórmula y Gráfica</h3></div>
            </div>
            </Link>
            
            <Link to="/Conjunto">
            <div id="cont_materia">
                <div><h3 id="nom_tarea"><img id="cuaderno"src={cuaderno} alt="" width="60" height="60"></img> Guía de Conjuntos</h3></div>
            </div>
            </Link>



        </div>
    )
}

export default Matematicas;