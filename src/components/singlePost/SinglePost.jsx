import './singlePost.css'

const SinglePost = (props) => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    src="https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
                    alt="postimage" 
                    className="singlePostImage" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Lloyd</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                    <p className='singlePostDesc'>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Aliquam ex sunt eveniet id distinctio 
                        numquam, praesentium dolores cumque omnis 
                        corporis iste commodi deserunt nulla est 
                        harum ratione incidunt dolor! Sunt?
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Aliquam ex sunt eveniet id distinctio 
                        numquam, praesentium dolores cumque omnis 
                        corporis iste commodi deserunt nulla est 
                        harum ratione incidunt dolor! Sunt?
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Aliquam ex sunt eveniet id distinctio 
                        numquam, praesentium dolores cumque omnis 
                        corporis iste commodi deserunt nulla est 
                        harum ratione incidunt dolor! Sunt?</p>
                
            </div>
        </div>
    )
}

export default SinglePost