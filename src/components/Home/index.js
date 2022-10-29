import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'c', 'h', 'i', 'n', 'd', 'r', 'a'];
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>    
                <span className={`${letterClass} _12`}>i,</span>    
                 <br/>
                <span className={`${letterClass} _13`}>I</span>    
                <span className={`${letterClass} _14`}>'m</span>    

                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={23} />
                </h1>
                <h2>Frontend / Backend Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>

        </div>
    )
};

export default Home