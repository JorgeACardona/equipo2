import React from 'react';
import "../Style/Sesion.css"
import image from '../imagenes/image.png'
import { Link } from 'react-router-dom'
import responder from '../imagenes/responder.png'

function Recuperar (){
    return(
        <div>
        <Link to="/">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link>
        <div id="datos" class="text-center" id="contenedor">
       <div class="col-12 user-img">
        <img class="mb-4" src={image} alt="" width="100" height="100"></img>
        </div>

        <form >
        <div>
        <h1 class="h3 mb-3 font-weight-bolder" >C-Educational</h1>
        </div>
        <div class="form-group" id="user-group">
        <label for="inputEmail" class="sr-only">Nombre</label>
         <input type="correo" id="inputEmail" class="form-control" placeholder="Nombre" required="" autofocus=""></input>
         </div>
         <div class="form-group" id="contrasena-group">
        <label for="inputPassword" class="sr-only">Nombre de acudiente</label>
         <input type="Contraseña" id="inputPassword" class="form-control" placeholder="Nombre de acudiente" required=""></input>
         </div>
         <div class="form-group" id="contrasena-group">
        <label for="inputPassword" class="sr-only">Nueva contraseña</label>
         <input type="Contraseña" id="inputPassword" class="form-control" placeholder="Nueva contraseña" required=""></input>
         </div>

         <Link to="/clases">
         <button id="ingresar" class="btn btn-lg btn-primary btn-block" type="submit">Recuperar Contraseña</button>
         </Link>
         </form>
        
      </div>
      </div>
      
       )

}
export default Recuperar;