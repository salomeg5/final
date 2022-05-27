import'./Contact.css';
import github from './github.png';
import firma from './firma.png';
import {
    Link
  } from "react-router-dom";

function Contact(){
    return(
        <div className="contacto">
            <h2>Acerca de mi</h2>
            <hr/>
            <p>
            Estudiante de 9 semestre de la Universidad de Manizales con tecnico en Diseño Grafico 
            </p>

            <h2>Contacto:</h2>
            <hr/>
            <div className="info"><i class="fas fa-envelope"></i> sgallegoa11@gmail.com</div>
            <div className="info"><i class="fas fa-phone"></i> (+57) 3057100880</div>
            <div className="info"><i class="fas fa-map-marker"></i> Calle 18 #9-129</div>
            <div className="info"><i class="fas fa-calendar"></i> 11-01-1999</div>

            <h2>Referencias:</h2>
            <hr/>
            <div className="ref"><i class="fas fa-address-card"></i> 
            <span className="refnombre">Patricia Arbelaez Cano</span>
            <p className="refcargo">Madre</p>
            <p className="refcargo">3162882189</p>
            <p className="refcargo">30319843</p>
            <br></br>

            <h2>Enlaces:</h2>
            <hr/>
            <div className="enlaces">
            <a href="https://github.com/salomeg5">
                <img src={github} alt="GitHub"></img>
            </a>
            <br></br>
            <br></br>

            <h2>Firma</h2>
            <hr/>
            <img src={firma} alt="firma"></img>
            <br></br>

            </div>
            </div>
        </div>
    );
}

export default Contact;