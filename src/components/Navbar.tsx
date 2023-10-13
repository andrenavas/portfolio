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
          <Link to='/' className={isLinkActive('/') ? 'active-link' : ''}>hello</Link>
          <Link to='/about' className={isLinkActive('/about') ? 'active-link' : ''}>about-me</Link>
          <Link to='/projects' className={isLinkActive('/projects') ? 'active-link' : ''}>projects</Link>
          <Link to='/contact' className={isLinkActive('/contact') ? 'active-link' : ''}>contact-me</Link>
        </Menu>
      ) : (
        <div className='desktop-menu'>
          <Link to='/' className={`link ${isLinkActive('/') ? 'active-link' : ''}`}>hello</Link>
          <Link to='/about' className={`link ${isLinkActive('/about') ? 'active-link' : ''}`}>about-me</Link>
          <Link to='/projects' className={`link ${isLinkActive('/projects') ? 'active-link' : ''}`}>projects</Link>
          <Link to='/contact' className={`link ${isLinkActive('/contact') ? 'active-link' : ''}`}>contact-me</Link>

        </div>
      )}
      <div className='container-logo-nav'>
        <img className='nav-img-logo' src='https://firebasestorage.googleapis.com/v0/b/portfolio-fa111.appspot.com/o/images%2Flogo-andre-navas.png?alt=media&token=3c70f877-581e-44e9-ac45-d07b2a0c5ebf&_gl=1*48flyh*_ga*MjE3MzcyMTAzLjE2ODAzNTU2MDA.*_ga_CW55HF8NVT*MTY5NzIyMTEzMC43MC4xLjE2OTcyMjE5NzMuMzcuMC4w' alt='logo andre navas' />
        {/* <span className='title-nav'>andre-navas</span> */}
      </div>
    </div>
  );
};

export default Navbar;