import imagenDesarrollo from "../images/web-programming.svg"
import imagenMovil from "../images/app-development.svg"
import imagenUXUI from "../images/ui-ux.svg"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Conocimientos () {
    return(
        <section id="Conocimientos">
            <div>
                <div>
                    <h2>Conocimientos</h2>
                </div>
                <div class="cono">
                    <div>
                        <img src={imagenDesarrollo} width="96" height="96" alt="web design"/>
                        <h5>
                    Desarrollo Web
                    </h5>
                    </div>
                  
                    <div>
                        <img src={imagenMovil} width="96" height="96" alt="web design"/>
                        <h5>
                    Desarrollo Movil
                    </h5>
                    </div>
                
                    <div>
                        <img src={imagenUXUI} width="96" height="96" alt="web design"/>
                        <h5>
                   UX/UI
                    </h5>
                    </div>
                  
                </div>
            </div>
    </section>
    )
}
export default Conocimientos