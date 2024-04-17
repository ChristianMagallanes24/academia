
import Header from './components/Header/Header';
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
    </div>
  );
}

export default App;
