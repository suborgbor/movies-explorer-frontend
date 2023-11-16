import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { useMoviesContext } from '../../contexts/MoviesContext';
import { useState } from 'react';

const SavedMovies = ({ movies, onDeleteFilm, checkSavedMovies }) => {
  const { searched, setSearchedMovies } = useMoviesContext();

  const [initialSearchValueSave, setInitialSearchValueSave] = useState('');
  const [shortFilmSave, setShortFilmSave] = useState(false);

  const handleSearchChange = (query) => {
    setInitialSearchValueSave(query);
    setSearchedMovies(true);
  };

  const handleShortChange = (checked) => {
    setShortFilmSave(checked);
    localStorage.setItem('shortFilmSave', checked);
  };

  return (
    <main className="saved-movies">
      <SearchForm
        searchMovies={handleSearchChange}
        onShortChange={handleShortChange}
        shortFilm={shortFilmSave}
      />
      <MoviesCardList
        onDeleteFilm={onDeleteFilm}
        searched={searched}
        movies={movies}
        initialSearchValue={initialSearchValueSave}
        shortFilm={shortFilmSave}
        checkSavedMovies={checkSavedMovies}
      />
    </main>
  );
};

export default SavedMovies;
