import imageEitan from "../images/eitan.jfif"
function AcercaDeMi ({nombre, apellido}) {
    

    return(
        <div>
            <div class ="col-md-6">
                <p>Hola, soy {nombre} {apellido}</p>
                <p>Licenciado muy importante</p>
            </div>
        <img class="avatar img-fluid mt-2 rounded-circle" src= {imageEitan} alt="" />
        </div>
    )
       
    }

export default AcercaDeMi