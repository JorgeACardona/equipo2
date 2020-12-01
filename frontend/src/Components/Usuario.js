import React from "react";
import camara from '../imagenes/camara.png'
import "../Style/Perfil.css"
import axios from 'axios'
import fm from '../imagenes/fm.png'

export class Usuario extends React.Component {
  constructor() {
    super();
    this.state = {
      estudiante: [],
      loading: true,
      error: null,
      show: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: null
    });

    this.axiosCancelSource = axios.CancelToken.source();

    axios
      .get(`https://app-ceducational-backend.herokuapp.com/api/estudiantes/1234567901`, {
        cancelToken: this.axiosCancelSource.token
      })
      .then((res) => {
        const estudiante = res.data;
        this.setState({
          loading: false,
          estudiante
        });
      });
  }
  _handleShow = () => {
    this.setState({
      show: true
    });
  };

  componentWillUnmount() {
    this.axiosCancelSource.cancel();
  }

  render() {
    console.log(this.state.show);
    if (this.state.loading === true) {
      return <h1> Loading.... </h1>;
    } else
      return (
        <div id="Perfil">
          
          <div><img id="escudo" src={fm} alt="" width="100" height="100"></img></div>


          <div > <div id="Parrafo1"> <p id="usuar">Nombre:</p> </div> <div id="infor1"><p id="usuar">{this.state.estudiante.nombre}</p> </div> </div>
          <div > <div id="Parrafo1"> <p id="usuar">Apellido:</p> </div> <div id="infor1"><p id="usuar">{this.state.estudiante.apellido}</p> </div> </div>
          <div> <div id="Parrafo2"> <p id="usuar">Grado:</p> </div><div id="infor2"><p id="usuar">{this.state.estudiante.grado}</p> </div> </div>
          <div> <div id="Parrafo3"> <p id="usuar">Correo:</p> </div> <div id="infor3"><p id="usuar">{this.state.estudiante.correo}</p> </div> </div>
        
        </div>
      )
  }
}

export default Usuario;