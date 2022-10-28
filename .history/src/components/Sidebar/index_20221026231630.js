import 'index.scss';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/LogoS'
import LogoSub from '../../assets/images/logo_sub'

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src='{LogoS}' alr/>
        </Link>
    </div>
    )

export default SideBar;