import './App.css';
import AcercaDeMi from './acercaDeMi';
import Conocimientos from './conocimientos';
import Contacto from './contacto';
import Educacion from './educacion';
import Experiencia from './experiencia';
import Navbar from './navbar';

function App() {
  const nombre="Eitan"
  const apellido="Toporovskaja"
  return (
    <div className="App">
      <Navbar/>
      <AcercaDeMi nombre={nombre} apellido={apellido} />
      <Conocimientos/>
      <Contacto/>
      <Educacion/>
      <Experiencia/>
    </div>
  );
}

export default App;
