import './App.css';
import {FaGithub} from "react-icons/fa";
import{FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai';
import { IconContext } from 'react-icons';


function App() {
  return (
    <>
    <IconContext.Provider value = {{size: '2.5rem'}}>
      <div className="home-container">
        <div className="header">
          {/* insert links for multi-page here */}
          <ul className="header-list">
            <li>Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="about-container">
          <div className="about-name">
            <h1>Hello, I'm Joshua Vedane</h1>
          </div>
          <div className="about-description">
            <h3>Full Stack Software Developer in Saint Paul, Minnesota looking for coding problems to solve </h3>
          </div>
          <div className="about-icons">
            <ul className="about-icons-list">
              <li><a href="https://github.com/Joshua-Vedane" target="_blank"><FaGithub/></a></li>
              <li><a href="https://www.linkedin.com/in/joshua-vedane/" target="_blank"><FaLinkedin/></a></li>
              <li><a href={"malito:jvedane@gmail.com"} className="mail" target="_blank"><AiOutlineMail/></a></li>
              {/* a href="mailto:Jakestucky@gmail.com" class="mail" target="_blank"><i class="material-icons">email</i></i></a> <br/> */}
            </ul>
          </div>
        </div>

      </div>
      </IconContext.Provider> 
    </>
  );
}

export default App;
