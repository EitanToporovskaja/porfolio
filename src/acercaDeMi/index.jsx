import imageEitan from "../images/eitan.jfif"

function AcercaDeMi ({nombre, apellido}) {
    

    return(
        <section id="AcercaDeMi">
            <div class="container-narrow">
                <div class="text-center mb-5">
                    <h2 class="marker marker-center">Acerca de mi</h2>
                </div>
                <div class ="col-md-6">
                    <p>Hola, soy {nombre} {apellido}</p>
                    <p>Licenciado muy importante</p>
                </div>
            <img class="avatar img-fluid mt-2 rounded-circle" src= {imageEitan} alt="" />
            </div>
        </section>
    )
       
    }

export default AcercaDeMi