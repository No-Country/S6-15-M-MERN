import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jobsFetched } from '../features/jobs/jobsSlice';
import { userStatus } from '../features/user/userSlice';
import { profileFetched } from '../features/profile/ProfileSlice';
import { professionalsFetched } from '../features/professionalsSlice/professionalsSlice';
import { loginReducer, expiredReducer } from '../features//booleans/booleanSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

export function useApi(
  initialValue = 'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/'
) {
  const dispatch = useDispatch();

  const loginStatus = useSelector(state=>state.modales)

  const url = initialValue;

  const readJobs = async (id) => {
    let job = "";
    (id!== undefined) && (job = `/${id}`);
    
    axios
      .get(`${url}jobs${job}`)
      .then((resp) => {
        dispatch(jobsFetched(resp.data.jobs));
      })
      .catch((err) => console.error(err));
  };

  const postUser = (data) => {
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
        .then((result) => {
          const verifiedUser = {
            token: result.user.token,
            id: result.user.user._id,
            professional: result.user.user.professional,
            avatarURL:result.user.user.avatarURL
          };

          dispatch(userStatus(verifiedUser));

          localStorage.setItem('user', JSON.stringify(verifiedUser));

          resolve(result);
        })
        .catch((error) => reject(error))
    );
  };
   
  const userLogin = (data)=>{
    axios.post(`${url}auth/login`, data)
    .then(function (response) {
      const verifiedUser ={
        token: response.data.responseUser.token,
        id: response.data.responseUser.user._id,
        professional: response.data.responseUser.user.professional,
        avatarURL: response.data.responseUser.user.avatarURL
      }

        dispatch(userStatus(verifiedUser));

        localStorage.setItem('user', JSON.stringify(verifiedUser));
      })
      .catch(function (error) {
        dispatch(
          loginReducer(!loginStatus.invalidLogin)
        )
      });
  };

  const professionalsList = (id, city) => {
    let searchCity = '';
    let searchId ="";

    city != undefined && (searchCity = '&city=' + city);
    id != undefined && (searchId = 'job=' + id)

    axios
      .get(`${url}user?${searchId}${searchCity}`)
      .then((resp) => {
        dispatch(professionalsFetched(resp.data.responseGetUser));
      })
      .catch((err) => console.log(err));
  };

  const getProfessional = (id)=>{
    const token = JSON.parse(localStorage.getItem("user")).token;
    axios.get(`https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/user/${id}`, {
  headers: {
    'Authorization': `token ${token}`
  }
})
.then((res) => {
  dispatch(
    profileFetched(res.data)
    )
})
.catch((error) => {
  console.error("entro acá")
  dispatch(
    expiredReducer(!loginStatus.expiredSession)
  )
})
  }

  return [readJobs, postUser, userLogin, professionalsList, getProfessional];
}