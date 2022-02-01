import './register.css';

const Register = (props) => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className='registerInput' placeholder='Enter your username'/>
                <label>Email</label>
                <input type="text" className='registerInput' placeholder='Enter your mail'/>
                <label>Password</label>
                <input type="password" className='registerInput' placeholder='Enter your password'/>
                <button className="registerButton">Register</button>
                <button className="registerLoginButton">Login</button>
            </form>
        </div>
    )
}

export default Register