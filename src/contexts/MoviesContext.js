import { createContext, useContext, useEffect, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [initialSearchValue, setInitialSearchValue] = useState(restoreinitialSearchValue());
  const [searched, setSearchedMovies] = useState(restoreSearched());
  const [shortFilm, setShortFilm] = useState(restoreShortFilm());
  const [foundMovies, setFoundMovies] = useState(restoreFoundMovies());

  function restoreinitialSearchValue() {
    const storedinitialSearchValue = localStorage.getItem('initialSearchValue') ?? '';
    return storedinitialSearchValue;
  }

  function restoreSearched() {
    const storedSearched = localStorage.getItem('searched') ?? false;
    return storedSearched === 'true';
  }

  function restoreShortFilm() {
    const storedShortFilm = localStorage.getItem('shortFilm') ?? false;
    return storedShortFilm === 'true';
  }

  function restoreFoundMovies() {
    const storedFoundMovies = localStorage.getItem('foundMovies') ?? '[]';
    return JSON.parse(storedFoundMovies);
  }

  const resetMoviesContext = () => {
    setInitialSearchValue('');
    setSearchedMovies(false);
    setShortFilm(false);
    setFoundMovies([]);
  };

  useEffect(() => {
    localStorage.setItem('initialSearchValue', initialSearchValue);
    localStorage.setItem('searched', searched);
    localStorage.setItem('shortFilm', shortFilm);
    if (foundMovies.length > 0) {
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    }
  }, [initialSearchValue, searched, shortFilm, foundMovies]);

  const contextValue = {
    initialSearchValue,
    setInitialSearchValue,
    searched,
    setSearchedMovies,
    shortFilm,
    setShortFilm,
    foundMovies,
    setFoundMovies,
    resetMoviesContext,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
