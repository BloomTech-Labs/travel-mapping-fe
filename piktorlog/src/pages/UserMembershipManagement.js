import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useGetUserAlbums, useGetInvitesToUser } from '../store/hooks/useImmediateFetch';
import { useRemoveCollab, useCancelInvite, useAcceptInvite } from '../store/hooks/useFetchOnRequest';
import { useLogOnChange } from '../store/hooks/misc';

import UserInvites from '../components/organisms/UserInvites';
import UserMemberships from '../components/organisms/UserMemberships';

const UserMembershipManagement = ({ currentUser }) => {

  const [filterAlbumsFn] = useState(() => (data) => data.filter(e => e.user_id !== currentUser.user_id));
  const [albums, , , refreshAlbums] = useGetUserAlbums(currentUser.user_id, filterAlbumsFn);
  useLogOnChange('albums', albums);

  const [removeCollab] = useRemoveCollab(refreshAlbums);

  const [invites, , , refreshInvites] = useGetInvitesToUser(currentUser.user_id);
  useLogOnChange('invites', invites);

  const [cancelInvite] = useCancelInvite(refreshInvites);
  const [acceptInvite] = useAcceptInvite([refreshInvites, refreshAlbums]);

  return (
    <div>

      <h2>UserMembershipManagement</h2>
      
      <UserInvites 
        user_id={currentUser.user_id}
        invites={invites}
        cancelInvite={cancelInvite}
        acceptInvite={acceptInvite}
      />

      <UserMemberships 
        albums={albums}
        removeCollab={removeCollab}
      />

    </div>
  );

};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(UserMembershipManagement);