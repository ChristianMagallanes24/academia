// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainApp from './components/MainApp/MainApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
