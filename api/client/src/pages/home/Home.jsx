import './home.css';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import SideInfo from '../../components/sideInfo/SideInfo';
import { axiosInstance } from '../../config';

const Home = (props) => {
    const [ posts, setPosts ] = useState([]);
    const { user } = useContext(Context)
    const {search} = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.get("/posts" + search)
            setPosts(res.data)
            
        }
        fetchPosts()
    },[search])
    return (
        <>
        <Header />
        <div className='home'>
            <Posts posts={posts} />
            <div className="sidebar"> 
                {user ? (
                    <Sidebar />

                ) : (
                    <SideInfo />
                )}
            </div>
            
        </div>
        </>
    )
}

export default Home