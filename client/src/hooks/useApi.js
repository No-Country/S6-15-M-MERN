import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jobsFetched } from '../features/jobs/jobsSlice';
<<<<<<< HEAD
import { userStatus } from '../features/user/userSlice';
=======
import { userStatus } from "../features/user/userSlice";
import { professionalsFetched } from "../features/professionalsSlice/professionalsSlice"
>>>>>>> 1749856c14e021a09ec5db5434930aac6ca37577
import axios from 'axios';
import { professionalsFetched } from '../features/professionalsSlice/professionalsSlice';

export function useApi(
  initialValue = 'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/'
) {
  const dispatch = useDispatch();

  const url = initialValue;

  const readJobs = async () => {
    axios
      .get(`${url}jobs`)
      .then((resp) => {
        dispatch(jobsFetched(resp.data.jobs));
      })
      .catch((err) => console.error(err));
  };

  const postUser = (data) => {
    console.log(data, 'DATA');
    return new Promise((resolve, reject) =>
      fetch(
        'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Connection: 'keep-alive',
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    );
  };

  const professionalsList = (data) => {
    axios
      .get(`${url}user?professional=true&job=${data.id}`)
      .then((resp) => {
        dispatch(professionalsFetched(resp.data.responseGetUser));
      })
      .catch((err) => console.log(err));
  };

  const userLogin = (data) => {
    axios
      .post(`${url}auth/login`, data)
      .then(function (response) {
        const verifiedUser = {
          token: response.data.responseUser.token,
          id: response.data.responseUser.user._id,
          professional: response.data.responseUser.user.professional,
        };

        console.log(response.data.responseUser.user);
        dispatch(userStatus(verifiedUser));

<<<<<<< HEAD
        localStorage.setItem('user', response.data.responseUser.user._id);
        localStorage.setItem('token', response.data.responseUser.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

=======
  const professionalsList = (id, city) => {
    let searchCity = "";

   (city != undefined) && (searchCity = "&city="+city);
  

    axios
      .get(`${url}user?job=${id}${searchCity}`)
      .then((resp) => {
        dispatch(professionalsFetched(resp.data.responseGetUser));
      })
      .catch((err) => console.log(err));
  };

 


>>>>>>> 1749856c14e021a09ec5db5434930aac6ca37577
  return [readJobs, postUser, userLogin, professionalsList];
}
