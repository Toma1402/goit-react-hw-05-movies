import { fetchReviews } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getReview = async () => {
      const content = await fetchReviews(id);
      setReview(content);
    };
    getReview();
  }, [id]);
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.author}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
