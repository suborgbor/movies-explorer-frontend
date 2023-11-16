import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';

const Header = ({ isLoggedIn }) => {
  const location = useLocation();
  return (
    <header
      className={`header header_theme_${
        location.pathname === '/' ? 'green' : 'dark'
      }`}
    >
      <div className="header__container">
        <Link to="/" className="header__link">
          <img className="header__logo" src={Logo} alt="Логотип"/>
        </Link>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
};

export default Header;
