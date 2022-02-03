import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css';

const Settings = (props) => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update your account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete your account
                    </span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/10530054/pexels-photo-10530054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Name'/>
                    <label>Email</label>
                    <input type="email" placeholder='name@gmail.com'/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings