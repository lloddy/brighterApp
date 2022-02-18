import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import './single.css'

const Single = (props) => {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar className="sidebar"/>
        </div>
    )
}

export default Single