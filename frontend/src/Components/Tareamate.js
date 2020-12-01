import React from 'react';
import cuaderno from '../imagenes/cuaderno.png'
import "../Style/Tareas.css"
import responder from '../imagenes/responder.png'
import { Link } from "react-router-dom"
import word from '../imagenes/word.png'
import carpeta from '../imagenes/carpeta.png'
import axios from 'axios'


class Tareamate extends React.Component {
    constructor() {

        super();
        this.state = {
            form: {
                archivo: ""
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
            .post("https://app-ceducational-backend.herokuapp.com/api/nuevoTrabajo", this.state.form)
            .then(() => {
                console.log("Se envió el trabajo con exito");
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
                <Link to="/matematicas">
                    <img id="regresar" src={responder} alt="" width="45" height="45"></img>
                </Link>

                <div id="cont_tarea"><h3>
                    <img id="cuaderno" src={cuaderno} alt="" width="80" height="80"></img>Guía Límites</h3>
                </div>

                <div id="conjunto">
                    <p id="indi"> Leer con atención la guía y resuelva las actividades propuestas.</p>
                    <a href="https://drive.google.com/file/d/1tt6GRcMFdO4zLTj2ZkYU7UK67i-WNNbi/view" target="_blank"><h3 id="indi"><img src={word} width="80" height="80"></img> Guía Límites</h3></a>
                </div>
                <form onSubmit={this._handleSubmit} >
                <div id="subir">
                        <h2>Tu trabajo</h2>
                        <input onChange={this._handleChange} name="archivo" value={this.state.form.archivo} type="file" id="file"></input>
                        <label id="doc" for="file"><img id="sub_img" src={carpeta} width="20" height="20"></img>
            Subir Archivo
        </label>
                        <br />

                        <button type="submit" id="doc" data-toggle="modal" data-target="#exampleModal">
                            Entregar Tarea
</button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Envío de Tarea</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Tu tarea ha sido enviada con éxito!
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

        )

    }
}



export default Tareamate;