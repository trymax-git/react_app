import { NavLink } from "react-router-dom";
import thanksfirst from "../assets/thanksfirst.png";
import thankssecond from "../assets/thankssecond.png";

function Thanks() {
    return (
        <div className="thanks__container--border">
            <h3>Благодарственное письмо</h3>
            <p>Благодарственное письмо за благотворительную помощь ДНР и ЛНР от союза женщин Чувашии.</p>
            <div className="thanks__imgconteiner--placement">
                <img src={thanksfirst} alt="thanksfirst" />
            </div>
            <p>Благодарственное письмо за активную общественную деятельность и вклад в развитие предприятия и промышленности Чувашской Республики</p>
            <div className="thanks__imgconteiner--placement">
                <img src={thankssecond} alt="thankssecond" />
            </div>
        </div>
    )
}

export default Thanks;