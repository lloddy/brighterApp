import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css';

const Sidebar = (props) => {
    const [ cats, setCats ] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src="data:image/png;base64,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" 
                alt="pic" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non dolor alias, necessitatibus aperiam architecto distinctio nostrum voluptates laudantium officia veniam ipsam eveniet deserunt assumenda voluptas. 
                    Amet sunt eius incidunt quae?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=> (
                        <li className="sidebarListItem">{c.name}</li>   
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcons fab fa-facebook-square"></i>
                    <i className="sidebarIcons fab fa-twitter-square"></i>
                    <i className="sidebarIcons fab fa-pinterest-square"></i>
                    <i className="sidebarIcons fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar