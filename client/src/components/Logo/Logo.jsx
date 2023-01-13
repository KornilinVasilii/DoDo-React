import logo from "./logo.svg";
import dodo from "./logo_dodo.svg";
import s from "./Logo.module.css";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className={ s.link } to='/home'>
      <div className={s.logo}>
        <img className={s.logo_img} src={logo} alt="" width="43" height="44" />
        <div>
          <img className={s.logo_title} src={dodo} alt="" />
          <p className={s.logo_subtitle}>Сеть пиццерий №1 в России</p>
        </div>
      </div>
    </Link>
  );
}
