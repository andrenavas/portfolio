import { slide as Menu } from 'react-burger-menu';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='container-nav'>
      <Menu width={'90%'} isOpen={false}>
        <Link to="/">hello</Link>
        <Link to="/about">about-me</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact-me</Link>
      </Menu>
      <div className='container-title-nav'>
        <span className='title-nav'>andre-navas</span>
      </div>
    </div>
  );
};

export default Navbar;