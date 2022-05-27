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