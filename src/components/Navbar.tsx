import { slide as Menu } from 'react-burger-menu';
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <div className='container-nav'>
      <Menu width={'85%'} isOpen={false}>
        <a id="hello" className="menu-item" href="/">
          hello
        </a>
        <a id="about" className="menu-item" href="/about">
          about-me
        </a>
        <a id="projects" className="menu-item" href="/projects">
          projects
        </a>
        <a id="contact" className="menu-item" href="/contact">
          contact-me
        </a>
      </Menu>
      <div className='container-title-nav'>
        <span className='title-nav'>andre-navas</span>
      </div>
    </div>
  );
};

export default Navbar;