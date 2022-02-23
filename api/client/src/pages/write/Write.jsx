import { useContext, useState } from 'react';
import './write.css';
import { Context } from '../../context/Context'
import { axiosInstance } from '../../config';

const Write = (props) => {
    const [ title, setTitle] = useState("")
    const [ desc, setDesc ] = useState("")
    const {user} = useContext(Context)
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState()


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

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource)
        const newPost = {
            username:user.username,
            title,
            desc, 
            photo:previewSource
        };
        try {
            const res = await axiosInstance.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id) 
        } catch (err) {}
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
        <div className="write">
            <form onSubmit={handleSubmitFile}>
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input 
                    id="fileInput"
                    type="file"  
                    name="image" 
                    style={({display:"none"})} 
                    onChange={handleFileInputChange} 
                    value={fileInputState} className="form-input" 
                />
                <div className="writeFormGroup">
                    <input type="text" 
                        placeholder='Title' 
                        className='writeInput' 
                        autoFocus={true} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder='Tell your story...' 
                        type="text" 
                        className='writeInput writeText'
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">Post</button>
            </form>
            {previewSource && (
                <img src={previewSource} alt="chosen" 
                style={{height: '300px'}}/>
            )}
        </div>
    )
}

export default Write