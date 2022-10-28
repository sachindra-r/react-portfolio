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

            <span className='tags bottom-tags'>
                &lt;body&gt;
                <br/>
                <span className='bottom-tag-html'>&lt;/hmtl</span>
            </span>
        </div>
    </div>
    )
}

export default Layout;