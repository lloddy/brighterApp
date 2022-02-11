import { useContext } from 'react';
import { Context } from '../../context/Context';
import './header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>A Safe Place to</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img 
            src="https://t4.ftcdn.net/jpg/02/85/09/41/360_F_285094193_qTNSorPCjd7F8roAoEwaV1ox3cCjeY6L.jpg" 
            alt="blogPic" 
            className="headerImage" />
        </div>
    )
}

export default Header