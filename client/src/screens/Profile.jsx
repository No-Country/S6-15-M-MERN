import React from 'react';
import EditProfileProfessional from '../components/Profile/EditProfileProfessional';
import { getUser } from '../features/registerSlice/service';
function Profile() {
  async function getUserById() {
    await getUser().then((response) => {});
  }
  getUserById();

  return (
    <div>
      <EditProfileProfessional />
    </div>
  );
}

export default Profile;
