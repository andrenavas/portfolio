// import { useState } from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';
import technologiesData from '../components/TechData';
import logoGithub from '../assets/img/logoGithub.png'


const About: React.FC = () => {

  return (
    <div className='about-view'>
      <section className='container-about-view' >
        <header className='about-header'>
          <Navbar />
          <div className='container-title-about'>
            <span className='title-about'>about-me</span>
          </div>
          <div className='container-sidebar'>
            <Sidebar />
          </div>
        </header>
        <main>
          <div className='container-main-about'>
            <h1 className='title-about-view' > professional-info</h1>
            {/* <p>In this section you will find all the information of my professional profile, I invite you to read a little more about me and my work. </p> */}
            <section className='bio' id='bio'>
              <h2 className='subtitle-about-view'> // bio</h2>
              <p>Hi, my name is Andreyna.

                I'm Front-End Developer and Industrial Engineer dedicated to finding efficient and innovative solutions. Attention to detail and logical thinking allow me to tackle daily challenges in projects, creating code that solve problems efficiently. I enjoy working in collaborative environments where I can combine my technical and communication skills to achieve project goals.

                I'm committed to continue learning, grow in my career and contribute to the success of the projects in which I collaborate.
              </p>
              <div className='container-img-bio'>
                <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Fandrenavas-code.png?alt=media&token=838ffa58-4385-43c1-85fe-35d57fa56b2a' alt='bio image' />
              </div>
            </section>
            <section className='education' id='education'>
              <h2 className='subtitle-about-view'> // education</h2>

              <h3>Frontend Developer | Laboratoria</h3>
              <div className='container-logo-date'>
                <span>2023</span>
                <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Flaboratoria-logo.png?alt=media&token=76ce0e13-1241-46b9-89b4-438e339da11d' alt='logo laboratoria' />
              </div>
              <p>Laboratoria's program is an intensive coding bootcamp that strives to simulate a real workplace environment. Over the span of 6 months, participants engage in web projects, employing agile SCRUM methodologies, and honing the soft skills demanded by the technology industry. </p>
              <a href='https://www.laboratoria.la/' target='_blank'>View more about Laboratoria</a>

              <h3>Industrial Engineer | UNEXPO</h3>
              <span>2015</span>
              <p>UNEXPO is a Polytechnic University located in Barquisimeto, Venezuela. With more than 40 years training leading Engineers in the labor market inside and outside Venezuela, graduated Industrial Engineers are trained in planning, studying, directing and controlling the analysis of the different methods, processes, systems of production procedures.</p>
              <a href='https://virtualunexpo.com/' target='_blank'>View more about UNEXPO</a>

            </section>
            <section className='technologies' id='technologies'>
              <h2 className='subtitle-about-view'>// technologies</h2>
              <span>Here you can see a list of the main technologies I use, to see more look at my Resume</span>
              <a href='https://drive.google.com/file/d/1Yq6zk8mpngLwJqbR1Lm_84tPVhG8yWDg/view?usp=drive_link' target='_blank'>Here</a>
              <div className='technology-list'>
                {technologiesData.map((technology) => (
                  <Cards key={technology.id} technology={technology} />
                ))}
              </div>
            </section>
            <section className='certifications' id='certifications'>
              <h2 className='subtitle-about-view'> // certifications</h2>
              <h3>English B1 Intermediate - English Platzi Academy | Currently studying </h3>
              <a href='https://platzi.com/p/andreynanavas/curso/4989-expresiones-tiempo-cantidad/diploma/detalle/' target='_blank'>See the latest certificate</a>
              <h3>React with Typescript - Código Facilito | 2023</h3>
              <a href='https://drive.google.com/file/d/107Kxq4UeUiI3SuT6bMgZMhBwDys9IsT6/view' target='_blank'>See the certificate</a>
              <h3>Data Analysis - Desafío Latam | 2023</h3>
              <a href='https://cursos.desafiolatam.com/certificates/qn2txieutt' target='_blank'>See the certificate</a>
            </section>
            <section className='resume' id='resume'>
              <h2 className='subtitle-about-view'> // resume</h2>
              <h3>Download my resume, click 👇</h3>
              <a href='https://drive.google.com/file/d/1Yq6zk8mpngLwJqbR1Lm_84tPVhG8yWDg/view?usp=drive_link' target='_blank'>Resume Andreyna Navas</a>
            </section>
            <h1 className='title-about-view'>hobbies</h1>
            <section className='hobbies' id='hobbies'>
              <p>I love workout using Nike Training App, I'm fan to comedy podcast and I enjoy going out with my family... </p>
            </section>
            <h1 className='title-about-view'>contacts</h1>
            <section className='contacts' id='contacts'>
              <div className='contacts-gmail'>
                <img className='logo-gmail-contact' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Flogo-gmail.png?alt=media&token=8f6957a6-2001-4001-ac5d-0510b759dd30' alt='logo-gmail' />
                {/* <h3>Gmail</h3> */}
                <a href='andreynanavas@gmail.com' target='_blank'>andreynanavas@gmail.com</a>
              </div>
              <div className='contacts-linkedin'>
                <img className='logo-linkedin-contact' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Flinkedin-logo.png?alt=media&token=460362e3-c09f-49e6-988a-887ca2b87c69' alt='logo-linkedin' />
                {/* <h3>LinkedIn</h3> */}
                <a href='https://www.linkedin.com/in/andreynanavas-front-end-developer/' target='_blank'>in/andreynanavas</a>
              </div>
              <div className='contacts-github'>
                <img className='logo-github-contact' src={logoGithub} alt='logo-github' />
                {/* <h3>Github</h3> */}
                <a href='https://github.com/andrenavas' target='_blank'>github.com/andrenavas</a>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </section>
    </div>
  )
}

export default About