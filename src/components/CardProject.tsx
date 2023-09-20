import './CardProject.css'
import logoGithub from '../assets/img/logoGithub.png'
import { useState } from 'react';

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

  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={`container-card-project ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className='card-front'>
        <span className='title-card-project'>{project.name}</span>
        <figure className='container-img-project'>
          <img className='img-project' src={project.image} alt='project image' />
        </figure>
        <div className='container-links-projects'>
          <div className='containter-live-link'>
            <a href={project.liveLink} target='_blank'>
              <span className='link-card-project'>view-project</span>
            </a>
          </div>

          <div className='container-link-github'>
            <a href={project.githubLink} target='_blank' className='link-github-project'>
              <img src={logoGithub} className='logo-github-project' alt='logo github'></img>
            </a>
          </div>
        </div>
      </div>

      <div className='card-back'>
        <div className='card-back-content'>
        <span className='title-card-project'>{project.name}</span>
          {/* <div className='container-date-description-project'> */}
            <p className='description-card-project'>{project.description}</p>
            <span className='date-card-project'>{project.date}</span>
          {/* </div> */}
        </div>
      </div>

    </div>
  )
}

export default CardProject;