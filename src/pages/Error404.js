import {
    Link
  } from "react-router-dom";

function Error404(){

	return(
	<div className="container">
         <img src="https://www.portafolio.co/files/article_main/uploads/2016/04/26/571fb7d8122ef.jpeg"/>
		 <Link to="/" className="btn btn-danger">Click para Hoja de vida</Link>  
      </div>
		);
}

export default Error404;