import {
    Link
  } from "react-router-dom";
import './Header.css';
import foto from './foto.jpg';
function Header (){
    return(
        <header>
        <div class="container">
            <div className="foto">
                <img src={foto} alt="foto Salomé"/>
            </div>
        </div>
        <div className="texto">
            <h1 className="ah1"><span className="nombre">Salomé</span>  <span className="nombre"> Gallego A</span></h1>
            <h3>Ingeniera de Sistemas y Telecomunicaciones</h3>
        </div>
        </header>
    );
}
export default Header;