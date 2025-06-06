import { NavLink } from "react-router-dom";
import companyLogo from "../assets/logo.svg"

function Header() {
    return (
        <header>
            <NavLink className={"company__logo-link"} to={"/react_app"}><img src={companyLogo} alt="logo" /></NavLink>
            <div className="header__links-container">
                <NavLink to={"/react_app"}>Главная</NavLink>
                <NavLink to={"/react_app/contacts"}>Контакты</NavLink>
                <NavLink to={"/react_app/career"}>Карьера</NavLink>
                <NavLink to={"/react_app/track"}>Трекматика</NavLink>
            </div>
        </header>
    )
}

export default Header;