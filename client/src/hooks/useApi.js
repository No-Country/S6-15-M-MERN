import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jobsFetched } from '../features/jobs/jobsSlice';
import { userStatus } from "../features/user/userSlice";
import axios from 'axios';

export function useApi( initialValue = 'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/' )  {
  const dispatch = useDispatch();

  const url = initialValue;

  const readJobs = async () => {      
      axios.get(`${url}jobs`)
      .then((resp) => {
        dispatch(
          jobsFetched(resp.data.jobs)
        )
      })
      .catch((err) => console.error(err));
  };



  const postUser = (data) => {
    console.log(data, 'DATA')
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
   
  const userLogin = (data)=>{
    axios.post(`${url}auth/login`, data)
    .then(function (response) {
      const verifiedUser ={
        token: response.data.responseUser.token,
        id: response.data.responseUser.user._id,
        professional: response.data.responseUser.user.professional
      }

      console.log(response.data.responseUser.user);
      dispatch(
        userStatus(verifiedUser)        
      )

      localStorage.setItem('user', response.data.responseUser.user._id);
      localStorage.setItem('token', response.data.responseUser.token);
      
    })
    .catch(function (error) {
      console.log(error);
    });

   
  }

  const readUser = async () => {      
    axios.get(`${url}user`)
    .then((resp) => {
      dispatch(
        jobsFetched(resp.data.users)
      )
    })
    .catch((err) => console.error(err));
};


  return [readJobs, postUser, userLogin, readUser ] ;
}
