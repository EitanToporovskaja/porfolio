import imageEitan from "../images/eitan.jfif"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

function AcercaDeMi ({nombre, apellido}) {
    return(
        <section id="AcercaDeMi">
            <div class="container">
                
                <div>
                    <h2 class="titulo">Acerca de mi</h2>
                </div>
                <div  class="textContainer">
                    <div>
                        <h2 class="titulo">Hola, soy {nombre} {apellido}</h2>
                        <p>Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput Lorem imput </p>                    </div>
                    <div>
                        <img class="image" src= {imageEitan}  alt="Walter Patterson" />
                    </div>
                </div>
            <br/>
            <br/>
            </div>
        </section>
    )
       
    }

export default AcercaDeMi