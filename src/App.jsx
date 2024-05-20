import './App.css';
import AcercaDeMi from './acercaDeMi';
import Conocimientos from './conocimientos';
import Contacto from './contacto';
import Educacion from './educacion';
import Experiencia from './experiencia';
<header>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto me-2">
    <li class="nav-item">
      <a class="nav-link" href="#AcercaDeMi">Acerca de mi</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Conocimientos">Conocimientos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Contacto">Contacto</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Educacion">Educacion</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Experiencia">Experiencia</a>
    </li>
  </ul>
</div>

</header>

function App() {
  const nombre="Eitan"
  const apellido="Toporovskaja"
  return (
    <div className="App">
      <AcercaDeMi nombre={nombre} apellido={apellido} />
      <Conocimientos/>
      <Contacto/>
      <Educacion/>
      <Experiencia/>
    </div>
  );
}

export default App;
