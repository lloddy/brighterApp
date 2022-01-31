import './post.css';

const Post = (props) => {
    return (
        <div className='post'>
            <img 
            src="" 
            alt="postImage" 
            className="postImage" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
            </div>    
        </div>
    )
}

export default Post