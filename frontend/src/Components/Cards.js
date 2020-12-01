import React from "react";
import "../Style/Class.css"
import { Link } from "react-router-dom"

function Cards() {
  return (
    <div id="cont_tarjetas" className="row">

      <div className="col-md-4 text-center fondo mb-2">
        <div className="card md-4 shadow-sm">
          <div id="header" className="card-header">
              <h4 className="my-0 font-weight-normal font-weight-bold">11-Matemáticas</h4>
          </div>
          <div id="body" className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                  <li>Jhon Jairo Sanclemente</li>
              </ul>
              <Link to="/matematicas">
                <button
                  id="boton" type="button"
                  className="btn btn-lg btn-block btn-outline-primary mb-2">
                  Ingresar
                </button>
              </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4 text-center fondo mb-2">
        <div className="card md-4 shadow-sm">
          <div id="header" className="card-header">
              <h4 className="my-0 font-weight-normal font-weight-bold">11-Física</h4>
          </div>
          <div id="body" className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                  <li>Julian Medina</li>
              </ul>
              <Link to="/fisica">
                <button
                  id="boton" type="button"
                  className="btn btn-lg btn-block btn-outline-primary mb-2">
                  Ingresar
                </button>
              </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4 text-center fondo mb-2">
        <div className="card md-4 shadow-sm">
          <div id="header" className="card-header">
              <h4 className="my-0 font-weight-normal font-weight-bold">11-Español</h4>
          </div>
          <div id="body" className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                  <li>Jimena Vergara</li>
              </ul>
              <Link to="/español">
                <button
                  id="boton" type="button"
                  className="btn btn-lg btn-block btn-outline-primary mb-2">
                  Ingresar
                </button>
              </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cards;