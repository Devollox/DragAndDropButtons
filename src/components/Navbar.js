import '../style/Navbar.css'
export default function Navbar() {
    return (
        <nav className='navigation' role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="https://devollox.fun/"><li>Home</li></a>
                    <a href="https://github.com/Devollox"><li>GitHub</li></a>
                    <a href="https://steamcommunity.com/id/Cookiemp4/"><li>Steam</li></a>
                </ul>
            </div>
        </nav>
    )
}