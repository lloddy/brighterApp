import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css';
import { Context } from '../../context/Context'
import { axiosInstance } from '../../config';

const Settings = (props) => {
    const [ file, setFile ] = useState(null)
    const [ username, setUserename ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ success, setSuccess ] = useState(false)
    const [ bio, setBio ] = useState("")
    const { user, dispatch } = useContext(Context)

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({ type:"UPDATE_START" })
        const updatedUser = {
            userId:user._id,
            username, 
            email,
            password,
            bio,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
            try {
                await axiosInstance.post("/upload", data);
            } catch(err) {}
        }
        try {
            const res = await axiosInstance.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type:"UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({type:"UPDATE_FAILURE"})
        }
    }

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
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src={
                            file ?
                            URL.createObjectURL(file) :
                            user.profilePic
                        } 
                        alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input 
                            type="file" 
                            id="fileInput" 
                            style={({display:"none"})} 
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder={user.username} 
                        onChange={(e) => setUserename(e.target.value)}
                    />
                    <label>Email</label> 
                    <input 
                        type="email" 
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}/>
                    <label>Tell us about yourself...</label>
                    <textarea 
                        name="bio" 
                        cols="30" 
                        rows="10"
                        placeholder={user.bio}
                        onChange={(e) => setBio(e.target.value)}>
                    </textarea>
                    <button 
                        className="settingsSubmit" 
                        type="submit">
                        Update
                    </button>
                    {success &&
                        <span style={{color:"green", 
                        textAlign:"center", 
                        marginTop:"20px"}}>
                            Your profile has been updated.
                        </span>
                    }
                </form>
            </div>
            <div className='sidebar'>
                <Sidebar />
            </div>
        </div>
    )
}

export default Settings