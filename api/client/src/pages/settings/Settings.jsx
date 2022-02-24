import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css';
import { Context } from '../../context/Context'
import { axiosInstance } from '../../config';

const Settings = (props) => {
    const [ username, setUserename ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ success, setSuccess ] = useState(false)
    const [ bio, setBio ] = useState("")
    const { user, dispatch } = useContext(Context)
    const [ previewSource, setPreviewSource ] = useState()
    const [ fileInputState, setFileInputState ] = useState('')

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource)
        dispatch({ type:"UPDATE_START" })
        const updatedUser = {
            userId:user._id,
            username, 
            email,
            password,
            bio,
            profilePic:previewSource
        };

        try {
            const res = await axiosInstance.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type:"UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({type:"UPDATE_FAILURE"})
        }
    }

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST', 
                body: JSON.stringify({data: base64EncodedImage}),
                headers: {'Content-Type': 'application/json'}
            })
        } catch (error) {
            console.log(error)
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
                        {previewSource && (
                            <img 
                                src={previewSource} 
                                alt="chosen" 
                                className="settingsPP"
                                id="previewImage"
                            />
                        )}  

                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input 
                            id="fileInput"
                            type="file"  
                            name="image" 
                            style={({display:"none"})} 
                            onChange={handleFileInputChange} 
                            value={fileInputState} className="form-input" 
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