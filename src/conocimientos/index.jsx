import imagenDesarrollo from "../images/web-programming.svg"
import imagenMovil from "../images/app-development.svg"
import imagenUXUI from "../images/ui-ux.svg"

function Conocimientos () {
    
    
    return(
    <div class="row py-3">
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
    )
}
export default Conocimientos