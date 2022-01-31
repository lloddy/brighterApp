import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='navBar'>
            <div className="navLeft">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-pinterest-square"></i>
                <i class="fab fa-pinterest-square"></i>
            </div>
            
            <div className="navCenter">C</div>
            <div className="navRight">R</div>
        </div>
    )
}

export default NavBar