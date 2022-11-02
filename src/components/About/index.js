import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Node from '../../assets/images/nnodejs.svg'
import React from '../../assets/images/react.svg'
import Angular from '../../assets/images/angularjs.svg'
import Git from '../../assets/images/git.svg'
import Html5 from '../../assets/images/html-5.svg'
import Mysql from '../../assets/images/mysql.svg'
import Bash from '../../assets/images/bash.svg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious fullstack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my skills and at simultaneously doing some amazing work as well.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <div className='text-zone tech-stack'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'e', 'c', 'h', ' ', 'S', 't', 'a', 'c', 'k', '.']}
              idx={19}
            />
          </h1>
          <div className="tech-stack-icons">
            <div className="icon">
              <img className="icon-img" src={Node} alt="node" />
              <h6 className="icon-label">NodeJS</h6>
            </div>
            <div className="icon">
              <img className="icon-img" src={React} alt="react" />
              <h6 className="icon-label">React</h6>
            </div>
            <div className="icon">
              <img className="icon-img" src={Html5} alt="html" />
              <h6 className="icon-label">HTML</h6>
            </div>
            <div className="icon">
              <img className="icon-img" src={Git} alt="git" />
              <h6 className="icon-label">Git</h6>
            </div>
            <div className="icon">
              <img className="icon-img" src={Angular} alt="angular" />
              <h6 className="icon-label">AngularJS</h6>
            </div>
            <div className="icon">
              <img className="icon-img" src={Bash} alt="bash" />
              <h6 className="icon-label">Bash</h6>
            </div>
            <div className="icon">
              <img className="icon-img" src={Mysql} alt="mysql" />
              <h6 className="icon-label">MySQL</h6>
            </div>

          </div>

        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
