// import companyLogo from "./assets/logo.png"
import call from "../assets/call.svg"
import add_location from "../assets/add_location.svg"
import mail from "../assets/mail.svg"
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <NavLink className="company__name-link">© 2025  “ОИК”</NavLink>

            <div className="footer__links-section">
                <div className="call__section-link">
                    <img src={call} alt="call" />
                    <NavLink>+7 (8352) 24-06-30</NavLink>
                </div>
            </div>

            <div className="footer__links-section">
                <div className="location__section--links">
                    <img src={add_location} alt="add_location" />
                    <div className="location__links-container">
                        <NavLink>Адрес: г. Чебоксары, пр-кт Мира, д. 1</NavLink>
                        <NavLink>Юридический адрес: 428024, г. Чебоксары, <br />
                            пр. Мира, д. 1, литер 7, этаж 2, помещ. 2
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="footer__links-section">
                <div className="mail__section-link">
                    <img src={mail} alt="mail" />
                    <NavLink href="#">info@iic21.ru</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;