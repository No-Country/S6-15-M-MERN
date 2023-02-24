import React from 'react';
import { useEffect } from 'react';
import EditProfileProfessional from '../components/Profile/EditProfileProfessional';
import { useApi } from '../hooks/useApi';



function Profile() {

  const [,,userLogin] = useApi();

const getUserById = async () => {
    await userLogin()
    .then((response) => {
      console.log(response, 'EL ESTADO DEL REGISTRO')
    });
  }

  useEffect(() => {
    getUserById();
  })
 

  return (
    <div>
      <EditProfileProfessional />
    </div>
  );
}

export default Profile;
