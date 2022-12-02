import '../assets/styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import Logo from '../assets/images/logo.png';

const Navbar = () => {
const showMenu = () => {
  const menu = document.querySelector('.mobile-nav');
  menu.classList.toggle('show');

  if(menu.classList.contains('show')){
    const mainBars = document.getElementById('main-bars');
    mainBars.classList.add('hide');
  }
}

  return (
    <>
     <div className="mobile-nav">
      <div className="top-nav-section">
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
        <div>
          <img src={Logo} alt='logo' className='logo-img'/>
        </div>
      </div>
      <div className='navbar'>
      <div className="logo"><a href="/"><img src={Logo} alt='logo' className='logo-img'/></a></div>
        <FontAwesomeIcon icon={faBars} className='bars' id="main-bars" onClick={showMenu}/>
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
