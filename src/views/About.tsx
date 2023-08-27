import { useState } from 'react';
import './About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import vector from '../assets/img/vector.png'

function About() {
  const [professionalInfoVisible, setProfessionalInfoVisible] = useState(false);

  const toggleOptions = () => {
    setProfessionalInfoVisible(!professionalInfoVisible);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='about-view'>
      <header className='home-header'>
        <Navbar />
        <div className='container-title-about'>
          <span className='title-about'>_about-me</span>
        </div>
        <div className='container-list'>
          <ul className='list-about-me'>
            <a
              className='anchor-about-me'
              href='#professional-info'
              id='professional-info'
              onClick={toggleOptions}
            >
              <img className='vector-img' src={vector} alt='vector' />
              <li className='list-item'>professiona-info</li>
              {professionalInfoVisible && (
                <div className='options-container'>
                  <a href='#bio'>Bio</a>
                  <a href='#education'>Education</a>
                  <a href='#certifications'>Certifications</a>
                </div>
              )}
            </a>
            <a
              className='anchor-about-me'
              href='#hobbies'
              id='hobbies'
            >
              <img className='vector-img' src={vector} alt='vector' />
              <li className='list-item'>hobbies</li>
            </a>
            <a
              className='anchor-about-me'
              href='#contacts'
              id='contacts'
            >
              <img className='vector-img' src={vector} alt='vector' />
              <li className='list-item'>contacts</li>
            </a>
            {professionalInfoVisible && (
              <div className='options-container'>
                <a onClick={() => scrollToSection('bio')}>Bio</a>
                <a onClick={() => scrollToSection('education')}>Education</a>
                <a onClick={() => scrollToSection('certifications')}>Certifications</a>
              </div>
            )}
          </ul>
        </div>
      </header>

      <main>
        <div className='container-main-home'>
          <h1>ABOUT ME</h1>
          <section className='bio' id='bio'>
            <h2>bio</h2>
            <p>Hi, my name is Andreyna but you can call me Andre...

              I'm Front-End Developer and Industrial Engineer dedicated to finding efficient and innovative solutions. Attention to detail and logical thinking allow me to tackle daily challenges in projects, creating code that solve problems efficiently. I enjoy working in collaborative environments where I can combine my technical and communication skills to achieve project goals.

              I'm committed to continue learning, grow in my career and contribute to the success of the projects in which I collaborate.
            </p>
          </section>
          <section className='education' id='education'>
            <h2>education</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur egestas vehicula. Maecenas eu enim vestibulum, consequat nisi in, pellentesque eros. Nulla auctor rutrum urna quis eleifend. Nam laoreet, libero eu aliquet aliquam, erat ante tempor ligula, vel pretium nisl urna accumsan orci. In est dui, semper nec viverra nec, pharetra quis risus. Sed sed tortor ultricies, tempor enim vitae, interdum lacus. Praesent feugiat gravida eros, malesuada fermentum ligula ultrices non. Donec tempor augue sed sem imperdiet gravida. Ut lobortis porttitor mauris vel vestibulum. Donec turpis sem, consequat eget dolor consequat, auctor feugiat nisl. Donec scelerisque elementum placerat. Aliquam dapibus sed mi eget feugiat. Vivamus lacinia elit vel diam rutrum vestibulum sit amet ac elit. Fusce dictum pharetra lectus in condimentum. Integer scelerisque arcu in euismod vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tempus, libero at fringilla rutrum, mi tortor pharetra urna, ac fermentum magna orci et risus. Curabitur porttitor sodales sapien at blandit. Suspendisse molestie arcu tellus, ac hendrerit nisl iaculis eget. Quisque imperdiet non nunc nec efficitur. Sed eget gravida mi, at egestas neque. Nunc tristique volutpat urna, a euismod leo pharetra sit amet. Nunc dictum eleifend ligula, vitae bibendum neque ultrices vel. Duis ullamcorper tellus in ex interdum, quis lacinia magna facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus risus, tincidunt sed felis vitae, posuere sollicitudin eros.

              Duis rhoncus blandit lorem eget porta. Nunc volutpat quam at dignissim interdum. Fusce arcu eros, tristique et elit non, pretium tincidunt nibh. Proin blandit porta enim, quis commodo elit dapibus sed. Nullam a porttitor quam, sed ultricies metus. Aenean mattis libero maximus, eleifend risus quis, vehicula urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut est velit, ornare a ipsum a, auctor mattis purus. Aliquam ultricies, justo eu dictum molestie, leo risus lobortis justo, at fermentum nisl orci id nulla. Cras accumsan efficitur consectetur. Donec odio nunc, commodo vitae commodo aliquet, placerat non velit.

              Nunc efficitur nisl vitae nibh faucibus, et sollicitudin diam sagittis. Aliquam erat volutpat. Donec neque nisi, congue ac enim quis, tincidunt interdum erat. Nulla ultrices vehicula elit quis suscipit. Nulla ex lectus, scelerisque nec hendrerit eu, finibus a mauris. Ut a dui diam. Vivamus fermentum auctor lectus nec efficitur. Vestibulum euismod arcu nec dolor bibendum, elementum lacinia odio posuere. Curabitur et purus convallis, pharetra neque non, suscipit lectus. Ut id posuere turpis. Aenean eget mauris venenatis, blandit risus vel, mattis diam.

              Quisque eros dolor, interdum in placerat a, pharetra vel sapien. Curabitur et urna dictum, tempor orci in, dictum lacus. Fusce hendrerit ullamcorper dignissim. Nam eget pellentesque tortor, eget aliquet dolor. In at ligula ac arcu maximus feugiat vitae tincidunt nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent euismod nisi eu lorem lacinia feugiat. Pellentesque eget fringilla tellus.
            </p>
          </section>
          <section className='certifications' id='certifications'>
            <h2>certifications</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur egestas vehicula. Maecenas eu enim vestibulum, consequat nisi in, pellentesque eros. Nulla auctor rutrum urna quis eleifend. Nam laoreet, libero eu aliquet aliquam, erat ante tempor ligula, vel pretium nisl urna accumsan orci. In est dui, semper nec viverra nec, pharetra quis risus. Sed sed tortor ultricies, tempor enim vitae, interdum lacus. Praesent feugiat gravida eros, malesuada fermentum ligula ultrices non. Donec tempor augue sed sem imperdiet gravida. Ut lobortis porttitor mauris vel vestibulum. Donec turpis sem, consequat eget dolor consequat, auctor feugiat nisl. Donec scelerisque elementum placerat. Aliquam dapibus sed mi eget feugiat. Vivamus lacinia elit vel diam rutrum vestibulum sit amet ac elit. Fusce dictum pharetra lectus in condimentum. Integer scelerisque arcu in euismod vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tempus, libero at fringilla rutrum, mi tortor pharetra urna, ac fermentum magna orci et risus. Curabitur porttitor sodales sapien at blandit. Suspendisse molestie arcu tellus, ac hendrerit nisl iaculis eget. Quisque imperdiet non nunc nec efficitur. Sed eget gravida mi, at egestas neque. Nunc tristique volutpat urna, a euismod leo pharetra sit amet. Nunc dictum eleifend ligula, vitae bibendum neque ultrices vel. Duis ullamcorper tellus in ex interdum, quis lacinia magna facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus risus, tincidunt sed felis vitae, posuere sollicitudin eros.

              Duis rhoncus blandit lorem eget porta. Nunc volutpat quam at dignissim interdum. Fusce arcu eros, tristique et elit non, pretium tincidunt nibh. Proin blandit porta enim, quis commodo elit dapibus sed. Nullam a porttitor quam, sed ultricies metus. Aenean mattis libero maximus, eleifend risus quis, vehicula urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut est velit, ornare a ipsum a, auctor mattis purus. Aliquam ultricies, justo eu dictum molestie, leo risus lobortis justo, at fermentum nisl orci id nulla. Cras accumsan efficitur consectetur. Donec odio nunc, commodo vitae commodo aliquet, placerat non velit.

              Nunc efficitur nisl vitae nibh faucibus, et sollicitudin diam sagittis. Aliquam erat volutpat. Donec neque nisi, congue ac enim quis, tincidunt interdum erat. Nulla ultrices vehicula elit quis suscipit. Nulla ex lectus, scelerisque nec hendrerit eu, finibus a mauris. Ut a dui diam. Vivamus fermentum auctor lectus nec efficitur. Vestibulum euismod arcu nec dolor bibendum, elementum lacinia odio posuere. Curabitur et purus convallis, pharetra neque non, suscipit lectus. Ut id posuere turpis. Aenean eget mauris venenatis, blandit risus vel, mattis diam.

              Quisque eros dolor, interdum in placerat a, pharetra vel sapien. Curabitur et urna dictum, tempor orci in, dictum lacus. Fusce hendrerit ullamcorper dignissim. Nam eget pellentesque tortor, eget aliquet dolor. In at ligula ac arcu maximus feugiat vitae tincidunt nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent euismod nisi eu lorem lacinia feugiat. Pellentesque eget fringilla tellus.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About