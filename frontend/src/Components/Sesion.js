import React from 'react';
import "../Style/Sesion.css"
import image from '../imagenes/image.png'
import responder from '../imagenes/responder.png'
import { Link } from 'react-router-dom'

function Sesion (){
    return(
        <div>
        <Link to="/">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link>
        <div id="datos" id="contenedor" class="text center">
       <div>
        <img id="foto" src={image} alt="" width="100" height="100"></img>
        </div>

        <form >
        <div>
        <h1 class="h3 mb-3 font-weight-bolder" >C-Educational</h1>
        </div>
        <div class="form-group" id="user-group">
        <label for="inputEmail" class="sr-only">Correo</label>
         <input type="correo" id="inputEmail" class="form-control" placeholder="Correo" required="" autofocus=""></input>
         </div>
         <div class="form-group" id="contrasena-group">
        <label for="inputPassword" class="sr-only">Contraseña</label>
         <input type="Contraseña" id="inputPassword" class="form-control" placeholder="Contraseña" required=""></input>
         </div>
         <Link to="/clases">
         <button  id="botingresar" class="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesión</button>
         </Link>
    
         </form>
        
      </div> 
      </div>
      
       )

}

export default Sesion;