import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchByKeyword } from '../services/Api';
import MoviesList from '../components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const stringQuery = query.get('query');
    if (stringQuery) searchByKeyword(stringQuery).then(setMovies);
    if (!stringQuery) {
      setMovies(null);
      setQuery({});
    }
  }, [query, setQuery]);

  function onSearch(event) {
    event.preventDefault();
    setQuery({
      query: event.currentTarget.elements.q.value,
    });
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSearch}>
      <div>Movies</div>
      <label>
        <input name="q" type="text" />
      </label>
      <button type="submit">Search</button>
      {movies?.length > 0 && (
        <>
          <h2>List movies</h2>
          <MoviesList list={movies} />
        </>
      )}
    </form>
  );
};

Movies.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default Movies;
