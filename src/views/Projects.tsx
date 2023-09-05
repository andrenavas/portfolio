import './Projects.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Projects: React.FC = () => {
  return (
    <div className='projects-view' >
      <header className='about-header'>
        <Navbar />
        <div className='container-title-about'>
          <span className='title-about'>projects</span>
        </div>
      </header>
      <main>
        <span>Developer working...</span>
      </main>
      <Footer />
    </div>
  )
}

export default Projects;