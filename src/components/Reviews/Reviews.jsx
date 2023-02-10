import { fetchReviews } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ReviewList, ReviewTitle } from './Reviews.styled';

const Reviews = () => {
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
    <ReviewList>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.author}>
            <ReviewTitle>{review.author}</ReviewTitle>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>There is no reviews about this film</p>
      )}
    </ReviewList>
  );
};
export default Reviews;
