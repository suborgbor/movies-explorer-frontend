import './Techs.css';

const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="section-title">Технологии</h2>
        <div className="techs-info">
          <h3 className="techs-info__description">7 технологий</h3>
          <p className="techs-info__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__spisok">
            <li className="techs__spisok-element">
              <p
                className="techs__spisok-link"
              >
                HTML
              </p>
            </li>
            <li className="techs__spisok-element">
              <p
                className="techs__spisok-link"
              >
                CSS
              </p>
            </li>
            <li className="techs__spisok-element">
              <p
                className="techs__spisok-link"
              >
                JS
              </p>
            </li>
            <li className="techs__spisok-element">
              <p
                className="techs__spisok-link"
              >
                React
              </p>
            </li>
            <li className="techs__spisok-element">
              <p
                className="techs__spisok-link"
              >
                Git
              </p>
            </li>
            <li className="techs__spisok-element">
              <p
                className="techs__spisok-link"
              >
                Express.js
              </p>
            </li>
            <li className="techs__spisok-element">
              <p
                className="techs__spisok-link"
              >
                mongoDB
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
