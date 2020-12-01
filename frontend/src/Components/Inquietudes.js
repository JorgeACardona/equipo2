import React from "react"
import "../Style/Preguntas.css"
import axios from 'axios'


class Inquietudes extends React.Component {
  constructor() {

    super();
    this.state = {
      form: {
        duda: ""
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
      .post("https://app-ceducational-backend.herokuapp.com/api/nuevaInquietud", this.state.form)
      .then(() => {
        console.log("Se guardó la inquietud con éxito");
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
        <div id="botonduda">
          <div id="btndespe" class="btn-group">


            <select>
              <option>Sanclemente</option>
              <option>Julian</option>
              <option>Jimena</option>
            </select>
          </div>



          <div id="btndespe" class="btn-group">

            <select>
              <option>Matemáticas</option>
              <option>Física</option>
              <option>Español</option>
            </select>
          </div>

          <div id="btndespe" class="btn-group">


            <select>
              <option>11-1</option>
              <option>11-2</option>
            </select>
          </div>
        </div><form onSubmit={this._handleSubmit} >
          <div id="cuadrotexto">
            <textarea name="comentarios" rows="10" cols="40" onChange={this._handleChange}
              name="duda"
              value={this.state.form.duda} type="text">
              Escribe aquí tus comentarios
        </textarea>

          </div>

          <div id="boton_enviar">
            <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Enviar
</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Envío de comentario</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Tu comentario ha sido enviado con éxito!
      </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default Inquietudes;
