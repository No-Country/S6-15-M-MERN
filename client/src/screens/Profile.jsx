import React from 'react';
import EditProfileProfessional from '../components/Profile/EditProfileProfessional';

function Profile() {
  // const registrer = useSelector((state) => state.registrer);
  // console.log(registrer, 'EL REGISTRO DEL REGISTRO');
  // const [,,userLogin] = useApi();

// const getUserById = async () => {
//     await userLogin()
//     .then((response) => {
//       console.log(response, 'EL ESTADO DEL REGISTRO')
//     });
//   }

  //   useEffect(() => {
  //     getUserById();
  //   }) 

  return (
    <div>
      <EditProfileProfessional />
    </div>
  );
}

export default Profile;
