import { fetchCast } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { baseImgUrl } from 'helpers/baseUrl';
import noAvatar from 'images/no-avatar.png';
import {
  CastImage,
  CastItem,
  CastList,
  CastActorInfo,
  Character,
  ImageThumb,
} from './Cast.styled';

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
    <CastList>
      {castInfo.length > 0 ? (
        castInfo.map(person => (
          <CastItem key={person.cast_id}>
            <ImageThumb>
              <CastImage
                src={
                  person.profile_path
                    ? baseImgUrl + person.profile_path
                    : `${noAvatar}`
                }
                alt={person.name}
              />
            </ImageThumb>
            <CastActorInfo>
              <h4>{person.name}</h4>
              <Character>Character: {person.character}</Character>
            </CastActorInfo>
          </CastItem>
        ))
      ) : (
        <p>There is no information about the cast</p>
      )}
    </CastList>
  );
};
