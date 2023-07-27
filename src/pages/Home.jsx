import React, { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import { getTrending } from '../services/Api';
import PropTypes from 'prop-types';

const Home = () => {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    getTrending().then(setTrends);
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList list={trends} />
    </div>
  );
};
Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default Home;
