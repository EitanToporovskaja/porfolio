import imagenCertificacion from "../images/certificadoCurso"
import imagenHackerRank from "../images/certificadoIntermedioHackerRank.png"
import "./style.css"
function Experiencia () {
    return(
        <section id="Experiencia">
            <div class="container-narrow">
                <div class="text-center mb-5">
                    <h2 class="marker marker-center">Experiencia</h2>
                </div>
                <div class ="row">
                    <div class= "col-md-6">
                        <div class = "card mb-3 aos-init aos-animate">
                            <div class="card-body px-3 py-2">
                                <div class="grid-item">
                                    <a href="https://www.cloudskillsboost.google/public_profiles/9b84c1cb-b07a-424b-8ea1-c018485a0d27/badges/5044189?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
                                    <figure class="portfolio-item">
                                    <img src={imagenCertificacion} alt="" />
                                    </figure>
                                    </a>        
                                </div>
                                <div class="grid-item">
                                    <a href="https://www.hackerrank.com/certificates/10bd5af04dfd">
                                        <figure class="portfolio-item">
                                        <img src={imagenHackerRank} alt="" />    
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Experiencia