import './post.css';

const Post = (props) => {
    return (
        <div className='post'>
            <img 
            src="https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
            alt="postImage" 
            className="postImage" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quia obcaecati magnam alias eaque itaque temporibus soluta culpa porro ipsam. Repellat ducimus nam dolorem doloribus explicabo. 
                Reprehenderit rem esse et quo?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quia obcaecati magnam alias eaque itaque temporibus soluta culpa porro ipsam. Repellat ducimus nam dolorem doloribus explicabo. 
                Reprehenderit rem esse et quo?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quia obcaecati magnam alias eaque itaque temporibus soluta culpa porro ipsam. Repellat ducimus nam dolorem doloribus explicabo. 
                Reprehenderit rem esse et quo?
                </p>    
        </div>
    )
}

export default Post