import React from 'react';

import { useGetInvitesToUser } from '../../store/hooks/useImmediateFetch';
import { useLogOnChange } from '../../store/hooks/misc';

const UserInvites = ({ user_id }) => {

  const [invites] = useGetInvitesToUser(user_id);
  useLogOnChange('invites', invites);

  return (
    <div>UserInvites</div>
  )

};

export default UserInvites;