import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { getMovieDetails } from '../services/Api';
import Picture from '../components/Picture'

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const location = useLocation();

  const {
    poster_path = '',
    original_title = '',
    name = '',
    release_date = '',
    genres = '',
    overview = '',
  } = details ?? {};

  const goBack = useRef(location.state?.from || '/');

  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id).then(setDetails);
  }, [id]);

  return !details ? (
    <p>Don't find this movie</p>
  ) : (
    <div>
      <p>
        <Link to={goBack.current}>Go back</Link>
      </p>
      <article>
        <Picture width={200} url={poster_path} alt={name}></Picture>
        <div>
          <h2>
            {original_title}
            <span> ({release_date.substring(0, 4)})</span>
          </h2>
          <h3>
            Genries:
            <span> {genres.map(({ name }) => name).join(', ')}</span>
          </h3>
          <h3>Overview:</h3>
          <p>{overview}</p>
        </div>
      </article>
      <hr />
      <p>Additional information:</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
