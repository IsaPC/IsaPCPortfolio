import React, {useState} from 'react'
import {Link} from 'gatsby'
import '../index.css';

// import stupidSHIT from '../media/images/logo.svg'

// TODO: migrate to graphql query
import WHYDOINEEDTOIMPORT from '../images/hamburger.svg'
import gitHubLogo from '../images/GitHub-Mark.svg'
import linkedIn from '../images/linkedin.svg'

//TODO: convert to css components or other option

const Navbar = () => {

    const [navLinkOpen, SetLinkOpen] = useState(false);

    const renderClasses = () => {
        let classes = "nav_links active";

        if (!navLinkOpen) {
            classes = "nav_links active";
        } else {
            classes = "nav_links";
        }

        return classes;
    }

    const handleNavLinksToggle = () => {
        SetLinkOpen(!navLinkOpen)
    }

    const routeToGithub = () => {
        window.location.href = "https://github.com/IsaPC";
    }
    const routeToLinkedIn = () => {
        window.location.href = "https://www.linkedin.com/in/isaac-ceff-0663b797/"
    }


    return ( 
        <nav>
            {/* <img className="logo" src={stupidSHIT} alt="" /> */}
            <div className="logo">
                <Link to="/">
                    <h1>IsaacCeff</h1>
                </Link>
            </div>

            
            <ul className={renderClasses()}>
                <li className="link">   <Link to="/">           Home       </Link>  </li>
                <li className="link">   <Link to="/portfolio/">  Portfolio  </Link>  </li>
                <li className="link">   <Link to="/contact/">    Contact    </Link>  </li>
            </ul>
        

            <div onClick={handleNavLinksToggle} role="button" tabIndex={0} onKeyDown={handleNavLinksToggle}>
                <img  src={WHYDOINEEDTOIMPORT} alt="" className="hamburger" /*onClick={() => {console.log("hello")}}*/  />
            </div>
            {/* <img src={gitHubLogo} alt="" className="github_logo" onClick={routeToGithub} onKeyDown={routeToGithub} />  */}
            
            {/* instead of list, i could use flex instead */}
            <ul className="nav_externals">
                <li className="link_external" >    <div onClick={routeToGithub} role="button" tabIndex={-1} onKeyDown={routeToGithub}>
                    <img src={gitHubLogo} alt="" className="github_logo" />
                </div>  </li>

                <li className="link_external">    <div onClick={routeToLinkedIn} role="button" tabIndex={-2} onKeyDown={routeToLinkedIn}>
                    <img src={linkedIn} alt="" className="linkedin_logo" />
                </div></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
