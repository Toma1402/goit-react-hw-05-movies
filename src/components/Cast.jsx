import { fetchCast } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { baseImgUrl } from 'helpers/baseUrl';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        const arrCast = await fetchCast(movieId);
        setCastInfo(arrCast);
      } catch (err) {
        console.log(err);
      }
    };
    getCastInfo();
  }, [movieId]);
  return (
    <div>
      <ul>
        {castInfo.length > 0 ? (
          castInfo.map(person => (
            <li key={person.cast_id}>
              <img src={baseImgUrl + person.profile_path} alt={person.name} />
              <h4>{person.name}</h4>
              <p>Character: {person.character}</p>
            </li>
          ))
        ) : (
          <p>There is no information about the cast</p>
        )}
      </ul>
    </div>
  );
};
