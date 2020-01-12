import React from 'react';
import { connect } from 'react-redux';

import UserInvites from '../components/organisms/UserInvites';
import UserMemberships from '../components/organisms/UserMemberships';

const UserMembershipManagement = ({ currentUser }) => {

  return (
    <div>
      <h2>UserMembershipManagement</h2>
      <UserInvites user_id={currentUser.user_id} />
      <UserMemberships user_id={currentUser.user_id} />
    </div>
  );

};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(UserMembershipManagement);