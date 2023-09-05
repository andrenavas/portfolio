import './Contact.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className='contact-view' >
      <header className='about-header'>
        <Navbar />
        <div className='container-title-about'>
          <span className='title-about'>contact-me</span>
        </div>
      </header>

      <main>
        <span>Developer working...</span>
      </main>
      <Footer />
    </div>
  )
}

export default Contact;