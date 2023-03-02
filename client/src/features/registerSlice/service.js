
// import axios from "axios";


// export const postUser = (data) => {
//   return new Promise((resolve, reject) =>
//     fetch(
//       'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/auth/register',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Connection: 'keep-alive',
//         },
//         body: JSON.stringify(data),
//       }
//     )
//       .then((res) => res.json())
//       .then((result) => resolve(result))
//       .catch((error) => reject(error))
//   );
// };
 
// import axios from 'axios';

// export const postUser = async (data) => {
//   return axios
//     .post(
//       'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/auth/register',
//       data,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Connection: 'keep-alive',
//         },
//       }
//     )
// };

// export const getUser = async () => {
//   return axios.get(
//     'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/user'
//   );
// };
