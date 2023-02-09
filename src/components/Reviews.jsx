import { fetchReviews } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getReview = async () => {
      const content = await fetchReviews(movieId);
      setReview(content);
    };
    getReview();
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.author}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>There is no reviews about this film</p>
        )}
      </ul>
    </div>
  );
};
