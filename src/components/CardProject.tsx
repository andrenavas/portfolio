import './CardProject.css'
import logoGithub from '../assets/img/logoGithub.png'

interface Project {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

interface CardProjectProps {
  project: Project;
}


const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  return (
    <div className='container-card-project'>
      <span className='title-card-project'>{project.name}</span>
      <figure className='container-img-project'>
        <img className='img-project' src={project.image} alt='project image' />
      </figure>
      <div className='container-date-description-project'>
        <span className='date-card-project'>{project.date}</span>
        <p className='description-card-project'>{project.description}</p>
      </div>
      <div className='container-links-projects'>
        <span className='link-card-project'> <a href={project.liveLink} target='_blank'></a>View Project</span>
        <div className='container-link-github'>
          <a href={project.githubLink} target='_blank' className='link-github-project'>
            <img src={logoGithub} className='logo-github-project' alt='logo github'></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardProject;