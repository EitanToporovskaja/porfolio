import imageEitan from "../images/eitan.jfif"
import "./style.css"

function AcercaDeMi ({nombre, apellido}) {
    return(
        <section id="AcercaDeMi">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <div class="container-narrow">
                <div class="text-center mb-5">
                    <h2 class="marker marker-center">Acerca de mi</h2>
                </div>
                <div class ="col-md-6">
                    <p>Hola, soy {nombre} {apellido}</p>
                    <p>Licenciado muy importante</p>
                </div>
            <img class="avatar img-fluid mt-2 rounded-circle" src= {imageEitan} alt="" />
            <br/>
            <br/>
            </div>
        </section>
    )
       
    }

export default AcercaDeMi