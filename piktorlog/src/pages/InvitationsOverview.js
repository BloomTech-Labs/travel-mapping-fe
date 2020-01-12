import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useGetUserAlbums, useGetInvitesToUser } from '../store/hooks/useImmediateFetch';
import { useLogOnChange } from '../store/hooks/misc';

const InvitationsOverview = ({ currentUser }) => {

  const [filterAlbumsFn] = useState(() => (data) => data.filter(e => e.user_id === currentUser.user_id));
  const [albums] = useGetUserAlbums(currentUser.user_id, filterAlbumsFn);
  useLogOnChange('albums', albums);

  const [invites] = useGetInvitesToUser(currentUser.user_id);
  useLogOnChange('invites', invites);

  return (
    <div>
      InvitationsOverview
    </div>
  );

};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(InvitationsOverview);