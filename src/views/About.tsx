
import './About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import vector from '../assets/img/vector.png'

function About() {
  //const [count, setCount] = useState(0)

  return (
    <div className='about-view'>
      <header className='home-header'>
        <Navbar />
        <div className='container-title-about'>
          <span className='title-about'>_about-me</span>
        </div>
        <div className='container-list'>
          <ul className='list-about-me'>
            <a className='anchor-about-me'href=''><img src={vector} alt='vector'/><li className='list-item'>personal-info</li></a>
            <a className='anchor-about-me'href=''><img src={vector} alt='vector'/><li className='list-item'>professional-info</li></a>
            <a className='anchor-about-me'href=''><img src={vector} alt='vector'/><li className='list-item'>hobbies</li></a>
            <a className='anchor-about-me'href=''><img src={vector} alt='vector'/><li className='list-item'>contacts</li></a>
          </ul>
        </div>
      </header>

      <main>
        <section className='container-main-home'>
          <h1>ABOUT ME</h1>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About