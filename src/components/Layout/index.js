import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar';
import './index.scss';
import Gif from '../../assets/images/giphy.gif'

const Layout = () => {
    return (
    <div className='page'> 
        <SideBar/>
        <img src={Gif} className="code" alt="background" />
        <div className='page'>
            <span className='tags top-tags'>&lt;html&gt;
            <br/>
            <span>&nbsp;&lt;body&gt;</span>
            </span>
            

            <Outlet/>

            <span className='tags bottom-tags'>
                &lt;body&gt;
                <br/>
                <span className='bottom-tag-html'>&lt;/html&gt;    </span>
            </span>
        </div>
    </div>
    )
}

export default Layout;