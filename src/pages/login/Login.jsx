import './login.css';

const Login = (props) => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className='loginInput' placeholder='Enter your email'/>
                <label>Password</label>
                <input type="password" className='loginInput' placeholder='Enter your password'/>
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Create an Account</button>
            </form>
        </div>
    )
}

export default Login