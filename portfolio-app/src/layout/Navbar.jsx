import '../assets/styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

const Navbar = () => {
const showMenu = () => {
  const menu = document.querySelector('.mobile-nav');
  menu.classList.toggle('show');
}

  return (
    <>
     <div className="mobile-nav show">
      <div className="top-nav-section">
        <div className="logo">Frankie Adams</div>
        <FontAwesomeIcon icon={faBars} className='mobile-bars' id="bars" onClick={showMenu}/>
        </div>
        <div className="mobile-list">
          <ul>
            <a href=""><li>About Me</li></a>
            <a href=""><li>My Work</li></a>
            <a href=""><li>Contact Me</li></a>
            <a href='../frankie-adams-dev.pdf' target="_blank"><li>Resume</li></a>
          </ul>
        </div>
      </div>
      <div className='navbar'>
        <div className="logo">Frankie Adams</div>
        <FontAwesomeIcon icon={faBars} className='bars' onClick={showMenu}/>
        <div className="nav-list">     
          <ul>
          <a href=""><li>About Me</li></a>
            <a href=""><li>My Work</li></a>
            <a href=""><li>Contact Me</li></a>
            <a href="../frankie-adams-dev.pdf" target="_blank" className='resume'><li>Resume</li></a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
