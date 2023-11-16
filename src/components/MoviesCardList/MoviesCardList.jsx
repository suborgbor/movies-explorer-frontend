import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import useResize from '../../hooks/useResize';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import {
  ADDED_MOVIES_AMOUNT,
  MOVIES_AMOUNT,
  SCREEN_SIZE,
} from '../../utils/constants';

const MoviesCardList = ({
  movies,
  addMovie,
  onDeleteFilm,
  checkSavedMovies,
  initialSearchValue,
  shortFilm,
  searched,
  firstEntrance
}) => {
  const { pathname } = useLocation()

  const screenWidth = useResize();
  let cardsToShow;

  if (screenWidth >= SCREEN_SIZE.L) {
    cardsToShow = MOVIES_AMOUNT.L;
  } else if (screenWidth >= SCREEN_SIZE.M) {
    cardsToShow = MOVIES_AMOUNT.M;
  } else {
    cardsToShow = MOVIES_AMOUNT.S;
  }

  const [visibleCards, setVisibleCards] = useState(cardsToShow);

  const filteredMovies = searched
    ? movies
        .filter((movie) => {
          const movieNameRU = (movie.nameRU || '').toLowerCase();
          const movieNameEN = (movie.nameEN || '').toLowerCase();

          const query = initialSearchValue || '';

          const includesinitialSearchValue =
            movieNameRU.includes(query.toLowerCase()) ||
            movieNameEN.includes(query.toLowerCase());

          return includesinitialSearchValue && (!shortFilm || movie.duration <= 40);
        })
        .slice(0, visibleCards)
    : [];

  const loadMoreCards = () => {
    let newVisibleCards;

    if (screenWidth >= SCREEN_SIZE.L) {
      newVisibleCards = visibleCards + ADDED_MOVIES_AMOUNT.L;
    } else if (screenWidth >= SCREEN_SIZE.M) {
      newVisibleCards = visibleCards + ADDED_MOVIES_AMOUNT.M;
    } else {
      newVisibleCards = visibleCards + ADDED_MOVIES_AMOUNT.S;
    }
    setVisibleCards(newVisibleCards);
  };

  const isLoadMoreVisible = visibleCards === filteredMovies.length;
  console.log(firstEntrance)

  return (
    <section className="movies-cards">
      {( pathname === '/movies' && filteredMovies.length === 0 && !firstEntrance) ? (
        <p className='movies__serch-error'>Ничего не найдено</p>
      ) : (
        <ul className="movies-cards__list">
          {filteredMovies.map((movie) => (
            <MoviesCard
              onDeleteFilm={onDeleteFilm}
              addMovie={addMovie}
              movie={movie}
              key={movie._id || movie.movieId}
              checkSavedMovies={checkSavedMovies}
            />
          ))}
        </ul>
      )}

      {isLoadMoreVisible && (
        <button
          type="button"
          className="movies-cards__add-button"
          onClick={loadMoreCards}
        >
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
