import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hubicacion from '../Hubicacion/Hubicacion';
import Navbar from '../Navbar/Navbar';
import Preguntas from '../Preguntas/Preguntas';
import Seccionuno from '../seccion1/Seccionuno';
import '../../sass/App.scss';


function MainApp() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Seccionuno />
      <Preguntas />
      <Contacto />
      <Hubicacion />
      <Footer />
    </div>
  );
}

export default MainApp;
