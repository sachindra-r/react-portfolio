import 'index.scss';
import { Link } from 'react-router-dom';

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img></img>
        </Link>
    </div>
    )

export default SideBar;