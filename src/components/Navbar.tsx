import { slide as Menu } from 'react-burger-menu'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 767);
  const location = useLocation();
  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={isMobile ? 'container-mobile' : 'container-desktop'}>
      {isMobile ? (
        <Menu width={'90%'} isOpen={false}>
          <Link to="/" className={isLinkActive('/') ? 'active-link' : ''}>hello</Link>
          <Link to="/about" className={isLinkActive('/about') ? 'active-link' : ''}>about-me</Link>
          <Link to="/projects" className={isLinkActive('/projects') ? 'active-link' : ''}>projects</Link>
          <Link to="/contact" className={isLinkActive('/contact') ? 'active-link' : ''}>contact-me</Link>
        </Menu>
      ) : (
        <div className='desktop-menu'>
          <Link to="/" className={`link ${isLinkActive('/') ? 'active-link' : ''}`}>hello</Link>
          <Link to="/about" className={`link ${isLinkActive('/about') ? 'active-link' : ''}`}>about-me</Link>
          <Link to="/projects" className={`link ${isLinkActive('/projects') ? 'active-link' : ''}`}>projects</Link>
          <Link to="/contact" className={`link ${isLinkActive('/contact') ? 'active-link' : ''}`}>contact-me</Link>

        </div>
      )}
      <div className='container-title-nav'>
        <span className='title-nav'>andre-navas</span>
      </div>
    </div>
  );
};

export default Navbar;