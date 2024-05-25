import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Cuttify from '../assets/icon-cuttify.svg'
import '../assets/css/footer.css'

export function Footer () {
  return (
        <footer>
            <div className='icons'>
                <a href="/" className="foot-icon" title='Repositorio de github'><img src={Github} alt="github-icon" /></a>
                <a href="/" className="foot-icon" title='Cuttify URL'><img src={Cuttify} alt="cuttify-icon" /></a>
                <a href="/" className="foot-icon" title='Perfil de instagram'><img src={Instagram} alt="instagram-icon" /></a>
            </div>
            <span>Creado por <strong>@gerrybogard</strong></span>
        </footer>
  )
}
