import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getReviews } from '../services/Api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(id)?.then(setReviews);
  }, [id, reviews?.length]);

  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews?.length === 0 ? (
          <p>We don't have a review for this movie</p>
        ) : (
          reviews?.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p> {content}</p>

              <br />
              <br />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
Reviews.propTypes = {
  width: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Reviews;
