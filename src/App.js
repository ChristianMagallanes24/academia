
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hubicacion from './components/Hubicacion/Hubicacion';
import Navbar from './components/Navbar/Navbar';
import Preguntas from './components/Preguntas/Preguntas';
import Seccionuno from './components/seccion1/Seccionuno';
import './sass/App.scss';

function App() {
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

export default App;
