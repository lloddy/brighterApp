import './login.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Login = (props) => {
    const userRef = useRef()
    const passwordRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    className='loginInput' 
                    placeholder='Enter your Username' 
                    ref={userRef}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className='loginInput' 
                    placeholder='Enter your password'
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit">Login</button>
            </form>
                <button className="loginRegisterButton">
                    <Link to='/register' className='link'>Create an Account</Link> 
                </button>
        </div>
    )
}

export default Login