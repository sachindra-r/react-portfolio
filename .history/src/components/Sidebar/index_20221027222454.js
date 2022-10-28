import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/Sachindra.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSub} alt='sachindra'/>
        </Link>
        <nav>
            <NavLink exact="true">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
    )

export default SideBar;