import './index.scss';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/LogoS.png'
import LogoSub from '../../assets/images/logo_sub'

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src='{LogoS}' alt='logo'/>
            <img src='{LogoSub}' alt='sachindra'/>
        </Link>
    </div>
    )

export default SideBar;