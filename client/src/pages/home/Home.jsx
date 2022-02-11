import './home.css';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import SideInfo from '../../components/sideInfo/SideInfo';

const Home = (props) => {
    const [ posts, setPosts ] = useState([]);
    const { user } = useContext(Context)
    const {search} = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
            
        }
        fetchPosts()
    },[search])
    return (
        <>
        <Header />
        <div className='home'>
            <Posts posts={posts} />
            <div> 
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