import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useMoviesContext } from '../../contexts/MoviesContext';
import { useState } from "react";
import './Movies.css';

const Movies = ({ movies, addMovie, onDeleteFilm, checkSavedMovies, getMovies }) => {
  const { initialSearchValue, setInitialSearchValue, shortFilm, setShortFilm, searched, setSearchedMovies } = useMoviesContext();
  const [firstEntrance, setFirstEntrance] = useState(true);

  const handleSearchChange = (query) => {    
    if (!searched) {
      getMovies();
      setSearchedMovies(true);
    }
    setFirstEntrance(false)
    setInitialSearchValue(query);
    localStorage.setItem('initialSearchValue', query);
  };

  const handleShortChange = (checked) => {setShortFilm(checked)};

  return (
    <main className="movies">
      <SearchForm
        initialSearchValue={initialSearchValue}
        searchMovies={handleSearchChange}
        onShortChange={handleShortChange}
        shortFilm={shortFilm}
      />
      <MoviesCardList
        checkSavedMovies={checkSavedMovies}
        onDeleteFilm={onDeleteFilm}
        addMovie={addMovie}
        searched={searched}
        movies={movies}
        initialSearchValue={initialSearchValue}
        shortFilm={shortFilm}
        firstEntrance={firstEntrance}
      />
    </main>
  );
};

export default Movies;