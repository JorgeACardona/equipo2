import React from 'react'
import '../Style/Tabla.css'
import axios from 'axios'

export class Notas extends React.Component {
  constructor() {
    super();
    this.state = {
      calificaciones: [],
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
      .get(`https://app-ceducational-backend.herokuapp.com/api/calificaciones/4`, {
        cancelToken: this.axiosCancelSource.token
      })
      .then((res) => {
        const calificaciones = res.data;
        this.setState({
          loading: false,
          calificaciones
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

    return(
        <div id="cont_tabla">
            <table id="tabla" class="egt" border="3">

<tr>

  <td id="Materia_tabla" colspan="1">{this.state.calificaciones.periodo}</td>
  <td id="Materia_tabla" colspan="4">{this.state.calificaciones.estudiante}</td>


</tr>

<tr>

  <td id="Materia_tabla">Materia</td>
  <td id="Materia_tabla">N1</td>
  <td id="Materia_tabla">N2</td>
  <td id="Materia_tabla">N3</td>
  <td id="Materia_tabla">NF</td>

</tr>

<tr>

  <td id="Materia_tabla">Matemáticas</td>
  <td id="nota">3.5</td>
  <td id="nota">4.0</td>
  <td id="nota">3.8</td>
  <td id="nota" > {this.state.calificaciones.matematicas}</td>

</tr>

<tr>

  <td id="Materia_tabla">Física</td>
  <td id="nota">2.5</td>
  <td id="nota">4.0</td>
  <td id="nota">3.9</td>
  <td id="nota">{this.state.calificaciones.fisica}</td>

</tr>

<tr>

  <td id="Materia_tabla">Español</td>
  <td id="nota">3.6</td>
  <td id="nota">3.0</td>
  <td id="nota">5.0</td>
  <td id="nota">{this.state.calificaciones.español}</td>

</tr>

</table>
        </div>

    )
}

}



export default Notas;