// src/pages/Home.jsx
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <h1>Bienvenido</h1>
      <Link to="/app">
        <button className='btn-home'>Entrar</button>
      </Link>
    </div>
  );
}

export default Home;
