import React from "react";
import "../Style/Home.css"
import image from "../imagenes/image.png"
import { Link } from "react-router-dom";


function Home(){
    return(
        <div id="contenedor">
            <div>
                 <img src={image} id="imagen"/>
            </div>
        <div>
             <h1 id="titulohome">Bienvenidos a C-Educational</h1>
        </div> 
        <Link to="/iniciar">
          <button id="Boton" class="btn btn-lg btn-primary btn-block" type="submit"><p id="ajustar">Iniciar Sesión</p></button>
        </Link>
        <Link to="/registro">
          <button id="Boton" class="btn btn-lg btn-primary btn-block" type="submit"><p id="ajustar">Registrarse</p></button>
        </Link>
        <Link to="/contraseña">
          <button id="Boton" class="btn btn-lg btn-primary btn-block" type="submit"><p id="ajustar">¿Olvidó su contraseña?</p></button>
        </Link>
        
        </div>

    )
} 

export default Home;