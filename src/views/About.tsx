// import { useState } from 'react';
import './About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import vector from '../assets/img/vector.png'
// import OptionsAbout from '../components/OptionsAbout';
import Sidebar from '../components/Sidebar';

const About: React.FC = () => {

  return (
    <div className='about-view'>
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
        <div className='container-main-home'>
          <h1>professional-info</h1>
          <p>In this section you will find all the information of my professional profile, I invite you to read a little more about me and my work. </p>
          <section className='bio' id='bio'>
            <h2>bio</h2>
            <p>Hi, my name is Andreyna but you can call me Andre...

              I'm Front-End Developer and Industrial Engineer dedicated to finding efficient and innovative solutions. Attention to detail and logical thinking allow me to tackle daily challenges in projects, creating code that solve problems efficiently. I enjoy working in collaborative environments where I can combine my technical and communication skills to achieve project goals.

              I'm committed to continue learning, grow in my career and contribute to the success of the projects in which I collaborate.
            </p>
          </section>
          <section className='education' id='education'>
            <h2>education</h2>
            <h3>Frontend Developer - Laboratoria | 2023 </h3>
            <p>Laboratoria's program is an intensive coding bootcamp that strives to simulate a real workplace environment. Over the span of 6 months, participants engage in web projects, employing agile SCRUM methodologies, and honing the soft skills demanded by the technology industry. </p>
            <a href='https://www.laboratoria.la/' target='_blank'>See more about Laboratoria</a>
            <h3>Industrial Engineer - UNEXPO | 2015 </h3>
            <p>UNEXPO is a Polytechnic University located in Barquisimeto, Venezuela. With more than 40 years training leading Engineers in the labor market inside and outside Venezuela, graduated Industrial Engineers are trained in planning, studying, directing and controlling the analysis of the different methods, processes, systems of production procedures. Examines and observes the various processes and information related to sales and production volume, finished product improvements, waste materials, and factory layout. </p>
            <a href='https://virtualunexpo.com/' target='_blank'>See more about UNEXPO</a>
          </section>
          <section className='technologies' id='technologies'>
            <h2>technologies</h2>
              <h3>JavaScript</h3>
              <h3>React.js</h3>
              <h3>TypeScript</h3>
              <h3>Node.js</h3>
              {/* <a href='https://platzi.com/p/andreynanavas/curso/4989-expresiones-tiempo-cantidad/diploma/detalle/' target='_blank'>See the latest certificate</a> */}
              <h3>HTML</h3>
              {/* <a href='https://drive.google.com/file/d/107Kxq4UeUiI3SuT6bMgZMhBwDys9IsT6/view' target='_blank'>See the certificate</a> */}
              <h3>CSS</h3>
              {/* <a href='https://cursos.desafiolatam.com/certificates/qn2txieutt' target='_blank'>See the certificate</a> */}
              <h3>SCRUM</h3>
              {/* Add logos for each technologies */}
          </section>
          <section className='certifications' id='certifications'>
            <h2>certifications</h2>
            <h3>English B1 Intermediate - English Platzi Academy | Currently studying </h3>
            <a href='https://platzi.com/p/andreynanavas/curso/4989-expresiones-tiempo-cantidad/diploma/detalle/' target='_blank'>See the latest certificate</a>
            <h3>React with Typescript - Código Facilito | 2023</h3>
            <a href='https://drive.google.com/file/d/107Kxq4UeUiI3SuT6bMgZMhBwDys9IsT6/view' target='_blank'>See the certificate</a>
            <h3>Data Analysis - Desafío Latam | 2023</h3>
            <a href='https://cursos.desafiolatam.com/certificates/qn2txieutt' target='_blank'>See the certificate</a>
          </section>
          
          <h1>hobbies</h1>
          <section className='hobbies' id='hobbies'>
          <p>I love workout using Nike Training App, I'm fan to comedy podcast and I enjoy going out with my family... </p>
          </section>
          <h1>Contacts</h1>
          <section className='contacts' id='contacts'>
          <p>Find me in:</p>
          <h3>Gmail</h3>
          <a href='andreynanavas@gmail.com'>andreynanavas@gmail.com</a>
          <h3>LinkedIn</h3>
          <a href='https://www.linkedin.com/in/andreynanavas-front-end-developer/'>in/andreynanavas/front-end-developer</a>
          <h3>Github</h3>
          <a href='https://github.com/andrenavas'>github.com/andrenavas</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About