import React, {useState} from 'react'
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
import CommercejsLogo from '../assets/images/commerce-logo.jpg'
import StripeLogo from '../assets/images/stripe-logo.svg'
import XpressScreenshot from '../assets/images/xpress_screenshot.jpg'
import HulloutScreenshot from '../assets/images/hullout_screenshot.jpg'

const Portfolio = () => {
 const [work, setWork] = useState([
  {
    id: '1',
    image: XpressScreenshot,
    title: 'Xpress Sports Training',
    description: `Simple informative website that uses Materialize css and Node.js on the backend.`,
    link: 'https://catchthex.com',
    iconOne: NodeLogo,
    iconTwo: JavascriptLogo,
    iconThree: MaterializeLogo
  },
  {
    id: '2',
    image: BayshoreScreenshot,
    title: 'Bayshore RV Sales',
    description: `Simple website using Express.js and Materialize css along with Node.js on the backend.`,
    link: 'https://bayshorervsales.com/',
    iconOne: NodeLogo,
    iconTwo: ExpressLogo,
    iconThree: MaterializeLogo
  },
  {
    id: '3',
    image: PlymouthScreenshot,
    title: 'Plymouth Shore on the Bay',
    description: `Website that uses React and Firebase for user authentication. `,
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
    title: 'EMC I.T. Solutions',
    description: 'React application that uses Bootstrap css and Node.js on the backend.',
    link: 'https://wonderful-swirles-9a3aa2.netlify.app/',
    iconOne: ReactLogo,
    iconTwo: BootstrapLogo,
    iconThree: NodeLogo
  },
  {
    id: '6',
    image: HulloutScreenshot,
    title: 'Hullout',
    description: 'E-commerce web app that utilizes Commerce.js and Stripe.',
    link: 'https://adams05.github.io/hullout-ecommerce/',
    iconOne: ReactLogo,
    iconTwo: CommercejsLogo,
    iconThree: StripeLogo
  },
])


  return (
    <div className='container' data-aos="fade-up">
      <h3 className='large-header center-text h4-header mb-4'>Some of My Work</h3>
      <div className='portfolio-section'>
        {work.map((site) => (
          <Card key={site.id} site={site} />
        ))}
      </div>
    </div>
    
  )
}

export default Portfolio