import { NavLink } from 'react-router-dom';



function MainMenu() {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact activeClassName="selected">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/articles" activeClassName="selected">Articles</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/chat" activeClassName="selected">Chat</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register" activeClassName="selected">Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us" activeClassName="selected">About us</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MainMenu;
