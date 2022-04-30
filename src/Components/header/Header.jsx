import React, { useEffect, useState } from "react";
import cl from "./header.module.css";
import cx from "classnames";
import { Link, NavLink, useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { menuListHeader } from "../../dB";

const Header = () => {
  const [isActive, setActive] = useState(true);

  let navigate = useNavigate();
  useEffect(() => {
    navigate("/menu1");
  }, []);

  return (
    <div className={cl.wrap__header}>
      <div className={cl.wrap__menu}>
        <ul className={cl.menu}>
          {menuListHeader.map((m, i) => {
            return (
              <li key={uniqid()} id={i + 1} className={cx(cl.menu__item)}>
                <NavLink
                  to={`menu${i + 1}`}
                  className={({ isActive }) =>
                    isActive ? cx(cl.active) : null
                  }
                >
                  {m}
                </NavLink>
              </li>
            );
          })}
          {/* <li id="5" className={cx(cl.menu__item, cl.active)}>
            Главная
          </li>
          <li id="7" className={cx(cl.menu__item)}>
            <NavLink
              to="/valutes"
              className={({ isActive }) => (isActive ? cx(cl.active) : null)}
            >
              Валюта
            </NavLink>
          </li>
          <li className={cl.menu__item}>Акции</li>
          <li className={cl.menu__item}>Облигации</li>
          <li className={cl.menu__item}>Цифровая валюта</li> */}
        </ul>
        <div className={cl.info}>Новости рынка и банков</div>
      </div>
    </div>
  );
};

export default Header;
