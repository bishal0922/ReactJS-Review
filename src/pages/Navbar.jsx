import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className='navbar-home'>Home</a>
            <ul>
                <li><a href="/UseStateButton">UseStateButton</a></li>
                <li><a href="/UseStateText">UseStateText</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;