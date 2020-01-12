import React, { useState } from 'react';

import { useGetUserAlbums } from '../../store/hooks/useImmediateFetch';
import { useLogOnChange } from '../../store/hooks/misc';

const UserMemberships = ({ user_id }) => {

  const [filterAlbumsFn] = useState(() => (data) => data.filter(e => e.user_id === user_id));
  const [albums] = useGetUserAlbums(user_id, filterAlbumsFn);
  useLogOnChange('albums', albums);

  return (
    <div>UserMemberships</div>
  )

};

export default UserMemberships;