import'./Acerca.css';

function Acerca(){
    return(
        <div className="acerca">
            <div className="infolab">
            <h2 className="titlab"><i class="fas fa-user-graduate"></i> EDUCACIÓN</h2>
            </div>

            <div className="estudio">
                <h4>Bachillerato</h4>
                <h3 className="año">2015</h3>
                <p>Colegio Franciscano Agustin Gemlli</p>
            </div>

            <div className="estudio">
                <h4>Técnico en Diseño Grafico</h4>
                <h3 className="año">2020</h3>
                <p>Unitecnica</p>
            </div>
            <div className="infolab">
                <h2 className="titlab"><i class="fas fa-trophy"></i> CURSOS</h2>
            </div>

            <div className="estudio">
                <h4>Marketing Digital</h4>
                <h3 className="año">2020 </h3>
                <p>Unitecnica</p>
            </div>

            <div className="estudio">
                <h4>Cocina</h4>
                <h3 className="año">2016</h3>
                <p>Sena</p>
            </div>

            <div className="infolab">
            <h2 className="titlab"><i class="fas fa-dumbbell"></i> HABILIDADES</h2>
            </div>

            <div className="habilidades">•Inglés: B2 <progress max="100" value="50"></progress> 50%</div>
            <div className="habilidades">•Visual<progress max="100" value="70"></progress> 70%</div>
            <div className="habilidades">•Ilustrator<progress max="100" value="70"></progress> 70%</div>
            <div className="habilidades">•Office <progress max="100" value="40"></progress> 40%</div>
            <div className="habilidades">•Talwind <progress max="100" value="80"></progress> 80%</div>

            <div className="infolab">
                <h2 className="titlab"><i class="fas fa-user-graduate"></i> APTITUDES</h2>
            </div>

            <div className="estudio">
                <p>•	Manejo de herraminetas</p>
                <p>•	Trabajo en equipo</p>
                <p>•	Paciente</p>
                <p>•	Dedicada</p>
                <p>•	Creativa</p>
                <p>•	Apasionada</p>
                <p>•	Adaptable</p>
                </div>

        </div>
    );
}

export default Acerca;