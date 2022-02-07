import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const NavBar = (props) => {
    const { user, dispatch} = useContext(Context)

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className='navBar'>
            <div className="navLeft">
                <i className="navIcons fab fa-facebook-square"></i>
                <i className="navIcons fab fa-twitter-square"></i>
                <i className="navIcons fab fa-pinterest-square"></i>
                <i className="navIcons fab fa-instagram-square"></i>
            </div>
            
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">
                        <Link className='link' to="/">HOME</Link>    
                    </li>                
                    <li className="navListItem">
                        <Link className='link' to="/">CONTACT</Link>    
                    </li>
                    <li className="navListItem">
                        <Link className='link' to="/">ABOUT</Link>    
                    </li>   
                    <li className="navListItem">
                        <Link className='link' to="/write">POST</Link>    
                    </li>                          
                    <li className="navListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li> 
                </ul>
            </div>
            <div className="navRight">
                {user ? (
                    <img 
                    className='navImage'
                    src={user.profilePic}
                    alt="" 
                    />
                ) : (
                    <ul className='navList'>
                        <li className='navListItem'>
                            <Link className='link' to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className='navListItem'>
                            <Link className='link' to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="navSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default NavBar