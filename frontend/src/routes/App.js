import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Inicio from '../Pages/Inicio';
import Iniciar from '../Pages/Iniciar';
import Registro from '../Pages/Registro'
import Contraseña from '../Pages/Contraseña'
import Clases from '../Pages/Clases'
import Mate from '../Pages/Mate'
import Fis from '../Pages/Fis'
import Esp from '../Pages/Esp'
import Limite from '../Pages/Limites'
import Funcion from '../Pages/Funcion';
import Conjunto from '../Pages/Conjunto'
import Ondas from '../Pages/Ondas'
import Circuitos from '../Pages/Circuitos'
import Hidraulica from '../Pages/Hidraulica'
import Literatura from '../Pages/Literatura'
import Estereotipos from '../Pages/Estereotipos'
import Tribus from '../Pages/Tribus'
import Planilla from '../Pages/Planilla'
import Dudas from "../Pages/Dudas"
import Perfil from "../Pages/Perfil"
import Informacion from "../Pages/Informacion"
import Contacto from "../Pages/Contacto"


class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
             <Switch> 
               <Route exact path="/" component={Inicio} />
               <Route exact path="/iniciar" component={Iniciar} />
               <Route exact path="/registro"  component={Registro} />
               <Route exact path="/contraseña" component={Contraseña} />
               <Route exact path="/clases" component={Clases} />
               <Route exact path="/matematicas" component={Mate} />
               <Route exact path="/fisica" component={Fis} />
               <Route exact path="/español" component={Esp} />
               <Route exact path="/Limites" component={Limite}/>
               <Route exact path="/Funcion" component={Funcion}/>
               <Route exact path="/Conjunto" component={Conjunto}/>
               <Route exact path="/Ondas" component={Ondas}/>
               <Route exact path="/Circuitos" component={Circuitos}/>
               <Route exact path="/Hidraulica" component={Hidraulica}/>
               <Route exact path="/Literatura" component={Literatura}/>
               <Route exact path="/Estereotipos" component={Estereotipos}/>
               <Route exact path="/Tribus" component={Tribus}/>
               <Route exact path="/planilla" component={Planilla}/>
               <Route exact path= "/Inquietudes" component={Dudas}/>
               <Route exact path= "/Perfil" component={Perfil}/>
               <Route exact path= "/Informacion" component={Informacion}/>
               <Route exact path= "/contacto" component={Contacto}/>
             </Switch>
            </BrowserRouter>
        );
    }
}

export default App;