import { useContext, useEffect, useReducer, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context'
import { axiosInstance } from '../../config';

const Sidebar = (props) => {
    const [ cats, setCats ] = useState([]);
    const { user } = useContext(Context)

    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])
    
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                    <img 
                    className='sidebarProfilePic'
                    src={user.profilePic}
                    alt="pic" />
                <p>{user.bio}</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=> (
                        <Link key={c._id} to={`/?cat${c.name}`} className='link'>
                            <li  className="sidebarListItem">{c.name}</li>   
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcons fab fa-facebook-square"></i>
                    <i className="sidebarIcons fab fa-twitter-square"></i>
                    <i className="sidebarIcons fab fa-pinterest-square"></i>
                    <i className="sidebarIcons fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar