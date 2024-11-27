import './header.css'
import logo from './assets/logo.png'
function Header() {
    return (
        <header>
            <div className='logo'>
                <a href='/#'><img src={logo} alt='logo'/></a>
            </div>
            <nav className='nav-menu'>
                <ul>
                    <li><a href='/#'>Home</a></li>
                    <li><a href='/#destinations'>Destinations</a></li>
                    <li><a href='/#hotels'>Hotels</a></li>
                    <li><a href='/#activites'>Activities</a></li>
                    <li><a href='/map'>Map</a></li>
                    <li><a href='/bookings'>Bookings</a></li>
                    <li><a href='/dashboard'>Dashboard</a></li>
                    <li><a href='/profile'>Profile</a></li>
                    <li><a href='/#about'>About</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header