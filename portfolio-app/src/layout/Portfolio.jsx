import React, {useState} from 'react'
import 'animate.css/animate.css'
import Card from '../components/Card';
import BayshoreScreenshot from '../assets/images/bayshore_screenshot.png'
import PlymouthScreenshot from '../assets/images/plymouth_screenshot.png'
import GithubFinder from '../assets/images/finder_screenshot.png';
import ReactLogo from '../assets/images/react-logo.png'
import FireBase from '../assets/images/firebase.png'
import NodeLogo from '../assets/images/node-icon.png'
import ExpressLogo from '../assets/images/express-logo.png'
import MaterializeLogo from '../assets/images/materialize-logo.png'
import JavascriptLogo from '../assets/images/javascript-logo.png'
import ApiLogo from '../assets/images/api-logo.png'
import NetlifyLogo from '../assets/images/netlify-logo.png'
import EMCScreenshot from '../assets/images/emc_screenshot.png'
import BootstrapLogo from '../assets/images/bootstrap-logo.png'

const Portfolio = () => {
 const [work, setWork] = useState([
  {
    id: '1',
    image: BayshoreScreenshot,
    title: 'Xpress Sports Training',
    description: `Xpress Sports Training trains athletes from all ages including professional athletes from the three major sports. Xpress needed a modern website that showcases
    what seperates them from their competition.`,
    link: '',
    iconOne: NodeLogo,
    iconTwo: JavascriptLogo,
    iconThree: MaterializeLogo
  },
  {
    id: '2',
    image: BayshoreScreenshot,
    title: 'Bayshore RV Sales',
    description: `Modern website that imporved Bayshore's user satisfaction.`,
    link: 'https://bayshorervsales.com/',
    iconOne: NodeLogo,
    iconTwo: ExpressLogo,
    iconThree: MaterializeLogo
  },
  {
    id: '3',
    image: PlymouthScreenshot,
    title: 'Plymouth Shore on the Bay',
    description: `Modern website that imporved Bayshore's user satisfaction.`,
    link: 'https://plymouthshoreonthebay.com/',
    iconOne: ReactLogo,
    iconTwo: FireBase,
    iconThree: NodeLogo
  },
  {
    id: '4',
    image: GithubFinder,
    title: 'Github Finder',
    description: `React application that utilizes the Github API.`,
    link: 'https://wonderful-swirles-9a3aa2.netlify.app/',
    iconOne: ReactLogo,
    iconTwo: ApiLogo,
    iconThree: NetlifyLogo
  },
  {
    id: '5',
    image: EMCScreenshot,
    title: 'Plymouth Shore on the Bay',
    description: 'EMC went from a Google Ad to a beautiful and simple design that shows what they offer.',
    link: 'https://wonderful-swirles-9a3aa2.netlify.app/',
    iconOne: ReactLogo,
    iconTwo: BootstrapLogo,
    iconThree: NodeLogo
  },
])


  return (
    <div className='container' data-aos="fade-up">
      <h3 className='large-header center-text h4-header mb-4'>My Work</h3>
      <div className='portfolio-section'>
        {work.map((site) => (
          <Card key={site.id} site={site} />
        ))}
      </div>
    </div>
    
  )
}

export default Portfolio