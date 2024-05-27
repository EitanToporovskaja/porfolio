import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
    return(
        <header>          
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#AcercaDeMi">Acerca de mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Conocimientos">Conocimientos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Educacion">Educacion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Experiencia">Experiencia</a>
              </li>
            </ul>
        </div>
      </header>
    )
}

export default Navbar