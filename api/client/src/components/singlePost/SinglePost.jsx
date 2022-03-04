import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './singlePost.css'
import { Context } from '../../context/Context';
import { axiosInstance } from '../../config';

const SinglePost = (props) => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [ post, setPost ] = useState({})
    const { user } = useContext(Context);
    const [ title, setTitle ] = useState("")
    const [ comments, setComments ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ updateMode, setUpdateMode ] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axiosInstance.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setComments(res.data.comments)
        }
        getPost()
    },[path])

    const handleDelete = async() => {
        try {
            await axiosInstance.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            })
            window.location.replace("/") 
        } catch (err) {}
    }

    const handleUpdate = async () => {
        try {
            await axiosInstance.put(`/posts/${post._id}`, {
                username: user.username, 
                title, 
                desc,
            })
            setUpdateMode(false)
        } catch (err) {}
    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            username:user.username,
            comments
        }
        try {
            const res = await axiosInstance.put(`/posts/${post._id}`, newComment)
        } catch (error) {
            
        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img 
                        src={post.photo}
                        alt="postimage" 
                        className="singlePostImage" 
                    />
                )}
                {updateMode ? (
                    <input 
                        type="text" 
                        value={title} 
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    ) : (
                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fas fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )}
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: 
                        <Link to={`/?user=${post.username}`} className='link'>
                            <b> {post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>

                {updateMode ? (
                    <textarea 
                        className='singlePostDescInput' 
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                ) : (
                    <p className='singlePostDesc'>{desc}</p>
                )}
                {updateMode && 
                    <button className="singlePostButton" onClick={handleUpdate}>Update</button>    
                }
            </div>
            <div className="commentWrapper">
                <textarea className='commentInput'></textarea>
                <button onClick={handleCommentSubmit}>Comment</button>
            </div>
            <div className="comments">
                <h3>Comments</h3>
                <ul>{post.comments}</ul> 
            </div>
        </div>
    )
}

export default SinglePost