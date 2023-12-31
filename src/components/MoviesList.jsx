import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ list }) => {
    const location = useLocation();

    return (
      <ul>
        {list &&
          list.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={'/movies/' + id} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
  
  export default MoviesList;