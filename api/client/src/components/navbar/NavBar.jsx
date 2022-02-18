import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const NavBar = (props) => {
    const { user, dispatch } = useContext(Context)

    const PF = "https://abrighterday.herokuapp.com/images/"
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
                    <li key="navHome" className="navListItem">
                        <Link className='link' to="/">HOME</Link>    
                    </li>                
                    <li key="navAbout" className="navListItem">
                        <Link className='link' to="/about">ABOUT</Link>    
                    </li>   
                    <li key="navPost" className="navListItem">
                        <Link className='link' to="/write">POST</Link>    
                    </li>                          
                    <li key="navResources" className="navListItem">
                        <Link className='link' to="/resources">RESOURCES</Link>    
                    </li>
                    <li key="navLogout" className="navListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li> 
                </ul>
            </div>
            <div className="navRight">
                {user ? (
                    <Link to="/settings">
                        <img 
                        className='navImage'
                        src={PF + user.profilePic}
                        alt="" 
                        />
                    </Link>
                ) : (
                    <ul className='navList'>
                        <li key="navLogin" className='navListItem'>
                            <Link className='link' to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li key="navReg" className='navListItem'>
                            <Link className='link' to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                {/* <i className="navSearchIcon fas fa-search"></i> */}
            </div>
        </div>
    )
}

export default NavBar