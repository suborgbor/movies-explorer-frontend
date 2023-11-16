import './Login.css';
import logo from '../../images/logo.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Login = ({ loginUser }) => {
  const [isError, setIsError] = useState(false);
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();


  function handleSubmitForm(e) {
    e.preventDefault();
    setIsError(true);
    loginUser(values).finally(() => {
    setIsError(false);
    });
  }


  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="main">
      <section className="login">
        <form
          className="login__form"
          name="login"
          noValidate
          onSubmit={handleSubmitForm}
        >
          <Link
            to="/"
            className="login__link"
          >
            <img
              src={logo}
              alt="Логотип"
              className="login__logo"
            />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__labels-container">
            <label className="login__label">
              <span className="login__label-text">E-mail</span>
              <input
                name="email"
                className={`login__input ${
                  errors.email && 'login__input_error'
                }`}
                onChange={handleChange}
                value={values.email || ''}
                type="email"
                required
                placeholder="Введите почту"
              />
              <span className="login__error">{errors.email || ''}</span>
            </label>
            <label className="login__label">
              <span className="login__label-text">Пароль</span>
              <input
                name="password"
                className={`login__input ${
                  errors.password && 'login__input_error'
                }`}
                onChange={handleChange}
                value={values.password || ''}
                type="password"
                required
                minLength="6"
                maxLength="30"
                placeholder="Введите пароль"
              />
              <span className="login__error">{errors.password || ''}</span>
            </label>
          </div>
          <button
            type="submit"
            className="login__button"
            disabled={!isValid || isError}
          >
            Войти
          </button>
          <span className="login__support">
            Ещё не зарегистрированы?&nbsp;
            <Link
              to="/signup"
              className="login__link"
            >
              Регистрация
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
};

export default Login;
