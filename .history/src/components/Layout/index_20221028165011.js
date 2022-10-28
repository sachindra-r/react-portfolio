import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
    <div className='page'> 
        <SideBar/>
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet/>

            <span className=''></span>
        </div>
    </div>
    )
}

export default Layout;