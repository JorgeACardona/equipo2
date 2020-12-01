import React from 'react';
import perfil from "../imagenes/perfil.png"
import "../Style/Correo.css"


function Objetivo(){
    return (
        <div id="cont_correo">
           <div id="cont_pers">
                <div><h4 id="nom_cont"><img id="user"src={perfil} alt="" width="50" height="50">
                    </img>Luisa Fernanda Aristizabal</h4><p id="gmail">luisaaristizabal@franciscomiranda.edu.co</p></div>
            </div>
            <div id="cont_pers">
                <div><h4 id="nom_cont"><img id="user"src={perfil} alt="" width="50" height="50">
                    </img>Ana Cristina Pastrana Castillo</h4><p id="gmail">anapastrana@franciscomiranda.edu.co</p></div>
            </div>
            <div id="cont_pers">
                <div><h4 id="nom_cont"><img id="user"src={perfil} alt="" width="50" height="50">
                    </img>Jannelly Garro Ruíz</h4><p id="gmail">jannellygarro@franciscomiranda.edu.co</p></div>
            </div>
            <div id="cont_pers">
                <div><h4 id="nom_cont"><img id="user"src={perfil} alt="" width="50" height="50">
                    </img>Brayan Andrés Ramírez Torres</h4><p id="gmail">brayanramirez@franciscomiranda.edu.co</p></div>
            </div>
            <div id="cont_pers">
                <div><h4 id="nom_cont"><img id="user"src={perfil} alt="" width="50" height="50">
                    </img>Jorge Andrés Cardona Giraldo</h4><p id="gmail">jorgecardona@franciscomiranda.edu.co</p></div>
            </div>

            

        
        </div>
    )
}

export default Objetivo;