

## **Parcial**
---
Parcial

## **Participantes**
---
Juan Pablo Sepúlveda Salinas & Salomé Gallego Arbelaes





## **Home**
```JavaScript
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

## **Portafolio**
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Acerca from '../components/acerca/Acerca';
import Footer from '../components/footer/Footer';

function portafolio() {
  return (
    <div className="container">
      <Header/>
      <section id="informacion">
      <Contact/>
      <Acerca/>
      </section>
      <Footer/>
    </div>

  );
}

export default portafolio;