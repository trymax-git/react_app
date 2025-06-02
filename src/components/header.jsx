import { NavLink } from "react-router-dom";
import companyLogo from "../assets/logo.png"

function Header() {
    return (
        <header>
            <NavLink to={"/react_app"}><img src={companyLogo} alt="logo" /></NavLink>
            <div className="header__links-container">
                <NavLink to={"/react_app"}>Главная</NavLink>
                <NavLink to={"career"}>Карьера</NavLink>
                <NavLink to={"track"}>Трекматика</NavLink>
                <NavLink to={"contacts"}>Контакты</NavLink>
            </div>
        </header>
    )
}

export default Header;