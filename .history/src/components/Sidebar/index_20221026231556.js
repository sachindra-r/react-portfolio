import 'index.scss';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/LogoS'
import LogoS from '../../assets/images/LogoS'

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src='{LogoS}'/>
        </Link>
    </div>
    )

export default SideBar;