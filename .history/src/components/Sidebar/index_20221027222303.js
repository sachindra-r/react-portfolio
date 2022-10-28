import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/Sachindra.png'

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSub} alt='sachindra'/>
        </Link>
        <nav>
            <NavLink>
                <Fon
            </NavLink>
        </nav>
    </div>
    )

export default SideBar;