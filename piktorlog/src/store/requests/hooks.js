import { useState, useEffect } from 'react';
import { getAlbumReq } from './albums';

export const useGetAlbumReq = (album_id) => {
  const [album, setAlbum] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

    setIsLoading(true);
    getAlbumReq(album_id)
      .then(data => {

        setIsLoading(false);
        setAlbum(data);

      })
      .catch(err => {

        setIsLoading(false);
        setErrorMessage(err);

      });

  }, [album_id]);

  return { album, isLoading, errorMessage };
};