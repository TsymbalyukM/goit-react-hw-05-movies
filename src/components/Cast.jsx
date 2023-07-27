import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from '../services/Api';
import PropTypes from 'prop-types';
import Picture from './Picture';

const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    getCredits(id)?.then(setActors);
  }, [id]);

  return (
    actors && (
      <div>
        <h2>Cast:</h2>
        <ul>
          {actors.length === 0 ? (
            <p>We don't have any casts for this movie</p>
          ) : (
            actors.map(({ profile_path, name, character, actor_id }, index) => (
              <li key={`${actor_id}-${index}`}>
                <p>Character: {character || 'none'}</p>
                <p>Name: {name || 'none'}</p>
                <Picture width={100} url={profile_path} alt={name} />
                <br />
              </li>
            ))
          )}
        </ul>
      </div>
    )
  );
};

Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
      actor_id: PropTypes.number,
    })
  ),
};
export default Cast;
