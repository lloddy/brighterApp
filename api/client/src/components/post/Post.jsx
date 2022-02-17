import './post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const PF = "https://abrighterday.herokuapp.com/images/"
    return (
        <div className='post'>
            {post.photo && 
                <img 
                    src={PF + post.photo}
                    alt="postImage" 
                    className="postImage" 
                />
            }

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span key={c.id}className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <span className="postTitle">
                        {post.title}
                    </span> 
                </Link>
               
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>
                {post.desc}
                </p>    
        </div>
    )
}

export default Post