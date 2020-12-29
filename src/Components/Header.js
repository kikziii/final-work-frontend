import MainMenu from './MainMenu'
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <header className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <NavLink className="logo-link" to="/"><img src={logo} id="logo" alt="Logo"/>Fungilitious</NavLink> 
                    </div>
                    <div className="col-8 align-self-center">
                    <MainMenu/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;