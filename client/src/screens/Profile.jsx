import React from 'react';
import { useEffect } from 'react';
import EditProfileProfessional from '../components/Profile/EditProfileProfessional';
import { useSelector } from 'react-redux';
import { userStatus } from '../features/user/userSlice';
import { useApi } from '../hooks/useApi';



function Profile() {

/* const registrer = useSelector(state => state.registrer);

const [,,postUser] = useApi();

const getUserById = async (data) => {
   await postUser(data)
    .then((response) => {
      console.log(response, 'EL ESTADO DEL REGISTRO')
    });
  }

  useEffect(() => {
    getUserById();
  })
  */

  return (
    <div>
      <EditProfileProfessional />
    </div>
  );
}

export default Profile;
