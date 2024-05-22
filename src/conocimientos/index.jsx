import imagenDesarrollo from "../images/web-programming.svg"
import imagenMovil from "../images/app-development.svg"
import imagenUXUI from "../images/ui-ux.svg"
import "./style.css"

function Conocimientos () {
    
    
    return(
        <section id="Conocimientos">
            <div class="container-narrow">
                <div class="text-center mb-5">
                        <h2 class="marker marker-center">Conocimientos</h2>
                </div>
                <div class="cono">
                    <div class="col-md-3 text-center aos-init aos-animate">
                        <img class="mb-2" src={imagenDesarrollo} width="96" height="96" alt="web design"/>
                    </div>
                    <div class="h5">
                    Desarrollo Web
                    </div>
                    <div class="col-md-3 text-center aos-init aos-animate">
                        <img class="mb-2" src={imagenMovil} width="96" height="96" alt="web design"/>
                    </div>
                    <div class="h5">
                    Desarrollo Movil
                    </div>
                    <div class="col-md-3 text-center aos-init aos-animate">
                        <img class="mb-2" src={imagenUXUI} width="96" height="96" alt="web design"/>
                    </div>
                    <div class="h5">
                    UX/UI
                    </div>
                </div>
            </div>
    </section>
    )
}
export default Conocimientos