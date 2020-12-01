import React from "react"
import image from '../imagenes/image.png'
import '../Style/Datos.css'
import { Link } from 'react-router-dom'
import responder from '../imagenes/responder.png'
import axios from 'axios'



class Datos extends React.Component {
  constructor() {

    super();
    this.state = {
      form: {
        nombre: "",
        apellido: "",
        grado: "",
        acudiente: "",
        correo: "",
        contraseña: "",
        edad: ""
      },
      loading: true,
      error: null
    };
  }
  _handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  _handleSubmit = (e) => {
    //Para que no se recargue la página cuando le de click en guardar
    e.preventDefault();
    axios
      .post("https://app-ceducational-backend.herokuapp.com/api/nuevoEstudiante/", this.state.form)
      .then(() => {
        console.log("Se guardó el usuario con éxito");
        this.history.push("/clases");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.form);
    return (
      <div>
        <Link to="/">
          <img id="regresar" src={responder} alt="" width="45" height="45"></img>
        </Link>
        <div id="datos" class="text-center" id="contenedor">
          <div>
            <img src={image} alt="" width="100" height="100"></img>
          </div>

          <form onSubmit={this._handleSubmit} >
            <div>
              <h1 id="titulo" class="font-weight-bolder" >C-Educational</h1>
            </div>
            <div class="form-group" id="user-group">
              <label for="inputNombre" class="sr-only">Nombre</label>
              <input onChange={this._handleChange} name="nombre" value={this.state.form.nombre} type="text" id="inputNombre" class="form-control" placeholder="Nombre" required="" autofocus=""></input>
            </div>
            <div class="form-group" id="user-group">
              <label for="inputApellido" class="sr-only">Apellido</label>
              <input onChange={this._handleChange}
                name="apellido"
                value={this.state.form.apellido} type="text" id="inputApellido" class="form-control" placeholder="Apellido" required=""></input>
            </div>
            <div class="form-group" id="user-group">
              <label for="inputGrado" class="sr-only">Grado</label>
              <input onChange={this._handleChange}
                name="grado"
                value={this.state.form.grado} type="number" id="inpuGrado" class="form-control" placeholder="Grado" required="" autofocus=""></input>
            </div>
            <div class="form-group" id="user-group">
              <label for="inputNombredeacudiente" class="sr-only">Nombredeacudiente</label>
              <input onChange={this._handleChange}
                name="acudiente"
                value={this.state.form.acudiente} type="text" id="inputNombredeacudiente" class="form-control" placeholder="Nombre de acudiente" required="" autofocus=""></input>
            </div>
            <div class="form-group" id="user-group">
              <label for="inputEmail" class="sr-only">Correo</label>
              <input onChange={this._handleChange}
                name="correo"
                value={this.state.form.correo} type="text" id="inputEmail" class="form-control" placeholder="Correo" required="" autofocus=""></input>
            </div>
            <div class="form-group" id="contrasena-group">
              <label for="inputPassword" class="sr-only">Contraseña</label>
              <input onChange={this._handleChange}
                name="contraseña"
                value={this.state.form.contraseña} type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required=""></input>
            </div>
            <div class="form-group" id="user-group">
              <label for="inputEmail" class="sr-only">Edad</label>
              <input onChange={this._handleChange}
                name="edad"
                value={this.state.form.edad} type="number" id="inputEmail" class="form-control" placeholder="Edad" required="" autofocus=""></input>
            </div>
            
              <button id="ingresar" class="btn btn-lg btn-primary btn-block" type="submit">Finalizar Registro</button>
           
          </form>
          <Link to = "/clases">
          <button id="ingresar" class="btn btn-lg btn-primary btn-block" type="submit">Continuar</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Datos;