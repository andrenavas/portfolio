import './Sidebar.css'
import { useState } from 'react';
import vector from '../assets/img/vector.png';
const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="about-me-content">
      <div className="vertical-menu">
        <ul className='container-list'>
          <li onClick={toggleSubMenu}>
            <a href='#professional-info'>
              <img className='vector-img' src={vector} alt='vector' />
              professional-info
            </a>
          </li>
          {showSubMenu && (
            <ul>
              <li><a href='#bio'>bio</a></li>
              <li><a href='#education'>education</a></li>
              <li><a href='#technologies'>technologies</a></li>
              <li><a href='#certifications'>certifications</a></li>
              <li><a href='#resume'>resume</a></li>
            </ul>
          )}
          {/* <li><a href='#hobbies'>
            <img className='vector-img' src={vector} alt='vector' />
            hobbies
          </a></li> */}
          <li> <a href='#contacts'>
            <img className='vector-img' src={vector} alt='vector' />
            contacts
          </a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;