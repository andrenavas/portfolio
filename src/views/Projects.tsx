import './Projects.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardProject from '../components/CardProject';
import projectsData from '../components/ProjectsData';

const Projects: React.FC = () => {
  return (
    <section className='projects-view'>
      <div className='container-projects-view' >
        <header className='about-header'>
          <Navbar />
          <div className='container-title-about'>
            <span className='title-about'>projects</span>
          </div>
        </header>
        <main>
          <div className='container-projects'>
            {projectsData.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </section>
  )
}

export default Projects;