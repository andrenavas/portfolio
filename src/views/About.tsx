// import { useState } from 'react';
import './About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import technologiesData from '../components/TechData'
import logoGithub from '../assets/img/logoGithub.png'
import 'animate.css'
import Button from '../components/Button'


const About: React.FC = () => {

  return (
    <div className='about-view'>
      <section className='container-about-view' >
        <header className='about-header'>
          <Navbar />
          <div className='container-title-about'>
            {/* <span className='title-about'>about-me</span> */}
          </div>
          {/* <div className='container-sidebar'>
            <Sidebar />
          </div> */}
        </header>
        <main>
          <div className='container-sidebar-main'>
            <div className='sidebar'>
              <Sidebar />
            </div>
            <div className='container-main-about'>
              <h1 className='title-about-view' > professional-info</h1>
              {/* <p>In this section you will find all the information of my professional profile, I invite you to read a little more about me and my work. </p> */}
              <section className='bio' id='bio'>
                <h2 className='subtitle-about-view'> // bio</h2>
                <p>Hi, my name is Andreyna.

                  I'm Front-End Developer and Industrial Engineer dedicated to finding efficient and innovative solutions. Attention to detail and logical thinking allow me to tackle daily challenges in projects, creating code that solve problems efficiently.
                </p>

                <p>I enjoy working in collaborative environments where I can combine my technical and communication skills to achieve project goals.
                  I'm committed to continue learning, grow in my career and contribute to the success of the projects in which I collaborate.
                </p>
                <div className='container-img-bio'>
                  <div className='img-container'>
                    <img className='img-bio' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fandrenavas.jpg?alt=media&token=eee8b967-20c3-4aaa-94bf-99b57af0889f&_gl=1*5nypbv*_ga*MjE3MzcyMTAzLjE2ODAzNTU6MDA.*_ga_CW55HF8NVT*MTY5NzE0NTQwOC42Ny4xLjE2OTcxNDU0NjQuNC4wLjA.' alt='bio image' />
                  </div>
                  <Button linkTo='/projects' descriptionButton='view-projects' />
                </div>

              </section>
              <section className='education' id='education'>
                <h2 className='subtitle-about-view'> // education</h2>
                <div className='container-education'>

                  <div className='container-logo-education'>
                    <h3>Frontend Developer</h3>
                    <a href='https://www.laboratoria.la/' target='_blank'>
                      <img className='logo-education' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Flaboratoria-logo.png?alt=media&token=76ce0e13-1241-46b9-89b4-438e339da11d' alt='logo laboratoria' />
                    </a>
                  </div>


                  <div className='container-logo-education'>
                    <h3>Industrial Engineer</h3>
                    <a href='https://virtualunexpo.com/' target='_blank'>
                      <img className='logo-education' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Funexpo-logo.png?alt=media&token=ed230335-ad26-4fc9-a4e9-f6c748c42743' alt='logo unexpo' />
                    </a>
                  </div>
                </div>

              </section>
              <section className='technologies' id='technologies'>
                <h2 className='subtitle-about-view'>// technologies</h2>
                {/* <span>Here you can see a list of the main technologies I use, to see more look at my Resume</span> */}
                {/* <a href='https://drive.google.com/file/d/1Yq6zk8mpngLwJqbR1Lm_84tPVhG8yWDg/view?usp=drive_link' target='_blank'>Here</a> */}
                <div className='technology-list'>
                  {technologiesData.map((technology) => (
                    <Cards key={technology.id} technology={technology} />
                  ))}
                </div>
              </section>

              <section className='certifications' id='certifications'>
                <h2 className='subtitle-about-view'> // certifications</h2>

                <div className='container-certification'>
                  <h3>Front-End Developer</h3>
                  <a href='https://www.credential.net/1a54abb2-3e61-4183-aac7-0f0693e2ce83#gs.5nm4e5' target='_blank'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Ffrontend-developer.jpg?alt=media&token=b8041b78-8b8f-42a0-ad9c-6383edd97bc7' alt='english certificate' />
                  </a>
                </div>

                <div className='container-certification'>
                  <h3>English B1 Intermediate</h3>
                  <a href='https://platzi.com/p/andreynanavas/curso/4989-expresiones-tiempo-cantidad/diploma/detalle/' target='_blank'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fenglish-b1.jpg?alt=media&token=fe62ceac-6fd3-43ba-888c-36ca0eb90d91' alt='english certificate' />
                  </a>
                </div>

                <div className='container-certification'>
                  <h3>React with Typescript</h3>
                  <a href='https://drive.google.com/file/d/107Kxq4UeUiI3SuT6bMgZMhBwDys9IsT6/view' target='_blank'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Freact-typescript.jpg?alt=media&token=3eaa47b8-70c2-43c7-a903-20108783e199' alt='react with typescript certificate' />
                  </a>
                </div>

                <div className='container-certification'>
                  <h3>Data Analysis</h3>
                  <a href='https://cursos.desafiolatam.com/certificates/qn2txieutt' target='_blank'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fdata-analysis.jpg?alt=media&token=f4eca502-d1b4-4960-b6ab-0886cc83f615' alt='data analysis certificate' />
                  </a>
                </div>
              </section>

              <section className='resume' id='resume'>
                <h2 className='subtitle-about-view'> // resume</h2>
                <div className='container-resume'>
                  <h3>Download my resume, here 👇</h3>
                  <a href='https://drive.google.com/file/d/1Yq6zk8mpngLwJqbR1Lm_84tPVhG8yWDg/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
                    <Button descriptionButton='Resume Andreyna Navas' />
                  </a>
                </div>
              </section>

              {/* <h1 className='title-about-view'>hobbies</h1>
            <section className='hobbies' id='hobbies'>
              <p>I love workout using Nike Training App, I'm fan to comedy podcast and I enjoy going out with my family... </p>
            </section> */}
              <h1 className='title-about-view-contact'>contacts</h1>
              <section className='contacts' id='contacts'>
                <div className='contacts-gmail'>
                  <img className='logo-gmail-contact' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Flogo-gmail.png?alt=media&token=8f6957a6-2001-4001-ac5d-0510b759dd30' alt='logo-gmail' />
                  <a href='mailto:andreynanavas@gmail.com' target='_blank'>andreynanavas@gmail.com</a>
                </div>
                <div className='contacts-linkedin'>
                  <img className='logo-linkedin-contact' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Flogo-linkedin.png?alt=media&token=c1c019a3-a878-4802-a837-05c1d5fcad6b' alt='logo-linkedin' />
                  <a href='https://www.linkedin.com/in/andreynanavas-front-end-developer/' target='_blank'>in/andreynanavas</a>
                </div>
                <div className='contacts-github'>
                  <img className='logo-github-contact' src={logoGithub} alt='logo-github' />
                  <a href='https://github.com/andrenavas' target='_blank'>github.com/andrenavas</a>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </section>
    </div>
  )
}

export default About