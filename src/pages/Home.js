import {
    Link
  } from "react-router-dom";


function Home(){

	return(
	<div className="container">
    <Link to="/portafolio" className="btn btn-primary ">Hoja de Vida</Link>       
      </div>
		);
}

export default Home;