import './Footer.css'
import logoLinkedIn from '../assets/img/logoIn.png'
import logoGithub from '../assets/img/logoGithub.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className='container-footer'>
          <span> find me in:</span>
          <div className='container-linkedin-logo'>
            <a href='https://www.linkedin.com/in/andreynanavas-front-end-developer/' target='_blank' className='link-linkedin'>
              <img src={logoLinkedIn} className='logo-linkedin' alt='logo linkedin'></img>
            </a>
          </div>
          <div className='container-github-logo'>
            <a href='https://github.com/andrenavas/' target='_blank' className='link-github'>
              <img src={logoGithub} className='logo-github' alt='logo github'></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer