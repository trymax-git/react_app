import { NavLink } from "react-router-dom";

function Career() {
    return (
        <div className="career__content--container">
            <h3>Карьера</h3>
            <NavLink to={"/react_app/engineer"}> <p>– Ведущий инженер в отдел технической поддержки СВТ</p> </NavLink>
        </div>
    )
}

export default Career;