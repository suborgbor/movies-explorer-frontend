import { useState } from 'react';
import './BurgerMenu.css';
import { NavLink, useLocation } from 'react-router-dom';

const BurgerMenu = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const { pathname } = useLocation()

  const handleOpenBurger = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  const handleCloseBurger = () => {
    setIsActiveBurger(false);
  };

  return (
    <section
      className={`${!isActiveBurger ? 'burger' : 'burger burger_type_active'}`}>
      <nav
        className={`${
          !isActiveBurger
            ? 'burger__navigation'
            : 'burger__navigation burger__navigation_type_active'
        }`}>
        <div className="burger__container">
          <button
            type="button"
            onClick={handleOpenBurger}
            className={`${
              !isActiveBurger
                ? 'burger__button'
                : 'burger__button burger__button_type_active'
            }`}>
            <span
              className={`${
                !isActiveBurger
                  ? 'burger__span'
                  : 'burger__span burger__span_type_active'
              }`}
            ></span>
          </button>
        </div>
        {isActiveBurger ? (
          <>
            <ul className="burger__links">
              <li>
                <NavLink
                  to="/"
                  onClick={handleCloseBurger}
                  className={`burger__link ${pathname === '/' ? 'burger__link_active' : ''}`}>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  onClick={handleCloseBurger}
                  className={`burger__link ${pathname === '/movies' ? 'burger__link_active' : ''}`}>
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  onClick={handleCloseBurger}
                  className={`burger__link ${pathname === '/saved-movies' ? 'burger__link_active' : ''}`}>
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <div className={`burger__link burger__links_type_account${pathname === '/profile' ? 'burger__link_active' : ''}`}>
              <NavLink
                to="/profile"
                onClick={handleCloseBurger}
                className="burger__link burger__link_type_account">
                Аккаунт
                <div className="burger__link-icon"></div>
              </NavLink>
            </div>
          </>
        ) : (
          ''
        )}
      </nav>
    </section>
  );
};

export default BurgerMenu;
